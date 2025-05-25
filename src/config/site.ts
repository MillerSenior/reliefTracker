export const siteConfig = {
  name: "Tornado Relief Directory-STL",
  description: "A dashboard for St. Louis tornado relief efforts, resources, and live updates.",
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || (() => {
    throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable is not set');
  })(),
  defaultMapCenter: { lat: 38.6270, lng: -90.1994 }, // St. Louis coordinates
  defaultMapZoom: 11,
};