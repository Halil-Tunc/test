import React from "react";
import { useSearchFilters } from "../context/SearchFiltersContext";

export default function FiltersOverlay() {
  const { filtersOpen, setFiltersOpen, filters, setFilters } =
    useSearchFilters();
  if (!filtersOpen) return null;

  const toggle = (key: keyof typeof filters) =>
    setFilters((f) => ({ ...f, [key]: !f[key] }));

  return (
    <div
      className="overlay"
      role="dialog"
      aria-modal="true"
      aria-label="Filters"
      onClick={(e) => {
        if (e.target === e.currentTarget) setFiltersOpen(false);
      }}
    >
      <div className="panel">
        <div className="panel__header">
          <h2>Filters</h2>
          <button
            className="iconbtn"
            onClick={() => setFiltersOpen(false)}
            aria-label="Close filters"
          >
            ✕
          </button>
        </div>

        <div className="panel__content">
          <h4 style={{ margin: "0 0 6px" }}>Access & Services</h4>
          <Grid>
            <Check
              label="Wheelchair accessible"
              on={filters.wheelchair}
              onToggle={() => toggle("wheelchair")}
            />
            <Check
              label="Bilingual"
              on={filters.bilingual}
              onToggle={() => toggle("bilingual")}
            />
            <Check
              label="Computers"
              on={filters.computers}
              onToggle={() => toggle("computers")}
            />
            <Check
              label="Wi-Fi"
              on={filters.wifi}
              onToggle={() => toggle("wifi")}
            />
            <Check
              label="Free"
              on={filters.free}
              onToggle={() => toggle("free")}
            />
            <Check
              label="Low-cost"
              on={filters.lowCost}
              onToggle={() => toggle("lowCost")}
            />
            <Check
              label="Appointment req."
              on={filters.appointment}
              onToggle={() => toggle("appointment")}
            />
            <Check
              label="Walk-in"
              on={filters.walkIn}
              onToggle={() => toggle("walkIn")}
            />
          </Grid>

          <h4 style={{ margin: "14px 0 6px" }}>Audiences</h4>
          <Grid>
            <Check
              label="Children / Kid-friendly"
              on={filters.kidFriendly}
              onToggle={() => toggle("kidFriendly")}
            />
            <Check
              label="Youth/Teens"
              on={filters.youth}
              onToggle={() => toggle("youth")}
            />
            <Check
              label="Adults"
              on={filters.adults}
              onToggle={() => toggle("adults")}
            />
            <Check
              label="Seniors"
              on={filters.seniors}
              onToggle={() => toggle("seniors")}
            />
            <Check
              label="LGBTQ+"
              on={filters.lgbtq}
              onToggle={() => toggle("lgbtq")}
            />
            <Check label="Veterans" on={false} onToggle={() => {}} disabled />{" "}
            {/* add when you want */}
          </Grid>

          <h4 style={{ margin: "14px 0 6px" }}>Topics</h4>
          <Grid>
            <Check
              label="Food"
              on={filters.food}
              onToggle={() => toggle("food")}
            />
            <Check
              label="Housing"
              on={filters.housing}
              onToggle={() => toggle("housing")}
            />
            <Check
              label="Legal"
              on={filters.legal}
              onToggle={() => toggle("legal")}
            />
            <Check
              label="Healthcare"
              on={filters.healthcare}
              onToggle={() => toggle("healthcare")}
            />
            <Check
              label="Mental health"
              on={filters.mentalHealth}
              onToggle={() => toggle("mentalHealth")}
            />
            <Check
              label="Employment"
              on={filters.employment}
              onToggle={() => toggle("employment")}
            />
            <Check
              label="Education/ESL"
              on={filters.education}
              onToggle={() => toggle("education")}
            />
            <Check
              label="Transportation"
              on={filters.transportation}
              onToggle={() => toggle("transportation")}
            />
            <Check
              label="Immigration"
              on={filters.immigration}
              onToggle={() => toggle("immigration")}
            />
          </Grid>
        </div>

        <div className="panel__footer">
          <button className="btn" onClick={() => setFiltersOpen(false)}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

function Grid({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "grid",
        gap: 8,
        gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
      }}
    >
      {children}
    </div>
  );
}

function Check({
  label,
  on,
  onToggle,
  disabled,
}: {
  label: string;
  on: boolean;
  onToggle: () => void;
  disabled?: boolean;
}) {
  return (
    <label className="switch" style={{ opacity: disabled ? 0.5 : 1 }}>
      <input
        type="checkbox"
        checked={on}
        onChange={onToggle}
        disabled={disabled}
      />
      <span>{label}</span>
    </label>
  );
}
