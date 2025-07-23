import { Link } from 'react-router-dom'
import logoImage from '../assets/raiseonchain_logo.png'
import Footer from '../components/ui/footer'
import { useState, useEffect } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import solarImg from './images/solar.jpg';
import floodImg from './images/flood.jpg';
import libraryImg from './images/library.jpg';
import { useLocation } from 'react-router-dom';

const features = [
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    title: 'Decentralized',
    desc: 'No central authority. Smart contracts handle everything automatically.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    ),
    title: 'Transparent',
    desc: 'All transactions and campaign data are publicly visible on the blockchain.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Secure',
    desc: 'Blockchain technology ensures funds are secure and cannot be tampered with.'
  },
  {
    icon: (
      <svg className="w-8 h-8 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    ),
    title: 'Global',
    desc: 'Accessible to anyone with an internet connection and a Web3 wallet.'
  },
];

const Home = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location.pathname]);

  // Live Campaigns Spotlight (placeholder data)
  const [spotlight, setSpotlight] = useState([
    {
      title: 'Solar for Schools',
      desc: 'Bringing clean energy to rural classrooms.',
      image: solarImg,
      raised: 2.3,
      goal: 5,
      supporters: 120
    },
    {
      title: 'Flood Relief Nepal',
      desc: 'Emergency support for flood-affected families.',
      image: floodImg,
      raised: 1.1,
      goal: 2,
      supporters: 80
    },
    {
      title: 'Village Library',
      desc: 'Building a library for lifelong learning.',
      image: libraryImg,
      raised: 0.7,
      goal: 1.5,
      supporters: 45
    }
  ]);

  return (
    <main className="flex flex-col w-full min-h-[80vh]">
      {/* Hero Section with animated SVG background */}
      <section className="relative w-full px-4 sm:px-6 lg:px-8 mt-10 md:mt-16 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none z-0">
          <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-pulse opacity-30">
            <path fill="#10b981" fillOpacity="0.15" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          </svg>
        </div>
        <div className="relative z-10 max-w-5xl mx-auto bg-white/70 backdrop-blur rounded-3xl py-16 sm:py-24 px-4 sm:px-10 lg:px-20 shadow-md flex flex-col items-center text-center border border-gray-100">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4 text-foreground leading-tight tracking-tight">
            Crowdfunding, <span className="text-emerald-500">Reimagined</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-6 max-w-2xl mx-auto font-medium">
            Launch meaningful campaigns and bring real change through community-driven support.<br className="hidden sm:inline" />
            <span className="text-emerald-600 font-bold">Transparent. Secure. Decentralized.</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2 w-full">
            <Link
              to="/campaigns"
              className="w-full sm:w-auto px-4 py-2 bg-emerald-500 text-white rounded-full text-base font-semibold hover:bg-emerald-600 transition-colors shadow-none border border-emerald-100"
            >
              Donate
            </Link>
            <Link
              to="/start-campaign"
              className="w-full sm:w-auto px-4 py-2 bg-foreground text-white rounded-full text-base font-semibold hover:bg-emerald-700 transition-colors shadow-none border border-gray-200"
            >
              Start a Campaign
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full max-w-6xl mx-auto mt-12 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white/60 rounded-2xl border border-gray-100 py-6 px-2">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4">
              <div className="bg-emerald-50 rounded-full p-3 mb-2 border border-emerald-100">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
              <p className="text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="w-full max-w-6xl mx-auto mt-12 px-4">
        <div className="bg-white/60 rounded-2xl border border-gray-100 py-6 px-2 flex flex-col items-center">
          <h2 className="text-base font-semibold mb-4 text-foreground tracking-wide uppercase">Trusted By</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" strokeWidth="2" /></svg>
              <span className="text-base font-semibold text-emerald-700">Web3 Foundation</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><rect x="4" y="4" width="16" height="16" rx="4" strokeWidth="2" /></svg>
              <span className="text-base font-semibold text-emerald-700">Crypto Impact</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polygon points="12,2 22,22 2,22" strokeWidth="2" /></svg>
              <span className="text-base font-semibold text-emerald-700">Open Source DAO</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-5xl mx-auto mt-12 px-4">
        <div className="bg-white/60 rounded-2xl border border-gray-100 py-8 px-4 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 text-foreground">How It Works</h2>
          <ol className="space-y-4 text-base text-muted-foreground max-w-2xl mx-auto">
            <li><span className="font-bold text-emerald-600">1.</span> Create your campaign with a clear goal and story.</li>
            <li><span className="font-bold text-emerald-600">2.</span> Connect your wallet and launch on the blockchain.</li>
            <li><span className="font-bold text-emerald-600">3.</span> Share your campaign and receive transparent donations.</li>
            <li><span className="font-bold text-emerald-600">4.</span> Withdraw funds securely when your goal is met.</li>
          </ol>
          <Link to="/how-it-works" className="mt-6 px-6 py-2 bg-emerald-500 text-white rounded-full font-semibold hover:bg-emerald-600 transition-colors text-base shadow-none border border-emerald-100">Learn More</Link>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full max-w-4xl mx-auto mt-12 px-4 mb-16">
        <div className="bg-emerald-50 rounded-2xl border border-emerald-100 py-8 px-4 flex flex-col items-center text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-4 text-foreground">Ready to Make a Difference?</h2>
          <p className="text-base text-emerald-700 mb-6 max-w-2xl mx-auto">
            Join thousands of users already supporting causes and creating positive change with RaiseOnChain.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link to="/start-campaign" className="w-full sm:w-auto px-4 py-2 bg-emerald-500 text-white rounded-full text-base font-semibold hover:bg-emerald-600 transition-colors shadow-none border border-emerald-100">Start Your Campaign</Link>
            <Link to="/campaigns" className="w-full sm:w-auto px-4 py-2 bg-white text-emerald-600 rounded-full text-base font-semibold hover:bg-emerald-50 transition-colors shadow-none border border-emerald-100">Explore Campaigns</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

export default Home