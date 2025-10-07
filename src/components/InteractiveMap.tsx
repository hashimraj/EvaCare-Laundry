import { useEffect, useRef, useState } from 'react';

// Declare Google Maps types
declare global {
  const google: any;
}

interface Location {
  lat: number;
  lng: number;
  name: string;
  address: string;
  phone: string;
}

const InteractiveMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [apiKey] = useState('hahaha!');
  const [mapLoaded, setMapLoaded] = useState(false);

  const locations: Location[] = [
    {
      lat: -1.1675,
      lng: 36.9620,
      name: 'Evacare Laundry - Galana Energies',
      address: 'Galana Energies, Eastern Bypass, Kamakis',
      phone: '+254 745 505 808'
    },
    {
      lat: -1.1708,
      lng: 36.9580,
      name: 'Evacare Laundry - Unicity Mall',
      address: 'Unicity Mall, Kenyatta University - Thika Road',
      phone: '+254 745 505 808'
    }
  ];

  useEffect(() => {
    if (!apiKey || !mapRef.current) return;

    // Load Google Maps script
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
    script.async = true;
    script.defer = true;

    script.onload = () => {
      if (!mapRef.current) return;

      const map = new google.maps.Map(mapRef.current, {
        center: { lat: -1.1691, lng: 36.9600 },
        zoom: 14,
        mapTypeControl: true,
        streetViewControl: true,
        fullscreenControl: true,
        zoomControl: true,
      });

      let currentInfoWindow: any = null;

      // Close info window when clicking on the map
      map.addListener('click', () => {
        if (currentInfoWindow) {
          currentInfoWindow.close();
          currentInfoWindow = null;
        }
      });

      // Add markers for each location
      locations.forEach((location) => {
        const marker = new google.maps.Marker({
          position: { lat: location.lat, lng: location.lng },
          map: map,
          title: location.name,
          animation: google.maps.Animation.DROP,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <div style="padding: 12px; max-width: 300px;">
              <h3 style="font-weight: 600; font-size: 16px; margin-bottom: 8px; color: #1a1a1a;">
                ${location.name}
              </h3>
              <p style="margin-bottom: 6px; color: #666; font-size: 14px;">
                <strong>Address:</strong> ${location.address}
              </p>
              <p style="margin-bottom: 8px; color: #666; font-size: 14px;">
                <strong>Phone:</strong> ${location.phone}
              </p>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}" 
                target="_blank"
                rel="noopener noreferrer"
                style="display: inline-block; padding: 8px 16px; background: #2563eb; color: white; text-decoration: none; border-radius: 6px; font-size: 14px; margin-top: 4px;"
              >
                Get Directions
              </a>
            </div>
          `,
        });

        marker.addListener('click', () => {
          // Close previous info window if open
          if (currentInfoWindow) {
            currentInfoWindow.close();
          }
          infoWindow.open(map, marker);
          currentInfoWindow = infoWindow;
        });
      });

      setMapLoaded(true);
    };

    script.onerror = () => {
      console.error('Error loading Google Maps script');
    };

    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [apiKey]);

  return (
    <div className="space-y-4">
      <div 
        ref={mapRef} 
        className="w-full h-[500px] rounded-lg shadow-lg"
        style={{ minHeight: '500px' }}
      />
    </div>
  );
};

export default InteractiveMap;
