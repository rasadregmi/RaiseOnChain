import { useState } from 'react';
import { Link } from 'react-router-dom';

const NewCampaign = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    goal: '',
    category: '',
    image: null,
    deadline: '',
    beneficiaryAddress: '',
    tags: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      image: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Handle form submission logic here
      console.log('Campaign data:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Redirect to campaigns page after successful creation
      // window.location.href = '/campaigns';
    } catch (error) {
      console.error('Error creating campaign:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-black mb-6 text-black leading-tight">
              Create New Campaign
            </h1>
            <p className="text-lg text-[#4a5568] max-w-2xl mx-auto">
              Launch your campaign on the blockchain and bring real change through community-driven support.
            </p>
          </div>

          {/* Campaign Form */}
          <div className="bg-white rounded-[30px] p-8 sm:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Campaign Title */}
              <div>
                <label htmlFor="title" className="block text-lg font-semibold text-black mb-3">
                  Campaign Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg transition-colors"
                  placeholder="Enter your campaign title"
                />
              </div>

              {/* Campaign Description */}
              <div>
                <label htmlFor="description" className="block text-lg font-semibold text-black mb-3">
                  Campaign Description *
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg resize-none transition-colors"
                  placeholder="Describe your campaign, its goals, and how the funds will be used..."
                />
              </div>

              {/* Campaign Goal */}
              <div>
                <label htmlFor="goal" className="block text-lg font-semibold text-black mb-3">
                  Funding Goal (SEP) *
                </label>
                <input
                  type="number"
                  id="goal"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  required
                  min="0"
                  step="0.01"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg transition-colors"
                  placeholder="0.00"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Set a realistic funding goal for your campaign on Sepolia testnet
                </p>
              </div>

              {/* Campaign Deadline */}
              <div>
                <label htmlFor="deadline" className="block text-lg font-semibold text-black mb-3">
                  Campaign Deadline *
                </label>
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={handleInputChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg transition-colors"
                />
              </div>

              {/* Campaign Category */}
              <div>
                <label htmlFor="category" className="block text-lg font-semibold text-black mb-3">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg transition-colors"
                >
                  <option value="">Select a category</option>
                  <option value="charity">Charity & Non-Profit</option>
                  <option value="education">Education</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="environment">Environment</option>
                  <option value="technology">Technology</option>
                  <option value="art">Art & Culture</option>
                  <option value="community">Community Development</option>
                  <option value="emergency">Emergency Relief</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Beneficiary Address */}
              <div>
                <label htmlFor="beneficiaryAddress" className="block text-lg font-semibold text-black mb-3">
                  Beneficiary Wallet Address *
                </label>
                <input
                  type="text"
                  id="beneficiaryAddress"
                  name="beneficiaryAddress"
                  value={formData.beneficiaryAddress}
                  onChange={handleInputChange}
                  required
                  pattern="^0x[a-fA-F0-9]{40}$"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg transition-colors font-mono"
                  placeholder="0x..."
                />
                <p className="text-sm text-gray-500 mt-2">
                  The wallet address that will receive the funds
                </p>
              </div>

              {/* Campaign Tags */}
              <div>
                <label htmlFor="tags" className="block text-lg font-semibold text-black mb-3">
                  Tags
                </label>
                <input
                  type="text"
                  id="tags"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg transition-colors"
                  placeholder="Enter tags separated by commas (e.g., charity, education, community)"
                />
                <p className="text-sm text-gray-500 mt-2">
                  Add relevant tags to help people discover your campaign
                </p>
              </div>

              {/* Campaign Image */}
              <div>
                <label htmlFor="image" className="block text-lg font-semibold text-black mb-3">
                  Campaign Image
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors cursor-pointer">
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                  <label htmlFor="image" className="cursor-pointer">
                    <div className="space-y-4">
                      <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                        {formData.image ? (
                          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                          </svg>
                        )}
                      </div>
                      <div>
                        <p className="text-lg font-medium text-gray-700">
                          {formData.image ? formData.image.name : 'Click to upload image'}
                        </p>
                        <p className="text-sm text-gray-500 mt-1">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <Link 
                  to="/campaigns" 
                  className="flex-1 py-4 px-8 bg-[#e8e8e8] text-black rounded-lg text-lg font-medium hover:bg-gray-200 transition-colors text-center"
                >
                  Cancel
                </Link>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="flex-1 py-4 px-8 bg-black text-white rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Campaign...
                    </>
                  ) : (
                    'Create Campaign'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-[#4a5568] mb-4">
              By creating a campaign, you agree to our terms of service and community guidelines.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <Link to="/terms" className="text-green-600 hover:text-green-700">Terms of Service</Link>
              <Link to="/privacy" className="text-green-600 hover:text-green-700">Privacy Policy</Link>
              <Link to="/guidelines" className="text-green-600 hover:text-green-700">Community Guidelines</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCampaign; 