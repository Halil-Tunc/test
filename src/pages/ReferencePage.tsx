import React from "react";
import { Link } from "react-router-dom";

/**
 * Reference Page (Work in Progress)
 * Purpose:
 * - Maintain a running list of sources used to build the site
 * - Make it easy to update over time (new resources, images, official pages)
 *
 * NOTE: Keep this page honest and incremental:
 * - If you use an image URL, include the page you got it from.
 * - If a resource listing is based on an official org/city page, cite that.
 */
export default function ReferencePage() {
  return (
    <section className="section">
      <div className="section__head">
        <div>
          <h2>References</h2>
          <p className="muted small" style={{ margin: "6px 0 0" }}>
            Work in progress — this page lists sources used to create content,
            links, and visuals for the hub.
          </p>
        </div>

        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Link className="btn btn-outline" to="/">
            Back to home
          </Link>
        </div>
      </div>

      {/* ---------- Content sources (official pages) ---------- */}
      <h3 className="ref__h3">Official websites used for links</h3>
      <ul className="ref__list">
        <li>
          <strong>City of Pflugerville</strong> — includes City Hall, events,
          parks, and general civic pages.{" "}
          <a
            href="https://www.pflugervilletx.gov/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.pflugervilletx.gov/
          </a>
        </li>

        <li>
          <strong>Pflugerville Public Library</strong> — library services +
          events.{" "}
          <a
            href="https://library.pflugervilletx.gov/"
            target="_blank"
            rel="noreferrer"
          >
            https://library.pflugervilletx.gov/
          </a>
        </li>

        <li>
          <strong>Pflugerville ISD</strong> — district info + family supports.{" "}
          <a href="https://www.pfisd.net/" target="_blank" rel="noreferrer">
            https://www.pfisd.net/
          </a>
        </li>

        <li>
          <strong>Central Texas Food Bank</strong> — food assistance directory.{" "}
          <a
            href="https://www.centraltexasfoodbank.org/food-assistance/get-food-now"
            target="_blank"
            rel="noreferrer"
          >
            centraltexasfoodbank.org (Get Food Now)
          </a>
        </li>

        <li>
          <strong>211 Texas</strong> — statewide resource hotline + directory.{" "}
          <a href="https://www.211texas.org/" target="_blank" rel="noreferrer">
            https://www.211texas.org/
          </a>
        </li>

        <li>
          <strong>988 Lifeline</strong> — crisis support.{" "}
          <a href="https://988lifeline.org/" target="_blank" rel="noreferrer">
            https://988lifeline.org/
          </a>
        </li>

        {/* TODO: Add each official org site you use in RESOURCES over time */}
      </ul>

      {/* ---------- Visual sources (images) ---------- */}
      <h3 className="ref__h3">Visual / media sources</h3>
      <ul className="ref__list">
        <li>
          <strong>Unsplash</strong> — CTA tile still images on Home page.{" "}
          <a href="https://unsplash.com/" target="_blank" rel="noreferrer">
            https://unsplash.com/
          </a>
          <div className="muted small">
            TODO: Replace with specific image pages + photographer attribution
            if needed.
          </div>
        </li>

        <li>
          <strong>Dribbble / Pinterest</strong> — animated GIFs used for CTA
          hover.{" "}
          <div className="muted small">
            TODO: Replace with direct source pages or move to locally hosted
            visuals with clear licensing.
          </div>
        </li>
      </ul>

      {/* ---------- Tooling / libraries ---------- */}
      <h3 className="ref__h3">Tools / libraries used</h3>
      <ul className="ref__list">
        <li>
          <strong>OpenStreetMap</strong> — map tiles attribution is shown on the
          map.{" "}
          <a
            href="https://www.openstreetmap.org/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.openstreetmap.org/
          </a>
        </li>
        <li>
          <strong>Leaflet</strong> — interactive mapping library.{" "}
          <a href="https://leafletjs.com/" target="_blank" rel="noreferrer">
            https://leafletjs.com/
          </a>
        </li>
        <li>
          <strong>React</strong> — UI library.{" "}
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            https://react.dev/
          </a>
        </li>
        <li>
          <strong>React Router</strong> — routing.{" "}
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            https://reactrouter.com/
          </a>
        </li>
      </ul>

      <div className="ref__footer">
        <Link className="linkbtn" to="/">
          Back to home
        </Link>
      </div>
    </section>
  );
}
