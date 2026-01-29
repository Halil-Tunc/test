import type { Filters } from "../context/SearchFiltersContext";

export function buildRequireGroups(filters: Filters): string[][] {
  const g: string[][] = [];

  // Access/services
  if (filters.wheelchair) g.push(["wheelchair", "ada", "accessible"]);
  if (filters.bilingual) g.push(["bilingual", "spanish", "multilingual"]);
  if (filters.computers)
    g.push(["computer", "computers", "laptop", "tech lab"]);
  if (filters.wifi) g.push(["wifi", "wi-fi", "internet"]);
  if (filters.free) g.push(["free", "no-cost", "no cost"]);
  if (filters.lowCost)
    g.push(["low-cost", "low cost", "sliding-scale", "sliding scale"]);
  if (filters.appointment)
    g.push(["appointment", "appointments", "by appointment"]);
  if (filters.walkIn) g.push(["walk-in", "walk in", "walkin"]);

  // Audiences
  if (filters.kidFriendly)
    g.push([
      "children",
      "kids",
      "kid-friendly",
      "kid friendly",
      "family",
      "families",
      "childcare",
    ]);
  if (filters.youth) g.push(["youth", "teen", "teens", "tweens", "students"]);
  if (filters.adults) g.push(["adult", "adults"]);
  if (filters.seniors) g.push(["senior", "seniors", "older adults", "elder"]);
  if (filters.lgbtq) g.push(["lgbtq", "lgbtq+"]);

  // Topics
  if (filters.food) g.push(["food", "pantry", "meals", "groceries"]);
  if (filters.housing) g.push(["housing", "rent", "shelter", "eviction"]);
  if (filters.legal) g.push(["legal", "attorney", "tenant", "rights"]);
  if (filters.healthcare) g.push(["healthcare", "medical", "clinic", "health"]);
  if (filters.mentalHealth)
    g.push([
      "mental health",
      "mental-health",
      "counseling",
      "therapy",
      "behavioral health",
    ]);
  if (filters.employment)
    g.push(["employment", "job", "jobs", "career", "training", "resume"]);
  if (filters.education)
    g.push([
      "education",
      "esl",
      "class",
      "classes",
      "tutoring",
      "literacy",
      "school",
    ]);
  if (filters.transportation)
    g.push(["transportation", "transit", "bus", "ride", "mobility"]);
  if (filters.immigration)
    g.push(["immigration", "citizenship", "asylum", "daca"]);

  return g;
}

export function matchesQuery(
  query: string,
  fields: Array<string | undefined>
): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return fields
    .filter(Boolean)
    .some((f) => String(f).toLowerCase().includes(q));
}

export function matchesGroups(
  tags: string[] | undefined,
  requireGroups: string[][]
): boolean {
  if (!requireGroups.length) return true;
  const t = (tags || []).map((x) => x.toLowerCase());
  return requireGroups.every((group) =>
    t.some((tag) => group.some((k) => tag.includes(k)))
  );
}
