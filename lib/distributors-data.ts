export type Distributor = {
  id: string
  name: string
  city: string
  country: string
  region: "Asia" | "Middle East" | "Europe" | "Americas" | "Africa" | "Oceania"
  address: string
  phone: string
  email: string
  lat: number
  lng: number
  website?: string
}

export const distributors: Distributor[] = [
  { id: "d1", name: "Flexicore India Mumbai", city: "Mumbai", country: "India", region: "Asia", address: "Design District, Andheri West, Mumbai 400058", phone: "+91 22 4000 0000", email: "mumbai@flexicore.com", lat: 19.136, lng: 72.826 },
  { id: "d2", name: "Flexicore India Delhi", city: "New Delhi", country: "India", region: "Asia", address: "Nehru Place, New Delhi 110019", phone: "+91 11 4000 0000", email: "delhi@flexicore.com", lat: 28.549, lng: 77.253 },
  { id: "d3", name: "Flexicore Bangalore", city: "Bangalore", country: "India", region: "Asia", address: "Indiranagar, Bangalore 560038", phone: "+91 80 4000 0000", email: "bangalore@flexicore.com", lat: 12.971, lng: 77.594 },
  { id: "d4", name: "Flexicore Gulf", city: "Dubai", country: "UAE", region: "Middle East", address: "Business Bay, Dubai", phone: "+971 4 000 0000", email: "dubai@flexicore.com", lat: 25.188, lng: 55.273 },
  { id: "d5", name: "Surface Partners Riyadh", city: "Riyadh", country: "Saudi Arabia", region: "Middle East", address: "Olaya Street, Riyadh", phone: "+966 11 000 0000", email: "ksa@flexicore.com", lat: 24.7136, lng: 46.6753 },
  { id: "d6", name: "Flexicore UK", city: "London", country: "United Kingdom", region: "Europe", address: "14 Clerkenwell Green, London EC1R 0DP", phone: "+44 20 0000 0000", email: "uk@flexicore.com", lat: 51.523, lng: -0.104 },
  { id: "d7", name: "Surface Studio Berlin", city: "Berlin", country: "Germany", region: "Europe", address: "Potsdamer Platz, 10785 Berlin", phone: "+49 30 0000 0000", email: "de@flexicore.com", lat: 52.5095, lng: 13.376 },
  { id: "d8", name: "Flexicore Milano", city: "Milan", country: "Italy", region: "Europe", address: "Via Tortona, 20144 Milano", phone: "+39 02 0000 0000", email: "it@flexicore.com", lat: 45.4522, lng: 9.1626 },
  { id: "d9", name: "Flexicore USA East", city: "New York", country: "USA", region: "Americas", address: "200 Fifth Avenue, New York NY 10010", phone: "+1 212 000 0000", email: "usa-east@flexicore.com", lat: 40.7416, lng: -73.9897 },
  { id: "d10", name: "Flexicore USA West", city: "Los Angeles", country: "USA", region: "Americas", address: "Pacific Design Center, West Hollywood CA", phone: "+1 310 000 0000", email: "usa-west@flexicore.com", lat: 34.0830, lng: -118.3855 },
  { id: "d11", name: "Flexicore Sao Paulo", city: "São Paulo", country: "Brazil", region: "Americas", address: "Vila Olímpia, São Paulo", phone: "+55 11 0000 0000", email: "brazil@flexicore.com", lat: -23.595, lng: -46.686 },
  { id: "d12", name: "Flexicore Johannesburg", city: "Johannesburg", country: "South Africa", region: "Africa", address: "Sandton, Johannesburg 2196", phone: "+27 11 000 0000", email: "za@flexicore.com", lat: -26.107, lng: 28.057 },
  { id: "d13", name: "Flexicore Sydney", city: "Sydney", country: "Australia", region: "Oceania", address: "Surry Hills, Sydney NSW 2010", phone: "+61 2 0000 0000", email: "au@flexicore.com", lat: -33.885, lng: 151.211 },
  { id: "d14", name: "Flexicore Singapore", city: "Singapore", country: "Singapore", region: "Asia", address: "Tiong Bahru, Singapore 168731", phone: "+65 0000 0000", email: "sg@flexicore.com", lat: 1.286, lng: 103.833 },
]

export const regions: Distributor["region"][] = ["Asia", "Middle East", "Europe", "Americas", "Africa", "Oceania"]
