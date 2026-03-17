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
  },
  {
    id: 'abudhabi',
    city: 'Abu Dhabi',
    country: 'UAE',
    isHQ: false,
    address: 'Units 1803 and 1804, Sky Tower, Al Reem Island, Abu Dhabi, UAE',
    phone: '+9712 6266320',
    tollFree: '80023447',
  },
  {
    id: 'dubai',
    city: 'Dubai',
    country: 'UAE',
    isHQ: false,
    address: 'Office No. D3-301, HQ Building, Dubai Silicon Oasis, Dubai, UAE',
  },
  {
    id: 'amman',
    city: 'Amman',
    country: 'Jordan',
    isHQ: false,
    address: "Office No. 2, 1st Floor, Bldg. 38, Sa'ad Ben Abi Waqqas Street, Um Uthaina, Amman, Jordan",
  },
  {
    id: 'hyderabad',
    city: 'Hyderabad',
    country: 'India',
    isHQ: false,
    address: '7th Floor, Block 712, eSeva Lane, K P H B Phase 3, Kukatpally, Hyderabad, Telangana 500072, India',
  },
]
