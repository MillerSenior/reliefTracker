
import type { ResourceLocation } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navigation } from 'lucide-react';

interface ResourceCardProps {
  resource: ResourceLocation;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ResourceCard({ resource, isSelected, onClick }: ResourceCardProps) {
  const Icon = resource.icon;
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-lg ${isSelected ? 'border-primary ring-2 ring-primary' : 'border-border'}`}
      onClick={onClick}
    >
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg flex items-center">
            <Icon className="h-5 w-5 mr-2 text-primary" />
            {resource.organization}
          </CardTitle>
          <Badge variant={isSelected ? "default" : "secondary"}>{resource.type}</Badge>
        </div>
        <CardDescription>{resource.address}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{resource.description}</p>
        {resource.notes && <p className="text-xs mt-2 text-accent">{resource.notes}</p>}
      </CardContent>
      <CardFooter className="pt-2 pb-4">
        <Button variant="outline" size="sm" asChild className="w-full">
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(resource.address)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()} // Prevent card's main onClick if it exists
            className="flex items-center justify-center"
          >
            <Navigation className="h-4 w-4 mr-2" />
            Get Directions
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
