import React from 'react'
import Footer from '../layout/Footer'
import Header from '../layout/Header'
import LeaderboardTable from '../components/Leaderboard/LeaderboardTable'
import InfluencersProfiles from '../components/Leaderboard/InfluencersProfiles'
import LeaderboardBadges from '../components/Leaderboard/LeaderboardBadges'

function LeaderboardPage() {
    return (
        <div className=" bg-[#000618] relative">
            <div
                className="absolute top-0 left-0 w-full min-h-screen z-0"
                style={{
                    background: `linear-gradient(to bottom, rgba(0, 6, 24, .3), rgba(1, 148, 254, 0.1), rgba(1, 148, 254, 0.1), rgba(0, 6, 24, .1))`,
                }}
            />

            <div className="relative z-10 min-h-screen">
                <Header />

                <LeaderboardTable />

                <InfluencersProfiles />

                <LeaderboardBadges />

                <Footer />

            </div>
        </div>
    )
}

export default LeaderboardPage