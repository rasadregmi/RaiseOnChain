# RaiseOnChain - Blockchain-Based Crowdfunding Platform

RaiseOnChain is a **decentralized crowdfunding platform** that empowers users to create, manage, and support fundraising campaigns directly on the blockchain. By eliminating centralized intermediaries, RaiseOnChain ensures **transparency, security, and ownership** for all stakeholders.

---

##  Features

- **Decentralized Campaign Creation**: Campaigns are created and stored immutably on the blockchain.
- **Transparent Donations**: All contributions are recorded on-chain for full public transparency.
- **Real-time Progress Tracking**: Monitor funding progress and donor activity live.
- **Wallet Integration**: Seamless Web3 wallet connectivity (e.g., MetaMask).
- **Trustless Interactions**: Fund management is handled entirely by smart contracts.
- **Campaign Discovery**: Explore live campaigns from the homepage.
- **Donor Transparency**: View public donor lists and contribution histories per campaign.

---

##  Team Members

- Rasad Regmi  
- Sahira Maharjan  
- Regish Shrestha  
- Aditya Thakuri  

---

##  Architecture

### Smart Contract Layer

- **Built with**: Solidity & [Thirdweb](https://thirdweb.com)
- **Responsibilities**:
  - Campaign creation
  - Donation processing
  - Immutable record storage on-chain

###  Frontend Application

- **Framework**: React.js  
- **Styling**: Tailwind CSS  
- **Web3 Integration**: Custom Web3 Context using Thirdweb SDK  
- **Navigation**: Sidebar + top navbar for seamless UX  

###  Storage & Deployment

- **IPFS**: Decentralized file storage (via Thirdweb)
- **Blockchain**: All data and transactions stored on-chain

---

##  Getting Started

###  Prerequisites

- Node.js (v16+)
- MetaMask (or any Web3-compatible wallet)
- Git

###  Installation

```bash
# Clone the repository
git clone https://github.com/your-username/raiseOnChain.git
cd raiseOnChain

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Thirdweb credentials and contract addresses

# Deploy the smart contract
npx thirdweb deploy

# Start the development server
npm run dev
```

##  Technology Stack
Blockchain: Ethereum (via Thirdweb)

Smart Contracts: Solidity

Frontend: React.js

Styling: Tailwind CSS

Web3 Integration: Thirdweb SDK

Storage: IPFS

Wallets: MetaMask, other Web3-compatible wallets


## Contributing
1. Fork the repository
2. Create your feature branch
    git checkout -b feature/AmazingFeature
3. Commit your changes
    git commit -m 'Add some AmazingFeature'
4. Push to your branch
    git push origin feature/AmazingFeature
5. Open a Pull Request



---

Let me know if you want this README customized with your actual GitHub repo link or with badges (build status, license, etc.).


