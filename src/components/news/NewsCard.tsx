import type { NewsSource } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface NewsCardProps {
  news: NewsSource;
  onSummarize?: (url: string) => void;
}

export function NewsCard({ news, onSummarize }: NewsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{news.name}</CardTitle>
        <CardDescription>{news.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {news.feedInfo && <p className="text-xs text-muted-foreground">Feed Info: {news.feedInfo}</p>}
      </CardContent>
      <CardFooter className="flex justify-between gap-2">
        <Button variant="outline" size="sm" asChild>
          <a href={news.url} target="_blank" rel="noopener noreferrer">
            Read More <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
        {onSummarize && (
          <Button variant="default" size="sm" onClick={() => onSummarize(news.url)}>
            Summarize Article
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
