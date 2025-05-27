import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { announcements } from '@/data/announcements';
import { ExternalLink } from 'lucide-react';

export function AnnouncementsPanel() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold tracking-tight">Latest Announcements</h2>
      <ScrollArea className="h-[400px]">
        <div className="space-y-4">
          {announcements.map((announcement) => (
            <Card key={announcement.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle>{announcement.title}</CardTitle>
                  {announcement.url && (
                    <Button variant="ghost" size="sm" asChild>
                      <a href={announcement.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
                <CardDescription>
                  {new Date(announcement.date).toLocaleString()}
                  {announcement.organization && ` • ${announcement.organization}`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">{announcement.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
} 