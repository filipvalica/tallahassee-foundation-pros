/**
 * ─────────────────────────────────────────────────────────────────────────────
 * site.config.ts — THE ONLY FILE THAT CHANGES PER SITE
 *
 * Clone site-template, update every PLACEHOLDER below, delete unused fields.
 * Everything else (components, pages, schema, layout) reads from this file.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const siteConfig = {
  // ── Identity ───────────────────────────────────────────────────────────────
  businessName:   "Tallahassee Foundation Pros",
  tagline:        "Foundation repair in Tallahassee, helical piers, slab lifting, free inspection",
  niche:          "foundation-repair",
  primaryCity:    "Tallahassee",
  state:          "FL",
  phone:          "+1-PLACEHOLDER-TWILIO",   // replace with Twilio tracking number
  email:          "leads@tallahasseefoundationpros.com",

  // ── Geography ──────────────────────────────────────────────────────────────
  serviceArea:    ["Tallahassee", "Midtown", "Killearn Estates", "Southwood", "Crawfordville", "Quincy", "Monticello"],
  addressStreet:  "Tallahassee, FL",
  addressZip:     "32301",

  // ── Services ───────────────────────────────────────────────────────────────
  services: [
    "Free Foundation Inspection",
    "Helical & Steel Push Pier Installation",
    "Slab Lifting & Leveling",
    "Foundation Crack Repair",
    "Drainage Correction",
  ],

  // ── Trust proof points ─────────────────────────────────────────────────────
  trust: {
    responseTime:    "Free inspection within 48 hours",
    yearsInBusiness: 0,
    certifications:  "FL DBPR Licensed — Certified Specialty Contractor",
    guarantee:       "Lifetime transferable warranty on pier installations",
  },

  // ── Call tracking (Twilio) ─────────────────────────────────────────────────
  twilio: {
    accountSid:     "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    forwardToPhone: "+1-PLACEHOLDER-FORWARD",
  },

  // ── Analytics ─────────────────────────────────────────────────────────────
  ga4MeasurementId: "G-XXXXXXXXXX",

  // ── Design ────────────────────────────────────────────────────────────────
  accentColor: "#7c3f1a",   // brick/earth tone for foundation repair

  // ── Schema.org ────────────────────────────────────────────────────────────
  schema: {
    businessType: "HomeAndConstructionBusiness",
    priceRange:   "$$",
    areaServed:   "Tallahassee, FL and surrounding Leon County",
    openingHours: "Mo-Fr 07:00-18:00",
  },

  // ── Portfolio agent metadata ───────────────────────────────────────────────
  portfolioId:      "tallahassee-foundation-pros",
  semrushProjectId: "",
  gbpLocationId:    "",
} as const;

export type SiteConfig = typeof siteConfig;
