import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { ScrollArea } from '@/components/ui/scroll-area';
import { urgentNeeds } from '@/data/urgent-needs';
import { AlertCircle, Package2, Users, Wrench } from 'lucide-react';

const getIcon = (type: 'Volunteer' | 'Supply' | 'Service') => {
  switch (type) {
    case 'Volunteer':
      return Users;
    case 'Supply':
      return Package2;
    case 'Service':
      return Wrench;
  }
};

export function UrgentNeedsPanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Urgent Needs</h2>
      <ScrollArea className="h-[400px] rounded-md border p-4">
        <div className="space-y-4">
          {urgentNeeds.map((need) => {
            const Icon = getIcon(need.type);
            return (
              <Alert key={need.id} variant="destructive">
                <Icon className="h-4 w-4" />
                <AlertTitle className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4" />
                  {need.type}
                </AlertTitle>
                <AlertDescription className="mt-2 space-y-2">
                  <p>{need.description}</p>
                  {need.location && (
                    <p className="text-sm font-medium">Location: {need.location}</p>
                  )}
                  {need.contact && (
                    <p className="text-sm font-medium">Contact: {need.contact}</p>
                  )}
                </AlertDescription>
              </Alert>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
} 