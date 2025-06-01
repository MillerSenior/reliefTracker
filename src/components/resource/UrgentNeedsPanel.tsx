import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { AutoLinkify } from '@/components/ui/auto-linkify';
import { ScrollArea } from '@/components/ui/scroll-area';
import { urgentNeeds } from '@/data/urgent-needs';
import { AlertCircle, ExternalLink, Package2, Users, Wrench } from 'lucide-react';

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
                  <AutoLinkify>
                    <div>{need.description}</div>
                    {need.location && (
                      <div className="text-sm font-medium">Location: {need.location}</div>
                    )}
                    {need.contact && (
                      <div className="text-sm font-medium flex items-center gap-1">
                        <span>Contact: </span>
                        <span><AutoLinkify>{need.contact}</AutoLinkify></span>
                        {need.contact.includes('http') && (
                          <ExternalLink className="h-4 w-4 ml-1 text-primary" />
                        )}
                      </div>
                    )}
                  </AutoLinkify>
                </AlertDescription>
              </Alert>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
} 