"use client"

import {
  FileText,
  Share2,
  DollarSign,
  Search,
  MousePointer,
  CreditCard,
  TrendingUp,
  Shield,
  Globe,
  Lock,
  CheckCircle,
  Users,
  Heart,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function HowItWorksPage() {
  const creatorSteps = [
    {
      step: 1,
      icon: FileText,
      title: "Create Your Campaign",
      description: "Fill out the campaign form with your medical story, funding goal, and supporting documentation.",
      details: [
        "Write compelling campaign title",
        "Describe your medical condition",
        "Set realistic funding target",
        "Upload photos and medical documents",
        "Set campaign deadline",
      ],
    },
    {
      step: 2,
      icon: CheckCircle,
      title: "Campaign Goes Live",
      description: "Your campaign becomes visible to all users and starts accepting donations immediately.",
      details: [
        "Campaign appears in listings",
        "Real-time progress tracking begins",
        "Donation notifications activated",
        "Social sharing tools enabled",
      ],
    },
    {
      step: 3,
      icon: Share2,
      title: "Share & Promote",
      description: "Share your campaign link with family, friends, and social networks to maximize reach.",
      details: [
        "Get unique campaign URL",
        "Share on social media platforms",
        "Send to family and friends",
        "Campaign shows live progress updates",
      ],
    },
    {
      step: 4,
      icon: DollarSign,
      title: "Receive Donations",
      description: "Donations are processed securely and funds are available for withdrawal.",
      details: [
        "Secure payment processing",
        "Automatic progress tracking",
        "Real-time donation notifications",
        "Easy fund withdrawal process",
      ],
    },
  ]

  const donorSteps = [
    {
      step: 1,
      icon: Search,
      title: "Browse Campaigns",
      description: "Explore all active medical campaigns and find causes that resonate with you.",
      details: [
        "View all active campaigns",
        "See funding progress and stories",
        "Check days remaining",
        "Review campaign details",
      ],
    },
    {
      step: 2,
      icon: MousePointer,
      title: "Select Campaign",
      description: "Click on any campaign to view detailed information, full story, and current funding status.",
      details: [
        "Read complete medical story",
        "View funding progress details",
        "See recent donations list",
        "Check campaign authenticity",
      ],
    },
    {
      step: 3,
      icon: CreditCard,
      title: "Make Donation",
      description: "Enter your donation amount and complete the secure payment process.",
      details: [
        "Enter donation amount",
        "Choose payment method",
        "Complete secure checkout",
        "Receive donation confirmation",
      ],
    },
    {
      step: 4,
      icon: TrendingUp,
      title: "Track Your Impact",
      description: "Your donation updates the campaign progress and you receive updates on the campaign.",
      details: [
        "Donation listed in contributions",
        "Campaign progress updates instantly",
        "Follow campaign developments",
        "See total community impact",
      ],
    },
  ]

  const features = [
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "All donations are processed through secure payment systems with fraud protection.",
    },
    {
      icon: Globe,
      title: "Global Platform",
      description: "Connect people in need with supporters from around the world, 24/7.",
    },
    {
      icon: Lock,
      title: "Verified Campaigns",
      description: "All campaigns are reviewed and verified to ensure authenticity and legitimacy.",
    },
    {
      icon: Users,
      title: "Community Driven",
      description: "Built by the community, for the community - helping people help people.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-400 to-green-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">How It Works</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
            Our medical crowdfunding platform connects people in need with generous donors worldwide. Here's how the
            process works for both campaign creators and supporters.
          </p>
        </div>
      </div>

      {/* Main Process Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <Tabs defaultValue="creators" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="creators" className="text-lg py-3">
                For Campaign Creators
              </TabsTrigger>
              <TabsTrigger value="donors" className="text-lg py-3">
                For Donors
              </TabsTrigger>
            </TabsList>

            <TabsContent value="creators">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Create Your Medical Campaign</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Need help with medical expenses? Follow these simple steps to create your fundraising campaign.
                </p>
              </div>

              <div className="space-y-8">
                {creatorSteps.map((step, index) => (
                  <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="lg:w-1/3">
                      <Card className="h-full">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                            <step.icon className="w-8 h-8 text-blue-600" />
                          </div>
                          <div className="text-2xl font-bold text-blue-600 mb-2">Step {step.step}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="bg-white p-6 rounded-lg border">
                        <h4 className="font-semibold text-gray-900 mb-4">What you need to do:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="donors">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Support Medical Campaigns</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Want to help someone in need? Here's how you can securely donate to medical campaigns.
                </p>
              </div>

              <div className="space-y-8">
                {donorSteps.map((step, index) => (
                  <div key={index} className="flex flex-col lg:flex-row gap-8 items-center">
                    <div className="lg:w-1/3">
                      <Card className="h-full">
                        <CardContent className="p-6 text-center">
                          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                            <step.icon className="w-8 h-8 text-green-600" />
                          </div>
                          <div className="text-2xl font-bold text-green-600 mb-2">Step {step.step}</div>
                          <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="lg:w-2/3">
                      <div className="bg-white p-6 rounded-lg border">
                        <h4 className="font-semibold text-gray-900 mb-4">What happens:</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <Heart className="w-5 h-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Our Platform?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                    <feature.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "How long does campaign verification take?",
                answer: "Most campaigns are verified within 24-48 hours. Complex cases may take up to 5 business days.",
              },
              {
                question: "What percentage of donations goes to the patient?",
                answer:
                  "95% of donations go directly to medical expenses. We charge a 5% platform fee to maintain our services.",
              },
              {
                question: "How do I know the money is used for medical expenses?",
                answer:
                  "We require receipts and documentation for all fund withdrawals. Donors receive transparency reports showing fund usage.",
              },
            ].map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-green-400 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8">
            Join thousands of families who have found hope and healing through our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-900 hover:text-white">
              Create Your Campaign
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
            >
              Browse All Campaigns
            </Button>
          </div>
          <p className="text-sm mt-6 opacity-90">
            Need help? Contact our support team or check our documentation for detailed guides.
          </p>
        </div>
      </div>
    </div>
  )
}
