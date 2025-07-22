import { Heart } from "lucide-react"
import { Clock } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export default function FundraisingProgress({
  raised = 1000,
  goal = 1900,
  supporters = 1400,
  lastDonationTime = "18 minutes ago",
  daysLeft = 24,
}) {
  const progressPercentage = (raised / goal) * 100

  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold text-gray-900">
        <span className="text-green-700 font-bold">{raised} ETH</span> raised out of <span className="font-bold">{goal} ETH</span>
      </div>

      <Progress value={progressPercentage} className="h-2" />

      <div className="flex justify-between items-center text-xs text-gray-600">
        <div>Last donation {lastDonationTime}</div>
        <div className="flex items-center gap-1">
          <Clock className="w-3 h-3" />
          <span>{daysLeft} days left</span>
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
        <span className="font-medium">{supporters.toLocaleString()} Supporters</span>
      </div>
    </div>
  )
}
