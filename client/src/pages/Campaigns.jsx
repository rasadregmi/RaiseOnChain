import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DonationModal from '../components/DonationModal';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [filteredCampaigns, setFilteredCampaigns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);

  // Mock data for campaigns
  const mockCampaigns = [
    {
      id: 1,
      title: "Help Build a Community Center",
      description: "We're raising funds to build a community center that will serve as a hub for local activities, education, and social gatherings.",
      goal: 50,
      raised: 32.5,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      category: "community",
      deadline: "2024-02-15",
      creator: "0xf50BAdCae662408DF1F06D35082644eFBd459C9B",
      donors: 156,
      daysLeft: 12
    },
    {
      id: 2,
      title: "Clean Water for Rural Village",
      description: "Providing clean drinking water to a rural village of 500 people through sustainable water purification systems.",
      goal: 25,
      raised: 18.2,
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
      category: "charity",
      deadline: "2024-01-30",
      creator: "0xf50BAdCae662408DF1F06D35082644eFBd459C9B",
      donors: 89,
      daysLeft: 5
    },
    {
      id: 3,
      title: "Educational Technology for Schools",
      description: "Equipping 10 schools with modern educational technology including computers, tablets, and interactive learning tools.",
      goal: 75,
      raised: 45.8,
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      category: "education",
      deadline: "2024-03-01",
      creator: "0xf50BAdCae662408DF1F06D35082644eFBd459C9B",
      donors: 234,
      daysLeft: 25
    },
    {
      id: 4,
      title: "Medical Supplies for Disaster Relief",
      description: "Providing essential medical supplies and equipment for disaster relief efforts in affected regions.",
      goal: 100,
      raised: 67.3,
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=300&fit=crop",
      category: "healthcare",
      deadline: "2024-02-20",
      creator: "0xf50BAdCae662408DF1F06D35082644eFBd459C9B",
      donors: 312,
      daysLeft: 15
    },
    {
      id: 5,
      title: "Renewable Energy Project",
      description: "Installing solar panels and wind turbines to provide clean energy for a small town of 2,000 residents.",
      goal: 150,
      raised: 89.7,
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
      category: "environment",
      deadline: "2024-04-15",
      creator: "0xf50BAdCae662408DF1F06D35082644eFBd459C9B",
      donors: 445,
      daysLeft: 45
    },
    {
      id: 6,
      title: "Art Gallery for Local Artists",
      description: "Creating a space for local artists to showcase their work and connect with the community.",
      goal: 30,
      raised: 22.1,
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=300&fit=crop",
      category: "art",
      deadline: "2024-02-10",
      creator: "0xf50BAdCae662408DF1F06D35082644eFBd459C9B",
      donors: 78,
      daysLeft: 8
    }
  ];

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setCampaigns(mockCampaigns);
      setFilteredCampaigns(mockCampaigns);
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    let filtered = campaigns;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(campaign =>
        campaign.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        campaign.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter(campaign => campaign.category === selectedCategory);
    }

    // Sort campaigns
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
        filtered = [...filtered].sort((a, b) => a.daysLeft - b.daysLeft);
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
    // Implement your formatting logic here
    return address.slice(0, 6) + '...' + address.slice(-4);
  };

  if (isLoading) {
    return (
      <div className="flex flex-col w-full min-h-screen bg-gray-50">
        {/* Space for navbar */}
        <div className="w-[calc(100%-30px)] mx-auto bg-white rounded-b-[30px]" style={{ 
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)'
        }}>
          <div className="h-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
            {/* This space is reserved for navbar component */}
          </div>
        </div>

        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-black mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading campaigns...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full min-h-screen bg-gray-50">
      {/* Space for navbar */}
      <div className="w-[calc(100%-30px)] mx-auto bg-white rounded-b-[30px]" style={{ 
        boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -5px rgba(0, 0, 0, 0.04)'
      }}>
        <div className="h-20 max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
          {/* This space is reserved for navbar component */}
        </div>
      </div>

      <div className="w-full px-4 sm:px-6 lg:px-8 mt-10 md:mt-12 pb-12">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-black leading-tight">
              Discover Campaigns
            </h1>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto mb-8">
              Support meaningful projects and bring real change through community-driven funding.
            </p>
            <Link 
              to="/new-campaign" 
              className="inline-flex items-center px-8 py-4 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
              Start Your Campaign
            </Link>
          </div>

          {/* Filters and Search */}
          <div className="bg-white rounded-[20px] p-6 mb-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Search */}
              <div className="md:col-span-2">
                <input
                  type="text"
                  placeholder="Search campaigns..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
                />
              </div>

              {/* Category Filter */}
              <div>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
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

              {/* Sort */}
              <div>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none"
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

          {/* Campaigns Grid */}
          {filteredCampaigns.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No campaigns found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('');
                  setSortBy('newest');
                }}
                className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCampaigns.map((campaign) => {
                const progressPercentage = (campaign.raised / campaign.goal) * 100;
                return (
                  <div key={campaign.id} className="bg-white rounded-[20px] shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                    {/* Campaign Image */}
                    <div className="relative h-48 bg-gray-200">
                      <img
                        src={campaign.image}
                        alt={campaign.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop';
                        }}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-black bg-opacity-75 text-white text-sm rounded-full">
                          {getCategoryLabel(campaign.category)}
                        </span>
                      </div>
                      {campaign.daysLeft <= 7 && (
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full font-medium">
                            {campaign.daysLeft} days left
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Campaign Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-black mb-2 line-clamp-2">
                        {campaign.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {campaign.description}
                      </p>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-gray-600">
                            {campaign.raised.toFixed(1)} SEP raised
                          </span>
                          <span className="text-gray-600">
                            {progressPercentage.toFixed(1)}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${getProgressColor(progressPercentage)}`}
                            style={{ width: `${Math.min(progressPercentage, 100)}%` }}
                          ></div>
                        </div>
                        <div className="flex justify-between text-sm mt-1">
                          <span className="text-gray-500">Goal: {campaign.goal} SEP</span>
                          <span className="text-gray-500">{campaign.donors} donors</span>
                        </div>
                      </div>

                      {/* Campaign Footer */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="text-sm text-gray-500">
                          <span>Creator: {formatAddress(campaign.creator)}</span>
                        </div>
                        <div className="flex gap-2">
                          <Link
                            to={`/campaign/${campaign.id}`}
                            className="px-4 py-2 bg-[#e8e8e8] text-black rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                          >
                            View Details
                          </Link>
                          <button
                            onClick={() => handleDonateClick(campaign)}
                            className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                          >
                            Donate
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Load More Button */}
          {filteredCampaigns.length > 0 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-[#e8e8e8] text-black rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors">
                Load More Campaigns
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Donation Modal */}
      {selectedCampaign && (
        <DonationModal
          campaign={selectedCampaign}
          isOpen={isDonationModalOpen}
          onClose={handleCloseDonationModal}
        />
      )}
    </div>
  );
};

export default Campaigns; 