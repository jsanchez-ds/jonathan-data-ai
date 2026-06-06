// ---------- i18n ----------
const I18N = {
  es: {
    "meta.title": "Senior Data Scientist · Forecasting & AI para Energía, Telecom y Minería",
    "meta.desc": "Modelos de forecasting, RAG y agentes de IA en producción para utilities, telecom y minería. LatAm + US. Entregas de alcance fijo.",
    "nav.brand": "Jonathan · Data & AI",
    "nav.services": "Servicios",
    "nav.proof": "Trabajo",
    "nav.process": "Proceso",
    "nav.cta": "Agendar llamada",
    "hero.eyebrow": "Disponible para proyectos · LatAm + US · Remoto",
    "hero.title1": "Modelos de IA y forecasting",
    "hero.title2": "que llegan a producción.",
    "hero.sub": "Senior Data Scientist especializado en energía, telecom y minería. Construyo sistemas de predicción, RAG y agentes de IA con alcance fijo y entrega real — no demos que mueren en un notebook.",
    "hero.ctaPrimary": "Agendar llamada gratis",
    "hero.ctaSecondary": "Ver servicios",
    "hero.stackLabel": "Stack en producción",
    "trust.line": "Modelos VPTO/B2B en producción · Pipelines Medallion · Forecasting energético · RAG sobre documentación técnica · Mantenimiento predictivo industrial",
    "services.kicker": "Servicios productizados",
    "services.title": "Alcance fijo. Precio fijo. Entrega real.",
    "services.lead": "Sin tarifas por hora ambiguas. Eliges un paquete, sabes qué recibes y cuándo.",
    "svc1.title": "Asistente RAG sobre tus documentos",
    "svc1.desc": "Un asistente de IA que responde sobre tus contratos, manuales, normativa o base técnica. Con citas a la fuente. Login y panel incluido.",
    "svc1.b1": "Ingesta de tus PDFs / datos",
    "svc1.b2": "Respuestas con citas verificables",
    "svc1.b3": "Auth + panel (Clerk + Supabase)",
    "svc1.price": "Desde USD 2.500",
    "svc1.priceSub": "+ mantención opcional",
    "svc2.title": "Modelo de forecasting / predicción",
    "svc2.desc": "Demanda, consumo, churn, RUL de equipos. Modelo validado, métricas honestas y pipeline reproducible — no un score que no se puede replicar.",
    "svc2.b1": "EDA + feature engineering",
    "svc2.b2": "Validación temporal correcta",
    "svc2.b3": "Pipeline + API de inferencia",
    "svc2.price": "Desde USD 3.000",
    "svc2.priceSub": "según complejidad de datos",
    "svc3.title": "Dashboard + insights accionables",
    "svc3.desc": "Conecto tus datos y entrego un dashboard con los 3-5 hallazgos que mueven la aguja. Pensado para decisión, no para decorar.",
    "svc3.b1": "Conexión a tu fuente de datos",
    "svc3.b2": "Dashboard interactivo",
    "svc3.b3": "Informe con hallazgos priorizados",
    "svc3.price": "Desde USD 1.500",
    "svc3.priceSub": "entrega en ~5 días",
    "svc4.title": "Automatización con agentes de IA (N8N)",
    "svc4.desc": "Conecto tus sistemas (CRM, email, Stripe, datos) y automatizo procesos con flujos de IA: clasificación, respuestas, reportes, enriquecimiento de leads.",
    "svc4.price": "Desde USD 1.800",
    "svc4.priceSub": "+ retainer mensual opcional",
    "proof.kicker": "Trabajo real",
    "proof.title": "Sistemas, no slides.",
    "proof.lead": "Una selección de proyectos construidos de punta a punta.",
    "p1.tag": "Telecom · Producción", "p1.title": "Modelos VPTO / B2B Starlink", "p1.desc": "Predicción de consumo y ruteo a nivel cliente sobre bases diarias de millones de registros. En uso real.",
    "p2.tag": "Energía · Forecasting", "p2.title": "Forecasting energético (ENTSO-E)", "p2.desc": "Pipeline Medallion en Databricks + MLflow para predicción de demanda eléctrica.",
    "p3.tag": "IA · RAG", "p3.title": "RAG sobre papers de energía", "p3.desc": "Asistente de búsqueda semántica con Groq + Qdrant sobre literatura técnica.",
    "p4.tag": "Minería · Mantenimiento", "p4.title": "Mantenimiento predictivo (RUL)", "p4.desc": "Estimación de vida útil remanente con Weibull/Cox + LSTM y detección de anomalías.",
    "p5.tag": "Procesos · Calidad", "p5.title": "Forecasting de calidad de flotación", "p5.desc": "Predicción de calidad de proceso mineral sobre datos reales de planta.",
    "p6.tag": "Streaming · Real-time", "p6.title": "Agente de red en tiempo real", "p6.desc": "Kafka + Spark Streaming con un agente LLM que unifica predicción y consulta.",
    "process.kicker": "Cómo trabajamos",
    "process.title": "Claro y sin sorpresas.",
    "step1.title": "Llamada de 20 min", "step1.desc": "Entiendo tu problema y te digo si puedo ayudarte. Gratis, sin compromiso.",
    "step2.title": "Propuesta de alcance fijo", "step2.desc": "Qué entrego, cuándo y a qué precio. Lo apruebas antes de empezar.",
    "step3.title": "Construcción", "step3.desc": "Avances visibles. Código limpio, revisado y documentado.",
    "step4.title": "Entrega + handoff", "step4.desc": "Sistema funcionando en tu infraestructura, con guía de uso y soporte inicial.",
    "cta.title": "¿Tienes un problema de datos o IA?",
    "cta.sub": "Agenda una llamada de 20 minutos. Si puedo ayudarte, te lo digo. Si no, te oriento hacia quién sí.",
    "cta.book": "Agendar llamada",
    "cta.email": "Escríbeme",
    "cta.or": "o déjame tus datos",
    "form.name": "Nombre",
    "form.namePh": "Tu nombre",
    "form.email": "Email",
    "form.emailPh": "tu@empresa.com",
    "form.company": "Empresa",
    "form.companyPh": "Nombre de tu empresa",
    "form.message": "¿En qué te ayudo?",
    "form.messagePh": "Cuéntame brevemente tu problema de datos o IA",
    "form.submit": "Enviar",
    "form.sending": "Enviando…",
    "form.ok": "¡Gracias! Te respondo dentro de 24 h.",
    "form.errEmail": "Pon un email válido.",
    "form.errCompany": "Falta el nombre de tu empresa.",
    "form.err": "Algo falló. Escríbeme directo a jonathan.sanchez.ep@gmail.com.",
    "cta.fine": "Respondo en menos de 24 h · Español / English",
    "footer.tagline": "Forecasting & AI · Energía · Telecom · Minería",
    "footer.linkedin": "LinkedIn"
  },
  en: {
    "meta.title": "Senior Data Scientist · Forecasting & AI for Energy, Telecom & Mining",
    "meta.desc": "Production forecasting models, RAG and AI agents for utilities, telecom and mining. LatAm + US. Fixed-scope delivery.",
    "nav.brand": "Jonathan · Data & AI",
    "nav.services": "Services",
    "nav.proof": "Work",
    "nav.process": "Process",
    "nav.cta": "Book a call",
    "hero.eyebrow": "Available for projects · LatAm + US · Remote",
    "hero.title1": "AI & forecasting models",
    "hero.title2": "that reach production.",
    "hero.sub": "Senior Data Scientist focused on energy, telecom and mining. I build forecasting systems, RAG and AI agents with fixed scope and real delivery — not demos that die in a notebook.",
    "hero.ctaPrimary": "Book a free call",
    "hero.ctaSecondary": "See services",
    "hero.stackLabel": "Production stack",
    "trust.line": "VPTO/B2B models in production · Medallion pipelines · Energy forecasting · RAG over technical docs · Industrial predictive maintenance",
    "services.kicker": "Productized services",
    "services.title": "Fixed scope. Fixed price. Real delivery.",
    "services.lead": "No vague hourly rates. Pick a package, know exactly what you get and when.",
    "svc1.title": "RAG assistant over your documents",
    "svc1.desc": "An AI assistant that answers over your contracts, manuals, regulations or technical base. With source citations. Login and panel included.",
    "svc1.b1": "Ingestion of your PDFs / data",
    "svc1.b2": "Answers with verifiable citations",
    "svc1.b3": "Auth + panel (Clerk + Supabase)",
    "svc1.price": "From USD 2,500",
    "svc1.priceSub": "+ optional maintenance",
    "svc2.title": "Forecasting / prediction model",
    "svc2.desc": "Demand, consumption, churn, equipment RUL. Validated model, honest metrics and a reproducible pipeline — not a score you can't replicate.",
    "svc2.b1": "EDA + feature engineering",
    "svc2.b2": "Proper temporal validation",
    "svc2.b3": "Pipeline + inference API",
    "svc2.price": "From USD 3,000",
    "svc2.priceSub": "depending on data complexity",
    "svc3.title": "Dashboard + actionable insights",
    "svc3.desc": "I connect your data and deliver a dashboard with the 3-5 findings that move the needle. Built for decisions, not decoration.",
    "svc3.b1": "Connection to your data source",
    "svc3.b2": "Interactive dashboard",
    "svc3.b3": "Report with prioritized findings",
    "svc3.price": "From USD 1,500",
    "svc3.priceSub": "delivered in ~5 days",
    "svc4.title": "AI agent automation (N8N)",
    "svc4.desc": "I connect your systems (CRM, email, Stripe, data) and automate processes with AI flows: classification, replies, reports, lead enrichment.",
    "svc4.price": "From USD 1,800",
    "svc4.priceSub": "+ optional monthly retainer",
    "proof.kicker": "Real work",
    "proof.title": "Systems, not slides.",
    "proof.lead": "A selection of projects built end to end.",
    "p1.tag": "Telecom · Production", "p1.title": "Starlink VPTO / B2B models", "p1.desc": "Customer-level consumption and routing prediction over daily bases of millions of records. In real use.",
    "p2.tag": "Energy · Forecasting", "p2.title": "Energy forecasting (ENTSO-E)", "p2.desc": "Medallion pipeline on Databricks + MLflow for electricity demand prediction.",
    "p3.tag": "AI · RAG", "p3.title": "RAG over energy papers", "p3.desc": "Semantic search assistant with Groq + Qdrant over technical literature.",
    "p4.tag": "Mining · Maintenance", "p4.title": "Predictive maintenance (RUL)", "p4.desc": "Remaining useful life estimation with Weibull/Cox + LSTM and anomaly detection.",
    "p5.tag": "Process · Quality", "p5.title": "Flotation quality forecasting", "p5.desc": "Mineral process quality prediction over real plant data.",
    "p6.tag": "Streaming · Real-time", "p6.title": "Real-time grid agent", "p6.desc": "Kafka + Spark Streaming with an LLM agent unifying prediction and querying.",
    "process.kicker": "How we work",
    "process.title": "Clear and no surprises.",
    "step1.title": "20-min call", "step1.desc": "I understand your problem and tell you if I can help. Free, no commitment.",
    "step2.title": "Fixed-scope proposal", "step2.desc": "What I deliver, when and at what price. You approve before we start.",
    "step3.title": "Build", "step3.desc": "Visible progress. Clean, reviewed and documented code.",
    "step4.title": "Delivery + handoff", "step4.desc": "System running on your infrastructure, with a usage guide and initial support.",
    "cta.title": "Have a data or AI problem?",
    "cta.sub": "Book a 20-minute call. If I can help, I'll tell you. If not, I'll point you to who can.",
    "cta.book": "Book a call",
    "cta.email": "Email me",
    "cta.or": "or leave your details",
    "form.name": "Name",
    "form.namePh": "Your name",
    "form.email": "Email",
    "form.emailPh": "you@company.com",
    "form.company": "Company",
    "form.companyPh": "Your company name",
    "form.message": "How can I help?",
    "form.messagePh": "Briefly tell me your data or AI problem",
    "form.submit": "Send",
    "form.sending": "Sending…",
    "form.ok": "Thanks! I'll get back to you within 24h.",
    "form.errEmail": "Enter a valid email.",
    "form.errCompany": "Your company name is missing.",
    "form.err": "Something failed. Email me directly at jonathan.sanchez.ep@gmail.com.",
    "cta.fine": "I reply within 24h · Español / English",
    "footer.tagline": "Forecasting & AI · Energy · Telecom · Mining",
    "footer.linkedin": "LinkedIn"
  }
};

