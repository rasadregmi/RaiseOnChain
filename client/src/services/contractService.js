import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { ethers } from "ethers";
import contractAbi from "../../../artifacts/contracts/CrowdfundingCampaign.sol/CrowdfundingCampaign.json";

let CONTRACT_ADDRESS = import.meta.env.VITE_CONTRACT_ADDRESS || "";
const RPC_URL = import.meta.env.VITE_RPC_URL || "http://127.0.0.1:8545";
const CHAIN_ID = import.meta.env.VITE_CHAIN_ID ? parseInt(import.meta.env.VITE_CHAIN_ID, 16) : 31337;

const getSdk = () => {
  if (typeof window !== "undefined" && window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ThirdwebSDK(signer, {
      chainId: CHAIN_ID,
      rpc: [RPC_URL],
    });
  }
  throw new Error("No Ethereum provider found. Please install MetaMask.");
};

export const setContractAddress = (address) => {
  CONTRACT_ADDRESS = address;
};

export const createCampaign = async (campaignData) => {
  if (!CONTRACT_ADDRESS) throw new Error("Contract address not set");
  const sdk = getSdk();
  const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);

  const goalInWei = ethers.utils.parseEther(campaignData.goal.toString());
  const deadline = Math.floor(new Date(campaignData.deadline).getTime() / 1000);

  return contract.call("createCampaign", [
    campaignData.title,
    campaignData.description,
    campaignData.imageUrl || "",
    goalInWei,
    deadline,
    campaignData.category,
    campaignData.beneficiaryAddress,
  ]);
};

export const donateToCampaign = async (campaignId, amount) => {
  if (!CONTRACT_ADDRESS) throw new Error("Contract address not set");
  const sdk = getSdk();
  const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);

  const value = ethers.utils.parseEther(amount.toString());
  return contract.call("donate", [campaignId], { value });
};


export const getCampaign = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);

    const basic = await contract.call("getCampaignBasic", [campaignId]);
    const media = await contract.call("getCampaignMedia", [campaignId]);
    const stats = await contract.call("getCampaignStats", [campaignId]);

    const campaign = {
      id: basic[0].toString(),
      creator: basic[1],
      title: basic[2],
      description: basic[3],
      imageUrl: media[0],
      category: media[1],
      beneficiary: media[2],
      goal: parseFloat(stats[0].toString()) / Math.pow(10, 18),
      raised: parseFloat(stats[1].toString()) / Math.pow(10, 18), 
      deadline: new Date(parseInt(stats[2].toString()) * 1000), 
      isActive: stats[3],
      isFunded: stats[4],
      totalDonors: parseInt(stats[5].toString()),
    };

    return campaign;
  } catch (error) {
    console.error("Error getting campaign:", error);
    throw error;
  }
};

export const getAllCampaigns = async () => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const totalCampaigns = await contract.call("getTotalCampaigns");
    
    const campaigns = [];
    const campaignCount = parseInt(totalCampaigns.toString());
    
    for (let i = 1; i <= campaignCount; i++) {
      try {
        const campaign = await getCampaign(i);
        if (campaign.isActive) {
          campaigns.push(campaign);
        }
      } catch (error) {
        console.warn(`Error fetching campaign ${i}:`, error);
        continue;
      }
    }
    
    return campaigns;
  } catch (error) {
    console.error("Error getting all campaigns:", error);
    throw error;
  }
};

export const getUserCampaigns = async (userAddress) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const campaignIds = await contract.call("getUserCampaigns", [userAddress]);
    
    const campaigns = [];
    for (const id of campaignIds) {
      try {
        const campaign = await getCampaign(parseInt(id.toString()));
        campaigns.push(campaign);
      } catch (error) {
        console.warn(`Error fetching user campaign ${id}:`, error);
        continue;
      }
    }
    
    return campaigns;
  } catch (error) {
    console.error("Error getting user campaigns:", error);
    throw error;
  }
};

export const getCampaignDonors = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const donors = await contract.call("getCampaignDonors", [campaignId]);
    
    return donors;
  } catch (error) {
    console.error("Error getting campaign donors:", error);
    throw error;
  }
};

export const getDonationAmount = async (campaignId, donorAddress) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const amount = await contract.call("getDonationAmount", [campaignId, donorAddress]);
    
    return parseFloat(amount.toString()) / Math.pow(10, 18); 
  } catch (error) {
    console.error("Error getting donation amount:", error);
    throw error;
  }
};

export const getCampaignProgress = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const progress = await contract.call("getCampaignProgress", [campaignId]);
    
    return parseInt(progress.toString());
  } catch (error) {
    console.error("Error getting campaign progress:", error);
    throw error;
  }
};

export const isDeadlinePassed = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const passed = await contract.call("isDeadlinePassed", [campaignId]);
    
    return passed;
  } catch (error) {
    console.error("Error checking deadline:", error);
    throw error;
  }
};

export const withdrawFunds = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const result = await contract.call("withdrawFunds", [campaignId]);
    
    console.log("Funds withdrawn:", result);
    return result;
  } catch (error) {
    console.error("Error withdrawing funds:", error);
    throw error;
  }
};

export const pauseCampaign = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const result = await contract.call("pauseCampaign", [campaignId]);
    
    console.log("Campaign paused:", result);
    return result;
  } catch (error) {
    console.error("Error pausing campaign:", error);
    throw error;
  }
};

export const resumeCampaign = async (campaignId) => {
  try {
    const sdk = getSdk();
    const contract = await sdk.getContract(CONTRACT_ADDRESS, contractAbi.abi);
    
    const result = await contract.call("resumeCampaign", [campaignId]);
    
    console.log("Campaign resumed:", result);
    return result;
  } catch (error) {
    console.error("Error resuming campaign:", error);
    throw error;
  }
};

export const formatAddress = (address) => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

export const formatAmount = (amount) => {
  return parseFloat(amount).toFixed(4);
};

export const getDaysLeft = (deadline) => {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const diffTime = deadlineDate - now;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return Math.max(0, diffDays);
}; 