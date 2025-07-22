import { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/raiseonchain_logo.png';
import { useWeb3 } from '../contexts/Web3Context';

const navLinks = [
  { to: '/about-us', label: 'About Us' },
  { to: '/campaigns', label: 'Campaigns' },
  { to: '/how-it-works', label: 'How it works?' },
];

const Navbar = () => {
  const { isConnected, connectWallet, walletAddress, formatAddress } = useWeb3();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full bg-white/90 backdrop-blur sticky top-0 z-30 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImage} alt="RaiseOnChain" className="h-12 w-auto drop-shadow-lg" />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="text-gray-700 hover:text-primary text-base font-semibold transition-colors px-2 py-1 rounded-lg hover:bg-primary/10"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/start-campaign"
            className="bg-primary text-white text-base font-bold px-6 py-2 rounded-full shadow-lg hover:bg-primary/90 transition-colors"
          >
            Start a Campaign
          </Link>
          <button
            onClick={connectWallet}
            className={`ml-2 px-5 py-2 rounded-full text-base font-semibold border-2 transition-colors shadow-sm ${isConnected ? 'bg-green-100 text-green-800 border-green-300 cursor-default' : 'bg-primary text-white border-primary hover:bg-primary/90'}`}
            disabled={isConnected}
          >
            {isConnected && walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
          </button>
        </div>
        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button
            className="text-gray-700 hover:text-primary focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open menu"
          >
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-100 animate-fade-in-down">
          <div className="flex flex-col gap-2 px-6 py-4">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-700 hover:text-primary text-lg font-semibold transition-colors px-2 py-2 rounded-lg hover:bg-primary/10"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/start-campaign"
              className="bg-primary text-white text-lg font-bold px-6 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-colors mt-2 text-center"
              onClick={() => setMobileOpen(false)}
            >
              Start a Campaign
            </Link>
            <button
              onClick={() => { connectWallet(); setMobileOpen(false); }}
              className={`mt-2 px-5 py-3 rounded-full text-lg font-semibold border-2 transition-colors shadow-sm ${isConnected ? 'bg-green-100 text-green-800 border-green-300 cursor-default' : 'bg-primary text-white border-primary hover:bg-primary/90'}`}
              disabled={isConnected}
            >
              {isConnected && walletAddress ? formatAddress(walletAddress) : 'Connect Wallet'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
