"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import type { Distributor } from "@/lib/distributors-data"

// Fix default icon paths for Leaflet in bundlers
const icon = L.divIcon({
  className: "",
  html: `<div style="
    width: 22px; height: 22px;
    background: oklch(0.55 0.22 25);
    border: 3px solid white;
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.35);
  "></div>`,
  iconSize: [22, 22],
  iconAnchor: [11, 11],
})

function FlyTo({ d }: { d: Distributor | null }) {
  const map = useMap()
  useEffect(() => {
    if (d) map.flyTo([d.lat, d.lng], 8, { duration: 1.2 })
  }, [d, map])
  return null
}

export function DistributorMap({
  distributors,
  active,
  onSelect,
}: {
  distributors: Distributor[]
  active: Distributor | null
  onSelect: (d: Distributor) => void
}) {
  return (
    <MapContainer
      center={[20, 30]}
      zoom={2}
      scrollWheelZoom={true}
      className="h-[500px] md:h-[620px] w-full"
      style={{ background: "oklch(0.95 0 0)" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {distributors.map((d) => (
        <Marker
          key={d.id}
          position={[d.lat, d.lng]}
          icon={icon}
          eventHandlers={{ click: () => onSelect(d) }}
        >
          <Popup>
            <div style={{ minWidth: 200 }}>
              <strong>{d.name}</strong>
              <div style={{ fontSize: 12, color: "#666" }}>{d.city}, {d.country}</div>
              <div style={{ fontSize: 12, marginTop: 4 }}>{d.address}</div>
            </div>
          </Popup>
        </Marker>
      ))}
      <FlyTo d={active} />
    </MapContainer>
  )
}
