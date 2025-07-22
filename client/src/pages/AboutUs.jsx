import { Link } from 'react-router-dom';
import rasadImg from '../assets/rasad.jpg';
import sahiraImg from '../assets/sahira.png';
import regishImg from '../assets/regish.png';
import adityaImg from '../assets/aditya.png';
import Footer from '../components/ui/footer';

const AboutUs = () => {
  const teamMembers = [
    {
      name: 'Rasad Regmi',
      role: 'Lead Developer (Frontend & Blockchain)',
      description: 'Lead developer specializing in both frontend and blockchain development for decentralized applications.',
      image: rasadImg
    },
    {
      name: 'Sahira Maharjan',
      role: 'Frontend Developer',
      description: 'Frontend developer focused on building modern, user-friendly interfaces.',
      image: sahiraImg
    },
    {
      name: 'Regish Shrestha',
      role: 'Blockchain Developer',
      description: 'Smart contract specialist with deep knowledge of Ethereum and DeFi protocols.',
      image: regishImg
    },
    {
      name: 'Aditya Thakuri',
      role: 'Researcher & UI/UX Designer',
      description: 'Researcher and UI/UX designer focused on blockchain technology and user experience.',
      image: adityaImg
    }
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 pb-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-primary leading-tight">
            About RaiseOnChain
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We're building the future of decentralized crowdfunding, where transparency, 
            trust, and community come together on the blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              RaiseOnChain is revolutionizing crowdfunding by leveraging blockchain technology 
              to create a transparent, secure, and efficient platform for raising funds. 
              We believe that everyone should have access to fair and transparent fundraising 
              opportunities.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              By eliminating centralized intermediaries and putting control back in the hands 
              of creators and donors, we're building a more equitable financial ecosystem 
              that benefits everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/campaigns" 
                className="px-8 py-4 bg-primary text-white rounded-full text-lg font-bold shadow hover:bg-primary/90 transition-colors text-center"
              >
                Explore Campaigns
              </Link>
              <Link 
                to="/how-it-works" 
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full text-lg font-bold shadow hover:bg-primary/10 transition-colors text-center"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
          <div className="bg-primary/10 rounded-[2rem] p-8 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">Decentralized & Transparent</h3>
              <p className="text-gray-700">
                Every transaction is recorded on the blockchain, ensuring complete transparency 
                and trust for all participants.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Transparency</h3>
              <p className="text-[#4a5568]">
                All transactions and campaign data are publicly verifiable on the blockchain.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Security</h3>
              <p className="text-[#4a5568]">
                Smart contracts ensure secure and automated fund management without intermediaries.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-black mb-3">Community</h3>
              <p className="text-[#4a5568]">
                Empowering communities to support causes they believe in through decentralized funding.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-[#4a5568] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-black text-center mb-12">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">Blockchain</h3>
              <p className="text-sm text-[#4a5568]">Ethereum (Localhost 8545)</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">Smart Contracts</h3>
              <p className="text-sm text-[#4a5568]">Solidity & Thirdweb</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17v4a2 2 0 002 2h4M15 7l3-3m0 0l-3-3m3 3H9" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">Frontend</h3>
              <p className="text-sm text-[#4a5568]">React.js & Tailwind CSS</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-black mb-2">Storage</h3>
              <p className="text-sm text-[#4a5568]">IPFS (Decentralized)</p>
            </div>
          </div>
        </div>

        <div className="bg-[#e6fce6] rounded-[30px] p-12 text-center">
          <h2 className="text-3xl font-bold text-black mb-6">Ready to Make a Difference?</h2>
          <p className="text-lg text-[#4a5568] mb-8 max-w-2xl mx-auto">
            Join thousands of users who are already using RaiseOnChain to support causes 
            they believe in and create positive change in the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/new-campaign" 
              className="px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Start Your Campaign
            </Link>
            <Link 
              to="/campaigns" 
              className="px-8 py-4 bg-white text-black rounded-lg text-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Explore Campaigns
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs; 