'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';

const images = [
  {
    src: '/images/tornado/reliefeffort.jpeg',
    alt: 'Relief volunteers distributing supplies to affected families',
    caption: 'Community volunteers providing critical supplies at distribution center - July 2025'
  },
  {
    src: '/images/tornado/unityimg.jpeg',
    alt: 'Community members working together at FEMA distribution center',
    caption: 'FEMA Disaster Recovery Center helping residents - Union Tabernacle M.B. Church'
  },
  {
    src: '/images/tornado/familystrong.jpeg',
    alt: 'Family receiving assistance at relief center',
    caption: 'Local families receiving support at O\'Fallon Park YMCA distribution hub'
  },
  {
    src: '/images/tornado/damage.jpeg',
    alt: 'Aerial view of tornado damage path through St. Louis',
    caption: 'EF-3 tornado damage path through North St. Louis - May 16, 2025'
  },
  {
    src: '/images/tornado/newsclip.jpeg',
    alt: 'News coverage of ongoing recovery efforts',
    caption: 'Latest updates on recovery progress - July 2025'
  }
];

export default function TornadoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {images.map((image, index) => (
        <Card key={index} className="overflow-hidden">
          <div className="relative h-64">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <p className="p-4 text-sm text-gray-600">{image.caption}</p>
        </Card>
      ))}
    </div>
  );
} 