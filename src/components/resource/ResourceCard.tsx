import type { ResourceLocation } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ResourceCardProps {
  resource: ResourceLocation;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ResourceCard({ resource, isSelected, onClick }: ResourceCardProps) {
  const Icon = resource.icon;
  return (
    <Card 
      className={`cursor-pointer transition-all hover:shadow-md ${isSelected ? 'border-primary ring-2 ring-primary' : ''}`}
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
    </Card>
  );
}
