"use client";

import { useState } from 'react';
import { siteConfig } from '@/config/site';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { ResourceMap } from '@/components/map/ResourceMap';
import { ResourceDirectory } from '@/components/resource/ResourceDirectory';
import { LiveUpdatesFeed } from '@/components/news/LiveUpdatesFeed';
import { CommunityInputForm } from '@/components/forms/CommunityInputForm';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { resourceLocations } from '@/data/resources';
import { MapPin, Newspaper, MessageSquareHeart, Link as LinkIcon, Users, Info } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [selectedResourceId, setSelectedResourceId] = useState<string | null>(null);

  const handleResourceSelect = (resourceId: string | null) => {
    setSelectedResourceId(resourceId);
  };

  const supportLinks = [
    { name: "Mental Health Resources (St. Louis Magazine)", url: "https://www.stlmag.com/news/st-louis-tornado-relief-ways-to-help/" },
    { name: "Volunteer Opportunities (STLPR)", url: "https://www.stlpr.org/health-science-environment/2025-05-17/st-louis-tornado-recovery-help" },
    { name: "Official City Recovery Portal (STL Recovers)", url: "https://www.stlouis-mo.gov/tornado/index.cfm" },
  ];

  return (
    <div className="container mx-auto py-8 px-4 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-10 bg-card shadow-lg rounded-xl border">
        <div className="relative w-full h-48 md:h-64 mb-6">
          <Image 
            src="https://placehold.co/1200x400.png" 
            alt="St. Louis skyline with a hopeful theme" 
            layout="fill"
            objectFit="cover"
            className="rounded-t-xl"
            data-ai-hint="skyline community"
          />
           <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center rounded-t-xl">
             <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
               {siteConfig.name}
             </h1>
             <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
               {siteConfig.description}
             </p>
          </div>
        </div>
        <p className="mt-2 text-sm text-muted-foreground px-4">
          Note: The Google Maps API key used in this demo is for illustrative purposes. For production, secure your API key and configure it via environment variables.
        </p>
      </section>

      {/* Resources Section */}
      <section id="resources" className="space-y-8">
        <SectionTitle title="Find Resources" icon={MapPin} />
        <div className="grid md:grid-cols-3 gap-8 min-h-[600px] md:min-h-[700px]">
          <div className="md:col-span-2 h-full">
            <ResourceMap 
              resources={resourceLocations} 
              selectedResourceId={selectedResourceId}
              onMarkerClick={handleResourceSelect}
            />
          </div>
          <div className="md:col-span-1 h-full flex flex-col">
            <ResourceDirectory 
              onResourceSelect={handleResourceSelect} 
              selectedResourceId={selectedResourceId} 
            />
          </div>
        </div>
      </section>

      {/* Live Updates Section */}
      <section id="updates" className="space-y-8">
        <SectionTitle title="Live Updates & Summaries" icon={Newspaper} />
        <LiveUpdatesFeed />
      </section>

      {/* Support & Volunteer Links Section */}
      <section id="support" className="space-y-8">
        <SectionTitle title="Support & Get Involved" icon={MessageSquareHeart} />
        <Card>
          <CardHeader>
            <CardTitle>Useful Links</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {supportLinks.map(link => (
              <Button key={link.name} variant="outline" asChild className="justify-start text-left h-auto py-3">
                <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <LinkIcon className="h-4 w-4 mr-2 shrink-0" />
                  <span className="flex-1">{link.name}</span>
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </section>

      {/* Community Input Section */}
      <section id="community-input" className="space-y-8">
        <SectionTitle title="Share Information" icon={Users} />
        <CommunityInputForm />
      </section>
    </div>
  );
}
