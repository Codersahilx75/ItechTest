import React from 'react'
import Header from '../layout/Header'
import HeroSection from '../components/Influencer/HeroSection'
import PromotionSection from '../components/Influencer/PromotionSection'
import CommunityInsights from '../components/Influencer/CommunityInsights'
import InfluencerProfile from '../components/Influencer/InfluencerProfile'
import TrustScoreBreakdown2 from '../components/Influencer/TrustScoreBreakdown2'
import PromotionSection2 from '../components/Influencer/PromotionSection2'
import Footer from '../layout/Footer'

function InfluencerPage() {
  return (
    <div className=" bg-[#000618] relative">
      <div
        className="absolute top-0 left-0 w-full min-h-screen z-0"
        style={{
          // background: `linear-gradient(to bottom, rgba(1, 148, 254, 0.4), rgba(1, 148, 254, 0.2), rgba(0, 6, 24, 0.8), rgba(0, 6, 24, 1))`,
          background: `linear-gradient(to bottom, rgba(0, 6, 24, .3), rgba(1, 148, 254, 0.1), rgba(1, 148, 254, 0.1), rgba(0, 6, 24, .1))`,
        }}
      />

      <div className="relative z-10 min-h-screen">
        <Header />

        <HeroSection />

        <PromotionSection />

        <CommunityInsights />

        <InfluencerProfile />

        <TrustScoreBreakdown2 />

        <PromotionSection2 />

        <CommunityInsights />

        <Footer />

      </div>
    </div>
  )
}

export default InfluencerPage