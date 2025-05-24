"use client";

import type { ResourceLocation, ResourceType } from '@/types';
import { resourceLocations, resourceTypes } from '@/data/resources';
import { ResourceCard } from './ResourceCard';
import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScrollArea } from '@/components/ui/scroll-area';
import { Filter } from 'lucide-react';

interface ResourceDirectoryProps {
  onResourceSelect: (resourceId: string | null) => void;
  selectedResourceId: string | null;
}

export function ResourceDirectory({ onResourceSelect, selectedResourceId }: ResourceDirectoryProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<ResourceType | 'All'>('All');

  const filteredResources = useMemo(() => {
    return resourceLocations.filter(resource => {
      const matchesSearch = 
        resource.organization.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType === 'All' || resource.type === selectedType;
      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedType]);

  return (
    <div className="flex flex-col space-y-4 h-full">
      <div className="flex flex-col sm:flex-row gap-2">
        <Input 
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow"
        />
        <Select 
          value={selectedType} 
          onValueChange={(value: ResourceType | 'All') => setSelectedType(value)}
        >
          <SelectTrigger className="w-full sm:w-[180px]">
            <Filter className="h-4 w-4 mr-2" />
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All">All Types</SelectItem>
            {resourceTypes.map(type => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <ScrollArea className="flex-grow h-[calc(100%-60px)] pr-3"> {/* Adjust height as needed */}
        {filteredResources.length > 0 ? (
          <div className="space-y-3">
            {filteredResources.map(resource => (
              <ResourceCard 
                key={resource.id} 
                resource={resource}
                isSelected={resource.id === selectedResourceId}
                onClick={() => onResourceSelect(resource.id === selectedResourceId ? null : resource.id)}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted-foreground text-center py-8">No resources found matching your criteria.</p>
        )}
      </ScrollArea>
    </div>
  );
}
