import React from 'react';
import PortfolioHeader from '../portfolio/PortHeader';
import PortfolioFooter from '../portfolio/PortFooter';

export default function PortLayout({ children }) {
  return (
    <div>
      <PortfolioHeader />
      <main>{children}</main>
      <PortfolioFooter />
    </div>  
  );
}
