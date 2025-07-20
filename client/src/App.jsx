import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetailPage from './pages/DetailPage';
import Navbar from './components/Navbar';
import AboutUsPage from './pages/AboutusPage';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/campaigns" element={<ProductDetailPage />} />
          <Route path="/campaigns/:id" element={<ProductDetailPage />} />
          <Route path="/donate" element={<ProductDetailPage />} />
          <Route path="/about-us" element={<AboutUsPage/>} />
          <Route path="/how-it-works" element={<div className="p-10 text-center">How it works Page (Coming Soon)</div>} />
          <Route path="/start-campaign" element={<div className="p-10 text-center">Start Campaign Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App