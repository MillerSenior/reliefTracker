"use client";

import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import type { ResourceLocation } from '@/types';
import { AdvancedMarker, APIProvider, InfoWindow, Map, Pin } from '@vis.gl/react-google-maps';
import { Navigation } from 'lucide-react';
import { useEffect, useState } from 'react';

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

  useEffect(() => {
    // If a resource is selected from the directory, open its InfoWindow
    if (selectedResourceId) {
      setOpenInfoWindowMarkerId(selectedResourceId);
    } else {
      // If selectedResourceId is null (deselected from directory), close any open InfoWindow
      // This line might be too aggressive if you want InfoWindows to stay open from map clicks
      // setOpenInfoWindowMarkerId(null); 
    }
  }, [selectedResourceId]);

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
          onClick={() => setOpenInfoWindowMarkerId(null)} // Close infowindow on map click
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
              minWidth={220}
              pixelOffset={[0, -40]} // Adjust if Pin size changes
            >
              <div className="p-1 text-sm space-y-1">
                <h3 className="font-semibold text-base mb-1 text-primary">{selectedResource.organization}</h3>
                <p className="text-muted-foreground text-xs mb-0.5">{selectedResource.address}</p>
                <p className="text-foreground text-xs">{selectedResource.description}</p>
                {selectedResource.notes && <p className="text-xs mt-1 text-accent">{selectedResource.notes}</p>}
                {selectedResource.address && (
                  <Button variant="outline" size="sm" asChild className="w-full mt-2">
                    <a
                      href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(selectedResource.address)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <Navigation className="h-3 w-3 mr-1.5" />
                      Get Directions
                    </a>
                  </Button>
                )}
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}
