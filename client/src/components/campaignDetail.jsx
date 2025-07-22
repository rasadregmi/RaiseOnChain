import { Button } from "@/components/ui/button"
import FundraisingProgress from "./progressBar"
import raiseonchainLogo from "../assets/raiseonchain_logo.png"

export default function CampaignDetail({ campaign, onDonate, showWithdrawButton, onWithdraw }) {
  const handleDonate = () => {
    if (onDonate) {
      onDonate();
    }
  }

  const handleShare = () => {
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
      <div className="bg-white p-4 rounded-lg">
        <img
          src={campaign.image || raiseonchainLogo}
          alt={campaign.title}
          className="w-full h-auto object-cover rounded"
          style={{ maxHeight:"600px" }}
        />
      </div>

      <div className="bg-white p-6 rounded-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">{campaign.title}</h1>

        <div className="mb-6">
          <FundraisingProgress
            raised={campaign.raised}
            goal={campaign.goal}
            supporters={campaign.supporters}
            lastDonationTime={campaign.lastDonation}
            daysLeft={campaign.daysLeft}
          />
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed">{campaign.fullDescription || campaign.description}</p>

        {campaign.daysLeft && (
          <div className="mb-4 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-orange-800 font-medium">⏰ Only {campaign.daysLeft} days left to contribute!</p>
          </div>
        )}

        <div className="flex gap-3 mb-4">
          <Button className="flex-1 bg-gray-800 hover:bg-blue-700 text-white" size="sm" onClick={handleDonate}>
            Donate Now
          </Button>
          {showWithdrawButton && (
            <Button className="flex-1 bg-green-700 hover:bg-green-800 text-white" size="sm" onClick={onWithdraw}>
              Withdraw
            </Button>
          )}
          <Button variant="outline" className="bg-green-600" size="sm" onClick={handleShare}>
            Share
          </Button>
        </div>

        <p className="text-sm text-gray-600">Every donation makes a difference in this campaign</p>
      </div>
    </div>
  )
}
