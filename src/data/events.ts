export type CalendarItem = {
  id: string;
  date: string;
  title: string;
  where: string;
  link?: string;
  tags: string[]; // NEW: used by filters (wheelchair / bilingual / kid-friendly)
};

export const CAL_EVENTS: CalendarItem[] = [
  {
    id: "e1",
    date: "2026-02-05",
    title: "Pflugerville Resource Fair",
    where: "Heritage House Museum",
    tags: ["Family", "Wheelchair", "Children"],
  },
  {
    id: "e2",
    date: "2026-02-12",
    title: "Tenant Rights Workshop",
    where: "Pflugerville Public Library",
    tags: ["Legal", "Bilingual", "Wheelchair"],
  },
  {
    id: "e3",
    date: "2026-02-20",
    title: "Family Health Screenings",
    where: "Community Health Clinic (NE Austin)",
    tags: ["Health", "Children", "Wheelchair"],
  },
  {
    id: "e4",
    date: "2026-03-02",
    title: "ESL Conversation Club",
    where: "Pflugerville Public Library",
    tags: ["Bilingual", "Adult Education", "Wheelchair"],
  },
  {
    id: "e5",
    date: "2026-03-09",
    title: "Kids STEAM Saturday",
    where: "Pflugerville Recreation Center",
    tags: ["Children", "Kid-Friendly", "Family"],
  },
];
