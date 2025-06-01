import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { NewsSource } from '@/types';
import { ExternalLink } from 'lucide-react';

interface NewsCardProps {
  news: NewsSource;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{news.name}</CardTitle>
        <CardDescription>{news.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {news.feedInfo && <p className="text-xs text-muted-foreground">Feed Info: {news.feedInfo}</p>}
      </CardContent>
      <CardFooter>
        <Button variant="outline" size="sm" asChild>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
