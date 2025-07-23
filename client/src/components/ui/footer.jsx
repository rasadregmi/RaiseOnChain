import { Link } from 'react-router-dom';
import logoImage from '../../assets/raiseonchain_logo.png';

const Footer = () => (
  <footer className="w-full bg-white border-t border-gray-200 pt-8 pb-6 px-2 mt-auto">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
      {/* Brand */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 mb-2">
          <img src={logoImage} alt="RaiseOnChain Logo" className="w-40 h-10" />
        </div>
        <p className="text-muted-foreground text-sm max-w-xs">
          The future of transparent, decentralized crowdfunding. Empowering change, one campaign at a time.
        </p>
      </div>
      {/* Navigation */}
      <div>
        <h4 className="text-base font-bold mb-2 text-foreground">Navigation</h4>
        <nav className="flex flex-col gap-2 text-sm font-medium">
          <Link to="/" className="text-muted-foreground hover:text-emerald-500 transition-colors">Home</Link>
          <Link to="/about-us" className="text-muted-foreground hover:text-emerald-500 transition-colors">About</Link>
          <Link to="/campaigns" className="text-muted-foreground hover:text-emerald-500 transition-colors">Campaigns</Link>
          <Link to="/how-it-works" className="text-muted-foreground hover:text-emerald-500 transition-colors">How it works</Link>
        </nav>
      </div>
      {/* Quick Links */}
      <div>
        <h4 className="text-base font-bold mb-2 text-foreground">Quick Links</h4>
        <nav className="flex flex-col gap-2 text-sm font-medium">
          <Link to="/start-campaign" className="text-muted-foreground hover:text-emerald-500 transition-colors">Start a Campaign</Link>
          <Link to="/campaigns" className="text-muted-foreground hover:text-emerald-500 transition-colors">Donate</Link>
          <Link to="/terms" className="text-muted-foreground hover:text-emerald-500 transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="text-muted-foreground hover:text-emerald-500 transition-colors">Privacy Policy</Link>
          <Link to="/guidelines" className="text-muted-foreground hover:text-emerald-500 transition-colors">Community Guidelines</Link>
        </nav>
      </div>
      {/* Social/Contact */}
      <div>
        <h4 className="text-base font-bold mb-2 text-foreground">Connect</h4>
        <div className="flex flex-col gap-2 mb-2">
          <div className="text-sm font-semibold text-emerald-700">Lead Developer: Rasad Regmi</div>
          <span className="text-xs text-muted-foreground">You can contact him at: <a href="mailto:regmirasad53@gmail.com" className="underline hover:text-emerald-700">regmirasad53@gmail.com</a></span>
          <span className="text-xs text-muted-foreground">Portfolio: <a href="https://www.rasadregmi.com.np/" target="_blank" rel="noopener noreferrer" className="underline hover:text-emerald-700">rasadregmi.com.np</a></span>
        </div>
        <div className="text-[10px] text-muted-foreground mt-2">&copy; {new Date().getFullYear()} RaiseOnChain. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer; 