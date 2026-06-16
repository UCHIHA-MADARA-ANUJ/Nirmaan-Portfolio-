"use client";
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Search, Navigation, ShieldCheck, ArrowRight, Star, Zap } from "lucide-react";
import SectionLabel from "@/components/ui/SectionLabel";
import { VERIFIED_CENTRES_DEMO } from "@/lib/constants";
import { cn } from "@/lib/utils";

function MapController({ center, zoom }: { center: [number, number]; zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, {
      duration: 1.5,
      easeLinearity: 0.25,
    });
  }, [center, zoom, map]);
  return null;
}

const createCustomIcon = (isSelected: boolean) => {
  return L.divIcon({
    className: "custom-leaflet-marker",
    html: `<div class="relative flex items-center justify-center">
      <div class="absolute w-10 h-10 rounded-full ${isSelected ? 'bg-signal' : 'bg-electric'} opacity-40 animate-ping"></div>
      <div class="w-5 h-5 rounded-full ${isSelected ? 'bg-signal ring-4 ring-white' : 'bg-electric ring-2 ring-void'} shadow-[0_0_20px_#B6FF3C] z-10 transition-transform ${isSelected ? 'scale-125' : 'scale-100'}"></div>
    </div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 20],
  });
};

export default function LiveMapInner() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState<"partners" | "dropoff">("partners");
  const [selectedPartner, setSelectedPartner] = useState(VERIFIED_CENTRES_DEMO[0]);
  const [mapCenter, setMapCenter] = useState<[number, number]>(VERIFIED_CENTRES_DEMO[0].cords);
  const [mapZoom, setMapZoom] = useState(12);

  const filteredPartners = VERIFIED_CENTRES_DEMO.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.city.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelectPartner = (partner: typeof VERIFIED_CENTRES_DEMO[0]) => {
    setSelectedPartner(partner);
    setMapCenter(partner.cords);
    setMapZoom(14);
  };

  const handleLocateMe = () => {
    const ncrHub = VERIFIED_CENTRES_DEMO[0];
    handleSelectPartner(ncrHub);
  };

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto space-y-24">
      
      {/* Executive Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/10">
        <div className="space-y-6 max-w-4xl">
          <SectionLabel status="LIVE_RADAR">07 // Live Telemetry Geofencing</SectionLabel>
          <h2 className="font-display text-6xl sm:text-8xl font-black text-white tracking-tight leading-[0.92]">
            Verified centres. Mapped <span className="text-signal underline">live</span>.
          </h2>
        </div>
        <p className="text-lg sm:text-xl text-white/60 font-body font-light max-w-md self-start md:self-auto leading-relaxed">
          Every authorized CPCB recycling center authenticated via real-time satellite geofencing. Strict chain of custody monitoring from household OTP to industrial extraction.
        </p>
      </div>

      {/* Avant-Garde Command Center Layout (12 Cols) */}
      <div className="glass-panel rounded-[48px] border-2 border-white/15 overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.95)] grid grid-cols-1 lg:grid-cols-12 min-h-[800px] bg-surface-2/90">
        
        {/* Left Command Ledger (5 Cols) */}
        <div className="lg:col-span-5 p-8 sm:p-10 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10 bg-void/60 space-y-8">
          
          {/* Controls */}
          <div className="space-y-6">
            <span className="font-mono text-xs text-signal tracking-widest uppercase font-bold block">
              ● RADAR LEDGER // ACTIVE COHORT
            </span>

            {/* Search Input */}
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search verified facility or city..."
                className="w-full pl-14 pr-6 py-4 rounded-full bg-surface border border-white/10 text-white placeholder-white/40 text-base font-body focus:outline-none focus:border-signal focus:ring-2 focus:ring-signal/20 transition-all"
              />
            </div>

            {/* Switch Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 rounded-full bg-surface border border-white/10 font-display text-sm font-bold">
              <button
                onClick={() => setActiveTab("partners")}
                className={cn(
                  "py-3 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2",
                  activeTab === "partners" ? "bg-signal text-void shadow-lg" : "text-white/60 hover:text-white"
                )}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>CPCB Processors (76)</span>
              </button>
              <button
                onClick={() => setActiveTab("dropoff")}
                className={cn(
                  "py-3 rounded-full transition-all cursor-pointer flex items-center justify-center gap-2",
                  activeTab === "dropoff" ? "bg-signal text-void shadow-lg" : "text-white/60 hover:text-white"
                )}
              >
                <span>📍 Citizen Bins (140)</span>
              </button>
            </div>
          </div>

          {/* Partner Card List */}
          <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
            {filteredPartners.length === 0 ? (
              <div className="text-center py-16 text-white/40 font-mono text-sm">
                No matching CPCB facilities located. Try searching &apos;Noida&apos; or &apos;Bengaluru&apos;.
              </div>
            ) : (
              filteredPartners.map((partner) => {
                const isSelected = selectedPartner.name === partner.name;

                return (
                  <div
                    key={partner.name}
                    onClick={() => handleSelectPartner(partner)}
                    className={cn(
                      "p-6 rounded-3xl transition-all duration-300 cursor-pointer border flex items-center justify-between group",
                      isSelected
                        ? "bg-signal/15 border-signal shadow-[0_0_35px_rgba(182,255,60,0.25)] scale-[1.02]"
                        : "bg-surface-2 hover:bg-white/[0.06] border-white/10 hover:border-white/20"
                    )}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 font-display">
                        <h4 className={cn("font-extrabold text-xl tracking-tight transition-colors", isSelected ? "text-signal" : "text-white group-hover:text-signal")}>
                          {partner.name}
                        </h4>
                      </div>

                      <p className="font-body text-xs sm:text-sm text-white/70 flex items-center gap-2 font-light">
                        <span>📍 {partner.city}</span>
                        <span>•</span>
                        <span className="text-electric font-semibold">{partner.distance}</span>
                      </p>

                      <div className="pt-2 flex items-center gap-3 font-mono text-[10px]">
                        <span className="px-3 py-1 rounded-full bg-electric/20 text-electric font-bold border border-electric/40 flex items-center gap-1">
                          <Star className="w-3 h-3 fill-electric text-electric" /> {partner.rating}
                        </span>
                        <span className="text-white/50">{partner.status}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end justify-between h-full">
                      <span className={cn("w-3 h-3 rounded-full mb-8", isSelected ? "bg-signal animate-pulse shadow-[0_0_10px_#B6FF3C]" : "bg-white/20")} />
                      <button className={cn("px-5 py-2.5 rounded-full text-xs font-display font-bold flex items-center gap-1.5 transition-all", isSelected ? "bg-signal text-void shadow-lg" : "bg-white/10 text-white group-hover:bg-white/20")}>
                        <span>Radar Fly</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Master GPS Fly Button */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={handleLocateMe}
              className="w-full py-4 rounded-3xl bg-white text-void font-display font-black text-base flex items-center justify-center gap-3 transition-all cursor-pointer hover:bg-signal shadow-2xl"
            >
              <Navigation className="w-5 h-5 text-void animate-spin-slow" />
              <span>Fly to Live Sector (Delhi NCR Central Demo)</span>
            </button>
          </div>

        </div>

        {/* Right Map (7 Cols) */}
        <div className="lg:col-span-7 relative min-h-[550px] lg:min-h-full w-full h-full bg-void">
          
          <div className="absolute inset-0 w-full h-full z-0 [&_.leaflet-tile-pane]:filter [&_.leaflet-tile-pane]:grayscale [&_.leaflet-tile-pane]:invert [&_.leaflet-tile-pane]:brightness-50 [&_.leaflet-tile-pane]:contrast-125 [&_.leaflet-tile-pane]:hue-rotate-180">
            <MapContainer
              center={mapCenter}
              zoom={mapZoom}
              scrollWheelZoom={false}
              className="w-full h-full absolute inset-0 z-10"
              zoomControl={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              <MapController center={mapCenter} zoom={mapZoom} />

              {VERIFIED_CENTRES_DEMO.map((partner) => {
                const isSelected = selectedPartner.name === partner.name;

                return (
                  <Marker
                    key={partner.name}
                    position={partner.cords}
                    icon={createCustomIcon(isSelected)}
                    eventHandlers={{
                      click: () => handleSelectPartner(partner),
                    }}
                  >
                    <Popup className="[&_.leaflet-popup-content-wrapper]:bg-surface-2 [&_.leaflet-popup-content-wrapper]:text-white [&_.leaflet-popup-content-wrapper]:border-2 [&_.leaflet-popup-content-wrapper]:border-signal [&_.leaflet-popup-content-wrapper]:rounded-3xl [&_.leaflet-popup-content-wrapper]:p-2 [&_.leaflet-popup-tip]:bg-surface-2 font-display shadow-2xl">
                      <div className="p-3 space-y-3 min-w-[220px]">
                        <div className="font-black text-lg text-signal flex items-center gap-2">
                          <Zap className="w-5 h-5 fill-signal" />
                          <span>{partner.name}</span>
                        </div>
                        <p className="font-body text-xs text-white/80 leading-relaxed font-light">
                          {partner.city} • Complete CPCB authorized zero-landfill extraction facility.
                        </p>
                        <div className="pt-3 flex items-center justify-between border-t border-white/10 font-mono text-xs font-bold">
                          <span className="text-electric">{partner.distance}</span>
                          <button
                            onClick={() => handleSelectPartner(partner)}
                            className="px-4 py-2 bg-signal text-void rounded-full font-black hover:bg-electric transition-colors"
                          >
                            Dispatch Rider
                          </button>
                        </div>
                      </div>
                    </Popup>
                  </Marker>
                );
              })}
            </MapContainer>
          </div>

          {/* Satellite HUD Overlay */}
          <div className="absolute top-8 right-8 z-20 pointer-events-none flex items-center gap-3 glass-panel px-5 py-2.5 rounded-full text-xs font-mono text-signal font-bold shadow-2xl bg-surface-2/90">
            <span className="w-2.5 h-2.5 rounded-full bg-signal animate-ping" />
            <span>SATELLITE_GPS_LINKED</span>
          </div>

        </div>

      </div>
    </div>
  );
}
