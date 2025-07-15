"use client"

import { Heart, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export default function CampaignCard({campaign, onViewDetails}) {
  const { image, title, description, raised, goal, supporters, daysLeft, lastDonation } = campaign
  const progressPercentage = (raised / goal) * 100

  const handleViewDetails = () => {
    onViewDetails(campaign)
  }

  return (
    <Card className="bg-white hover:shadow-lg transition-shadow">
      <CardContent className="p-0">
        {/* Campaign Image */}
        <div className="relative">
          <img src={image || "/placeholder.svg"} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
        </div>

        {/* Campaign Content */}
        <div className="p-4 space-y-3">
          {/* Title */}
          <h3 className="font-bold text-gray-900 text-sm leading-tight line-clamp-2">{title}</h3>
            {/* Description */}
          <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">{description}</p>
          {/* Fundraising Progress */}
          <div className="space-y-2">
            <div className="text-sm font-semibold text-gray-900">
              <span className="text-green-600">${raised}</span> raised out of <span className="font-bold">${goal}</span>
            </div>
            <Progress value={progressPercentage} className="h-4" />
          </div>

          {/* Campaign Stats */}
          <div className="flex justify-between items-center text-xs text-gray-600">
            <div>Last donation {lastDonation}</div>
            <div className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              <span>{daysLeft} days left</span>
            </div>
          </div>

          {/* Supporters */}
          <div className="flex items-center gap-2 text-xs">
            <Heart className="w-3 h-3 text-red-500 fill-red-500" />
            <span className="font-medium">{supporters.toLocaleString()} Supporters</span>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm" className="flex-1 text-xs bg-gray-800 " onClick={handleViewDetails}>
              View Details
            </Button>
            <Button size="sm" className="flex-1 bg-green-600 hover:bg-blue-700 text-xs">
              Donate
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
