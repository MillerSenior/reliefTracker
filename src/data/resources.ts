import type { ResourceLocation } from '@/types';
import { Building2, Bus, Home, type LucideIcon, Package, Phone, PlugZap, Scale, Shirt, ShowerHead, Sparkles, Stethoscope, Utensils } from 'lucide-react';

// Helper function to assign icons based on type and description
const getIcon = (type: ResourceLocation['type'], description: string): LucideIcon => {
  if (description.toLowerCase().includes('shower')) return ShowerHead;
  if (description.toLowerCase().includes('charging')) return PlugZap;
  if (description.toLowerCase().includes('laundry')) return Shirt;
  
  switch (type) {
    case 'Shelter': return Home;
    case 'Distribution Center': return Package;
    case 'Food': return Utensils;
    case 'Services': return Sparkles;
    case 'Hub': return Building2;
    case 'Medical': return Stethoscope;
    case 'Legal': return Scale;
    case 'Transportation': return Bus;
    case 'Financial': return Phone;
    default: return Sparkles;
  }
};

// All resource locations combined
export const resourceLocations: ResourceLocation[] = [
  // Original locations
  { 
    id: "urban-league", 
    organization: "Urban League of Metropolitan St. Louis", 
    address: "1408 N. Kingshighway Blvd., St. Louis, MO 63113", 
    description: "Distribution center for relief supplies and meals.", 
    notes: "Offers three hot meals daily: breakfast (7:30–9 a.m.), lunch (11:30 a.m.–1 p.m.), and dinner (5–6:30 p.m.).", 
    type: "Distribution Center", 
    coordinates: { lat: 38.6508, lng: -90.2409 }
  },
  { 
    id: "ville-hub", 
    organization: "The Ville Emergency Hub", 
    address: "4144 Dr. Martin Luther King Dr., St. Louis, MO 63113", 
    description: "Community-led relief hub offering supplies and assistance.", 
    notes: "Operated by 4TheVille in collaboration with local organizations.", 
    type: "Hub", 
    coordinates: { lat: 38.6542, lng: -90.2387 } // Approx.
  },
  { 
    id: "ofallon-park", 
    organization: "O'Fallon Park Rec Complex (YMCA)", 
    address: "4343 W. Florissant Ave., St. Louis, MO 63115", 
    description: "Hosting the People's Response Hub, providing food and supplies.", 
    notes: "Dinner served daily from 5–7 p.m.; volunteer opportunities available.", 
    type: "Food", 
    coordinates: { lat: 38.6773, lng: -90.2274 } // Approx.
  },
  { 
    id: "12th-park", 
    organization: "12th and Park Recreation Center", 
    address: "1410 S. Tucker Blvd., St. Louis, MO 63104", 
    description: "American Red Cross shelter offering overnight accommodations.", 
    notes: "Call 1-800-Red-Cross for assistance.", 
    type: "Shelter", 
    coordinates: { lat: 38.6149, lng: -90.2049 } // Approx.
  },
  { 
    id: "friendly-temple", 
    organization: "Friendly Temple Outreach Center", 
    address: "6356 Dr. Martin Luther King Dr., St. Louis, MO 63133", 
    description: "American Red Cross shelter providing overnight stays.", 
    notes: "Call 1-800-Red-Cross for assistance.", 
    type: "Shelter", 
    coordinates: { lat: 38.6675, lng: -90.2701 } // Approx.
  },
  { 
    id: "refresh-church", 
    organization: "Refresh Community Church", 
    address: "829 N. Hanley Rd., St. Louis, MO 63130", 
    description: "American Red Cross shelter available for overnight shelter.", 
    notes: "Call 1-800-Red-Cross for assistance.", 
    type: "Shelter", 
    coordinates: { lat: 38.6790, lng: -90.3298 } // Approx.
  },
  { 
    id: "new-horizons", 
    organization: "New Horizons United Methodist Church", 
    address: "4234 Washington Blvd., St. Louis, MO 63108", 
    description: "Distribution site for non-perishable foods, laundry, and shower services.", 
    notes: "Open Wednesday from 9 a.m. to 5 p.m.", 
    type: "Services", 
    coordinates: { lat: 38.6374, lng: -90.2466 } // Approx.
  },
  { 
    id: "carondelet-park", 
    organization: "Carondelet Park Rec Complex", 
    address: "930 Holly Hills Ave., St. Louis, MO 63111", 
    description: "Offers cooling center, charging stations, and shower facilities.", 
    notes: "Open Mon–Fri: 5 a.m.–10 p.m.; Sat–Sun: 7 a.m.–6 p.m.", 
    type: "Services", 
    coordinates: { lat: 38.5604, lng: -90.2650 } // Approx.
  },
  { 
    id: "mid-county-ymca", 
    organization: "Mid-County Family YMCA", 
    address: "1900 Urban Dr., Brentwood, MO 63144", 
    description: "Provides cooling center, charging stations, and shower facilities.", 
    notes: "Open Mon–Thurs: 5:15 a.m.–9 p.m.; Sat: 7 a.m.–4 p.m.; Sun: 8 a.m.–4 p.m.", 
    type: "Services", 
    coordinates: { lat: 38.6311, lng: -90.3895 } // Approx.
  },
  { 
    id: "peter-paul",
    organization: "Peter & Paul Community Services",
    address: "2612 Wyoming Street, St. Louis, MO 63118",
    description: "New overnight shelter location as of 5/24",
    type: "Shelter",
    coordinates: { lat: 38.5992, lng: -90.2226 } // Approx.
  },
  { 
    id: "slpl-locations",
    organization: "St. Louis Public Libraries",
    description: "13 library locations offering rest, cooling, and recharging",
    type: "Services",
    notes: "Cabanne and Julia Davis locations temporarily closed for damage assessment",
    url: "https://slpl.bibliocommons.com"
  },
  // New locations from live document
  {
    id: "saint-paul-ame",
    organization: "Saint Paul AME Church",
    address: "1260 Hamilton Street, St. Louis, MO 63112",
    description: "Emergency shelter location",
    type: "Shelter",
    coordinates: { lat: 38.6598, lng: -90.2854 }
  },
  {
    id: "miner-convention",
    organization: "City of Miner Convention Center",
    address: "2610 E Malone Ave., Sikeston, MO 63801",
    description: "Emergency shelter location",
    type: "Shelter",
    coordinates: { lat: 36.8761, lng: -89.5440 }
  },
  {
    id: "4theville-hub",
    organization: "4theVille Hub",
    address: "4144 MLK Dr",
    description: "Open 10am-8pm daily with showers open until 2pm. Operations extended to May 31st. Offers hot meals from 11-12pm.",
    type: "Hub",
    contact: {
      email: "amber@inexcelsislove.org",
      phone: "314-732-2156"
    },
    hours: "10am-8pm daily",
    coordinates: { lat: 38.6542, lng: -90.2387 }
  },
  {
    id: "deaconess-center",
    organization: "Deaconess Center",
    address: "1000 N Vandeventer Ave",
    description: "Access Wi-fi, charge electronics, personal hygiene needs, snacks and water.",
    hours: "9am-6pm",
    type: "Services",
    coordinates: { lat: 38.6356, lng: -90.2371 }
  },
  {
    id: "rx-outreach",
    organization: "STL Rx Outreach",
    description: "90 Day Supply Relief Fund for those who lost prescription medication due to the storm",
    contact: {
      phone: "314-222-0472"
    },
    type: "Medical",
    coordinates: { lat: 38.6356, lng: -90.2371 }
  },
  {
    id: "metro-pickup",
    organization: "Metro Transit Nightly Pickups",
    description: "Evening pickup at 8:00 PM from designated community locations to shelters. Morning return at 9:00 AM.",
    type: "Transportation",
    notes: "Pickup locations: Save A Lot parking lot 4447 Natural Bridge Road Ave, Academy Sherman Park Location 5200 Cates Ave",
    coordinates: { lat: 38.6667, lng: -90.2407 }
  }
].map(location => ({ ...location, icon: getIcon(location.type, location.description) }));

export const resourceTypes: ResourceLocation['type'][] = [
  'Shelter', 
  'Distribution Center', 
  'Food', 
  'Services', 
  'Hub',
  'Medical',
  'Legal',
  'Transportation',
  'Financial'
];
