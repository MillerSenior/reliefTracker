import type { LucideIcon } from 'lucide-react';

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  description: string;
  feedInfo?: string;
}

export type ResourceType = 'Shelter' | 'Distribution Center' | 'Food' | 'Services' | 'Hub' | 'Medical' | 'Legal' | 'Transportation' | 'Financial';

export interface ResourceLocation {
  id: string;
  organization: string;
  address?: string;
  description: string;
  notes?: string;
  type: ResourceType;
  icon: LucideIcon;
  coordinates?: { lat: number; lng: number };
  url?: string;
  contact?: {
    phone?: string;
    email?: string;
    website?: string;
  };
  hours?: string;
  lastUpdated?: string;
  services?: string[];
  requirements?: string[];
  languages?: string[];
}

export interface UrgentNeed {
  id: string;
  description: string;
  location?: string;
  contact?: string;
  status: 'active' | 'fulfilled';
  datePosted: string;
  type: 'Volunteer' | 'Supply' | 'Service';
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  date: string;
  url?: string;
  organization?: string;
  postedBy?: string;
}
