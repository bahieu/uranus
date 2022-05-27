import React from 'react';

import MainLayout from 'src/component/Layout';
import Carousel from './Carousel';
import Pricing from './Pricing';

export const PricingPage: React.FC = () => {
  return (
    <MainLayout>
      <Carousel />
      <Pricing />
    </MainLayout>
  );
};
export default PricingPage;
