/**
 * Site Configuration
 * Central configuration file for the Tornado Relief Directory application.
 * Contains key settings and default values used throughout the application.
 */

export const siteConfig = {
  // Application name displayed in header and metadata
  name: "Tornado Relief Directory-STL",
  
  // Site description used in metadata and SEO
  description: "A dashboard for St. Louis tornado relief efforts, resources, and live updates.",
  
  // Google Maps API key - Required for map functionality
  // Must be set in environment variables
  googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || (() => {
    throw new Error('NEXT_PUBLIC_GOOGLE_MAPS_API_KEY environment variable is not set');
  })(),
  
  // Default map center coordinates (St. Louis coordinates)
  defaultMapCenter: { lat: 38.6270, lng: -90.1994 },
  
  // Default zoom level for the map view
  defaultMapZoom: 11,
};