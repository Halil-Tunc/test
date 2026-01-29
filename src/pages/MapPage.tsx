import React, { useLayoutEffect, useMemo, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import L from "leaflet";
import { renderToStaticMarkup } from "react-dom/server";

import {
  FaMapMarkerAlt,
  FaBook,
  FaHeart,
  FaGavel,
  FaUtensils,
  FaBus,
  FaBriefcase,
  FaUsers,
} from "react-icons/fa";

import { RESOURCES } from "../data/resources";
import { useSearchFilters } from "../context/SearchFiltersContext";

const DEFAULT_CENTER: [number, number] = [30.4399, -97.62];
const DEFAULT_ZOOM = 12;
const MAP_HEIGHT = 420;

export default function MapPage() {
  const { query, filters } = useSearchFilters();

  const filteredResources = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = [...RESOURCES];

    if (q) {
      out = out.filter((r) =>
        [
          r.name,
          r.desc,
          r.address,
          r.phone,
          r.website,
          (r.tags || []).join(" "),
        ]
          .filter(Boolean)
          .some((field) => String(field).toLowerCase().includes(q))
      );
    }

    const requireGroups: string[][] = [];
    if (filters.wheelchair)
      requireGroups.push(["wheelchair", "ada", "accessible"]);
    if (filters.bilingual)
      requireGroups.push(["bilingual", "spanish", "multilingual"]);
    if (filters.computers) requireGroups.push(["computers"]);
    if (filters.wifi) requireGroups.push(["wifi", "wi-fi"]);
    if (filters.free) requireGroups.push(["free", "no-cost"]);
    if (filters.lowCost) requireGroups.push(["low-cost", "sliding-scale"]);
    if (filters.appointment)
      requireGroups.push(["appointment", "appointments"]);
    if (filters.walkIn) requireGroups.push(["walk-in", "walkin"]);

    if (filters.kidFriendly)
      requireGroups.push([
        "children",
        "kid-friendly",
        "kidfriendly",
        "families",
        "family",
      ]);
    if (filters.youth) requireGroups.push(["youth", "teens", "teen", "tweens"]);
    if (filters.adults) requireGroups.push(["adults", "adult"]);
    if (filters.seniors) requireGroups.push(["seniors", "senior"]);
    if (filters.lgbtq) requireGroups.push(["lgbtq+", "lgbtq"]);

    if (filters.food) requireGroups.push(["food", "pantry", "meals"]);
    if (filters.housing) requireGroups.push(["housing", "rent", "shelter"]);
    if (filters.legal) requireGroups.push(["legal", "tenant"]);
    if (filters.healthcare)
      requireGroups.push(["healthcare", "medical", "clinic"]);
    if (filters.mentalHealth)
      requireGroups.push(["mental-health", "mental health", "counseling"]);
    if (filters.employment)
      requireGroups.push(["employment", "jobs", "training"]);
    if (filters.education) requireGroups.push(["education", "esl", "classes"]);
    if (filters.transportation)
      requireGroups.push(["transportation", "transit"]);
    if (filters.immigration) requireGroups.push(["immigration", "citizenship"]);

    if (requireGroups.length) {
      out = out.filter((r) => {
        const rtags = (r.tags || []).map((t) => t.toLowerCase());
        return requireGroups.every((group) =>
          rtags.some((t) => group.some((k) => t.includes(k)))
        );
      });
    }

    return out;
  }, [query, filters]);

  const markers = useMemo(
    () =>
      filteredResources.filter(
        (r) => typeof r.lat === "number" && typeof r.lng === "number"
      ),
    [filteredResources]
  );

  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<L.Map | null>(null);
  const layerRef = useRef<L.LayerGroup | null>(null);
  const roRef = useRef<ResizeObserver | null>(null);

  // ✅ Create map after layout (prevents 0x0 init)
  useLayoutEffect(() => {
    const el = mapDivRef.current;
    if (!el) return;

    // Force visible height even if CSS gets weird
    el.style.height = `${MAP_HEIGHT}px`;
    el.style.minHeight = `${MAP_HEIGHT}px`;
    el.style.width = "100%";

    // If a map already exists, remove it (route back/StrictMode safety)
    try {
      mapRef.current?.remove();
    } catch {}
    mapRef.current = null;
    layerRef.current = null;

    // Also clear Leaflet’s internal id if it got stuck on the element
    const anyEl = el as any;
    if (anyEl._leaflet_id) {
      try {
        delete anyEl._leaflet_id;
      } catch {}
    }
    el.innerHTML = ""; // clears old panes if any

    const map = L.map(el, {
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      scrollWheelZoom: true,
    });

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    }).addTo(map);

    const layer = L.layerGroup().addTo(map);

    mapRef.current = map;
    layerRef.current = layer;

    const invalidate = () => {
      try {
        map.invalidateSize(true);
      } catch {}
    };

    // Invalidate a few times (covers fonts/layout settling)
    requestAnimationFrame(invalidate);
    setTimeout(invalidate, 50);
    setTimeout(invalidate, 200);

    // ✅ ResizeObserver: if container width/height changes, fix map
    roRef.current?.disconnect();
    roRef.current = new ResizeObserver(() => invalidate());
    roRef.current.observe(el);

    const onVis = () => {
      if (document.visibilityState === "visible") setTimeout(invalidate, 60);
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("resize", invalidate);

    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("resize", invalidate);
      roRef.current?.disconnect();
      roRef.current = null;

      try {
        map.remove();
      } catch {}
      mapRef.current = null;
      layerRef.current = null;
    };
  }, []);

  // ✅ Update markers
  useEffect(() => {
    const map = mapRef.current;
    const layer = layerRef.current;
    if (!map || !layer) return;

    layer.clearLayers();

    markers.forEach((r) => {
      const icon = iconForTags(r.tags || []);
      const popup = `
        <div style="max-width:240px">
          <div style="font-weight:700;margin-bottom:4px">${escapeHtml(
            r.name
          )}</div>
          ${
            r.address
              ? `<div style="margin-bottom:4px">📍 ${escapeHtml(
                  r.address
                )}</div>`
              : ""
          }
          <div style="font-size:13px;margin-bottom:6px">${escapeHtml(
            r.desc
          )}</div>
          ${
            r.website
              ? `<div><a href="${r.website}" target="_blank" rel="noreferrer">Website</a></div>`
              : ""
          }
          ${
            r.phone
              ? `<div style="margin-top:4px">📞 ${escapeHtml(r.phone)}</div>`
              : ""
          }
        </div>
      `;
      L.marker([r.lat!, r.lng!], { icon }).addTo(layer).bindPopup(popup);
    });

    if (markers.length) {
      const bounds = L.latLngBounds(
        markers.map((m) => [m.lat!, m.lng!] as [number, number])
      );
      map.fitBounds(bounds.pad(0.2));
    } else {
      map.setView(DEFAULT_CENTER, DEFAULT_ZOOM);
    }

    setTimeout(() => {
      try {
        map.invalidateSize(true);
      } catch {}
    }, 60);
  }, [markers]);

  return (
    <section className="section">
      <div className="section__head">
        <div>
          <h2>Community Map</h2>
          <p className="muted small" style={{ margin: "6px 0 0" }}>
            Showing <strong>{markers.length}</strong> mapped resources that
            match your current search/filters.
          </p>
        </div>

        <Link className="btn btn-outline" to="/">
          Back to home
        </Link>
      </div>

      <div className="mapwrap">
        <div
          ref={mapDivRef}
          className="map-leaflet"
          style={{ height: MAP_HEIGHT, minHeight: MAP_HEIGHT }}
        />
      </div>
    </section>
  );
}

