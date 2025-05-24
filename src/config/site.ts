export const siteConfig = {
  name: "STL Relief Tracker",
  description: "A dashboard for St. Louis tornado relief efforts, resources, and live updates.",
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "AIzaSyDsuwd3XQmQS4ULEOgPYeC-_qElkhOJbKQ", // Fallback to the one in prompt if env var is not set
  defaultMapCenter: { lat: 38.6270, lng: -90.1994 }, // St. Louis coordinates
  defaultMapZoom: 11,
};
