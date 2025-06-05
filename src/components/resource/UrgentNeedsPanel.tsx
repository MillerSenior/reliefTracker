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
      <h2 className="text-2xl font-bold tracking-tight px-4">Urgent Needs</h2>
      <div className="px-4">
        <ScrollArea className="h-[400px] rounded-md border w-full">
          <div className="space-y-4 pr-4 flex flex-col items-center">
            {urgentNeeds.map((need) => {
              const Icon = getIcon(need.type);
              return (
                <Alert key={need.id} variant="destructive" className="w-full max-w-md">
                  <div className="overflow-x-auto">
                    <Icon className="h-4 w-4" />
                    <AlertTitle className="flex items-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      {need.type}
                    </AlertTitle>
                    <AlertDescription className="mt-2 space-y-2">
                      <AutoLinkify>
                        <div className="overflow-x-auto">
                          {need.description}
                        </div>
                        {need.location && (
                          <div className="text-sm font-medium overflow-x-auto">
                            Location: {need.location}
                          </div>
                        )}
                        {need.contact && (
                          <div className="text-sm font-medium overflow-x-auto">
                            Contact: <AutoLinkify>{need.contact}</AutoLinkify>
                            {need.contact.includes('http') && (
                              <ExternalLink className="h-4 w-4 ml-1 text-primary inline-block" />
                            )}
                          </div>
                        )}
                      </AutoLinkify>
                    </AlertDescription>
                  </div>
                </Alert>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
} 