import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Space for navbar */}
      <div className="w-[calc(100%-30px)] mx-auto bg-white rounded-b-[30px]" style={{ 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <div className="h-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* This space is reserved for navbar component */}
        </div>
      </div>
      

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 md:mt-12">
        <div className="max-w-[1400px] mx-auto bg-[#e6fce6] rounded-[30px] py-28 sm:py-36 px-8 sm:px-12 lg:px-20">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-black leading-tight">
              Built on the Chains, Backed by the People!
            </h1>
            <p className="text-base sm:text-lg text-[#4a5568] mb-12 max-w-3xl mx-auto">
              Launch meaningful campaigns and bring real change 
              through community-driven support.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
              <Link 
                to="/donate" 
                className="py-4 px-20 bg-[#e8e8e8] text-black rounded-md text-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Donate
              </Link>
              <Link 
                to="/start-campaign" 
                className="py-4 px-14 bg-black text-white rounded-md text-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Start a Campaign
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home