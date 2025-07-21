const { deploy } = require("thirdweb/deploy");

async function main() {
  console.log("🚀 Deploying CrowdfundingCampaign contract to localhost...");

  try {
    const contractAddress = await deploy({
      contract: "CrowdfundingCampaign",
    });

    console.log("✅ Contract deployed successfully!");
    console.log("📝 Contract address:", contractAddress);

    const fs = require('fs');
    const config = {
      contractAddress: contractAddress,
      network: 'localhost',
      deployedAt: new Date().toISOString()
    };

    fs.writeFileSync('./contract-config.json', JSON.stringify(config, null, 2));
    console.log("💾 Contract configuration saved to contract-config.json");

    console.log("\n🎉 Deployment completed successfully!");
    console.log("📋 Next steps:");
    console.log("1. Update the contract address in your .env file as VITE_CONTRACT_ADDRESS for the frontend and CONTRACT_ADDRESS for backend/scripts.");
    console.log("2. Test the contract functionality");
    console.log("3. Start the frontend application");

  } catch (error) {
    console.error("❌ Deployment failed:", error);
    process.exit(1);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 