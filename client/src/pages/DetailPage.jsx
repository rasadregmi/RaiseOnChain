import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CampaignDetail from "../components/campaignDetail";
import DonationModal from "../components/DonationModal";
import { getCampaign, getAllCampaigns, withdrawFunds } from '../services/contractService';
import { useWeb3 } from '../contexts/Web3Context';

export default function ProductDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [campaign, setCampaign] = useState(null);
  const [relatedCampaigns, setRelatedCampaigns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const { walletAddress } = useWeb3();
  const [withdrawing, setWithdrawing] = useState(false);
  const [withdrawError, setWithdrawError] = useState(null);
  const [withdrawSuccess, setWithdrawSuccess] = useState(false);

  useEffect(() => {
    async function fetchCampaign() {
      setIsLoading(true);
      try {
        const campaignId = parseInt(id);
        const onChainCampaign = await getCampaign(campaignId);
        setCampaign(onChainCampaign);
        const allCampaigns = await getAllCampaigns();
        const related = allCampaigns
          .filter(c => c.category === onChainCampaign.category && Number(c.id) !== Number(campaignId))
          .slice(0, 3);
        setRelatedCampaigns(related);
      } catch (err) {
        setCampaign(null);
        setRelatedCampaigns([]);
        navigate('/campaigns');
      }
      setIsLoading(false);
    }
    fetchCampaign();
  }, [id, navigate]);

  const handleDonateClick = () => {
    setIsDonationModalOpen(true);
  };

  const handleCloseDonationModal = () => {
    setIsDonationModalOpen(false);
  };

  const handleViewCampaign = (campaignId) => {
    navigate(`/campaign/${campaignId}`);
  };

  const getCategoryLabel = (category) => {
    const labels = {
      charity: 'Charity & Non-Profit',
      education: 'Education',
      healthcare: 'Healthcare',
      environment: 'Environment',
      technology: 'Technology',
      art: 'Art & Culture',
      community: 'Community Development',
      emergency: 'Emergency Relief'
    };
    return labels[category] || category;
  };

  const canWithdraw = campaign && campaign.isFunded && campaign.isActive && walletAddress && (walletAddress.toLowerCase() === campaign.beneficiary.toLowerCase() || walletAddress.toLowerCase() === campaign.creator.toLowerCase());

  const handleWithdraw = async () => {
    setWithdrawing(true);
    setWithdrawError(null);
    setWithdrawSuccess(false);
    try {
      await withdrawFunds(campaign.id);
      setWithdrawSuccess(true);
    } catch (err) {
      setWithdrawError(err.message || 'Withdrawal failed');
    }
    setWithdrawing(false);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading campaign details...</p>
        </div>
      </div>
    );
  }

  if (!campaign) {
    return null;
  }

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <button 
                  onClick={() => navigate('/campaigns')}
                  className="hover:text-gray-700 transition-colors"
                >
                  Campaigns
                </button>
              </li>
              <li>/</li>
              <li className="text-gray-900">{campaign.title}</li>
            </ol>
          </nav>

          <CampaignDetail campaign={campaign} onDonate={handleDonateClick} 
            showWithdrawButton={canWithdraw} onWithdraw={handleWithdraw} />

          {relatedCampaigns.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Campaigns</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedCampaigns.map((relatedCampaign) => (
                  <div 
                    key={relatedCampaign.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                    onClick={() => handleViewCampaign(relatedCampaign.id)}
                  >
                    <img
                      src={relatedCampaign.imageUrl}
                      alt={relatedCampaign.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
                          {getCategoryLabel(relatedCampaign.category)}
                        </span>
                        <span className="text-xs text-gray-500">{Math.max(0, Math.ceil((relatedCampaign.deadline - new Date()) / (1000 * 60 * 60 * 24)))} days left</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                        {relatedCampaign.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {relatedCampaign.description}
                      </p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-500">Raised</span>
                          <span className="font-medium">{relatedCampaign.raised} ETH</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${Math.min((relatedCampaign.raised / relatedCampaign.goal) * 100, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Goal: {relatedCampaign.goal} ETH</span>
                          <span>{relatedCampaign.totalDonors} donors</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <DonationModal
        campaign={campaign}
        isOpen={isDonationModalOpen}
        onClose={handleCloseDonationModal}
      />

      {withdrawing && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-30 z-50">
          <div className="bg-white p-6 rounded shadow text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-black mx-auto mb-2"></div>
            <p>Processing withdrawal...</p>
          </div>
        </div>
      )}
      {withdrawSuccess && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow z-50">Withdrawal successful!</div>
      )}
      {withdrawError && (
        <div className="fixed top-4 right-4 bg-red-500 text-white px-4 py-2 rounded shadow z-50">{withdrawError}</div>
      )}
    </>
  );
}
