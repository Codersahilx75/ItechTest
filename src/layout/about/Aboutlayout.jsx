import React from 'react';
import AboutHeader from '../about/AboutHeader';
import AboutFooter from './AboutFooter';
//import AboutFooter from '../layout/about/AboutFooter';  // Footer component import karein

export default function AboutLayout({ children }) {
  return (
    <div>
      <AboutHeader />  {/* Header Include */}
      
      <main>
        {children}   {/* Yahan About page ka content aayega */}
      </main>

      <AboutFooter /> 
    </div>
  );
}
