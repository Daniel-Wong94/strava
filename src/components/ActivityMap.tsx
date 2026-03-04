'use client'

import { useEffect, useRef } from 'react'
import polyline from '@mapbox/polyline'
import 'leaflet/dist/leaflet.css'

interface Props {
  summaryPolyline: string
}

export function ActivityMap({ summaryPolyline }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mapRef = useRef<any>(null)

  useEffect(() => {
    if (!containerRef.current || mapRef.current || !summaryPolyline) return

    const coords = polyline.decode(summaryPolyline) as [number, number][]
    if (coords.length === 0) return

    import('leaflet').then((L) => {
      if (!containerRef.current || mapRef.current) return

      const map = L.map(containerRef.current)
      mapRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map)

      const route = L.polyline(coords, { color: '#fc4c02', weight: 3 }).addTo(map)
      map.fitBounds(route.getBounds(), { padding: [20, 20] })

      const greenIcon = L.divIcon({
        html: '<div style="width:12px;height:12px;border-radius:50%;background:#22c55e;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.4)"></div>',
        className: '',
        iconAnchor: [6, 6],
      })
      const redIcon = L.divIcon({
        html: '<div style="width:12px;height:12px;border-radius:50%;background:#ef4444;border:2px solid white;box-shadow:0 1px 3px rgba(0,0,0,0.4)"></div>',
        className: '',
        iconAnchor: [6, 6],
      })

      L.marker(coords[0], { icon: greenIcon }).addTo(map)
      L.marker(coords[coords.length - 1], { icon: redIcon }).addTo(map)
    })

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [summaryPolyline])

  if (!summaryPolyline) return null

  return <div ref={containerRef} className="h-96 w-full" />
}
