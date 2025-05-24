"use client";

import { newsSources } from '@/data/news';
import { NewsCard } from './NewsCard';
import { ArticleSummarizer } from '@/components/ai/ArticleSummarizer';
import { useState } from 'react';

export function LiveUpdatesFeed() {
  const [urlToSummarize, setUrlToSummarize] = useState<string | undefined>(undefined);

  const handleSummarizeClick = (url: string) => {
    setUrlToSummarize(url); // This will re-render ArticleSummarizer with the new URL
    // Scroll to summarizer or open in modal if desired - for now, just sets the URL
    const summarizerElement = document.getElementById('article-summarizer-section');
    if (summarizerElement) {
      summarizerElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {newsSources.map(news => (
          <NewsCard key={news.id} news={news} onSummarize={handleSummarizeClick} />
        ))}
      </div>
      <div id="article-summarizer-section">
        <ArticleSummarizer initialUrl={urlToSummarize} key={urlToSummarize} /> 
      </div>
    </div>
  );
}
