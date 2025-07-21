pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/Strings.sol";

/**
 * @title CrowdfundingCampaign
 * @dev A smart contract for decentralized crowdfunding campaigns
 */
contract CrowdfundingCampaign {
    using Strings for uint256;

    struct Campaign {
        uint256 id;
        address creator;
        string title;
        string description;
        string imageUrl;
        uint256 goal;
        uint256 raised;
        uint256 deadline;
        bool isActive;
        bool isFunded;
        string category;
        address beneficiary;
        uint256 totalDonors;
        mapping(address => uint256) donations;
        address[] donors;
    }

    uint256 public campaignCount;
    mapping(uint256 => Campaign) public campaigns;
    mapping(address => uint256[]) public userCampaigns;
    
    event CampaignCreated(
        uint256 indexed campaignId,
        address indexed creator,
        string title,
        uint256 goal,
        uint256 deadline
    );
    
    event DonationMade(
        uint256 indexed campaignId,
        address indexed donor,
        uint256 amount
    );
    
    event CampaignFunded(
        uint256 indexed campaignId,
        uint256 totalRaised
    );
    
    event FundsWithdrawn(
        uint256 indexed campaignId,
        address indexed beneficiary,
        uint256 amount
    );

    modifier campaignExists(uint256 _campaignId) {
        require(_campaignId > 0 && _campaignId <= campaignCount, "Campaign does not exist");
        _;
    }
    
    modifier campaignActive(uint256 _campaignId) {
        require(campaigns[_campaignId].isActive, "Campaign is not active");
        _;
    }
    
    modifier onlyCreator(uint256 _campaignId) {
        require(campaigns[_campaignId].creator == msg.sender, "Only creator can perform this action");
        _;
    }
    
    modifier deadlineNotPassed(uint256 _campaignId) {
        require(block.timestamp < campaigns[_campaignId].deadline, "Campaign deadline has passed");
        _;
    }

    /**
     * @dev Create a new crowdfunding campaign
     * @param _title Campaign title
     * @param _description Campaign description
     * @param _imageUrl Campaign image URL
     * @param _goal Funding goal in wei
     * @param _deadline Campaign deadline timestamp
     * @param _category Campaign category
     * @param _beneficiary Address that will receive the funds
     */
    function createCampaign(
        string memory _title,
        string memory _description,
        string memory _imageUrl,
        uint256 _goal,
        uint256 _deadline,
        string memory _category,
        address _beneficiary
    ) external {
        require(bytes(_title).length > 0, "Title cannot be empty");
        require(bytes(_description).length > 0, "Description cannot be empty");
        require(_goal > 0, "Goal must be greater than 0");
        require(_deadline > block.timestamp, "Deadline must be in the future");
        require(_beneficiary != address(0), "Invalid beneficiary address");

        campaignCount++;
        
        Campaign storage newCampaign = campaigns[campaignCount];
        newCampaign.id = campaignCount;
        newCampaign.creator = msg.sender;
        newCampaign.title = _title;
        newCampaign.description = _description;
        newCampaign.imageUrl = _imageUrl;
        newCampaign.goal = _goal;
        newCampaign.raised = 0;
        newCampaign.deadline = _deadline;
        newCampaign.isActive = true;
        newCampaign.isFunded = false;
        newCampaign.category = _category;
        newCampaign.beneficiary = _beneficiary;
        newCampaign.totalDonors = 0;

        userCampaigns[msg.sender].push(campaignCount);

        emit CampaignCreated(
            campaignCount,
            msg.sender,
            _title,
            _goal,
            _deadline
        );
    }

    /**
     * @dev Donate to a campaign
     * @param _campaignId ID of the campaign to donate to
     */
    function donate(uint256 _campaignId) 
        external 
        payable 
        campaignExists(_campaignId)
        campaignActive(_campaignId)
        deadlineNotPassed(_campaignId)
    {
        require(msg.value > 0, "Donation amount must be greater than 0");

        Campaign storage campaign = campaigns[_campaignId];
        
        campaign.raised += msg.value;
        
        if (campaign.donations[msg.sender] == 0) {
            campaign.donors.push(msg.sender);
            campaign.totalDonors++;
        }
        
        campaign.donations[msg.sender] += msg.value;

        if (campaign.raised >= campaign.goal && !campaign.isFunded) {
            campaign.isFunded = true;
            emit CampaignFunded(_campaignId, campaign.raised);
        }

        emit DonationMade(_campaignId, msg.sender, msg.value);
    }

    /**
     * @dev Withdraw funds from a funded campaign
     * @param _campaignId ID of the campaign to withdraw from
     */
    function withdrawFunds(uint256 _campaignId) 
        external 
        campaignExists(_campaignId)
    {
        Campaign storage campaign = campaigns[_campaignId];
        
        require(
            msg.sender == campaign.creator || msg.sender == campaign.beneficiary,
            "Only creator or beneficiary can withdraw funds"
        );
        require(campaign.isFunded, "Campaign is not funded");
        require(campaign.isActive, "Campaign is not active");

        uint256 amount = campaign.raised;
        campaign.raised = 0;
        campaign.isActive = false;

        (bool success, ) = campaign.beneficiary.call{value: amount}("");
        require(success, "Transfer failed");

        emit FundsWithdrawn(_campaignId, campaign.beneficiary, amount);
    }

    /**
     * @dev Get campaign basic info
     * @param _campaignId ID of the campaign
     */
    function getCampaignBasic(uint256 _campaignId)
        external
        view
        campaignExists(_campaignId)
        returns (
            uint256 id,
            address creator,
            string memory title,
            string memory description
        )
    {
        Campaign storage campaign = campaigns[_campaignId];
        return (
            campaign.id,
            campaign.creator,
            campaign.title,
            campaign.description
        );
    }

    /**
     * @dev Get campaign media and category
     * @param _campaignId ID of the campaign
     */
    function getCampaignMedia(uint256 _campaignId)
        external
        view
        campaignExists(_campaignId)
        returns (
            string memory imageUrl,
            string memory category,
            address beneficiary
        )
    {
        Campaign storage campaign = campaigns[_campaignId];
        return (
            campaign.imageUrl,
            campaign.category,
            campaign.beneficiary
        );
    }

    /**
     * @dev Get campaign statistics
     * @param _campaignId ID of the campaign
     */
    function getCampaignStats(uint256 _campaignId)
        external
        view
        campaignExists(_campaignId)
        returns (
            uint256 goal,
            uint256 raised,
            uint256 deadline,
            bool isActive,
            bool isFunded,
            uint256 totalDonors
        )
    {
        Campaign storage campaign = campaigns[_campaignId];
        return (
            campaign.goal,
            campaign.raised,
            campaign.deadline,
            campaign.isActive,
            campaign.isFunded,
            campaign.totalDonors
        );
    }

    /**
     * @dev Get donation amount for a specific donor
     * @param _campaignId ID of the campaign
     * @param _donor Address of the donor
     * @return Donation amount
     */
    function getDonationAmount(uint256 _campaignId, address _donor) 
        external 
        view 
        campaignExists(_campaignId)
        returns (uint256)
    {
        return campaigns[_campaignId].donations[_donor];
    }

    /**
     * @dev Get all donors for a campaign
     * @param _campaignId ID of the campaign
     * @return Array of donor addresses
     */
    function getCampaignDonors(uint256 _campaignId) 
        external 
        view 
        campaignExists(_campaignId)
        returns (address[] memory)
    {
        return campaigns[_campaignId].donors;
    }

    /**
     * @dev Get campaigns created by a user
     * @param _user Address of the user
     * @return Array of campaign IDs
     */
    function getUserCampaigns(address _user) 
        external 
        view 
        returns (uint256[] memory)
    {
        return userCampaigns[_user];
    }

    /**
     * @dev Get campaign progress percentage
     * @param _campaignId ID of the campaign
     * @return Progress percentage (0-100)
     */
    function getCampaignProgress(uint256 _campaignId) 
        external 
        view 
        campaignExists(_campaignId)
        returns (uint256)
    {
        Campaign storage campaign = campaigns[_campaignId];
        if (campaign.goal == 0) return 0;
        return (campaign.raised * 100) / campaign.goal;
    }

    /**
     * @dev Check if campaign deadline has passed
     * @param _campaignId ID of the campaign
     * @return True if deadline has passed
     */
    function isDeadlinePassed(uint256 _campaignId) 
        external 
        view 
        campaignExists(_campaignId)
        returns (bool)
    {
        return block.timestamp >= campaigns[_campaignId].deadline;
    }

    /**
     * @dev Get total number of campaigns
     * @return Total campaign count
     */
    function getTotalCampaigns() external view returns (uint256) {
        return campaignCount;
    }

    /**
     * @dev Emergency function to pause campaign (only creator)
     * @param _campaignId ID of the campaign
     */
    function pauseCampaign(uint256 _campaignId) 
        external 
        campaignExists(_campaignId)
        onlyCreator(_campaignId)
        campaignActive(_campaignId)
    {
        campaigns[_campaignId].isActive = false;
    }

    /**
     * @dev Resume paused campaign (only creator)
     * @param _campaignId ID of the campaign
     */
    function resumeCampaign(uint256 _campaignId) 
        external 
        campaignExists(_campaignId)
        onlyCreator(_campaignId)
        deadlineNotPassed(_campaignId)
    {
        require(!campaigns[_campaignId].isActive, "Campaign is already active");
        campaigns[_campaignId].isActive = true;
    }

    /**
     * @dev Check if a campaign exists
     * @param _campaignId ID of the campaign
     */
    function campaignExistsPublic(uint256 _campaignId) external view returns (bool) {
        return _campaignId > 0 && _campaignId <= campaignCount;
    }

    /**
     * @dev Get the creator of a campaign
     * @param _campaignId ID of the campaign
     */
    function getCampaignCreator(uint256 _campaignId) external view campaignExists(_campaignId) returns (address) {
        return campaigns[_campaignId].creator;
    }
} 