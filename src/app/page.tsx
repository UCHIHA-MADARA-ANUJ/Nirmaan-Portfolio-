import React from "react";
import GenesisLoader from "@/components/sections/GenesisLoader";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScroll from "@/components/layout/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MissionManifesto from "@/components/sections/MissionManifesto";
import Graveyard from "@/components/sections/Graveyard";
import Gaps from "@/components/sections/Gaps";
import SolutionOverview from "@/components/sections/SolutionOverview";
import Forge from "@/components/sections/Forge";
import ProductScreens from "@/components/sections/ProductScreens";
import Network from "@/components/sections/Network";
import EcosystemRoles from "@/components/sections/EcosystemRoles";
import Cortex from "@/components/sections/Cortex";
import TrustVerification from "@/components/sections/TrustVerification";
import ImpactIntelligence from "@/components/sections/ImpactIntelligence";
import TechnologyArchitecture from "@/components/sections/TechnologyArchitecture";
import FeasibilityScalability from "@/components/sections/FeasibilityScalability";
import Roadmap from "@/components/sections/Roadmap";
import Architects from "@/components/sections/Architects";
import Nexus from "@/components/sections/Nexus";

export default function Home() {
  return (
    <>
      <GenesisLoader />
      <CustomCursor />
      <SmoothScroll>
        <Navbar />
        <main className="flex flex-col w-full overflow-x-hidden bg-void">
          <Hero />
          <MissionManifesto />
          <Graveyard />
          <Gaps />
          <SolutionOverview />
          <Forge />
          <ProductScreens />
          <Network />
          <EcosystemRoles />
          <Cortex />
          <TrustVerification />
          <ImpactIntelligence />
          <TechnologyArchitecture />
          <FeasibilityScalability />
          <Roadmap />
          <Architects />
          <Nexus />
        </main>
        <Footer />
      </SmoothScroll>
    </>
  );
}
