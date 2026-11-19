// Auto-generated configuration for TLS Contact Germany Turkey AutoBot

export const config = {
  botName: "TLS Contact Germany Turkey",
  country: "Turkey",
  provider: "TLS Contact",
  destination: "Germany",
  loginUrl: "https://visas-de.tlscontact.com/en-us/login",
  centers: [
  "Istanbul",
  "Ankara",
  "Izmir",
  "Bursa",
  "Antalya",
  "Gaziantep",
  "Adana"
],
  visaCategories: [
  "Tourist",
  "Business",
  "Transit",
  "Student",
  "Work",
  "Family Visit",
  "Medical",
  "Conferences",
  "Official/Diplomatic"
],
  defaultPolling: {
    minIntervalSeconds: 30,
    maxIntervalSeconds: 60,
  },
  alerts: {
    telegram: {
      supportUser: "iqrouter",
    },
    whatsapp: {
      supportNumber: "+201200655872",
    },
  },
} as const;

export type RouteConfig = typeof config;