function applyLang(lang) {
  const dict = I18N[lang] || I18N.es;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const val = dict[key];
    if (val == null) return;
    if (key === "meta.title") { document.title = val; return; }
    if (key === "meta.desc") {
      const m = document.querySelector('meta[name="description"]');
      if (m) m.setAttribute("content", val);
      return;
    }
    el.textContent = val;
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const val = dict[el.getAttribute("data-i18n-ph")];
    if (val != null) el.setAttribute("placeholder", val);
  });
  document.querySelectorAll(".lang-opt").forEach((o) => {
    o.classList.toggle("is-active", o.dataset.set === lang);
  });
  try { localStorage.setItem("lang", lang); } catch (_) {}
}

function t(key) {
  const lang = document.documentElement.dataset.lang || "es";
  return (I18N[lang] && I18N[lang][key]) || (I18N.es && I18N.es[key]) || key;
}

(function initLang() {
  let lang = "es";
  try { lang = localStorage.getItem("lang") || (navigator.language || "es").slice(0, 2); } catch (_) {}
  if (!I18N[lang]) lang = "es";
  applyLang(lang);

  const toggle = document.getElementById("langToggle");
  if (toggle) {
    toggle.addEventListener("click", () => {
      const next = document.documentElement.dataset.lang === "es" ? "en" : "es";
      applyLang(next);
    });
  }
})();

