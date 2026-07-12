/**
 * Branding & client identity — edit this file when selling to a new client.
 *
 * Markers like [[CLIENT_*]] mean: replace with the new client's real data.
 * Demo product name is intentionally temporary.
 */

export const BRAND = {
  /** Display name (Arabic) */
  nameAr: "تطبيق اسواق تجريبي",
  /** Display name (English) */
  nameEn: "Aswaq Tajribi",
  /** Short tagline */
  taglineAr: "توصيل بقالة وأغذية طازجة — قالب تجريبي جاهز للتخصيص",
  taglineEn: "Fresh grocery delivery — demo template ready to customize",
  /** Capacitor / store package id */
  appId: "com.aswaq.tajribi",
  /** Repo / npm-style slug */
  slug: "aswaq-tajribi",
} as const;

/** Replace every [[CLIENT_*]] value before go-live for a new client */
export const CLIENT = {
  companyNameAr: "[[CLIENT_COMPANY_NAME_AR]]",
  companyNameEn: "[[CLIENT_COMPANY_NAME_EN]]",
  email: "[[CLIENT_EMAIL]]",
  emailSales: "[[CLIENT_EMAIL_SALES]]",
  phone: "[[CLIENT_PHONE]]",
  whatsapp: "[[CLIENT_WHATSAPP]]", // e.g. 9665XXXXXXXX
  cityAr: "[[CLIENT_CITY_AR]]",
  cityEn: "[[CLIENT_CITY_EN]]",
  addressAr: "[[CLIENT_ADDRESS_AR]]",
  addressEn: "[[CLIENT_ADDRESS_EN]]",
  domain: "[[CLIENT_DOMAIN]]", // e.g. example.com.sa (no https://)
  siteUrl: "https://[[CLIENT_DOMAIN]]",
  senderDomain: "notify.[[CLIENT_DOMAIN]]",
  crNumber: "[[CLIENT_CR_NUMBER]]",
  vatNumber: "[[CLIENT_VAT_NUMBER]]",
  promoCodeExample: "[[CLIENT_PROMO_CODE]]",
  snapchatUrl: "[[CLIENT_SNAPCHAT_URL]]",
  tiktokUrl: "[[CLIENT_TIKTOK_URL]]",
  instagramUrl: "[[CLIENT_INSTAGRAM_URL]]",
  twitterUrl: "[[CLIENT_TWITTER_URL]]",
  appStoreUrl: "[[CLIENT_APPSTORE_URL]]",
  playStoreUrl: "[[CLIENT_PLAYSTORE_URL]]",
} as const;
