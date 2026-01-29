import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { CAL_EVENTS } from "../data/events";
import { useSearchFilters } from "../context/SearchFiltersContext";
import {
  buildRequireGroups,
  matchesGroups,
  matchesQuery,
} from "../utils/filtering";

const LIVE_CALENDARS = [
  {
    id: "lib",
    name: "Pflugerville Public Library Events",
    desc: "Storytimes, teen programs, workshops, and special events at the library.",
    url: "https://pflugerville.librarycalendar.com/",
  },
  {
    id: "city",
    name: "City of Pflugerville Event Calendar",
    desc: "City-wide events, pfestivals, council meetings, and community programs.",
    url: "https://www.pflugervilletx.gov/681/Event-Calendar",
  },
  {
    id: "parks",
    name: "Parks & Recreation Events",
    desc: "Outdoor events, festivals, Music in the Park, and seasonal activities.",
    url: "https://www.pflugervilletx.gov/550/Parks-Events",
  },
  {
    id: "chamber",
    name: "Pflugerville Chamber of Commerce",
    desc: "Business ribbon cuttings, networking events, and community celebrations.",
    url: "https://business.pfchamber.com/events",
  },
];

export default function CalendarPage() {
  const { query, filters } = useSearchFilters();

  const filteredEvents = useMemo(() => {
    const requireGroups = buildRequireGroups(filters);

    return CAL_EVENTS.filter((ev) => {
      const okQuery = matchesQuery(query, [
        ev.title,
        ev.where,
        ev.tags.join(" "),
      ]);
      const okTags = matchesGroups(ev.tags, requireGroups);
      return okQuery && okTags;
    });
  }, [query, filters]);

  return (
    <section className="section">
      <div className="section__head">
        <div>
          <h2>Community Calendar</h2>
          <p className="muted small">
            Search + filters apply to highlighted events. For real-time updates,
            open the official calendars below.
          </p>
        </div>
        <Link className="btn btn-outline" to="/">
          Back to home
        </Link>
      </div>

      <h3 style={{ margin: "0 0 8px", fontSize: 16, fontWeight: 600 }}>
        Highlighted Pflugerville events
      </h3>

      <ul className="list">
        {filteredEvents.map((e) => (
          <li key={e.id} className="list__item">
            <div className="list__date">
              {new Date(e.date).toLocaleDateString(undefined, {
                month: "short",
                day: "2-digit",
              })}
            </div>
            <div className="list__body">
              <div className="list__title">{e.title}</div>
              <div className="muted small">{e.where}</div>
            </div>
            {e.link && (
              <a
                className="section__link"
                href={e.link}
                target="_blank"
                rel="noreferrer"
              >
                Details
              </a>
            )}
          </li>
        ))}

        {filteredEvents.length === 0 && (
          <li className="muted small">
            No events match your search/filters yet.
          </li>
        )}
      </ul>

      <h3
        style={{
          margin: "20px 0 8px",
          fontSize: 16,
          fontWeight: 600,
          color: "#003764",
        }}
      >
        Live calendars (real-time events)
      </h3>
      <p className="muted small" style={{ marginBottom: 10 }}>
        These open the official calendars in a new tab so you always see
        up-to-date information.
      </p>

      <div className="cards">
        {LIVE_CALENDARS.map((src) => (
          <article key={src.id} className="card">
            <h3 className="card__title">{src.name}</h3>
            <p className="card__desc">{src.desc}</p>
            <div className="card__meta">
              <div className="card__metaitem">
                🌐{" "}
                <a href={src.url} target="_blank" rel="noreferrer">
                  Open official calendar
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
