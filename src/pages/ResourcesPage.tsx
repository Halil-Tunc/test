import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { RESOURCES } from "../data/resources";
import { useSearchFilters } from "../context/SearchFiltersContext";
import {
  buildRequireGroups,
  matchesGroups,
  matchesQuery,
} from "../utils/filtering";

export default function ResourcesPage() {
  const { query, filters } = useSearchFilters();

  const filtered = useMemo(() => {
    const requireGroups = buildRequireGroups(filters);

    return RESOURCES.filter((r) => {
      const okQuery = matchesQuery(query, [
        r.name,
        r.desc,
        r.address,
        r.phone,
        r.website,
        (r.tags || []).join(" "),
      ]);
      const okTags = matchesGroups(r.tags, requireGroups);
      return okQuery && okTags;
    });
  }, [query, filters]);

  return (
    <section className="section">
      <div className="section__head">
        <h2>Resources</h2>
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link className="btn btn-outline" to="/submit">
            Submit a resource
          </Link>
          <Link className="btn btn-outline" to="/">
            Back to home
          </Link>
        </div>
      </div>

      <div className="cards">
        {filtered.map((r) => (
          <article key={r.id} className="card">
            <h3 className="card__title">{r.name}</h3>
            <p className="card__desc">{r.desc}</p>

            <div className="card__meta">
              {r.address && (
                <div className="card__metaitem">📍 {r.address}</div>
              )}
              {r.phone && <div className="card__metaitem">📞 {r.phone}</div>}
              {r.website && (
                <div className="card__metaitem">
                  🌐{" "}
                  <a href={r.website} target="_blank" rel="noreferrer">
                    Website
                  </a>
                </div>
              )}
            </div>

            <div className="card__tags">
              {(r.tags || []).map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="muted">
            No resources match your search/filters yet.
          </div>
        )}
      </div>
    </section>
  );
}
