import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { RouteData, Stop } from "@/data/routes";

// Fix standard leaflet marker icon issue in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

const customIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface MapBoundsProps {
  stops: Stop[];
}

function MapBounds({ stops }: MapBoundsProps) {
  const map = useMap();
  
  useEffect(() => {
    if (stops.length > 0) {
      const bounds = L.latLngBounds(stops.map(stop => stop.coordinates));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [map, stops]);

  return null;
}

interface MapViewProps {
  routes?: RouteData[]; // For all routes overview
  route?: RouteData;   // For single route detail
  className?: string;
}

export function MapView({ routes, route, className = "h-[400px] w-full rounded-xl overflow-hidden" }: MapViewProps) {
  // Determine all stops to display
  let allStops: { stop: Stop; route: RouteData }[] = [];
  
  if (route) {
    allStops = route.stops.map(stop => ({ stop, route }));
  } else if (routes) {
    allStops = routes.flatMap(r => r.stops.map(stop => ({ stop, route: r })));
  }

  // Default center (Cyprus roughly)
  const defaultCenter: [number, number] = [35.25, 33.3];

  return (
    <div className={className}>
      <MapContainer
        center={defaultCenter}
        zoom={9}
        scrollWheelZoom={false}
        className="h-full w-full z-10"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />
        
        {allStops.map(({ stop, route }, idx) => (
          <Marker 
            key={`${stop.name}-${idx}`} 
            position={stop.coordinates}
            icon={customIcon}
          >
            <Popup className="font-sans">
              <div className="p-1 max-w-xs">
                <h4 className="font-serif font-bold text-lg mb-1">{stop.name}</h4>
                <p className="text-xs text-muted-foreground mb-2">Part of: {route.title}</p>
                <p className="text-sm line-clamp-3 mb-3">{stop.description}</p>
                <a 
                  href={`https://www.google.com/maps/dir/?api=1&destination=${stop.coordinates[0]},${stop.coordinates[1]}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary text-primary-foreground px-3 py-1.5 rounded-md inline-block font-medium hover:bg-primary/90 transition-colors"
                >
                  Navigate in Google Maps
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
        
        {allStops.length > 0 && <MapBounds stops={allStops.map(s => s.stop)} />}
      </MapContainer>
    </div>
  );
}
