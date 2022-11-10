import React from 'react';

import { PageWrapper } from '../PageWrapper';
import { Layout } from '../Layout';

import { HeroSection } from '../Layout/Sections/HeroSection';
import { BestSection } from '../Layout/Sections/BestSection';
import { ParticularSection } from '../Layout/Sections/ParticularSection';
import { SliderSection } from '../Layout/Sections/SliderSection';
import { DownloadSection } from '../Layout/Sections/DownloadSection';

export const App = () => {
  return (
    <div className="App light">
      <PageWrapper>
        <Layout>
          <HeroSection />
          <BestSection />
          <ParticularSection />
          <SliderSection />
          <DownloadSection />
        </Layout>
      </PageWrapper>
    </div>
  );
};