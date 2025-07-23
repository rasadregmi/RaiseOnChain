import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DonationModal from '../components/DonationModal';
import { getAllCampaigns } from '../services/contractService';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import Footer from '../components/ui/footer';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  useEffect(() => {
    async function fetchCampaigns() {
      setIsLoading(true);
      try {
        const onChainCampaigns = await getAllCampaigns();
        setCampaigns(onChainCampaigns);
        setFilteredCampaigns(onChainCampaigns);
      } catch (err) {
        setCampaigns([]);
        setFilteredCampaigns([]);
      }
      setIsLoading(false);
    }
    fetchCampaigns();
  }, []);

  useEffect(() => {
    let filtered = campaigns;
    if (searchTerm) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedCategory) {
      filtered = filtered.filter(campaign => campaign.category === selectedCategory);
    }
    switch (sortBy) {
      case 'newest':
        filtered = [...filtered].sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
        break;
      case 'oldest':
        filtered = [...filtered].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
        break;
      case 'most-funded':
        filtered = [...filtered].sort((a, b) => (b.raised / b.goal) - (a.raised / a.goal));
        break;
      case 'least-funded':
        filtered = [...filtered].sort((a, b) => (a.raised / a.goal) - (b.raised / b.goal));
        break;
      case 'ending-soon':
        filtered = [...filtered].sort((a, b) => a.deadline - b.deadline);
        break;
      default:
        break;
    }
    setFilteredCampaigns(filtered);
  }, [campaigns, searchTerm, selectedCategory, sortBy]);

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

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'bg-green-500';
    if (percentage >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const handleDonateClick = (campaign) => {
    setSelectedCampaign(campaign);
    setIsDonationModalOpen(true);
  };

  const handleCloseDonationModal = () => {
    setIsDonationModalOpen(false);
    setSelectedCampaign(null);
  };

  const formatAddress = (address) => {
    return address.slice(0, 6) + '...' + address.slice(-4);
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading campaigns...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-6">
            <h1 className="text-2xl sm:text-3xl font-black mb-3 text-primary leading-tight">
              Discover Campaigns
            </h1>
            <p className="text-base text-gray-700 max-w-xl mx-auto mb-4">
              Support meaningful projects and bring real change through community-driven funding.
            </p>
            <Link
              to="/new-campaign"
              className="inline-flex items-center px-4 py-2 bg-black text-white rounded-full text-sm font-semibold shadow hover:bg-gray-900 transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Start Your Campaign
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-3 mb-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm"
                />
              </div>

              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm"
                >
                  <option value="">All Categories</option>
                  <option value="charity">Charity & Non-Profit</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="environment">Environment</option>
                  <option value="technology">Technology</option>
                  <option value="art">Art & Culture</option>
                  <option value="community">Community Development</option>
                  <option value="emergency">Emergency Relief</option>
                </select>
              </div>

              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-sm"
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="most-funded">Most Funded</option>
                  <option value="least-funded">Least Funded</option>
                  <option value="ending-soon">Ending Soon</option>
                </select>
              </div>
            </div>
          </div>

          {filteredCampaigns.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <Button onClick={() => { setSearchTerm(''); setSelectedCategory(''); setSortBy('newest'); }} variant="primary" size="sm">
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCampaigns.map((campaign) => {
                const progressPercentage = (campaign.raised / campaign.goal) * 100;
                return (
                  <Card key={campaign.id} className="overflow-hidden hover:shadow-2xl transition-shadow">
                    <div className="relative h-32 bg-gray-200">
                      <img
                        src={campaign.imageUrl || 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop'}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="px-2 py-0.5 bg-primary text-white text-xs rounded-full shadow">
                          {getCategoryLabel(campaign.category)}
                        </span>
                      </div>
                    </div>
                    <CardContent>
                      <h3 className="text-base font-bold text-black mb-1 line-clamp-2">
                        {campaign.title}
                      </h3>
                      <p className="text-xs text-gray-600 mb-2 line-clamp-3">
                        {campaign.description}
                      </p>
                      <div className="mb-2">
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-gray-600">
                            {campaign.raised.toFixed(1)} ETH raised
                          </span>
                          <span className="text-gray-600">
                            {progressPercentage.toFixed(1)}%
                          </span>
                        </div>
                        <Progress value={progressPercentage} className="mb-1" />
                        <div className="flex justify-between text-xs mt-1">
                          <span className="text-gray-500">Goal: {campaign.goal} ETH</span>
                          <span className="text-gray-500">{campaign.totalDonors || 0} donors</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-gray-100 gap-2">
                        <div className="text-xs text-gray-500">
                          <span>Creator: {formatAddress(campaign.creator)}</span>
                        </div>
                        <div className="flex gap-1">
                          <Link
                            to={`/campaign/${campaign.id}`}
                            className="px-2 py-1 bg-primary text-white rounded-full text-xs font-semibold shadow hover:bg-primary/90 transition-colors"
                          >
                            View Details
                          </Link>
                          <Button onClick={() => handleDonateClick(campaign)} variant="secondary" size="sm">
                            Donate
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}

          {filteredCampaigns.length > 0 && filteredCampaigns.length < campaigns.length && (
            <div className="text-center mt-6">
              <button className="px-4 py-2 bg-[#e8e8e8] text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Load More Campaigns
              </button>
            </div>
          )}
        </div>
      </div>

      {selectedCampaign && (
        <DonationModal
          campaign={selectedCampaign}
          isOpen={isDonationModalOpen}
          onClose={handleCloseDonationModal}
        />
      )}
      <Footer />
    </>
  );
};

export default Campaigns; 