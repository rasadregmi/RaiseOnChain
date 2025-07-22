import { Link } from 'react-router-dom';
import logoImage from '../../assets/raiseonchain_logo.png';

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 pt-16 pb-10 px-4 mt-auto">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
      {/* Brand */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <img src={logoImage} alt="RaiseOnChain Logo" className="w-40 h-10" />
        </div>
        <p className="text-muted-foreground text-base max-w-xs">
          The future of transparent, decentralized crowdfunding. Empowering change, one campaign at a time.
        </p>
      </div>
      {/* Navigation */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-foreground">Navigation</h4>
        <nav className="flex flex-col gap-3 text-base font-medium">
          <Link to="/" className="text-muted-foreground hover:text-emerald-500 transition-colors">Home</Link>
          <Link to="/about-us" className="text-muted-foreground hover:text-emerald-500 transition-colors">About</Link>
          <Link to="/campaigns" className="text-muted-foreground hover:text-emerald-500 transition-colors">Campaigns</Link>
          <Link to="/how-it-works" className="text-muted-foreground hover:text-emerald-500 transition-colors">How it works</Link>
        </nav>
      </div>
      {/* Quick Links */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-foreground">Quick Links</h4>
        <nav className="flex flex-col gap-3 text-base font-medium">
          <Link to="/start-campaign" className="text-muted-foreground hover:text-emerald-500 transition-colors">Start a Campaign</Link>
          <Link to="/campaigns" className="text-muted-foreground hover:text-emerald-500 transition-colors">Donate</Link>
          <a href="mailto:info@raiseonchain.com" className="text-muted-foreground hover:text-emerald-500 transition-colors">Contact Us</a>
        </nav>
      </div>
      {/* Social/Contact */}
      <div>
        <h4 className="text-lg font-bold mb-4 text-foreground">Connect</h4>
        <div className="flex gap-4 mb-4">
          <a href="#" className="text-emerald-500 hover:text-emerald-700" aria-label="Twitter"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 19c11 0 13-9 13-13v-.6A9.3 9.3 0 0023 3a9.1 9.1 0 01-2.6.7A4.5 4.5 0 0022.4.4a9.1 9.1 0 01-2.9 1.1A4.5 4.5 0 0012 7.5c0 .4 0 .8.1 1.2A12.8 12.8 0 013 2.1a4.5 4.5 0 001.4 6A4.5 4.5 0 012 7.1v.1a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2 .1 4.5 4.5 0 004.2 3.1A9 9 0 012 18.6a12.7 12.7 0 006.9 2" /></svg></a>
          <a href="#" className="text-emerald-500 hover:text-emerald-700" aria-label="LinkedIn"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v5a2 2 0 01-2 2H4a2 2 0 01-2-2v-5a6 6 0 016-6h8z" /><circle cx="8.5" cy="13.5" r="1.5" /><circle cx="15.5" cy="13.5" r="1.5" /></svg></a>
          <a href="#" className="text-emerald-500 hover:text-emerald-700" aria-label="Email"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4" /></svg></a>
        </div>
        <div className="text-sm text-muted-foreground">info@raiseonchain.com</div>
        <div className="text-xs text-muted-foreground mt-6">&copy; {new Date().getFullYear()} RaiseOnChain. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer; 