import type { UrgentNeed } from '@/types';

export const urgentNeeds: UrgentNeed[] = [
  {
    id: 'fema-assistance-deadline',
    description: 'URGENT: FEMA assistance application deadline is August 11, 2025. All affected residents should apply even if you have insurance. Visit any FEMA Disaster Recovery Center for help with applications. SBA staff available for business assistance.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Service',
    contact: 'Visit DisasterAssistance.gov or call 800-621-3362'
  },
  {
    id: 'home-again-housing',
    description: 'Home Again: ReHousing Recovery Fair needs housing providers to partner for upcoming fairs on July 10 and August 5. Housing providers needed to help connect disaster-impacted families with available housing.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Service',
    contact: 'Register at stlouishousing.org/homeagain'
  },
  {
    id: 'peoples-hub-volunteers',
    description: 'Volunteers needed at Kingdom Church STL (4112 West Florissant) for food and supply distribution. Operating hours: Tues-Thurs 11AM-3PM, Sat 1PM-4PM. Urgent need for delivery drivers.',
    location: '4112 West Florissant, St. Louis, MO 63115',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Volunteer',
    contact: 'response@actionstl.org'
  },
  {
    id: 'medical-assistance',
    description: 'People\'s Health Centers need volunteers at four locations offering health aid and resources. Locations open daily 9AM-4PM: Natural Bridge Ave, Delmar/Union, West Florissant/Harris, and Delmar Blvd.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Volunteer'
  },
  {
    id: 'supply-needs',
    description: 'Current critical supply needs: Cleaning supplies, personal hygiene items, non-perishable food, baby supplies, household items, and building materials for repairs. Special need for box fans and cooling items.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Supply',
    contact: 'Drop off at any FEMA Disaster Recovery Center during operating hours'
  },
  {
    id: 'document-replacement',
    description: 'Missouri State ID Access Coalition helping residents replace lost IDs and vital documents. Critical for accessing various assistance programs.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Service',
    contact: 'Call 211 for assistance'
  },
  {
    id: 'rx-outreach',
    description: 'Tornado Relief Fund available for residents who lost prescription medications. 90-day supply relief fund for affected residents.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Service',
    contact: 'Call 314-222-0472 or 888-796-1234'
  },
  {
    id: 'health-monitoring',
    description: 'Dr. Alexander Garza and City Health Team providing emergency medical services, medication refills, and health monitoring during heat conditions. Special focus on chronic conditions.',
    status: 'active',
    datePosted: '2025-06-30',
    type: 'Service',
    contact: 'Visit any FEMA Disaster Recovery Center for referral'
  }
]; 