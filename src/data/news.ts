import type { NewsSource } from '@/types';

/**
 * News Sources Configuration
 * Defines the official news sources used for live updates in the application.
 * Each source includes metadata about the provider and their feed information.
 */

export const newsSources: NewsSource[] = [
  { 
    // Official city recovery information portal
    id: "stl-recovers", 
    name: "STL Recovers (City of St. Louis)", 
    url: "https://www.stlouis-mo.gov/government/recovery/tornado-2025/help/index.cfm", 
    description: "Central hub for official updates, curfews, shelter info, and emergency orders.", 
    feedInfo: "No public API; updates via web and press releases." 
  },
  { 
    // Local public radio coverage
    id: "stlpr", 
    name: "St. Louis Public Radio (STLPR)", 
    url: "https://www.stlpr.org/show/st-louis-on-the-air/2025-05-22/a-tornado-tore-st-louis-apart-community-relief-efforts-are-bringing-it-together", 
    description: "Ongoing coverage of community relief efforts and interviews with organizers.", 
    feedInfo: "RSS feed available; no public API." 
  },
  { 
    // Local news station coverage
    id: "ksdk", 
    name: "KSDK News", 
    url: "https://www.ksdk.com/article/weather/severe-weather/st-louis-tornado-damage-shelters-open-how-you-can-help/63-c4a487ca-7646-40e2-88e8-d01f9f38b7d8", 
    description: "Information on shelters, donation centers, and how to help.", 
    feedInfo: "No public API; updates via website." 
  },
  { 
    // Local magazine coverage
    id: "stl-magazine", 
    name: "St. Louis Magazine", 
    url: "https://www.stlmag.com/news/st-louis-tornado-relief-ways-to-help/", 
    description: "Lists of ways to support tornado victims, including mental health resources and benefit events.", 
    feedInfo: "No public API; updates via website." 
  }
];
