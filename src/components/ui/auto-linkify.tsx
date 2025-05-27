import Linkify from 'linkify-react';
import { ReactNode } from 'react';

interface AutoLinkifyProps {
  children: ReactNode;
  className?: string;
}

interface LinkAttributes {
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  [key: string]: any;
}

interface RenderProps {
  attributes: LinkAttributes;
  content: string;
}

// Custom function to format phone numbers for tel: protocol
const formatPhoneNumber = (phone: string) => {
  // Remove all non-digit characters
  return phone.replace(/[^\d+]/g, '');
};

// Enhanced address pattern matching
const addressPattern = /\b\d+\s+(?:[A-Za-z0-9\s\-\.,])+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Lane|Ln|Drive|Dr|Court|Ct|Circle|Cir|Way|Parkway|Pkwy|Place|Pl|Terrace|Ter|apartment|apt|unit|#|Suite|Ste)[.,\s]*(?:[A-Za-z]+(?:\s+[A-Za-z]+)*)?(?:\s+\d{5}(?:-\d{4})?)?/gi;

// Enhanced phone pattern matching
const phonePattern = /(?:(?:\+?1[-\s.]?)?\(?([0-9]{3})\)?[-\s.]?([0-9]{3})[-\s.]?([0-9]{4})|\b1-\d{3}-\d{3}-\d{4}\b)/g;

const options = {
  attributes: {
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'text-primary hover:underline'
  },
  // Don't process content inside these tags
  ignoreTags: ['a', 'button', 'code', 'pre'],
  // Use a div instead of Fragment
  tagName: 'div',
  // Format different types of links
  format: {
    url: (value: string) => value,
    email: (value: string) => value,
    phone: (value: string) => formatPhoneNumber(value)
  },
  // Custom render function to handle different types of links
  render: {
    url: ({ attributes, content }: RenderProps) => {
      const { href, ...props } = attributes;
      // Check if it looks like a physical address
      if (content.match(addressPattern)) {
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content)}`;
        return (
          <a 
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline inline-flex items-center"
            title="Open in Maps"
          >
            {content}
          </a>
        );
      }
      return <a href={href} {...props}>{content}</a>;
    },
    email: ({ attributes, content }: RenderProps) => {
      return (
        <a 
          href={`mailto:${content}`}
          className="text-primary hover:underline inline-flex items-center"
          title="Send email"
        >
          {content}
        </a>
      );
    },
    phone: ({ content }: { content: string }) => {
      const formattedNumber = formatPhoneNumber(content);
      return (
        <a 
          href={`tel:${formattedNumber}`}
          className="text-primary hover:underline inline-flex items-center"
          title="Call this number"
        >
          {content}
        </a>
      );
    }
  },
  // Enhanced patterns for detection
  pattern: {
    phone: phonePattern,
    // Custom function to find addresses
    customPatterns: [
      {
        pattern: addressPattern,
        type: 'address',
        render: ({ content }) => {
          const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(content)}`;
          return (
            <a 
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline inline-flex items-center"
              title="Open in Maps"
            >
              {content}
            </a>
          );
        }
      }
    ]
  }
};

export function AutoLinkify({ children, className }: AutoLinkifyProps) {
  // If no className is provided, use an inline display to maintain text flow
  const containerClass = className || 'inline';
  
  return (
    <div className={containerClass}>
      <Linkify options={options}>
        {children}
      </Linkify>
    </div>
  );
} 