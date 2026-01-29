import React, { useMemo, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { RESOURCES } from "../data/resources";
import { useLanguage } from "../context/LanguageContext";

/**
 * Each tile has a static 'still' and an animated 'gif'.
 * We render 'still' by default, swap to 'gif' on hover/focus.
 */
const CTA = [
  {
    id: "calendar",
    title: "Community Calendar",
    description: "City & nonprofit events happening around Pflugerville.",
    still:
      "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=1200&auto=format&fit=crop&q=80",
    gif: "https://cdn.dribbble.com/userupload/30275517/file/original-9e4dc967088374ca333dc6c1328e117b.gif",
    to: "/calendar",
  },
  {
    id: "map",
    title: "Community Map",
    description: "Find nearby services and key locations on the map.",
    still:
      "https://images.unsplash.com/photo-1502920917128-1aa500764ce7?w=1200&auto=format&fit=crop&q=80",
    gif: "https://i.pinimg.com/originals/d7/ae/01/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif",
    to: "/map",
  },
  {
    id: "resources",
    title: "Resources",
    description: "Search and filter Pflugerville programs and services.",
    still:
      "https://images.unsplash.com/photo-1494172961521-33799ddd43a5?w=1200&auto=format&fit=crop&q=80",
    gif: "https://i.pinimg.com/originals/df/2c/fa/df2cfa2b4370631d018a7fdaf0e4315c.gif",
    to: "/resources",
  },
];

export default function Home() {
  const nav = useNavigate();
  const [hovering, setHovering] = useState<Record<string, boolean>>({});
  const { t } = useLanguage();

  // Pick at least 3 spotlight resources from your RESOURCES list.
  // Preference order:
  // 1) Has lat/lng (so it's mappable)
  // 2) Has a website or phone (actionable)
  // 3) Has "high value" tags (Library/Health/Food/Housing/Legal/etc.)
  const spotlight = useMemo(() => {
    const score = (tags: string[]) => {
      const t = tags.map((x) => x.toLowerCase());
      const boosts = [
        "library",
        "health",
        "clinic",
        "food",
        "pantry",
        "housing",
        "rent",
        "legal",
        "education",
        "esl",
        "employment",
        "training",
        "transportation",
        "family",
        "youth",
        "children",
      ];
      return boosts.reduce(
        (acc, k) => acc + (t.some((x) => x.includes(k)) ? 2 : 0),
        0
      );
    };

    const sorted = [...RESOURCES]
      .filter((r) => r && r.name && r.desc)
      .sort((a, b) => {
        const aGeo =
          typeof a.lat === "number" && typeof a.lng === "number" ? 3 : 0;
        const bGeo =
          typeof b.lat === "number" && typeof b.lng === "number" ? 3 : 0;

        const aAction = (a.website ? 1 : 0) + (a.phone ? 1 : 0);
        const bAction = (b.website ? 1 : 0) + (b.phone ? 1 : 0);

        const aTags = score(a.tags || []);
        const bTags = score(b.tags || []);

        return bGeo + bAction + bTags - (aGeo + aAction + aTags);
      });

    // ensure at least 3
    return sorted.slice(0, 3);
  }, []);

  return (
    <>
      {/* Big 3 navigation buttons */}
      <section className="cta">
        {CTA.map((item) => {
          const isOn = !!hovering[item.id];
          return (
            <button
              key={item.id}
              className="cta__tile"
              onClick={() => nav(item.to)}
              onMouseEnter={() =>
                setHovering((h) => ({ ...h, [item.id]: true }))
              }
              onMouseLeave={() =>
                setHovering((h) => ({ ...h, [item.id]: false }))
              }
              onFocus={() => setHovering((h) => ({ ...h, [item.id]: true }))}
              onBlur={() => setHovering((h) => ({ ...h, [item.id]: false }))}
              type="button"
              aria-label={item.title}
            >
              <img
                src={isOn ? item.gif : item.still}
                alt=""
                className="cta__img"
              />
              <div className="cta__scrim" />
              <div className="cta__content">
                <div className="cta__title">{item.title}</div>
                <div className="cta__desc">{item.description}</div>
              </div>
            </button>
          );
        })}
      </section>

      {/* Spotlight / Highlights */}
      <section className="section">
        <div className="section__head">
          <div>
            <h2>{t("home.highlightsTitle")}</h2>
            <p className="muted small" style={{ margin: "6px 0 0" }}>
              {t("home.highlightsDesc")}
            </p>
          </div>

          <Link className="btn btn-outline" to="/resources">
            {t("btn.viewResources")}
          </Link>
        </div>

        <div className="cards">
          {spotlight.map((r) => (
            <article key={r.id} className="card">
              <h3 className="card__title">{r.name}</h3>

              <div className="card__tags" style={{ marginBottom: 10 }}>
                {(r.tags || []).slice(0, 6).map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <p className="card__desc">{r.desc}</p>

              <div className="card__meta">
                {r.address && (
                  <div className="card__metaitem">📍 {r.address}</div>
                )}
                {r.phone && <div className="card__metaitem">📞 {r.phone}</div>}
              </div>

              <div className="card__actions">
                <Link className="btn" to="/resources">
                  See details
                </Link>

                {r.website ? (
                  <a
                    className="btn btn-outline"
                    href={r.website}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Website
                  </a>
                ) : (
                  <Link className="btn btn-outline" to="/map">
                    Find on map
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <h2>{t("home.aboutTitle")}</h2>
        <p className="muted">
          {/* Incomplete section placeholder */}
          {t("home.aboutPlaceholder")}
        </p>
      </section>
    </>
  );
}
