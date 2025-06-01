"use client";

import { newsSources } from '@/data/news';
import { NewsCard } from './NewsCard';
// import { ArticleSummarizer } from '@/components/ai/ArticleSummarizer';
// import { useState } from 'react';

export function LiveUpdatesFeed() {
  // const [urlToSummarize, setUrlToSummarize] = useState<string | undefined>(undefined);

  // const handleSummarizeClick = (url: string) => {
  //   setUrlToSummarize(url);
  //   const summarizerElement = document.getElementById('article-summarizer-section');
  //   if (summarizerElement) {
  //     summarizerElement.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2">
        {newsSources.map(news => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
      {/* Article summarizer section commented out
      <div id="article-summarizer-section">
        <ArticleSummarizer initialUrl={urlToSummarize} key={urlToSummarize} /> 
      </div>
      */}
    </div>
  );
}
