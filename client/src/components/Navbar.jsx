import { Link } from 'react-router-dom'
import logoImage from '../assets/raiseonchain_logo.png'

const Navbar = () => {
  return (
    <div className="w-[calc(100%-30px)] mx-auto bg-white rounded-b-[30px]" style={{ 
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)'
    }}>
      <div className="h-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="RaiseOnChain" 
              className="h-10 w-auto"
            />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about-us" 
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              About Us
            </Link>
            <Link 
              to="/campaigns" 
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              Campaigns
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-gray-700 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              How it works?
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-700 hover:text-gray-900 text-sm font-medium px-4 py-2 rounded-md transition-colors">
              Sign In
            </button>
            <Link 
              to="/start-campaign" 
              className="bg-black text-white text-sm font-medium px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
            >
              Start a Campaign
            </Link>
          </div>

          <div className="md:hidden">
            <button className="text-gray-700 hover:text-gray-900">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
