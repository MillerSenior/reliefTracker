import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { announcements } from '@/data/announcements';
import { ExternalLink } from 'lucide-react';
import { useMemo, useState } from 'react';

export function AnnouncementsPanel() {
  const [lastUpdated] = useState(new Date().toLocaleString());

  // Sort announcements by date in reverse order (oldest first)
  const sortedAnnouncements = useMemo(() => {
    return [...announcements].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime(); // Sort oldest first
    });
  }, []);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight">Latest Announcements</h2>
        <span className="text-xs text-muted-foreground">
          Last updated: {lastUpdated}
        </span>
      </div>
      <ScrollArea className="h-[400px]">
        <div className="space-y-4">
          {sortedAnnouncements.map((announcement) => {
            const announcementDate = new Date(announcement.date);
            
            return (
              <Card key={announcement.id}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>{announcement.title}</CardTitle>
                      <CardDescription className="space-y-1">
                        <div className="text-sm">
                          Date: {announcementDate.toLocaleString()}
                        </div>
                        {announcement.organization && (
                          <div className="text-sm">
                            Organization: {announcement.organization}
                          </div>
                        )}
                      </CardDescription>
                    </div>
                    {announcement.url && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={announcement.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{announcement.content}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </ScrollArea>
    </div>
  );
} 