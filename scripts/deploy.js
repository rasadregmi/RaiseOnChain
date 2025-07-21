async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const CrowdfundingCampaign = await ethers.getContractFactory("CrowdfundingCampaign");
  const contract = await CrowdfundingCampaign.deploy();
  await contract.deployed();

  console.log("CrowdfundingCampaign deployed to:", contract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 