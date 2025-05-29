import { AutoLinkify } from '@/components/ui/auto-linkify';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Archive, Bus, ExternalLink, Heart, Home, Map, Pill, Truck, Utensils, Wifi } from 'lucide-react';

interface DonationLink {
  name: string;
  url: string;
  description?: string;
}

interface ServiceLocation {
  name: string;
  address: string;
  info?: string;
  phone?: string;
  url?: string;
  notes?: string;
}

const cashDonations: DonationLink[] = [
  {
    name: "Action St. Louis",
    url: "https://actionstl.org/donate",
    description: "A grassroots racial justice organization building political power for Black communities in St. Louis."
  },
  {
    name: "Better Family Life",
    url: "https://www.betterfamilylife.org",
    description: "Provides community engagement, youth programs, and family services."
  },
  {
    name: "St. Louis Community Foundation",
    url: "https://stlgives.org/give-today",
    description: "Supports various nonprofits and community initiatives in the St. Louis area."
  },
  {
    name: "United Way of Greater St. Louis",
    url: "https://helpingpeople.org/donate-to-united-way",
    description: "Focuses on improving lives through education, income stability, health, and basic needs."
  },
  {
    name: "Urban League of Metropolitan St. Louis",
    url: "https://www.ulstl.com/donatenow.html",
    description: "Provides immediate relief including food, shelter, and support services."
  },
  {
    name: "Gateway Early Childhood Alliance Fund",
    url: "https://stl.fcsuite.com/erp/donate/create/fund?funit_id=1470",
    description: "Aims to make the early childhood system more racially equitable."
  },
  {
    name: "Mission St. Louis",
    url: "https://www.missionstl.org/donate",
    description: "Works to end poverty by empowering individuals through education and employment opportunities."
  }
];

const supplyLocations: ServiceLocation[] = [
  {
    name: "4theVille",
    address: "4144 Dr. Martin Luther King Drive",
    info: "Provides showers, lunch, snacks, and home repair supplies.",
    url: "https://www.facebook.com/4theVILLE"
  },
  {
    name: "Action St. Louis",
    address: "4343 West Florissant Avenue",
    info: "Hosts the People's Response Hub offering meals and support services.",
    url: "https://actionstl.org/tornado"
  },
  {
    name: "Better Family Life",
    address: "5200 Cates Ave",
    info: "Organizes debris removal and cleanup events.",
    url: "https://www.facebook.com/BetterFamilyLifeInc"
  },
  {
    name: "Urban League Headquarters",
    address: "1408 Kingshighway Blvd",
    info: "Accepts donations and provides support services.",
    url: "https://www.ulstl.com"
  },
  {
    name: "United Way",
    address: "910 N 11th Street",
    info: "Coordinates volunteer efforts and accepts donations.",
    url: "https://helpingpeople.org"
  },
  {
    name: "The Wellston Center",
    address: "1705 Kienlen Ave, St. Louis, MO 63133",
    info: "Accepting essential food, clothing, and household items. Open Tues & Wed 8AM-12PM, Fri 9AM-12PM",
    url: "https://www.wellstoncenter.org"
  },
  {
    name: "Love the Lou - Site #1",
    address: "1421 North Taylor Ave, St. Louis, MO 63113",
    info: "Accepting donations daily 12-4pm",
    url: "https://lovethelou.org"
  },
  {
    name: "Love the Lou - Site #2",
    address: "3801 Ashland Ave, St. Louis, MO 63107",
    info: "Accepting donations daily 12-4pm",
    url: "https://lovethelou.org"
  },
  {
    name: "Black Power Blueprint",
    address: "4101 W Florissant Ave, St. Louis, MO 63115",
    info: "Mon - Fri, 9 am - 5 pm. Accepting building supplies, lumber, power and non-power tools",
    url: "https://blackpowerblueprint.org"
  },
  {
    name: "FrizzFest STL - SweetArt",
    address: "3701 Lindell Blvd, St. Louis, MO 63108",
    info: "Wed-Sun, 7am-8pm. Accepting feminine hygiene products and baby supplies",
    url: "https://www.sweetartstl.com"
  },
  {
    name: "FrizzFest STL - B Juiced",
    address: "605 S. Florissant, St. Louis, MO 63135",
    info: "Wed-Fri 8am-5pm, Sat 8am-3pm. Accepting feminine hygiene products and baby supplies"
  },
  {
    name: "Home Sweet Home",
    address: "10 Sunnen Drive, Suite 100, St. Louis, MO 63143",
    info: "Accepting new and gently used furniture. Mon-Fri 9am-2pm, first Saturday of each month 9am-12pm",
    url: "https://homesweethomestl.org"
  },
  {
    name: "The Fabulous Fox Theatre",
    address: "527 N. Grand Blvd, St. Louis, MO 63103",
    info: "Accepting donations at box office (10am-5pm, 10am-2pm Saturdays) until June 1st",
    notes: "Accepting canned goods, dry boxed goods, hygiene products, cleaning supplies, baby supplies"
  },
  {
    name: "City Sewing Room",
    address: "6700 Arsenal St, St. Louis, MO 63139",
    info: "Friday May 23rd 12-6pm and May 24th, 12-4pm"
  },
  {
    name: "The Heavy Anchor",
    address: "5266 Gravois Ave, St. Louis, MO 63116",
    info: "Accepting donations after 5pm daily. Need socks/underwear, non-perishable foods, water bottles, baby formula",
    notes: "Pop-tops preferred for canned goods"
  },
  {
    name: "McArthur's Bakery",
    address: "3055 Lemay Ferry Road, St. Louis, MO 63125",
    info: "Collecting donations until May 31st from 7am-3pm",
    notes: "Accepting repair items, cleaning supplies, hygiene items, comfort items, kids support items, non-perishables"
  }
];

