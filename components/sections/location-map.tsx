'use client'
import { useEffect, useRef } from 'react';

// Leaflet type declarations
declare global {
  interface Window {
    L: any;
  }
}

export function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    // Load Leaflet CSS and JS
    const loadLeaflet = async () => {
      if (typeof window !== 'undefined' && !window.L) {
        // Add Leaflet CSS
        const cssLink = document.createElement('link');
        cssLink.rel = 'stylesheet';
        cssLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(cssLink);

        // Add Leaflet JS
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = initializeMap;
        document.head.appendChild(script);
      } else if (window.L && mapRef.current && !mapInstanceRef.current) {
        initializeMap();
      }
    };

    const initializeMap = () => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Coordinates for East Legon, Accra
      const accraCoords = [5.6037, -0.1870];
      
      // Initialize map
      const map = window.L.map(mapRef.current).setView(accraCoords, 12);
      mapInstanceRef.current = map;

      // Add OpenStreetMap tiles
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors',
        maxZoom: 19,
      }).addTo(map);

      // Custom icon for main office
      const officeIcon = window.L.divIcon({
        html: `
          <div style="
            background: #3B82F6;
            color: white;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            border: 3px solid white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.3);
          ">🏥</div>
        `,
        className: 'custom-div-icon',
        iconSize: [40, 40],
        iconAnchor: [20, 20]
      });

      // Add marker for main office
      const mainOfficeMarker = window.L.marker(accraCoords, { icon: officeIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family: system-ui; min-width: 200px;">
            <h3 style="margin: 0 0 8px 0; color: #1F2937; font-size: 16px; font-weight: 600;">Main Office</h3>
            <p style="margin: 0 0 8px 0; color: #4B5563; font-size: 14px; line-height: 1.4;">
              123 Healthcare Avenue<br>
              East Legon, Accra<br>
              Ghana
            </p>
            <p style="margin: 0; color: #6B7280; font-size: 12px;">
              Administrative headquarters and coordination center
            </p>
          </div>
        `);

      // Add service area circles for mobile services
      const serviceAreas = [
        { name: 'Greater Accra', coords: [5.6037, -0.1870], radius: 25000, color: '#10B981' },
        { name: 'Ashanti Region', coords: [6.6885, -1.6244], radius: 30000, color: '#8B5CF6' },
        { name: 'Central Region', coords: [5.4203, -0.9575], radius: 25000, color: '#F59E0B' },
        { name: 'Volta Region', coords: [6.6027, 0.4706], radius: 35000, color: '#EF4444' },
        { name: 'Northern Region', coords: [9.4034, -0.8424], radius: 40000, color: '#06B6D4' }
      ];

      serviceAreas.forEach(area => {
        window.L.circle(area.coords, {
          color: area.color,
          fillColor: area.color,
          fillOpacity: 0.1,
          radius: area.radius,
          weight: 2
        }).addTo(map).bindPopup(`
          <div style="font-family: system-ui;">
            <h4 style="margin: 0 0 4px 0; color: #1F2937;">${area.name}</h4>
            <p style="margin: 0; color: #6B7280; font-size: 12px;">Mobile services coverage area</p>
          </div>
        `);
      });

      // Fit map to show all service areas
      const group = new window.L.featureGroup([
        mainOfficeMarker,
        ...serviceAreas.map(area => window.L.circle(area.coords, { radius: area.radius }))
      ]);
      map.fitBounds(group.getBounds().pad(0.1));
    };

    loadLeaflet();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Find Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While we bring our services directly to communities, you can also visit our main office in Accra.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Locations</h3>

              <div className="space-y-4">
                <div className="p-6 bg-blue-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Main Office</h4>
                  <p className="text-gray-600 mb-2">
                    123 Healthcare Avenue
                    <br />
                    East Legon, Accra
                    <br />
                    Ghana
                  </p>
                  <p className="text-sm text-gray-500">Administrative headquarters and coordination center</p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Mobile Services</h4>
                  <p className="text-gray-600 mb-2">
                    Serving communities across:
                    <br />
                    Greater Accra, Ashanti, Central, Volta, and Northern Regions
                  </p>
                  <p className="text-sm text-gray-500">Our mobile teams travel to bring services directly to you</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-900">Office Hours</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-medium text-gray-900">Monday - Friday</div>
                  <div className="text-gray-600">8:00 AM - 5:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Saturday</div>
                  <div className="text-gray-600">9:00 AM - 2:00 PM</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Sunday</div>
                  <div className="text-gray-600">Closed</div>
                </div>
                <div>
                  <div className="font-medium text-gray-900">Emergency</div>
                  <div className="text-gray-600">24/7 Hotline</div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">Map Legend</h4>
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">🏥</div>
                  <span>Main Office Location</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-green-500 rounded-full bg-green-100"></div>
                  <span>Mobile Service Coverage Areas</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl overflow-hidden shadow-lg">
            <div 
              ref={mapRef} 
              className="w-full h-96"
              style={{ minHeight: '400px' }}
            />
            <div className="p-4 bg-white">
              <p className="text-xs text-gray-500 text-center">
                Powered by OpenStreetMap • Click markers and areas for more info
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}