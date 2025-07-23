import React from 'react';
import Footer from '../components/ui/footer';

const Terms = () => (
  <>
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-2">Welcome to RaiseOnChain. By using our platform, you agree to the following terms and conditions. Please read them carefully.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>RaiseOnChain is a decentralized crowdfunding platform built on blockchain technology.</li>
        <li>All campaigns and donations are publicly visible and immutable on the blockchain.</li>
        <li>Users are responsible for the accuracy of the information they provide.</li>
        <li>RaiseOnChain is not liable for the outcome of any campaign or the use of donated funds.</li>
        <li>By creating a campaign or donating, you agree to comply with our Community Guidelines and Privacy Policy.</li>
      </ul>
      <p className="mt-4">For questions, contact our lead developer at <a href="mailto:regmirasad53@gmail.com" className="underline hover:text-emerald-700">regmirasad53@gmail.com</a>.</p>
    </div>
    <Footer />
  </>
);

export default Terms; 