// --- Category icon logic --------------------------------------------

function iconForTags(tags: string[]) {
  const t = tags.map((x) => x.toLowerCase());

  // pick icon by category (same logic you already had)
  let Icon = FaMapMarkerAlt;

  if (
    t.some(
      (x) => x.includes("food") || x.includes("pantry") || x.includes("meals")
    )
  )
    Icon = FaUtensils;
  else if (t.some((x) => x.includes("library"))) Icon = FaBook;
  else if (
    t.some(
      (x) =>
        x.includes("health") || x.includes("clinic") || x.includes("medical")
    )
  )
    Icon = FaHeart;
  else if (t.some((x) => x.includes("legal") || x.includes("tenant")))
    Icon = FaGavel;
  else if (t.some((x) => x.includes("transport") || x.includes("transit")))
    Icon = FaBus;
  else if (
    t.some(
      (x) =>
        x.includes("employment") || x.includes("jobs") || x.includes("training")
    )
  )
    Icon = FaBriefcase;
  else if (
    t.some(
      (x) =>
        x.includes("family") ||
        x.includes("youth") ||
        x.includes("children") ||
        x.includes("community")
    )
  )
    Icon = FaUsers;

  // screenshot-style: rounded square teal bubble + white icon + drop shadow
  const html = renderToStaticMarkup(
    <div className="crh-marker">
      <Icon />
    </div>
  );

  return L.divIcon({
    html,
    className: "crh-leaflet-icon",
    iconSize: [44, 44],
    iconAnchor: [22, 22], // center anchor (no "pin stem")
    popupAnchor: [0, -22],
  });
}

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
