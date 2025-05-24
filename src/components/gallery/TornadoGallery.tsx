'use client';

import { Card } from '@/components/ui/card';
import Image from 'next/image';

const images = [
  {
    src: '/images/tornado/farmdamage.jpeg',
    alt: 'Damage to Purina Farm facility after the tornado',
    caption: 'Severe damage to local facilities including Purina Farm'
  },
  {
    src: '/images/tornado/roofgone.jpg',
    alt: 'Residential area showing extensive tornado damage',
    caption: 'Tornado May 26, 2025 | Mikkel A. Knudsen'
  },
  {
    src: '/images/tornado/familystrong.jpeg',
    alt: 'Family receiving support from relief workers',
    caption: 'Local familiy standing and working together to rebuild after tornado'
  }
];

export function TornadoGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {images.map((image, index) => (
        <Card key={image.src} className="overflow-hidden">
          <div className="relative h-64 md:h-80">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              style={{ objectFit: 'cover' }}
              className="transition-transform hover:scale-105 duration-300"
            />
          </div>
          <p className="p-4 text-sm text-muted-foreground text-center">
            {image.caption}
          </p>
        </Card>
      ))}
    </div>
  );
} 