import type { ResourceLocation, ResourceType } from '@/types';
import { Building2, Bus, Home, type LucideIcon, Package, Phone, PlugZap, Scale, Shirt, ShowerHead, Sparkles, Stethoscope, Utensils } from 'lucide-react';

// Helper function to assign icons based on type and description
const getIcon = (type: ResourceLocation['type'], description: string | undefined): LucideIcon => {
  const desc = description?.toLowerCase() || '';
  if (desc.includes('shower')) return ShowerHead;
  if (desc.includes('charging')) return PlugZap;
  if (desc.includes('laundry')) return Shirt;

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
  { 
    id: "fema-union-tabernacle", 
    organization: "FEMA Disaster Recovery Center - Union Tabernacle", 
    address: "626 North Newstead Ave., St. Louis, MO 63108", 
    description: "FEMA assistance applications and support services. Apply by August 11, 2025. SBA and FEMA staff available to help with applications.", 
    notes: "Open Monday-Saturday 8am-8pm, Sunday: Closed", 
    type: "Services", 
    coordinates: { lat: 38.6508, lng: -90.2409 }
  },
  { 
    id: "fema-sumner", 
    organization: "FEMA Disaster Recovery Center - Sumner High", 
    address: "4248 Cottage Ave., St. Louis, MO 63113", 
    description: "FEMA assistance applications and support services. Apply by August 11, 2025. SBA and FEMA staff available to help with applications.", 
    notes: "Open Monday-Saturday 8am-7pm, Sunday 8am-6pm", 
    type: "Services", 
    coordinates: { lat: 38.6542, lng: -90.2387 }
  },
  { 
    id: "fema-urban-league", 
    organization: "FEMA Disaster Recovery Center - Urban League", 
    address: "4401 Natural Bridge Ave., St. Louis, MO 63115", 
    description: "FEMA assistance applications and support services. Apply by August 11, 2025. SBA and FEMA staff available to help with applications.", 
    notes: "Open Monday-Saturday 8am-8pm, Sunday 8am-6pm", 
    type: "Services", 
    coordinates: { lat: 38.6667, lng: -90.2407 }
  },
  {
    id: "peoples-health-centers",
    organization: "People's Health Centers",
    description: "Health aid and resources for impacted residents",
    notes: "Open daily 9am-4pm",
    type: "Medical",
    locations: [
      "4447 Natural Bridge Ave., St. Louis, MO 63115",
      "Delmar and Union boulevards, St. Louis, MO 63108",
      "West Florissant and Harris avenues, St. Louis, MO 63115",
      "5701 Delmar Blvd., St. Louis, MO 63112"
    ]
  },
  {
    id: "behavioral-health",
    organization: "Behavioral Health Response",
    description: "24/7 crisis support and mental health resources",
    contact: {
      phone: "988 or 314-819-8811",
      text: "31658"
    },
    notes: "For disaster distress, call 1-800-985-5990",
    type: "Medical"
  },
  {
    id: "rx-outreach",
    organization: "Rx Outreach Tornado Relief Fund",
    description: "Medication assistance for tornado-affected residents",
    contact: {
      phone: "314-222-0472"
    },
    type: "Medical"
  },
  {
    id: "greater-health",
    organization: "GreaterHealth Pharmacy & Wellness",
    description: "Urgent prescription refills for Medicaid patients with free delivery",
    contact: {
      phone: "314-200-5313"
    },
    type: "Medical"
  },
  {
    id: "housing-fairs",
    organization: "Home Again: ReHousing Recovery Fair",
    description: "Connect with housing providers for available housing solutions",
    notes: "Upcoming fairs: July 10 and August 5",
    type: "Services",
    url: "https://www.stlouis-mo.gov/tornado"
  },
  {
    id: "ameren-assistance",
    organization: "Ameren Missouri Customer Service",
    description: "Assistance with service restoration, payment arrangements through July 2025",
    contact: {
      phone: "800-552-7583"
    },
    notes: "Deposits waived for new service through August 2025",
    type: "Services"
  },
  {
    id: "metro-pickup",
    organization: "Metro Transit Nightly Pickups",
    description: "Evening pickup at 8:00 PM from designated community locations to shelters. Morning return at 9:00 AM.",
    type: "Transportation",
    notes: "Pickup locations: Save A Lot parking lot 4447 Natural Bridge Road Ave, Academy Sherman Park Location 5200 Cates Ave",
    coordinates: { lat: 38.6667, lng: -90.2407 }
  }
].map(location => ({ ...location, type: location.type as ResourceType, icon: getIcon(location.type as ResourceType, location.description) }));

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