const hotspots: ServiceLocation[] = [
  {
    name: "4theVille",
    address: "4144 MLK Drive",
    info: "Provides internet access and charging stations."
  },
  {
    name: "O'Fallon Park YMCA",
    address: "4343 W. Florissant Ave",
    info: "Offers Wi-Fi and charging facilities."
  },
  {
    name: "Refresh Community Church",
    address: "829 N. Hanley Rd",
    info: "Provides internet and charging services."
  },
  {
    name: "12th & Park Recreation Center",
    address: "1410 S. Tucker Blvd",
    info: "Offers Wi-Fi and charging stations."
  },
  {
    name: "Command Center",
    address: "716 N Kingshighway Blvd",
    info: "Offers internet access and charging stations."
  }
];

const shelters: ServiceLocation[] = [
  {
    name: "Friendly Temple Center",
    address: "6356 Dr. Martin Luther King Drive",
    info: "Offers shelter services.",
    url: "http://www.friendlytemple.org"
  },
  {
    name: "The Recreational Center",
    address: "1410 S. Tucker Blvd",
    info: "Provides temporary housing."
  },
  {
    name: "Urban League x Temporary Housing",
    info: "Coordinates temporary housing solutions.",
    url: "https://www.ulstl.com",
    address: "Contact for location"
  }
];

const foodServices: ServiceLocation[] = [
  {
    name: "SNAP Benefits Application",
    url: "https://mydss.mo.gov",
    info: "Apply for or replace lost SNAP benefits",
    address: "Online service - no physical address"
  },
  {
    name: "Food Banks Directory",
    url: "https://feedingmissouri.org",
    info: "Find food banks near you",
    address: "Online directory - no physical address"
  },
  {
    name: "World Central Kitchen - Belle Glade",
    address: "Belle Glade Ave",
    info: "Hot meals served daily"
  },
  {
    name: "Mercy Chefs - Natural Bridge",
    address: "Natural Bridge Ave",
    info: "Meal distribution center"
  }
];

const medicalServices: ServiceLocation[] = [
  {
    name: "Prescription Replacement",
    info: "American Red Cross assistance for lost medications",
    url: "tel:1-800-RED-CROSS",
    address: "Call 1-800-RED-CROSS for assistance"
  },
  {
    name: "Missouri Board of Pharmacy",
    info: "Emergency prescription medication assistance",
    url: "https://pr.mo.gov/pharmacists",
    address: "Online service - visit website for assistance"
  }
];

const transportationServices: ServiceLocation[] = [
  {
    name: "Shelter Transportation - Ville Location",
    address: "4447 Natural Bridge Ave",
    info: "Daily pickup at 8:00 PM from Save A Lot parking lot"
  },
  {
    name: "Shelter Transportation - Academy Sherman",
    address: "5200 Cates Ave",
    info: "Daily pickup at 8:00 PM"
  },
  {
    name: "Metro Transit Evening Pickup - Ville Location",
    address: "Save A Lot parking lot, 4447 Natural Bridge Road Ave",
    info: "Evening pickup at 8:00 PM to designated shelters, morning return at 9:00 AM"
  },
  {
    name: "Metro Transit Evening Pickup - Academy Sherman",
    address: "5200 Cates Ave",
    info: "Evening pickup at 8:00 PM to designated shelters, morning return at 9:00 AM"
  },
  {
    name: "North Side Youth and Senior Service Center",
    address: "Contact (314) 652-9946",
    info: "Transportation for seniors, contact to schedule a ride"
  }
];

