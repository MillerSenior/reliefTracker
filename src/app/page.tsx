"use client";

import { CommunityInputForm } from '@/components/forms/CommunityInputForm';
import { TornadoGallery } from '@/components/gallery/TornadoGallery';
import { ResourceMap } from '@/components/map/ResourceMap';
import { LiveUpdatesFeed } from '@/components/news/LiveUpdatesFeed';
import { ResourceDirectory } from '@/components/resource/ResourceDirectory';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { siteConfig } from '@/config/site';
import { resourceLocations } from '@/data/resources';
import { AlertTriangle, Building2, ExternalLink as ExternalLinkIcon, Info, Link as LinkIcon, Mail, MapPin, MessageSquareHeart, Newspaper, Phone, Users } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

interface KeyContact {
  organization: string;
  contactPerson?: string;
  contactInfo: string;
  contactType: 'email' | 'phone' | 'mixed';
  role: string;
  url?: string;
}

const keyContacts: KeyContact[] = [
  {
    organization: "City of St. Louis Office of Recovery",
    contactPerson: "Gilberto Pinela",
    contactInfo: "pinelag@stlouis-mo.gov",
    contactType: 'email',
    role: "Liaison for non-English-speaking residents and general recovery coordination."
  },
  {
    organization: "Action St. Louis",
    contactPerson: "Response Team",
    contactInfo: "response@actionstl.org",
    contactType: 'email',
    role: "Coordinator for the People's Response Hub and volunteer efforts."
  },
  {
    organization: "American Red Cross – Greater St. Louis Chapter",
    contactInfo: "1-800-RED-CROSS (1-800-733-2767)",
    contactType: 'phone',
    role: "Provides emergency shelter, meals, health services, and emotional support."
  },
  {
    organization: "St. Louis Area Agency on Aging",
    contactInfo: "314-612-5918",
    contactType: 'phone',
    role: "Resources for older adults in St. Louis City."
  },
  {
    organization: "Aging Ahead",
    contactInfo: "1-800-243-6060",
    contactType: 'phone',
    role: "Resources for older adults in St. Louis, Franklin, Jefferson, and St. Charles counties.",
    url: "https://www.agingahead.org/blog/st-louis-tornado-resource/"
  }
];

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
      <section className="text-center bg-card shadow-lg rounded-xl border overflow-hidden">
        <div className="relative w-full h-48 md:h-64">
          <Image
            src="/images/tornado/stlskyline.jpeg"
            alt="Dramatic view of a tornado near the St. Louis Arch"
            fill
            priority
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary-foreground">
              {siteConfig.name}
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-2xl px-4">
              {siteConfig.description}
            </p>
          </div>
        </div>
        <p className="py-4 text-sm text-muted-foreground px-4">
          Note: The Google Maps API key used in this demo is for illustrative purposes. For production, secure your API key and configure it via environment variables.
        </p>
      </section>

      {/* FEMA Alert Section */}
      <section id="fema-alert" className="space-y-4">
        <Alert variant="destructive" className="shadow-lg">
          <AlertTriangle className="h-5 w-5" />
          <AlertTitle className="text-lg font-semibold">Urgent: FEMA Assistance Available</AlertTitle>
          <AlertDescription className="space-y-2 mt-1">
            <p>If you were affected by the recent St. Louis tornado, FEMA assistance may be available. It is crucial to register as soon as possible.</p>
            <p>You can apply for assistance in the following ways:</p>
            <ul className="list-disc list-inside space-y-1 pl-2">
              <li>Online at <a href="https://www.DisasterAssistance.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-destructive-foreground/80 font-medium">DisasterAssistance.gov</a></li>
              <li>By calling FEMA at <strong className="font-semibold">1-800-621-FEMA (1-800-621-3362)</strong>.</li>
              <li>For TTY users: <strong className="font-semibold">1-800-462-7585</strong>.</li>
              <li>If you use a relay service, such as video relay service (VRS), captioned telephone service or others, give FEMA the number for that service.</li>
            </ul>
            <p className="mt-2">Have your Social Security number, household income, contact information, insurance details, and bank account information ready when you apply.</p>
            <Button asChild variant="outline" size="sm" className="mt-3 border-destructive-foreground/50 text-destructive-foreground hover:bg-destructive-foreground/10">
              <a href="https://www.fema.gov/disaster/how-to-apply" target="_blank" rel="noopener noreferrer">
                Learn More About Applying
                <ExternalLinkIcon className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </AlertDescription>
        </Alert>
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg shadow-md bg-card">
            <Image
              src="/images/tornado/damage.jpeg"
              alt="Aerial view of tornado damage in St. Louis neighborhoods"
              width={800}
              height={450}
              className="rounded-md object-cover w-full"
              priority
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">St. Louis tornado recovery update on May 23 | ksdk.com</p>
          </div>
          <div className="p-4 border rounded-lg shadow-md bg-card">
            <Image
              src="/images/tornado/reliefeffort.jpeg"
              alt="Community members and volunteers working together in relief efforts"
              width={800}
              height={450}
              className="rounded-md object-cover w-full"
            />
            <p className="text-sm text-muted-foreground mt-2 text-center">Support St. Louis Tornado Relief | Gateway Region YMCA</p>
          </div>
        </div>
        <LiveUpdatesFeed />
      </section>

      {/* Tornado Impact Gallery Section */}
      <section id="gallery" className="space-y-8">
        <SectionTitle title="Documenting the Impact" icon={Info} />
        <Card className="p-6">
          <CardHeader>
            <CardTitle>Visual Documentation of Storm Impact & Recovery</CardTitle>
            <CardDescription>
              These images document both the devastating impact of the tornado and the inspiring community response in its aftermath.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TornadoGallery />
          </CardContent>
        </Card>
      </section>

      {/* Key Relief Contacts Section */}
      <section id="key-contacts" className="space-y-8">
        <SectionTitle title="Key Relief Contacts" icon={Users} />
        <Card>
          <CardHeader>
            <CardTitle>Official Contacts & Coordinators</CardTitle>
            <CardDescription>Reach out to these organizations for specific assistance or coordination efforts.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[30%]">Organization</TableHead>
                  <TableHead className="w-[30%]">Contact</TableHead>
                  <TableHead className="w-[40%]">Role / Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {keyContacts.map((contact) => (
                  <TableRow key={contact.organization}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Building2 className="h-4 w-4 mr-2 text-primary shrink-0" />
                        {contact.url ? (
                          <a href={contact.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{contact.organization}</a>
                        ) : (
                          contact.organization
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      {contact.contactPerson && <p className="text-sm font-semibold">{contact.contactPerson}</p>}
                      {contact.contactType === 'email' ? (
                        <a href={`mailto:${contact.contactInfo}`} className="text-sm text-primary hover:underline flex items-center">
                          <Mail className="h-3 w-3 mr-1.5" /> {contact.contactInfo}
                        </a>
                      ) : contact.contactType === 'phone' ? (
                        <a href={`tel:${contact.contactInfo.replace(/\D/g, '')}`} className="text-sm text-primary hover:underline flex items-center">
                           <Phone className="h-3 w-3 mr-1.5" /> {contact.contactInfo}
                        </a>
                      ) : (
                        <span className="text-sm">{contact.contactInfo}</span>
                      )}
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{contact.role}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </section>

      {/* Support & Volunteer Links Section */}
      <section id="support" className="space-y-8">
        <SectionTitle title="Support & Get Involved" icon={MessageSquareHeart} />
         <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Useful Links</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-3">
                {supportLinks.map(link => (
                  <Button key={link.name} variant="outline" asChild className="justify-start text-left h-auto py-2.5">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <LinkIcon className="h-4 w-4 mr-2 shrink-0" />
                      <span className="flex-1">{link.name}</span>
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
             <Card>
                <CardHeader>
                    <CardTitle>Community Efforts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Image
                        src="/images/tornado/manwithdog.jpeg" 
                        alt="Volunteers from World Central Kitchen serving meals to tornado victims"
                        width={600}
                        height={338}
                        className="rounded-md object-cover w-full"
                        data-ai-hint="kitchen volunteer"
                    />
                    <p className="text-sm text-muted-foreground">
                        World Central Kitchen in St. Louis after May tornado | STLPR
                    </p>
                </CardContent>
            </Card>
        </div>
      </section>

      {/* Community Input Section */}
      <section id="community-input" className="space-y-8">
        <SectionTitle title="Share Information" icon={Users} />
        <CommunityInputForm />
      </section>
    </div>
  );
}
