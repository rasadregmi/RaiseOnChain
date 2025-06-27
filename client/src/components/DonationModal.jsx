import { useState } from 'react';
import { useWeb3 } from '../context/Web3Context';

const DonationModal = ({ campaign, isOpen, onClose }) => {
  const [donationAmount, setDonationAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const { 
    isConnected, 
    isConnecting, 
    isCorrectNetwork,
    currentNetwork,
    connectWallet, 
    switchToSepolia,
    refreshBalance,
    testBalance,
    account, 
    balance, 
    formatAddress,
    getNetworkName
  } = useWeb3();

  const handleDonate = async (e) => {
    e.preventDefault();
    
    console.log('=== DONATION ATTEMPT ===');
    console.log('Is Connected:', isConnected);
    console.log('Is Correct Network:', isCorrectNetwork);
    console.log('Current Network:', currentNetwork);
    console.log('Balance:', balance);
    console.log('Donation Amount:', donationAmount);
    
    if (!isConnected) {
      console.log('Not connected, attempting to connect wallet...');
      try {
        await connectWallet();
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        setError('Failed to connect wallet: ' + error.message);
      }
      return;
    }

    if (!isCorrectNetwork) {
      console.log('Wrong network, attempting to switch to Sepolia...');
      try {
        await switchToSepolia();
      } catch (error) {
        console.error('Failed to switch network:', error);
        setError('Failed to switch to Sepolia network. Please switch manually in MetaMask.');
      }
      return;
    }

    if (!donationAmount || parseFloat(donationAmount) <= 0) {
      setError('Please enter a valid donation amount');
      return;
    }

    const donationAmountFloat = parseFloat(donationAmount);
    const balanceFloat = parseFloat(balance?.displayValue || 0);
    
    console.log('Donation amount (float):', donationAmountFloat);
    console.log('Balance (float):', balanceFloat);
    
    if (donationAmountFloat > balanceFloat) {
      setError(`Insufficient balance. You have ${balanceFloat} SEP but trying to donate ${donationAmountFloat} SEP`);
      return;
    }

    setIsProcessing(true);
    setError('');

    try {
      console.log('Starting real donation transaction...');
      
      // Convert donation amount to Wei
      const donationAmountWei = (donationAmountFloat * Math.pow(10, 18)).toString(16);
      const donationAmountWeiHex = '0x' + donationAmountWei;
      
      console.log('Donation amount in Wei (hex):', donationAmountWeiHex);
      
      // Get the current gas price
      const gasPrice = await window.ethereum.request({
        method: 'eth_gasPrice'
      });
      
      console.log('Gas price:', gasPrice);
      
      // Estimate gas for the transaction
      const gasEstimate = await window.ethereum.request({
        method: 'eth_estimateGas',
        params: [{
          from: account.address,
          to: campaign.creator, // Send to campaign creator
          value: donationAmountWeiHex
        }]
      });
      
      console.log('Estimated gas:', gasEstimate);
      
      // Send the transaction
      const transactionParameters = {
        to: campaign.creator, // Campaign creator's address
        from: account.address,
        value: donationAmountWeiHex,
        gas: gasEstimate,
        gasPrice: gasPrice
      };
      
      console.log('Transaction parameters:', transactionParameters);
      
      // Request transaction
      const txHash = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters]
      });
      
      console.log('Transaction hash:', txHash);
      
      // Wait for transaction confirmation
      console.log('Waiting for transaction confirmation...');
      
      // Poll for transaction receipt
      let receipt = null;
      let attempts = 0;
      const maxAttempts = 30; // 30 seconds timeout
      
      while (!receipt && attempts < maxAttempts) {
        try {
          receipt = await window.ethereum.request({
            method: 'eth_getTransactionReceipt',
            params: [txHash]
          });
          
          if (receipt) {
            console.log('Transaction confirmed!', receipt);
            break;
          }
        } catch (error) {
          console.log('Waiting for confirmation...', error);
        }
        
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait 1 second
        attempts++;
      }
      
      if (receipt && receipt.status === '0x1') {
        console.log('Donation transaction completed successfully');
        setSuccess(true);
        
        // Refresh balance after successful transaction
        setTimeout(async () => {
          await refreshBalance();
        }, 1000);
        
        setTimeout(() => {
          onClose();
          setSuccess(false);
          setDonationAmount('');
        }, 3000);
      } else {
        throw new Error('Transaction failed or timed out');
      }
      
    } catch (error) {
      console.error('Donation failed:', error);
      setError('Transaction failed: ' + error.message);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleClose = () => {
    if (!isProcessing) {
      onClose();
      setError('');
      setSuccess(false);
      setDonationAmount('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-[20px] max-w-md w-full p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-black">
            {success ? 'Donation Successful!' : 'Donate to Campaign'}
          </h2>
          {!isProcessing && (
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {success ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Thank you!</h3>
            <p className="text-gray-600">
              Your donation of {donationAmount} SEP has been sent to "{campaign.title}"
            </p>
          </div>
        ) : (
          <>
            {/* Campaign Info */}
            <div className="mb-6">
              <h3 className="font-semibold text-lg text-black mb-2">{campaign.title}</h3>
              <div className="flex justify-between text-sm text-gray-600">
                <span>Goal: {campaign.goal} SEP</span>
                <span>Raised: {campaign.raised.toFixed(1)} SEP</span>
              </div>
            </div>

            {/* Network Warning */}
            {isConnected && !isCorrectNetwork && (
              <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <span className="text-sm font-medium text-yellow-800">Wrong Network</span>
                </div>
                <p className="text-sm text-yellow-700 mb-3">
                  You're currently on {getNetworkName(currentNetwork)}. Please switch to Sepolia testnet to donate.
                </p>
                <button
                  onClick={switchToSepolia}
                  className="w-full py-2 px-4 bg-yellow-600 text-white rounded-lg text-sm font-medium hover:bg-yellow-700 transition-colors"
                >
                  Switch to Sepolia
                </button>
              </div>
            )}

            {/* Wallet Connection */}
            {!isConnected ? (
              <div className="mb-6">
                <p className="text-gray-600 mb-4">
                  Connect your wallet to make a donation on Sepolia testnet
                </p>
                <button
                  onClick={connectWallet}
                  disabled={isConnecting}
                  className="w-full py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isConnecting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Connecting...
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      Connect MetaMask
                    </>
                  )}
                </button>
              </div>
            ) : (
              <>
                {/* Wallet Info */}
                <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Connected Wallet:</span>
                    <span className="text-sm font-medium text-black">{formatAddress(account.address)}</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Network:</span>
                    <span className={`text-sm font-medium ${isCorrectNetwork ? 'text-green-600' : 'text-red-600'}`}>
                      {getNetworkName(currentNetwork)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Balance:</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-black">
                        {balance?.displayValue || '0'} {balance?.symbol || 'SEP'}
                      </span>
                      <button
                        onClick={refreshBalance}
                        className="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        Refresh
                      </button>
                    </div>
                  </div>
                  
                  {/* Debug Section */}
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <button
                      onClick={testBalance}
                      className="text-xs text-gray-500 hover:text-gray-700 underline mr-3"
                    >
                      Debug Balance
                    </button>
                    <button
                      onClick={async () => {
                        console.log('=== METAMASK TEST ===');
                        console.log('Ethereum provider:', typeof window.ethereum !== 'undefined');
                        if (typeof window.ethereum !== 'undefined') {
                          try {
                            const accounts = await window.ethereum.request({ method: 'eth_accounts' });
                            console.log('Current accounts:', accounts);
                            const chainId = await window.ethereum.request({ method: 'eth_chainId' });
                            console.log('Current chainId:', chainId);
                          } catch (error) {
                            console.error('MetaMask test failed:', error);
                          }
                        }
                      }}
                      className="text-xs text-gray-500 hover:text-gray-700 underline"
                    >
                      Test MetaMask
                    </button>
                    <div className="text-xs text-gray-400 mt-1">
                      Network: {getNetworkName(currentNetwork)} | 
                      Connected: {isConnected ? 'Yes' : 'No'} | 
                      Correct Network: {isCorrectNetwork ? 'Yes' : 'No'}
                    </div>
                  </div>
                </div>

                {/* Donation Form */}
                {isCorrectNetwork && (
                  <form onSubmit={handleDonate} className="space-y-4">
                    <div>
                      <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                        Donation Amount (SEP)
                      </label>
                      <input
                        type="number"
                        id="amount"
                        value={donationAmount}
                        onChange={(e) => setDonationAmount(e.target.value)}
                        min="0.001"
                        step="0.001"
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                        placeholder="0.0"
                      />
                    </div>

                    {error && (
                      <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-600">{error}</p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isProcessing || !donationAmount}
                      className="w-full py-3 px-4 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isProcessing ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Processing Donation...
                        </>
                      ) : (
                        `Donate ${donationAmount ? donationAmount + ' SEP' : ''}`
                      )}
                    </button>
                  </form>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default DonationModal; 