import type { LucideIcon } from 'lucide-react';

export interface NewsSource {
  id: string;
  name: string;
  url: string;
  description: string;
  feedInfo?: string;
}

export type ResourceType = 'Shelter' | 'Distribution Center' | 'Food' | 'Services' | 'Hub';

export interface ResourceLocation {
  id: string;
  organization: string;
  address: string;
  description:string;
  notes?: string;
  type: ResourceType;
  icon: LucideIcon;
  coordinates: { lat: number; lng: number };
}
