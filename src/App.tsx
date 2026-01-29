import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import FiltersOverlay from "./components/FiltersOverlay";
import { SearchFiltersProvider } from "./context/SearchFiltersContext";
import Home from "./pages/Home";
import CalendarPage from "./pages/CalendarPage";
import MapPage from "./pages/MapPage";
import ResourcesPage from "./pages/ResourcesPage";
import SubmitResourcePage from "./pages/SubmitResourcePage";
import ReferencePage from "./pages/ReferencePage";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <SearchFiltersProvider>
        <div className="page">
          <Header />
          <FiltersOverlay />

          <main className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/calendar" element={<CalendarPage />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/submit" element={<SubmitResourcePage />} />
              <Route path="/references" element={<ReferencePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>

          <footer className="footer">
            <div className="container">
              <div className="muted small">
                © {new Date().getFullYear()} Pflugerville Community Resource Hub
              </div>

              {/* References link (uses <Link> so it does NOT reload the page) */}
              <div style={{ marginTop: 6 }}>
                <Link className="section__link" to="/references">
                  References
                </Link>
              </div>
            </div>
          </footer>
        </div>
      </SearchFiltersProvider>
    </LanguageProvider>
  );
}

function NotFoundPage() {
  return (
    <section className="section">
      <div className="section__head">
        <h2>Page Not Found</h2>
        <a className="section__link" href="/">
          Back to home
        </a>
      </div>
      <p className="muted">The page you’re looking for doesn’t exist.</p>
    </section>
  );
}
