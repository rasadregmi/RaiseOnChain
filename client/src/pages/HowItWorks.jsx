import { Link } from 'react-router-dom';
import Footer from '../components/ui/footer';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Your Campaign',
      description: 'Set up your fundraising campaign with a clear goal, description, and deadline. All campaign data is stored on the blockchain for transparency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      ),
      details: [
        'Set your funding goal in ETH (Localhost 8545)',
        'Add campaign description and images',
        'Choose a category and set deadline',
        'Provide beneficiary wallet address'
      ]
    },
    {
      number: '02',
      title: 'Connect Your Wallet',
      description: 'Users connect their MetaMask wallet to the platform. This enables secure transactions and ensures you\'re on the correct network (Localhost 8545).',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      details: [
        'Install MetaMask browser extension',
        'Connect wallet to RaiseOnChain',
        'Switch to Localhost 8545',
        'Ensure sufficient ETH balance'
      ]
    },
    {
      number: '03',
      title: 'Make Donations',
      description: 'Donate directly to campaigns using cryptocurrency. All transactions are recorded on the blockchain and visible to everyone for complete transparency.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      details: [
        'Browse available campaigns',
        'Choose donation amount',
        'Confirm transaction in MetaMask',
        'Track donation on blockchain'
      ]
    },
    {
      number: '04',
      title: 'Funds Released',
      description: 'When a campaign reaches its goal or deadline, funds are automatically released to the beneficiary through smart contracts, ensuring trustless execution.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      details: [
        'Automatic fund release on success',
        'Smart contract execution',
        'Transparent fund distribution',
        'Public transaction records'
      ]
    }
  ];

  const features = [
    {
      title: 'Decentralized',
      description: 'No central authority controls your funds. Smart contracts handle everything automatically.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: 'Transparent',
      description: 'All transactions and campaign data are publicly visible on the blockchain.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    {
      title: 'Secure',
      description: 'Blockchain technology ensures funds are secure and cannot be tampered with.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Global',
      description: 'Accessible to anyone with an internet connection and a Web3 wallet.',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 text-primary leading-tight">
              How RaiseOnChain Works
            </h1>
            <p className="text-base text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Discover how blockchain technology is revolutionizing crowdfunding through transparency, security, and community-driven funding.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-black text-center mb-6">The Process</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-primary/10 rounded-2xl p-4 h-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                          <span className="text-white text-base font-bold">{step.number}</span>
                        </div>
                        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mx-auto mb-2">
                          <div className="text-black">
                            {step.icon}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-black mb-2">{step.title}</h3>
                        <p className="text-[#4a5568] text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="space-y-4">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start gap-3">
                          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="text-[#4a5568] text-xs">{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-black text-center mb-6">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 text-center">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <div className="text-green-600">
                      {feature.icon}
                    </div>
                  </div>
                  <h3 className="font-bold text-black mb-1 text-sm">{feature.title}</h3>
                  <p className="text-xs text-[#4a5568]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-black text-center mb-6">Why Blockchain?</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-bold text-black mb-3">Traditional Crowdfunding Issues</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">High platform fees (5-10% of funds raised)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Lack of transparency in fund usage</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Centralized control and censorship</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Geographic restrictions and limitations</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-black mb-3">RaiseOnChain Solutions</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Minimal gas fees only (no platform fees)</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Complete transparency with public blockchain records</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Decentralized and censorship-resistant</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-[#4a5568] text-xs">Global accessibility with no restrictions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-black text-center mb-6">Getting Started</h2>
            <div className="bg-primary/10 rounded-2xl p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">1. Install MetaMask</h3>
                  <p className="text-[#4a5568] mb-2 text-xs">
                    Download and install the MetaMask browser extension
                  </p>
                  <a 
                    href="https://metamask.io" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-700 font-medium text-xs"
                  >
                    Get MetaMask →
                  </a>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">2. Get Test ETH</h3>
                  <p className="text-[#4a5568] mb-2 text-xs">
                    You already have test ETH in your Localhost 8545 accounts (provided by Hardhat node).
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-base font-bold text-black mb-1">3. Start Campaign</h3>
                  <p className="text-[#4a5568] mb-2 text-xs">
                    Create your first campaign or donate to existing ones
                  </p>
                  <Link 
                    to="/new-campaign" 
                    className="text-green-600 hover:text-green-700 font-medium text-xs"
                  >
                    Start Campaign →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h2 className="text-xl font-bold text-black text-center mb-6">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-bold text-black mb-1">What is Localhost 8545?</h3>
                  <p className="text-[#4a5568] text-xs">
                    Localhost 8545 is your local Ethereum blockchain provided by Hardhat. It allows you to test applications instantly and for free, with pre-funded accounts.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black mb-1">How much does it cost to create a campaign?</h3>
                  <p className="text-[#4a5568] text-xs">
                    Creating a campaign only requires a small amount of ETH for gas fees (which are free and pre-funded on Localhost 8545). There are no platform fees.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black mb-1">Is my donation secure?</h3>
                  <p className="text-[#4a5568] text-xs">
                    Yes! All transactions are secured by your local Ethereum blockchain (Hardhat) and smart contracts. No one can access or steal your funds except the intended recipient.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div>
                  <h3 className="text-base font-bold text-black mb-1">Can I see where my money goes?</h3>
                  <p className="text-[#4a5568] text-xs">
                    Absolutely! All transactions are publicly visible on the blockchain. You can 
                    track every donation and see exactly where funds are sent.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black mb-1">What if a campaign doesn't reach its goal?</h3>
                  <p className="text-[#4a5568] text-xs">
                    Currently, funds are sent directly to the campaign creator. In future versions, 
                    we'll implement smart contracts that can automatically refund donors if goals aren't met.
                  </p>
                </div>
                <div>
                  <h3 className="text-base font-bold text-black mb-1">Do I need technical knowledge?</h3>
                  <p className="text-[#4a5568] text-xs">
                    Not at all! Our platform is designed to be user-friendly. You just need to 
                    install MetaMask and have some basic understanding of how to use it.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-black rounded-2xl p-6 text-center text-white">
            <h2 className="text-xl font-bold mb-2">Ready to Get Started?</h2>
            <p className="text-base text-gray-300 mb-4 max-w-2xl mx-auto">
              Join the future of decentralized crowdfunding and start making a difference today.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <Link 
                to="/new-campaign" 
                className="px-4 py-2 bg-white text-black rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
              >
                Create Campaign
              </Link>
              <Link 
                to="/campaigns" 
                className="px-4 py-2 bg-transparent border-2 border-white text-white rounded-lg text-sm font-medium hover:bg-white hover:text-black transition-colors"
              >
                Browse Campaigns
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowItWorks; 