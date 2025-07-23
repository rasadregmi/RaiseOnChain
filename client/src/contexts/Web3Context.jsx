import { createContext, useContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

const CHAIN_ID = import.meta.env.VITE_CHAIN_ID || '0x7a69';
const CHAIN_NAME = import.meta.env.VITE_CHAIN_NAME || 'Hardhat Localhost 8545';
const RPC_URL = import.meta.env.VITE_RPC_URL || 'http://127.0.0.1:8545';

const NETWORK_CONFIG = {
    chainId: CHAIN_ID,
    chainName: CHAIN_NAME,
    rpcUrls: [RPC_URL],
    nativeCurrency: {
        name: 'ETH',
        symbol: 'ETH',
        decimals: 18,
    },
    blockExplorerUrls: [],
};

export function Web3Provider({ children }) {
    const [isConnected, setIsConnected] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [isCorrectNetwork, setIsCorrectNetwork] = useState(false);
    const [currentNetwork, setCurrentNetwork] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);
    const [balance, setBalance] = useState(null);
    const [testBalance, setTestBalance] = useState(null);

    async function fetchBalance(address) {
        if (!window.ethereum || !address) return;
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(address);
        setBalance({
            raw: balance,
            displayValue: (parseFloat(ethers.utils.formatEther(balance))).toFixed(4),
        });
    }

    function hexToDecimal(hex) {
        return parseInt(hex, 16);
    }

    function fromWei(wei) {
        return parseFloat(ethers.utils.formatEther(wei));
    }

    function checkCorrectNetwork(chainId) {
        return chainId === NETWORK_CONFIG.chainId;
    }

    async function switchToConfiguredNetwork() {
        if (!window.ethereum) return;
        await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [NETWORK_CONFIG],
        });
    }

    async function connectWallet() {
        if (!window.ethereum) throw new Error('MetaMask not installed');
        setIsConnecting(true);
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setWalletAddress(accounts[0]);
            setIsConnected(true);
            setIsConnecting(false);
        } catch (error) {
            setIsConnecting(false);
            throw error;
        }
    }

    useEffect(() => {
        if (!window.ethereum) return;
        const handleAccountsChanged = (accounts) => {
            if (accounts.length > 0) {
                setWalletAddress(accounts[0]);
                setIsConnected(true);
            } else {
                setWalletAddress(null);
                setIsConnected(false);
            }
        };
        window.ethereum.on('accountsChanged', handleAccountsChanged);
        return () => {
            window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        };
    }, []);

    useEffect(() => {
        if (!window.ethereum) return;
        const handleChainChanged = (chainId) => {
            setCurrentNetwork(chainId);
            setIsCorrectNetwork(checkCorrectNetwork(chainId));
            window.location.reload();
        };
        window.ethereum.on('chainChanged', handleChainChanged);
        return () => {
            window.ethereum.removeListener('chainChanged', handleChainChanged);
        };
    }, []);

    useEffect(() => {
        if (!window.ethereum) return;
        window.ethereum.request({ method: 'eth_chainId' }).then((chainId) => {
            setCurrentNetwork(chainId);
            setIsCorrectNetwork(checkCorrectNetwork(chainId));
        });
    }, []);

    useEffect(() => {
        if (walletAddress && isCorrectNetwork) {
            fetchBalance(walletAddress);
        }
    }, [walletAddress, isCorrectNetwork]);

    function formatAddress(address) {
        if (!address) return '';
        return address.slice(0, 6) + '...' + address.slice(-4);
    }

    function getNetworkName(chainId) {
        switch (chainId) {
            case '0x7a69':
                return 'Hardhat Localhost 8545';
            default:
                return 'Unknown';
        }
    }

    return (
        <Web3Context.Provider
            value={{
                isConnected,
                isConnecting,
                isCorrectNetwork,
                currentNetwork,
                connectWallet,
                switchToLocalhost: switchToConfiguredNetwork,
                walletAddress,
                balance,
                testBalance,
                formatAddress,
                getNetworkName: () => NETWORK_CONFIG.chainName,
                fetchBalance,
            }}
        >
            {children}
        </Web3Context.Provider>
    );
}

export function useWeb3() {
    return useContext(Web3Context);
} 