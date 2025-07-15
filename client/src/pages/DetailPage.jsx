"use client"

import { useState } from "react"
import CampaignCard from "../components/campaigns"
import CampaignDetail from "../components/campaignDetail";
import floodImage from "./images/flood.jpg";
import ChildPhoto from "./images/ChildPhoto1.jpeg";
import Engineer from "./images/engineer1.jpeg"
import Solar from "./images/solar.jpg"
import Tree from "./images/tree.jpg"
import Library from "./images/library.jpg"


export default function ProductDetailPage() {
  const relatedCampaigns = [
    {
      id: 1,
      image: ChildPhoto,
      title: "Urgent Medical Aid for Cancer Treatment",
      description: "Maya, a 7-year-old battling leukemia, needs immediate access to chemotherapy and medical care. Every donation brings her one step closer to recovery and a healthy childhood.",
      fullDescription: "Maya is a brave 7-year-old girl who has been diagnosed with acute lymphoblastic leukemia. She needs immediate access to chemotherapy and specialized medical care to fight this aggressive form of cancer. Her family is struggling with the overwhelming medical costs, and every donation brings Maya one step closer to recovery and a healthy childhood. The treatment requires multiple rounds of chemotherapy, regular hospital stays, and ongoing medical monitoring. Your support can help provide Maya with the life-saving treatment she desperately needs.",
      raised: 900,
      goal: 1900,
      supporters: 1400,
      daysLeft: 14,
      lastDonation: "18 minutes ago",
    },
    {
      id: 2,
      image: floodImage,
      title: "Rebuild Renu’s Home After the Floods",
      description: "After devastating floods swept through her village, Renu and her family were left without a roof over their heads.This campaign aims to provide the necessary funds for rebuilding their home, acquiring basic furniture, and ensuring access to clean water and food",
      fullDescription: "After devastating floods swept through her village, Renu and her family were left without a roof over their heads. Their home, belongings, and livelihood were destroyed overnight. This campaign aims to provide the necessary funds for rebuilding their home, acquiring basic furniture, and ensuring access to clean water and food. Using RaiseOnChain’s transparent platform, you can see how your donations are used for construction, materials, and essential aid. Together, we can restore their dignity and safety.",
      raised: 1200,
      goal: 2500,
      supporters: 890,
      daysLeft: 21,
      lastDonation: "2 hours ago",
    },
    {
      id: 3,
      image: Engineer,
      title: "A Future Engineer in the Making",
      description: "Samir is a talented science student from a rural area who recently earned admission into a top engineering college. This fundraiser seeks to empower Samir through education.",
      fullDescription: "Samir is a talented science student from a rural area who recently earned admission into a top engineering college. Despite his academic excellence, his family's financial condition makes it nearly impossible to afford tuition, books, and accommodation. This fundraiser seeks to empower Samir through education. With blockchain technology, all donations and disbursements are trackable, ensuring your contribution directly supports his academic journey. Be part of building a future innovator — block by block.",
      raised: 750,
      goal: 1500,
      supporters: 650,
      daysLeft: 30,
      lastDonation: "45 minutes ago",
    },
    {
      id: 4,
      image: Library,
      title: "Library for a Village School",
      description: "A remote school in the mountains has passionate students but zero library resources. This campaign will fund the creation of a mini-library with storybooks, textbooks, and digital resources.",
      fullDescription: "A remote school in the mountains has passionate students but zero library resources. This campaign will fund the creation of a mini-library with storybooks, textbooks, and digital resources. The goal is to make learning exciting and accessible. All purchases and logistics will be recorded on the blockchain, ensuring your support truly reaches those curious minds. Give the gift of imagination and knowledge.",
      raised: 2100,
      goal: 3000,
      supporters: 1250,
      daysLeft: 18,
      lastDonation: "1 hour ago",
    },
    {
      id: 5,
      image: Tree,
      title: "Sponsor a Tree, Clean the Air",
      description: "Kathmandu is facing rising pollution and dwindling green spaces. This campaign funds a community tree-planting drive in local neighborhoods and school compounds.",
      fullDescription: "Kathmandu is facing rising pollution and dwindling green spaces. This campaign funds a community tree-planting drive in local neighborhoods and school compounds. Your donation will cover saplings, care materials, and volunteers. Each tree’s location and growth status will be publicly updated via RaiseOnChain — making reforestation traceable and real.",
      raised: 850,
      goal: 2000,
      supporters: 720,
      daysLeft: 25,
      lastDonation: "3 hours ago",
    },
    {
      id: 6,
      image: Solar,
      title: "Solar Power for Lightless Homes",
      description: "Many homes in rural Nepal still live in darkness after sunset. This project provides affordable solar kits to families without electricity.",
      fullDescription: "Many homes in rural Nepal still live in darkness after sunset. This project provides affordable solar kits to families without electricity. Your donations will fund solar panels, battery storage, and basic installation. Blockchain tracking ensures accountability — you’ll know which home got light, when, and how.",
      raised: 1800,
      goal: 4000,
      supporters: 980,
      daysLeft: 12,
      lastDonation: "30 minutes ago",
    },
  ]

  const [selectedCampaign, setSelectedCampaign] = useState(relatedCampaigns[0])

  const handleViewDetails = (campaign) =>{
    setSelectedCampaign(campaign)
    window.scrollTo({top:0, behavior:"smooth"})
  }

  return (
    <div className="max-w-screen mx-auto p-6 bg-gray-100 min-h-screen ">

      {/* Main Product Section */}
      <CampaignDetail campaign={selectedCampaign}/>
      {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12"> */}
        {/* Product Image */}
        {/* <div className="bg-white p-4 rounded-lg">
          <img
            src={ChildPhoto}
            alt="FloodImage"
            className="w-full h-auto object-cover rounded"
            style={{ maxHeight: "400px" }}
          />
        </div> */}

        {/* Product Details */}
        {/* <div className="bg-white p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Help Maya Fight Back: Urgent Medical Aid of Cancer Treatment</h1>
          <p className="text-gray-600 mb-4">Maya is a 7-year-old girl recently diagnosed with leukemia. Her parents, daily wage workers, are struggling to afford the chemotherapy, diagnostic tests, and regular hospital visits required to save her life. With your support, we can ensure Maya receives uninterrupted treatment at a trusted cancer hospital. Every contribution is recorded transparently on the blockchain — you’ll know exactly how your donation helps Maya heal, grow, and live the childhood she deserves.</p>
           */}
          {/* Fundraising Progress Component */}
          {/* <div className="mb-6">
            <FundraisingProgress raised={1000} goal={1900} supporters={1400} lastDonationTime="18 minutes ago" daysLeft={"24"} />
          </div> */}
      

          {/* <Button className="w-full bg-gray-800 hover:bg-green-600 text-white py-3 mb-4" onClick={handleAddToCart}>
            Donate
          </Button>

        </div>
      </div> */}

      {/* Related Campaigns Section */}
      <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Related campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCampaigns
            .filter((campaign) => campaign.id !== selectedCampaign.id) // Don't show the currently selected campaign
            .map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} onViewDetails={handleViewDetails} />
            ))}
        </div>
      </div>
      {/* <div className="mb-12">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Related campaigns</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedCampaigns.map((campaign) => (
            <CampaignCard
              key={campaign.id}
              image={campaign.image}
              title={campaign.title}
              description={campaign.description}
              raised={campaign.raised}
              goal={campaign.goal}
              supporters={campaign.supporters}
              daysLeft={campaign.daysLeft}
              lastDonation={campaign.lastDonation}
            />
          ))}
        </div>
      </div> */}
    </div>
  )
}
