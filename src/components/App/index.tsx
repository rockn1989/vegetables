import React from 'react';

import { PageWrapper } from '../PageWrapper';
import { Header } from '../Header';
import { Layout } from '../Layout';
import { Footer } from '../Footer';

export const App = () => {
  return (
    <div className="App light">
      <PageWrapper>
        <Header />
        <Layout />
        <Footer />
      </PageWrapper>
    </div>
  );
};