// ---------- year ----------
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ---------- lead form -> Supabase ----------
const SUPABASE_URL = "https://zwasrzkepwyfmsyaefqb.supabase.co";
const SUPABASE_KEY = "sb_publishable_1ks7pnpE5_yMUGkFjsT9LA_1rfiYw5g";

(function initLeadForm() {
  const form = document.getElementById("leadForm");
  if (!form) return;
  const statusEl = document.getElementById("leadStatus");
  const submitBtn = document.getElementById("leadSubmit");

  const setStatus = (key, type) => {
    if (!statusEl) return;
    statusEl.textContent = t(key);
    statusEl.dataset.type = type || "";
  };

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const email = (data.get("email") || "").toString().trim();
    const empresa = (data.get("empresa") || "").toString().trim();

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus("form.errEmail", "err"); return; }
    if (!empresa) { setStatus("form.errCompany", "err"); return; }

    const payload = {
      contacto: (data.get("contacto") || "").toString().trim() || null,
      email,
      empresa,
      notas: (data.get("notas") || "").toString().trim() || null,
      canal: "web",
      source: "web_form"
    };

    submitBtn.disabled = true;
    setStatus("form.sending", "");

    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
        method: "POST",
        headers: {
          "apikey": SUPABASE_KEY,
          "Authorization": `Bearer ${SUPABASE_KEY}`,
          "Content-Type": "application/json",
          "Prefer": "return=minimal"
        },
        body: JSON.stringify(payload)
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      form.reset();
      setStatus("form.ok", "ok");
    } catch (_) {
      setStatus("form.err", "err");
    } finally {
      submitBtn.disabled = false;
    }
  });
})();

// ---------- reveal on scroll ----------
(function initReveal() {
  const targets = document.querySelectorAll(".card, .proof-item, .step, .section-head, .cta-inner");
  targets.forEach((t) => t.setAttribute("data-reveal", ""));
  if (!("IntersectionObserver" in window)) {
    targets.forEach((t) => t.classList.add("is-visible"));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  targets.forEach((t) => io.observe(t));
})();
