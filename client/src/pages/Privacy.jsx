import React from 'react';
import Footer from '../components/ui/footer';

const Privacy = () => (
  <>
    <div className="max-w-3xl mx-auto py-12 px-4 mb-16">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-2">Your privacy is important to us. This policy explains how RaiseOnChain collects, uses, and protects your information.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>We do not collect personal information beyond what is required for blockchain transactions.</li>
        <li>All transaction data is stored on the blockchain and is publicly accessible.</li>
        <li>We do not sell or share your information with third parties.</li>
        <li>By using RaiseOnChain, you consent to this privacy policy.</li>
      </ul>
      <p className="mt-4">For questions, contact our lead developer at <a href="mailto:regmirasad53@gmail.com" className="underline hover:text-emerald-700">regmirasad53@gmail.com</a>.</p>
    </div>
    <Footer />
  </>
);

export default Privacy; 