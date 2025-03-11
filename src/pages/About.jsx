import React from 'react';
import AboutLayout from '../layout/about/Aboutlayout';
import OurCompany from '../components/About/OurCompant';
import TeamWork from '../components/About/TeamWork';
import Philosophy from '../components/About/Philosophy';

export default function About() {
  return (
    <AboutLayout>

      <OurCompany/>
      <TeamWork/>
      <Philosophy/>
    
    </AboutLayout>
  );
}
