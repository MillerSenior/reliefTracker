"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from '@/components/ui/textarea';
import { resourceTypes } from '@/data/resources';
import { useToast } from '@/hooks/use-toast';
import type { ResourceType } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { Send } from 'lucide-react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  organizationName: z.string().min(2, { message: "Organization name must be at least 2 characters." }),
  resourceType: z.custom<ResourceType>((val) => resourceTypes.includes(val as ResourceType), {
    message: "Invalid resource type selected.",
  }),
  address: z.string().min(5, { message: "Address must be at least 5 characters." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }).max(500),
  contactInfo: z.string().optional(),
});

type CommunityInputFormValues = z.infer<typeof formSchema>;

export function CommunityInputForm() {
  const { toast } = useToast();
  const form = useForm<CommunityInputFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      organizationName: '',
      address: '',
      description: '',
      contactInfo: '',
    },
  });

  const onSubmit: SubmitHandler<CommunityInputFormValues> = (data) => {
    // Format the email body
    const emailSubject = `New Resource Report: ${data.organizationName}`;
    const emailBody = `
Resource Report Details:
----------------------
Organization Name: ${data.organizationName}
Resource Type: ${data.resourceType}
Address: ${data.address}
Description: ${data.description}
Contact Info: ${data.contactInfo || 'Not provided'}
    `.trim();

    // Create and encode the mailto URL
    const mailtoUrl = `mailto:anthony@unlockedlabs.org?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open the mailto link
    window.location.href = mailtoUrl;

    // Show success toast
    toast({
      title: "Email Drafted!",
      description: "An email has been prepared with your submission. Please review and send it.",
    });
    
    form.reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Report a Resource</CardTitle>
        <CardDescription>Know a resource not listed? Help us keep the community informed.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="organizationName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Organization Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., St. Louis Food Bank" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="resourceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resource Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select resource type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {resourceTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main St, St. Louis, MO" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Provide details about the resource, hours, services offered, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Contact Info (Optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Phone number or email" {...field} />
                  </FormControl>
                  <FormDescription>
                    Public contact information for the resource.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              <Send className="mr-2 h-4 w-4" /> Submit Resource
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
