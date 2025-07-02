import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<div className="p-10 text-center">About Us Page (Coming Soon)</div>} />
          <Route path="/campaigns" element={<div className="p-10 text-center">Campaigns Page (Coming Soon)</div>} />
          <Route path="/how-it-works" element={<div className="p-10 text-center">How it works Page (Coming Soon)</div>} />
          <Route path="/start-campaign" element={<div className="p-10 text-center">Start Campaign Page (Coming Soon)</div>} />
        </Routes>
      </div>
    </div>
  )
}

export default App