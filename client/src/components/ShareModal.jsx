import { useState } from 'react';

const socialPlatforms = [
  {
    name: 'Facebook',
    url: (link, title) => `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(link)}`,
    icon: (
      <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
    ),
  },
  {
    name: 'WhatsApp',
    url: (link, title) => `https://wa.me/?text=${encodeURIComponent(title + ' ' + link)}`,
    icon: (
      <svg className="w-7 h-7 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.363.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.617h-.001a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374A9.86 9.86 0 012.1 12.045C2.073 6.833 6.804 2.057 12.017 2.057c2.654 0 5.151 1.037 7.033 2.921a9.825 9.825 0 012.929 7.012c-.003 5.213-4.734 9.989-9.928 9.989m8.413-18.403A11.815 11.815 0 0012.017.057C5.405.057.073 5.392.1 12.006c.021 2.13.557 4.21 1.601 6.063L.057 24l6.184-1.627a11.888 11.888 0 005.78 1.472h.005c6.613 0 11.946-5.335 11.972-11.948a11.86 11.86 0 00-3.487-8.464"/></svg>
    ),
  },
  {
    name: 'Messenger',
    url: (link, title) => `https://www.facebook.com/dialog/send?link=${encodeURIComponent(link)}&app_id=YOUR_FB_APP_ID&redirect_uri=${encodeURIComponent(link)}`,
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.013 2 11.047c0 2.31.93 4.415 2.482 6.07.13.137.2.324.17.513l-.36 2.13a.5.5 0 00.607.58l2.367-.52a.5.5 0 01.312.03A10.02 10.02 0 0012 20.094c5.523 0 10-4.013 10-9.047C22 6.013 17.523 2 12 2zm1.64 11.447l-2.14-2.29-4.07 2.29 4.53-4.85 2.13 2.29 4.07-2.29-4.52 4.85z"/></svg>
    ),
  },
  {
    name: 'Email',
    url: (link, title) => `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(link)}`,
    icon: (
      <svg className="w-7 h-7 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m16-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v4" /></svg>
    ),
  },
  {
    name: 'LinkedIn',
    url: (link, title) => `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(link)}`,
    icon: (
      <svg className="w-7 h-7 text-blue-700" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg>
    ),
  },
  {
    name: 'X',
    url: (link, title) => `https://twitter.com/intent/tweet?url=${encodeURIComponent(link)}&text=${encodeURIComponent(title)}`,
    icon: (
      <svg className="w-7 h-7 text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M22.162 5.656c.015.211.015.423.015.636 0 6.49-4.941 13.976-13.976 13.976-2.774 0-5.361-.812-7.54-2.211.386.045.772.06 1.173.06 2.3 0 4.415-.772 6.104-2.073-2.144-.045-3.953-1.457-4.58-3.406.303.045.606.075.924.075.439 0 .879-.06 1.288-.166-2.211-.447-3.872-2.396-3.872-4.732v-.06c.651.36 1.396.576 2.188.606-1.288-.864-2.129-2.332-2.129-4.001 0-.879.227-1.697.621-2.404 2.374 2.914 5.93 4.827 9.94 5.03-.075-.351-.12-.712-.12-1.082 0-2.635 2.144-4.78 4.78-4.78 1.375 0 2.614.576 3.485 1.502 1.082-.211 2.104-.606 3.025-1.157-.36 1.127-1.127 2.073-2.129 2.671 0 .03.015.06.015.09 0 1.522-1.157 2.789-2.635 3.08.333.09.681.135 1.04.135.257 0 .515-.03.757-.075-.363.803-1.021 1.457-1.803 1.848z"/></svg>
    ),
  },
];

const ShareModal = ({ isOpen, onClose, link, title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[20px] max-w-md w-full p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">Quick share</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">Your unique link</label>
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2">
            <input
              type="text"
              value={link}
              readOnly
              className="flex-1 bg-transparent outline-none text-gray-800 text-sm"
            />
            <button
              onClick={handleCopy}
              className="ml-2 px-3 py-1 bg-gray-200 rounded-lg text-sm font-medium hover:bg-gray-300 transition-colors"
            >
              {copied ? 'Copied!' : 'Copy link'}
            </button>
          </div>
        </div>
        <div className="mb-2 mt-6">
          <h3 className="text-lg font-semibold text-black mb-1">Reach more donors by sharing</h3>
          <p className="text-gray-600 text-sm mb-3">Share this campaign on your favorite platform:</p>
          <div className="grid grid-cols-3 gap-4 mt-2">
            {socialPlatforms.map(platform => (
              <button
                key={platform.name}
                onClick={() => window.open(platform.url(link, title), '_blank', 'noopener,noreferrer')}
                className="flex flex-col items-center gap-1 hover:bg-gray-100 rounded-lg p-2 transition-colors"
              >
                {platform.icon}
                <span className="text-xs text-gray-700 font-medium mt-1">{platform.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareModal; 