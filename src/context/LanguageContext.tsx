import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

type Lang = "en" | "es";

type Dict = Record<string, { en: string; es: string }>;

const DICT: Dict = {
  // Header
  "app.title": {
    en: "Pflugerville Community Resource Hub",
    es: "Centro de Recursos Comunitarios de Pflugerville",
  },
  "app.subtitle": {
    en: "Connecting Pflugerville residents with local programs, events, and services",
    es: "Conectando a residentes de Pflugerville con programas, eventos y servicios locales",
  },
  "header.searchAria": { en: "Search", es: "Buscar" },
  "header.searchPlaceholder": { en: "Search…", es: "Buscar…" },
  "header.filters": { en: "Filters", es: "Filtros" },

  // Common buttons
  "btn.backHome": { en: "Back to home", es: "Volver al inicio" },
  "btn.viewResources": {
    en: "View all resources",
    es: "Ver todos los recursos",
  },
  "btn.submitResource": { en: "Submit a resource", es: "Enviar un recurso" },

  // Home
  "home.highlightsTitle": {
    en: "Community Highlights",
    es: "Destacados de la Comunidad",
  },
  "home.highlightsDesc": {
    en: "A few trusted resources we recommend starting with.",
    es: "Algunos recursos confiables para comenzar.",
  },
  "home.aboutTitle": { en: "About Us", es: "Sobre Nosotros" },
  "home.aboutPlaceholder": {
    en: "TODO: Add Pflugerville chapter/school info here",
    es: "TODO: Agrega información del capítulo/escuela de Pflugerville aquí",
  },

  // References
  "ref.title": { en: "References", es: "Referencias" },
  "ref.desc": {
    en: "Work in progress — this page lists sources used to create content, links, and visuals for the hub.",
    es: "En progreso — esta página lista las fuentes usadas para crear contenido, enlaces y elementos visuales del sitio.",
  },
};

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: keyof typeof DICT) => string;
};

const LanguageContext = createContext<Ctx | null>(null);
const STORAGE_KEY = "pflugerville_lang_v1";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "es") setLangState(saved);
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  };

  const t = useMemo(() => {
    return (key: keyof typeof DICT) => DICT[key][lang] || DICT[key].en;
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
