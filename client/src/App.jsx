import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/DetailPage';
import Navbar from './components/Navbar';
import NewCampaign from './pages/NewCampaign';
import Campaigns from './pages/Campaigns';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Guidelines from './pages/Guidelines';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const App = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/campaign/:id" element={<ProductDetailPage />} />
          <Route path="/donate" element={<div className="p-10 text-center">Donate Page (Coming Soon)</div>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/start-campaign" element={<NewCampaign />} />
          <Route path="/new-campaign" element={<NewCampaign />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/guidelines" element={<Guidelines />} />
        </Routes>
      </div>
    </div>
  )
}

export default App