const storageServices: ServiceLocation[] = [
  {
    name: "U-Haul Storage",
    info: "30 days free self-storage and U-Box container usage",
    url: "https://tinyurl.com/Uhaul-tornado-recovery",
    notes: "Call 314-766-4013 for details. Delivery/pickup fees not included.",
    address: "Call 314-766-4013 for location details"
  }
];

const furnitureServices: ServiceLocation[] = [
  {
    name: "Home Sweet Home",
    address: "10 Sunnen Drive, Suite 100, St. Louis, MO 63143",
    info: "Providing furniture for families affected by the tornado",
    url: "https://homesweethomestl.org",
    notes: "Multiple regular volunteer opportunities to supply families with furniture"
  },
  {
    name: "Urban League Furniture Assistance",
    address: "1408 N. Kingshighway Blvd",
    info: "Coordinating furniture donations and distribution",
    url: "https://www.ulstl.com"
  }
];

const getGoogleMapsUrl = (address: string) => {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;
};

export function DonationDirectory() {
  return (
    <Tabs defaultValue="donate" className="w-full">
      <div className="relative w-full overflow-x-auto pb-2 md:overflow-x-visible">
        <TabsList className="inline-flex w-max md:w-full md:grid md:grid-cols-9">
          <TabsTrigger value="donate">
            <Heart className="h-4 w-4 mr-2" />
            Donate
          </TabsTrigger>
          <TabsTrigger value="supplies">
            <Truck className="h-4 w-4 mr-2" />
            Supplies
          </TabsTrigger>
          <TabsTrigger value="shelter">
            <Home className="h-4 w-4 mr-2" />
            Shelter
          </TabsTrigger>
          <TabsTrigger value="hotspots">
            <Wifi className="h-4 w-4 mr-2" />
            Hotspots
          </TabsTrigger>
          <TabsTrigger value="food">
            <Utensils className="h-4 w-4 mr-2" />
            Food
          </TabsTrigger>
          <TabsTrigger value="medical">
            <Pill className="h-4 w-4 mr-2" />
            Medical
          </TabsTrigger>
          <TabsTrigger value="transport">
            <Bus className="h-4 w-4 mr-2" />
            Transport
          </TabsTrigger>
          <TabsTrigger value="storage">
            <Archive className="h-4 w-4 mr-2" />
            Storage
          </TabsTrigger>
          <TabsTrigger value="furniture">
            <Home className="h-4 w-4 mr-2" />
            Furniture
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="donate" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Make a Cash Donation</CardTitle>
            <CardDescription>Support local organizations providing direct relief to affected communities.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {cashDonations.map((donation) => (
              <Button
                key={donation.name}
                variant="outline"
                asChild
                className="w-full justify-start h-auto py-4 overflow-hidden"
              >
                <a
                  href={donation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-start gap-1 w-full"
                >
                  <span className="flex items-center w-full">
                    <span className="truncate">
                      <span className="md:hidden">
                        {donation.name === "Action St. Louis" && "Racial Justice Support"}
                        {donation.name === "Better Family Life" && "Community Programs Support"}
                        {donation.name === "St. Louis Community Foundation" && "Community Fund Support"}
                        {donation.name === "United Way of Greater St. Louis" && "Basic Needs Support"}
                        {donation.name === "Urban League of Metropolitan St. Louis" && "Relief Services Support"}
                        {donation.name === "Gateway Early Childhood Alliance Fund" && "Childhood Care Support"}
                        {donation.name === "Mission St. Louis" && "Poverty Relief Support"}
                      </span>
                      <span className="hidden md:inline">{donation.name}</span>
                    </span>
                    <ExternalLink className="h-4 w-4 ml-2 flex-shrink-0" />
                  </span>
                  {donation.description && (
                    <span className="text-sm text-muted-foreground line-clamp-2 hidden md:block">{donation.description}</span>
                  )}
                </a>
              </Button>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="supplies" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Supply Donation Locations</CardTitle>
            <CardDescription>Drop off supplies or volunteer at these locations.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {supplyLocations.map((location) => (
              <div key={location.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{location.name}</h3>
                <AutoLinkify>
                  <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                  {location.info && <p className="text-sm mt-2">{location.info}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {location.url && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={location.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {location.address && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={getGoogleMapsUrl(location.address)} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Get Directions <Map className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="shelter" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Emergency Shelter Locations</CardTitle>
            <CardDescription>Temporary housing and shelter services.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {shelters.map((shelter) => (
              <div key={shelter.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{shelter.name}</h3>
                <AutoLinkify>
                  <p className="text-sm text-muted-foreground mt-1">{shelter.address}</p>
                  {shelter.info && <p className="text-sm mt-2">{shelter.info}</p>}
                  {shelter.notes && <p className="text-sm text-muted-foreground mt-2">{shelter.notes}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {shelter.url && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={shelter.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {shelter.address && shelter.address !== "Contact for location" && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={getGoogleMapsUrl(shelter.address)} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Get Directions <Map className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="hotspots" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Internet & Charging Stations</CardTitle>
            <CardDescription>Locations offering free Wi-Fi and device charging.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {hotspots.map((hotspot) => (
              <div key={hotspot.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{hotspot.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{hotspot.address}</p>
                {hotspot.info && <p className="text-sm mt-2">{hotspot.info}</p>}
                {hotspot.address && (
                  <Button variant="link" asChild className="p-0 h-auto mt-2">
                    <a href={getGoogleMapsUrl(hotspot.address)} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      Get Directions <Map className="h-4 w-4 ml-1" />
                    </a>
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="food" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Food Assistance Services</CardTitle>
            <CardDescription>Food banks, meal services, and SNAP benefits assistance.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {foodServices.map((service) => (
              <div key={service.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{service.name}</h3>
                <AutoLinkify>
                  {service.address && <p className="text-sm text-muted-foreground mt-1">{service.address}</p>}
                  {service.info && <p className="text-sm mt-2">{service.info}</p>}
                  {service.notes && <p className="text-sm text-muted-foreground mt-2">{service.notes}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {service.url && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {service.address && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={getGoogleMapsUrl(service.address)} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Get Directions <Map className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="medical" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Medical & Prescription Services</CardTitle>
            <CardDescription>Assistance with medications and prescriptions.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {medicalServices.map((service) => (
              <div key={service.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{service.name}</h3>
                <AutoLinkify>
                  {service.address && <p className="text-sm text-muted-foreground mt-1">{service.address}</p>}
                  {service.info && <p className="text-sm mt-2">{service.info}</p>}
                  {service.notes && <p className="text-sm text-muted-foreground mt-2">{service.notes}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {service.url && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="transport" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Transportation Services</CardTitle>
            <CardDescription>Free transportation to and from shelters.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {transportationServices.map((service) => (
              <div key={service.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{service.name}</h3>
                <AutoLinkify>
                  {service.address && <p className="text-sm text-muted-foreground mt-1">{service.address}</p>}
                  {service.info && <p className="text-sm mt-2">{service.info}</p>}
                  {service.notes && <p className="text-sm text-muted-foreground mt-2">{service.notes}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {service.address && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={getGoogleMapsUrl(service.address)} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Get Directions <Map className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="storage" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Storage Services</CardTitle>
            <CardDescription>Free temporary storage solutions.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {storageServices.map((service) => (
              <div key={service.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{service.name}</h3>
                <AutoLinkify>
                  {service.info && <p className="text-sm mt-2">{service.info}</p>}
                  {service.notes && <p className="text-sm text-muted-foreground mt-2">{service.notes}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {service.url && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="furniture" className="mt-4">
        <Card>
          <CardHeader>
            <CardTitle>Furniture Donation & Distribution</CardTitle>
            <CardDescription>Locations accepting and distributing furniture to affected families.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            {furnitureServices.map((service) => (
              <div key={service.name} className="border rounded-lg p-4">
                <h3 className="font-semibold">{service.name}</h3>
                <AutoLinkify>
                  {service.address && <p className="text-sm text-muted-foreground mt-1">{service.address}</p>}
                  {service.info && <p className="text-sm mt-2">{service.info}</p>}
                  {service.notes && <p className="text-sm text-muted-foreground mt-2">{service.notes}</p>}
                </AutoLinkify>
                <div className="flex gap-2 mt-2">
                  {service.url && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={service.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Learn More <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                  {service.address && (
                    <Button variant="link" asChild className="p-0 h-auto">
                      <a href={getGoogleMapsUrl(service.address)} target="_blank" rel="noopener noreferrer" className="flex items-center">
                        Get Directions <Map className="h-4 w-4 ml-1" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
} 