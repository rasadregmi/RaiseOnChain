import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/DetailPage';
import Navbar from './components/Navbar';
import NewCampaign from './pages/NewCampaign';
import Campaigns from './pages/Campaigns';
import AboutUs from './pages/AboutUs';
import HowItWorks from './pages/HowItWorks';

const App = () => {
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
        </Routes>
      </div>
    </div>
  )
}

export default App