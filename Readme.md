# RaiseOnChain - Blockchain-Based Crowdfunding Platform

RaiseOnChain is a **decentralized crowdfunding platform** that empowers users to create, manage, and support fundraising campaigns directly on the blockchain. By eliminating centralized intermediaries, RaiseOnChain ensures **transparency, security, and ownership** for all stakeholders.

## 🚀 Live Demo

*Coming soon: Localhost only (Hardhat 8545)*

## ✨ Features

- **Decentralized Campaign Creation**: Campaigns are created and stored immutably on the blockchain
- **Transparent Donations**: All contributions are recorded on-chain for full public transparency
- **Real-time Progress Tracking**: Monitor funding progress and donor activity live
- **Wallet Integration**: Seamless Web3 wallet connectivity (MetaMask)
- **Trustless Interactions**: Fund management is handled entirely by smart contracts
- **Campaign Discovery**: Explore live campaigns from the homepage
- **Donor Transparency**: View public donor lists and contribution histories per campaign
- **Smart Contract Security**: Automated fund management with no human intervention
- **Global Accessibility**: No geographic restrictions or centralized control

---

## Team Members

- Rasad Regmi - Lead Developer (Frontend & Blockchain)
- Sahira Maharjan - Frontend Developer
- Regish Shrestha - Blockchain Developer
- Aditya Thakuri - Researcher & UI/UX Designer

---

## Architecture

### Smart Contract Layer

- **Built with**: Solidity & [Thirdweb](https://thirdweb.com)
- **Responsibilities**:
  - Campaign creation
  - Donation processing
  - Immutable record storage on-chain

### Frontend Application

- **Framework**: React.js
- **Styling**: Tailwind CSS
- **Web3 Integration**: Custom Web3 Context using Thirdweb SDK
- **Navigation**: Top navbar for seamless UX

### Storage & Deployment

- **IPFS**: Decentralized file storage (via Thirdweb)
- **Blockchain**: All data and transactions stored on-chain (Localhost 8545)

---

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18+)
- MetaMask browser extension
- Git
- Localhost 8545 (Hardhat node)

### Quick Start

```bash
# Clone the repository
git clone <your-repo-url>
cd RaiseOnChain

# Install all dependencies
npm install
cd client && npm install

# Start Hardhat node (in a new terminal)
npx hardhat node

# Deploy smart contract to Localhost 8545
npx hardhat run scripts/deploy.js --network localhost

# Start the development server (in client directory)
npm run dev
```

### Detailed Setup

1. **Install Dependencies**
   ```bash
   npm install
   cd client && npm install
   ```
2. **Configure MetaMask**
   - Install MetaMask browser extension
   - Add Localhost 8545 network to MetaMask
   - Use pre-funded accounts from Hardhat node
3. **Deploy Smart Contract**
   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```
4. **Update Contract Address**
   - After deployment, copy the contract address
   - Update `client/src/services/contractService.js` with the new address
5. **Start Development Server**
   ```bash
   cd client
   npm run dev
   ```
6. **Access the Application**
   - Open http://localhost:5173
   - Connect your MetaMask wallet
   - Switch to Localhost 8545
   - Start creating and donating to campaigns!

## 🏗️ Technology Stack

| Component         | Technology                |
|-------------------|--------------------------|
| **Blockchain**    | Ethereum (Localhost 8545) |
| **Smart Contracts** | Solidity, Thirdweb      |
| **Frontend**      | React.js, Vite           |
| **Styling**       | Tailwind CSS             |
| **Web3 Integration** | Thirdweb SDK           |
| **Wallet Support** | MetaMask                |
| **Storage**       | IPFS (Decentralized)     |

## 📁 Project Structure

```
RaiseOnChain/
├── contracts/                 # Smart contracts
│   └── CrowdfundingCampaign.sol
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── contexts/          # Web3 context
│   │   ├── services/          # Contract services
│   │   └── assets/            # Static assets
│   └── package.json
├── deploy.js                  # Deployment script
├── thirdweb.config.js         # Thirdweb configuration
└── package.json
```

## 🧑‍💻 How It Works

### The Process

1. **Create Your Campaign**
   - Set up your fundraising campaign with a clear goal, description, and deadline. All campaign data is stored on the blockchain for transparency.
   - Set your funding goal in ETH (Localhost 8545)
   - Add campaign description and images
   - Choose a category and set deadline
   - Provide beneficiary wallet address
2. **Connect Your Wallet**
   - Users connect their MetaMask wallet to the platform. This enables secure transactions and ensures you're on the correct network (Localhost 8545).
   - Install MetaMask browser extension
   - Connect wallet to RaiseOnChain
   - Switch to Localhost 8545
   - Ensure sufficient ETH balance
3. **Make Donations**
   - Donate directly to campaigns using cryptocurrency. All transactions are recorded on the blockchain and visible to everyone for complete transparency.
   - Browse available campaigns
   - Choose donation amount
   - Confirm transaction in MetaMask
   - Track donation on blockchain
4. **Funds Released**
   - When a campaign reaches its goal or deadline, funds are automatically released to the beneficiary through smart contracts, ensuring trustless execution.
   - Automatic fund release on success
   - Smart contract execution
   - Transparent fund distribution
   - Public transaction records

### Key Features

- **Decentralized**: No central authority controls your funds. Smart contracts handle everything automatically.
- **Transparent**: All transactions and campaign data are publicly visible on the blockchain.
- **Secure**: Blockchain technology ensures funds are secure and cannot be tampered with.
- **Global**: Accessible to anyone with an internet connection and a Web3 wallet.

### Why Blockchain?

- **Traditional Crowdfunding Issues**:
  - High platform fees (5-10% of funds raised)
  - Lack of transparency in fund usage
  - Centralized control and censorship
  - Geographic restrictions and limitations
- **RaiseOnChain Solutions**:
  - Minimal gas fees only (no platform fees)
  - Complete transparency with public blockchain records
  - Decentralized and censorship-resistant
  - Global accessibility with no restrictions

### Getting Started

1. **Install MetaMask**: Download and install the MetaMask browser extension
2. **Get Test ETH**: You already have test ETH in your Localhost 8545 accounts (provided by Hardhat node).
3. **Start Campaign**: Create your first campaign or donate to existing ones

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to your branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

## 🐛 Troubleshooting

### Common Issues

1. **MetaMask Connection Issues**
   - Ensure MetaMask is installed and unlocked
   - Check that you're connected to Localhost 8545
   - Try refreshing the page
2. **Contract Deployment Issues**
   - Verify you have sufficient ETH for gas fees
   - Check that your wallet is connected to Localhost 8545
   - Ensure all dependencies are installed
3. **Transaction Failures**
   - Check your ETH balance
   - Verify gas fees are sufficient
   - Ensure you're on the correct network

### Getting Help

- Check the Issues page
- Create a new issue with detailed information
- Join our community discussions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Thirdweb](https://thirdweb.com) for the amazing Web3 development tools
- [Ethereum Foundation](https://ethereum.org) for the blockchain infrastructure
- [MetaMask](https://metamask.io) for wallet integration
- [Tailwind CSS](https://tailwindcss.com) for the beautiful UI components

---

**Built with ❤️ by the RaiseOnChain Team**

- Rasad Regmi - Lead Developer (Frontend & Blockchain)
- Sahira Maharjan - Frontend Developer
- Regish Shrestha - Blockchain Developer
- Aditya Thakuri - Researcher & UI/UX Designer


