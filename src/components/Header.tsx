import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FiFilter } from "react-icons/fi";
import { useSearchFilters } from "../context/SearchFiltersContext";
import { useLanguage } from "../context/LanguageContext";

// Examples are language-agnostic for now (safe). You can later translate too.
const EXAMPLES = [
  "food pantry",
  "ESL classes",
  "rent help",
  "free Wi-Fi",
  "youth programs",
  "legal aid",
];

export default function Header() {
  const { query, setQuery, setFiltersOpen, filters } = useSearchFilters();
  const { lang, setLang, t } = useLanguage();

  // --- typing animation state for search placeholder ---
  const [placeholder, setPlaceholder] = useState("");

  const phraseIndex = useRef(0);
  const charIndex = useRef(0);
  const mode = useRef<"typing" | "pausing" | "deleting">("typing");
  const timer = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const phrase = EXAMPLES[phraseIndex.current];

      if (mode.current === "typing") {
        if (charIndex.current < phrase.length) {
          charIndex.current += 1;
          setPlaceholder(phrase.slice(0, charIndex.current));
          timer.current = window.setTimeout(tick, 90);
          return;
        }
        mode.current = "pausing";
        timer.current = window.setTimeout(tick, 1000);
        return;
      }

      if (mode.current === "pausing") {
        mode.current = "deleting";
        timer.current = window.setTimeout(tick, 70);
        return;
      }

      if (charIndex.current > 0) {
        charIndex.current -= 1;
        setPlaceholder(phrase.slice(0, charIndex.current));
        timer.current = window.setTimeout(tick, 55);
        return;
      }

      phraseIndex.current = (phraseIndex.current + 1) % EXAMPLES.length;
      mode.current = "typing";
      timer.current = window.setTimeout(tick, 120);
    };

    timer.current = window.setTimeout(tick, 250);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let n = 0;
    for (const k in filters) {
      if (filters[k as keyof typeof filters]) n += 1;
    }
    return n;
  }, [filters]);

  return (
    <header className="topbar">
      <div className="topbar__logo">
        <div className="logo-placeholder">Logo</div>
      </div>

      <div className="topbar__title">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <h1>{t("app.title")}</h1>
        </Link>
        <p className="subtitle">{t("app.subtitle")}</p>
      </div>

      <div className="topbar__actions">
        <div className="search">
          <input
            aria-label={t("header.searchAria")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              placeholder ? `${placeholder} |` : t("header.searchPlaceholder")
            }
          />
        </div>

        {/* Language toggle (pill buttons) */}
        <div className="lang-toggle" aria-label="Language">
          <button
            type="button"
            className={`langbtn ${lang === "en" ? "on" : ""}`}
            onClick={() => setLang("en")}
          >
            EN
          </button>
          <button
            type="button"
            className={`langbtn ${lang === "es" ? "on" : ""}`}
            onClick={() => setLang("es")}
          >
            ES
          </button>
        </div>

        <div className="filter-btn-wrapper">
          <button
            className="btn btn-outline btn-filters"
            onClick={() => setFiltersOpen(true)}
            aria-haspopup="dialog"
          >
            <FiFilter className="filter-btn-icon" aria-hidden="true" />
            <span>{t("header.filters")}</span>
          </button>

          {activeFilterCount > 0 && (
            <span
              className="filter-badge"
              aria-label={`${activeFilterCount} filters active`}
            >
              {activeFilterCount}
            </span>
          )}
        </div>
      </div>
    </header>
  );
}
