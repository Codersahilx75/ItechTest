import { Routes, Route } from 'react-router-dom'; // Import React Router DOM
import Landingpage from '../pages/Landingpage'; // Import Landingpage
import InfluencerPage from '../pages/InfluencerPage'; // Import InfluencerPage
import LeaderboardPage from '../pages/LeaderboardPage';

function AppRoutes() {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<Landingpage />} />

      {/* Influencer Route */}
      <Route path="/influencer" element={<InfluencerPage />} />
      
      <Route path="/leaderboard" element={<LeaderboardPage  />} />

      {/* Other Routes (if any) */}
      {/* Example: <Route path="/about" element={<AboutPage />} /> */}

      {/* 404 Route (if page not found) */}
      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  );
}

export default AppRoutes;