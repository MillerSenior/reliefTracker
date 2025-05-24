"use client";

import { useState } from 'react';
import { summarizeNewsArticle, type SummarizeNewsArticleOutput } from '@/ai/flows/summarize-news-articles';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ArticleSummarizerProps {
  initialUrl?: string;
}

export function ArticleSummarizer({ initialUrl }: ArticleSummarizerProps) {
  const [articleUrl, setArticleUrl] = useState(initialUrl || '');
  const [summary, setSummary] = useState<SummarizeNewsArticleOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!articleUrl) {
      toast({ title: "Error", description: "Please enter an article URL.", variant: "destructive" });
      return;
    }
    setIsLoading(true);
    setSummary(null);
    try {
      const result = await summarizeNewsArticle({ articleUrl });
      setSummary(result);
    } catch (error) {
      console.error("Error summarizing article:", error);
      toast({ title: "Error", description: "Failed to summarize article. Please check the URL and try again.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center"><Sparkles className="h-5 w-5 mr-2 text-primary" /> AI Article Summarizer</CardTitle>
        <CardDescription>Enter a news article URL to get a quick summary.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="url"
            placeholder="https://example.com/news-article"
            value={articleUrl}
            onChange={(e) => setArticleUrl(e.target.value)}
            disabled={isLoading}
            required
          />
          <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
            {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
            Summarize
          </Button>
        </form>
      </CardContent>
      {summary && (
        <CardFooter className="flex-col items-start gap-2">
          <h3 className="text-md font-semibold text-primary">Summary:</h3>
          <p className="text-sm text-foreground whitespace-pre-wrap">{summary.summary}</p>
        </CardFooter>
      )}
    </Card>
  );
}
