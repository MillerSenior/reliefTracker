import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { announcements } from '@/data/announcements';
import { ExternalLink, Info } from 'lucide-react';
import { useMemo } from 'react';

export function AnnouncementsPanel() {
  const lastUpdated = "July 10, 2025";
  const cutoff = new Date("2025-06-01");

  // Sort announcements by date descending (newest first)
  const sortedAnnouncements = useMemo(() => {
    const sorted = announcements
      .filter(a => new Date(a.date) >= new Date('2025-05-28'))
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    // Debug: log the order
    if (typeof window !== 'undefined') {
      console.log('Sorted Announcements:', sorted.map(a => `${a.title} - ${a.date}`));
    }
    return sorted;
  }, []);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Latest Updates</h3>
        <span className="text-xs text-muted-foreground">
          Last updated: {lastUpdated}
        </span>
      </div>
      <div className="rounded-md border p-4 h-[400px] overflow-y-auto">
        <div className="space-y-4">
          {sortedAnnouncements.map((announcement) => {
            const announcementDate = new Date(announcement.date);
            const formattedDate = announcementDate.toLocaleDateString(undefined, {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });
            const emoji = announcementDate < cutoff ? '📢' : '📅';
            return (
              <Card key={announcement.id} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-full">
                      <CardTitle className="break-words">
                        <span>
                          {emoji} {announcement.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="text-sm">
                          {formattedDate}
                        </div>
                        {announcement.organization && (
                          <div className="text-sm flex items-center gap-2">
                            <div className="truncate">
                              Organization: {announcement.url ? (
                                <a 
                                  href={announcement.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary hover:underline"
                                >
                                  {announcement.organization}
                                </a>
                              ) : (
                                announcement.organization
                              )}
                            </div>
                            {announcement.postedBy && (
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger>
                                    <span className="ml-1 cursor-pointer"><Info className="h-4 w-4 flex-shrink-0" /></span>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Posted by: {announcement.postedBy}</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            )}
                          </div>
                        )}
                      </CardDescription>
                    </div>
                    {announcement.url && (
                      <Button variant="ghost" size="sm" asChild className="flex-shrink-0">
                        <a href={announcement.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 flex-shrink-0" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="break-words">
                    <p className="text-sm">{announcement.content}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
