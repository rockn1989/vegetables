import React from "react"
import "./layout.scss";

import { HeroSection } from "./Sections/HeroSection";
import { BestSection } from "./Sections/BestSection";
import { ParticularSection } from "./Sections/ParticularSection";
import { SliderSection } from "./Sections/SliderSection";
import { DownloadSection } from "./Sections/DownloadSection";

export const Layout = () => {
  return (
    <main className="page-main">
      <HeroSection />
      <BestSection />
      <ParticularSection />
      <SliderSection />
      <DownloadSection />
    </main>
  )
};