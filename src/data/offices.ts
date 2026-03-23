export interface Office {
  id: string
  city: string
  country: string
  isHQ: boolean
  address: string
  phone?: string
  fax?: string
  email?: string
  tollFree?: string
  lat: number
  lng: number
  mapQuery: string
}

export const offices: Office[] = [
  {
    id: 'sharjah',
    city: 'Sharjah',
    country: 'UAE',
    isHQ: true,
    address: '1608 Al Batha Tower, 283 Corniche Street, P.O. Box 5026, Sharjah, UAE',
    phone: '+971-6-575 0055',
    fax: '+971-6-575 0404',
    email: 'info@gistec.com',
    lat: 25.334031,
    lng: 55.388926,
    mapQuery: 'Gistec, Al Batha Tower, Buhaira Corniche, Sharjah, UAE',
  },
  {
    id: 'abudhabi',
    city: 'Abu Dhabi',
    country: 'UAE',
    isHQ: false,
    address: 'Units 1803 and 1804, Sky Tower, Al Reem Island, Abu Dhabi, UAE',
    phone: '+9712 6266320',
    tollFree: '80023447',
    lat: 24.496039,
    lng: 54.408866,
    mapQuery: 'Sky Tower, Shams Abu Dhabi, Al Reem Island, Abu Dhabi, UAE',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    isHQ: false,
    address: 'Office No. D3-301, HQ Building, Dubai Silicon Oasis, Dubai, UAE',
    lat: 25.12465,
    lng: 55.38066,
    mapQuery: 'Dubai Silicon Oasis Headquarters, Dubai, UAE',
  },
  {
    id: 'amman',
    city: 'Amman',
    country: 'Jordan',
    isHQ: false,
    address: "Office No. 2, 1st Floor, Bldg. 38, Sa'ad Ben Abi Waqqas Street, Um Uthaina, Amman, Jordan",
    lat: 31.9539,
    lng: 35.8727,
    mapQuery: "Gistec, Sa'ad bin Abi Waqqas Street, Um Uthaina, Amman, Jordan",
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    country: 'India',
    isHQ: false,
    address: '7th Floor, Block 712, eSeva Lane, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072, India',
    lat: 17.490255,
    lng: 78.392835,
    mapQuery: 'Manjeera Trinity Corporate, eSeva Ln, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072',
  },
]
