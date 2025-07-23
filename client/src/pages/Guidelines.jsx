import React from 'react';
import Footer from '../components/ui/footer';

const Guidelines = () => (
  <>
    <div className="max-w-3xl mx-auto py-12 px-4 mb-16">
      <h1 className="text-2xl font-bold mb-4">Community Guidelines</h1>
      <p className="mb-2">RaiseOnChain is committed to maintaining a safe, respectful, and inclusive community. Please follow these guidelines:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Do not create campaigns that promote hate, violence, or illegal activities.</li>
        <li>Respect the privacy and rights of others.</li>
        <li>Provide accurate and honest information in your campaigns.</li>
        <li>Report any suspicious or harmful activity to our team.</li>
      </ul>
      <p className="mt-4">For questions, contact our lead developer at <a href="mailto:regmirasad53@gmail.com" className="underline hover:text-emerald-700">regmirasad53@gmail.com</a>.</p>
    </div>
    <Footer />
  </>
);

export default Guidelines; 