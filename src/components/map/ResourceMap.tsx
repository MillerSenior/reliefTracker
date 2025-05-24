"use client";

import type { ResourceLocation } from '@/types';
import { siteConfig } from '@/config/site';
import { APIProvider, Map, AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';
import { useState, useEffect } from 'react';

interface ResourceMapProps {
  resources: ResourceLocation[];
  selectedResourceId?: string | null;
  onMarkerClick?: (resourceId: string) => void;
}

export function ResourceMap({ resources, selectedResourceId, onMarkerClick }: ResourceMapProps) {
  const [mapReady, setMapReady] = useState(false);
  const [openInfoWindowMarkerId, setOpenInfoWindowMarkerId] = useState<string | null>(null);

  useEffect(() => {
    setMapReady(true); // Ensures map renders only on client
  }, []);

  const handleMarkerClick = (resource: ResourceLocation) => {
    setOpenInfoWindowMarkerId(resource.id);
    if (onMarkerClick) {
      onMarkerClick(resource.id);
    }
  };
  
  const selectedResource = resources.find(r => r.id === openInfoWindowMarkerId);

  if (!mapReady) {
    return <div className="w-full h-[400px] md:h-full bg-muted rounded-lg flex items-center justify-center text-foreground">Loading Map...</div>;
  }

  return (
    <APIProvider apiKey={siteConfig.googleMapsApiKey}>
      <div className="w-full h-[400px] md:h-full rounded-lg overflow-hidden shadow-lg border">
        <Map
          defaultCenter={siteConfig.defaultMapCenter}
          defaultZoom={siteConfig.defaultMapZoom}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId="stlReliefMap" // Optional: for Cloud-based map styling
        >
          {resources.map((resource) => (
            <AdvancedMarker
              key={resource.id}
              position={resource.coordinates}
              onClick={() => handleMarkerClick(resource)}
            >
              <Pin
                background={resource.id === selectedResourceId || resource.id === openInfoWindowMarkerId ? "hsl(var(--accent))" : "hsl(var(--primary))"}
                borderColor={resource.id === selectedResourceId || resource.id === openInfoWindowMarkerId ? "hsl(var(--accent-foreground))" : "hsl(var(--primary-foreground))"}
                glyphColor={resource.id === selectedResourceId || resource.id === openInfoWindowMarkerId ? "hsl(var(--accent-foreground))" : "hsl(var(--primary-foreground))"}
              >
                 <resource.icon className="w-5 h-5" />
              </Pin>
            </AdvancedMarker>
          ))}
          {selectedResource && openInfoWindowMarkerId && (
            <InfoWindow
              position={selectedResource.coordinates}
              onCloseClick={() => setOpenInfoWindowMarkerId(null)}
              minWidth={200}
            >
              <div className="p-1 text-sm">
                <h3 className="font-semibold text-base mb-1 text-primary">{selectedResource.organization}</h3>
                <p className="text-muted-foreground text-xs mb-0.5">{selectedResource.address}</p>
                <p className_alias="text-foreground">{selectedResource.description}</p>
                {selectedResource.notes && <p className="text-xs mt-1 text-accent">{selectedResource.notes}</p>}
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
