import { createContext, useContext, useState, useEffect } from 'react';

const Web3Context = createContext();

export const useWeb3 = () => {
  const context = useContext(Web3Context);
  if (!context) {
    throw new Error('useWeb3 must be used within a Web3Provider');
  }
  return context;
};

// Sepolia network configuration
const SEPOLIA_NETWORK = {
  chainId: '0xaa36a7', // 11155111 in hex
  chainName: 'Sepolia',
  nativeCurrency: {
    name: 'Sepolia Ether',
    symbol: 'SEP',
    decimals: 18,
  },
  rpcUrls: ['https://rpc.sepolia.org'],
  blockExplorerUrls: ['https://sepolia.etherscan.io'],
};

export const Web3Provider = ({ children }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [connectionError, setConnectionError] = useState(null);
  const [walletAddress, setWalletAddress] = useState(null);
  const [currentNetwork, setCurrentNetwork] = useState(null);
  const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
  const [balance, setBalance] = useState({ displayValue: '0', symbol: 'SEP' });

  // Fetch balance from wallet
  const fetchBalance = async (address) => {
    if (!address || typeof window.ethereum === 'undefined') return;

    try {
      console.log('Fetching balance for address:', address);
      const balanceWei = await window.ethereum.request({
        method: 'eth_getBalance',
        params: [address, 'latest']
      });
      
      console.log('Balance in Wei (hex):', balanceWei);
      
      // Convert hex string to decimal
      const balanceWeiDecimal = parseInt(balanceWei, 16);
      console.log('Balance in Wei (decimal):', balanceWeiDecimal);
      
      // Convert from Wei to Ether (18 decimals)
      const balanceEth = balanceWeiDecimal / Math.pow(10, 18);
      console.log('Balance in ETH:', balanceEth);
      
      setBalance({
        displayValue: balanceEth.toFixed(4),
        symbol: 'SEP'
      });
      
      console.log('Final balance set to:', balanceEth.toFixed(4), 'SEP');
    } catch (error) {
      console.error('Failed to fetch balance:', error);
      setBalance({ displayValue: '0', symbol: 'SEP' });
    }
  };

  // Check if we're on the correct network (Sepolia)
  const checkNetwork = async () => {
    if (typeof window.ethereum === 'undefined') return;

    try {
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      const isSepolia = chainId === SEPOLIA_NETWORK.chainId;
      setCurrentNetwork(chainId);
      setIsCorrectNetwork(isSepolia);
      return isSepolia;
    } catch (error) {
      console.error('Failed to check network:', error);
      return false;
    }
  };

  // Switch to Sepolia network
  const switchToSepolia = async () => {
    if (typeof window.ethereum === 'undefined') {
      throw new Error('MetaMask is not installed');
    }

    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: SEPOLIA_NETWORK.chainId }],
      });
      await checkNetwork();
      // Refresh balance after switching to Sepolia
      if (walletAddress) {
        await fetchBalance(walletAddress);
      }
    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask
      if (switchError.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [SEPOLIA_NETWORK],
          });
          await checkNetwork();
          // Refresh balance after adding Sepolia
          if (walletAddress) {
            await fetchBalance(walletAddress);
          }
        } catch (addError) {
          throw new Error('Failed to add Sepolia network to MetaMask');
        }
      } else {
        throw switchError;
      }
    }
  };

  const connectWallet = async () => {
    setIsConnecting(true);
    setConnectionError(null);
    
    console.log('=== WALLET CONNECTION ATTEMPT ===');
    console.log('Ethereum provider available:', typeof window.ethereum !== 'undefined');
    
    try {
      // Check if MetaMask is installed
      if (typeof window.ethereum === 'undefined') {
        throw new Error('MetaMask is not installed. Please install MetaMask to continue.');
      }

      console.log('Requesting accounts...');
      // Request account access
      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      
      console.log('Accounts received:', accounts);
      
      if (accounts.length > 0) {
        console.log('Setting wallet address:', accounts[0]);
        setWalletAddress(accounts[0]);
        
        // Check if we're on the correct network first
        console.log('Checking network...');
        const isOnCorrectNetwork = await checkNetwork();
        console.log('Is on correct network:', isOnCorrectNetwork);
        
        if (!isOnCorrectNetwork) {
          setConnectionError('Please switch to Sepolia testnet to continue.');
        } else {
          // Only fetch balance if we're on the correct network
          console.log('Fetching balance...');
          await fetchBalance(accounts[0]);
        }
      } else {
        console.log('No accounts found');
        setConnectionError('No accounts found in MetaMask');
      }
    } catch (error) {
      console.error('Failed to connect wallet:', error);
      setConnectionError(error.message || 'Failed to connect wallet');
    } finally {
      setIsConnecting(false);
    }
  };

  const refreshBalance = async () => {
    if (walletAddress) {
      await fetchBalance(walletAddress);
    }
  };

  const testBalance = async () => {
    console.log('=== BALANCE TEST ===');
    console.log('Wallet Address:', walletAddress);
    console.log('Current Network:', currentNetwork);
    console.log('Is Correct Network:', isCorrectNetwork);
    console.log('Current Balance State:', balance);
    
    if (walletAddress) {
      await fetchBalance(walletAddress);
    }
  };

  const disconnectWallet = async () => {
    setWalletAddress(null);
    setCurrentNetwork(null);
    setIsCorrectNetwork(false);
    setBalance({ displayValue: '0', symbol: 'SEP' });
  };

  const formatAddress = (address) => {
    if (!address) return '';
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getNetworkName = (chainId) => {
    switch (chainId) {
      case '0x1':
        return 'Ethereum Mainnet';
      case '0xaa36a7':
        return 'Sepolia Testnet';
      case '0x89':
        return 'Polygon';
      case '0xa':
        return 'Optimism';
      default:
        return 'Unknown Network';
    }
  };

  // Listen for account changes
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      const handleAccountsChanged = (accounts) => {
        if (accounts.length === 0) {
          setWalletAddress(null);
          setBalance({ displayValue: '0', symbol: 'SEP' });
        } else {
          setWalletAddress(accounts[0]);
          fetchBalance(accounts[0]);
        }
      };

      const handleChainChanged = (chainId) => {
        setCurrentNetwork(chainId);
        setIsCorrectNetwork(chainId === SEPOLIA_NETWORK.chainId);
        // Reload the page when network changes
        window.location.reload();
      };

      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);

      return () => {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      };
    }
  }, []);

  const value = {
    account: { address: walletAddress },
    balance,
    isConnected: !!walletAddress,
    isConnecting,
    connectionError,
    isCorrectNetwork,
    currentNetwork,
    connectWallet,
    disconnectWallet,
    switchToSepolia,
    refreshBalance,
    testBalance,
    formatAddress,
    getNetworkName
  };

  return (
    <Web3Context.Provider value={value}>
      {children}
    </Web3Context.Provider>
  );
}; 