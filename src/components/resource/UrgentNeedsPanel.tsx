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
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Critical Needs</h3>
      </div>
      <div className="rounded-md border p-4 h-[400px] overflow-y-auto">
        <div className="space-y-4">
          {urgentNeeds.map((need) => {
            const Icon = getIcon(need.type);
            return (
              <Alert key={need.id} variant="destructive" className="w-full overflow-hidden">
                <div className="w-full">
                  <Icon className="h-4 w-4 flex-shrink-0" />
                  <AlertTitle className="flex items-center gap-2">
                    <AlertCircle className="h-4 w-4 flex-shrink-0" />
                    {need.type}
                  </AlertTitle>
                  <AlertDescription className="mt-2 space-y-2">
                    <AutoLinkify>
                      <div className="break-words">
                        {need.description}
                      </div>
                      {need.location && (
                        <div className="text-sm font-medium break-words">
                          Location: {need.location}
                        </div>
                      )}
                      {need.contact && (
                        <div className="text-sm font-medium break-words">
                          Contact: <AutoLinkify>{need.contact}</AutoLinkify>
                          {need.contact.includes('http') && (
                            <ExternalLink className="h-4 w-4 ml-1 text-primary inline-block flex-shrink-0" />
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
      </div>
    </div>
  );
}
