"use client"

import { Heart, Users, Target, Award, Mail, Phone, MapPin, User } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Web from "./images/Web3.jpg"
import Rasad from "./images/Rasad.jpg"
import Aditya from "./images/Aditya.jpg"
import Regish from "./images/Regish.jpeg"
import Sahira from "./images/sahira.jpeg"



export default function AboutUsPage() {
  const stats = [
    { icon: Heart, label: "Lives Impacted", value: "500+" },
    { icon: Users, label: "Active Supporters", value: "250+" },
    { icon: Target, label: "Campaigns Funded", value: "120+" },
    { icon: Award, label: "Success Rate", value: "95%" },
  ]

  const teamMembers = [
    {
      name: "Sahira Maharjan",
      role: "Member",
      image: Sahira,
      description: "Former healthcare professional with 15 years of experience in medical fundraising.",
    },
    {
      name: "Rasad Regmi",
      role: "Member",
      image: Rasad,
      description: "Board-certified physician specializing in pediatric care and medical ethics.",
    },
    {
      name: "Aditya Thakuri",
      role: "Member",
      image: Aditya,
      description: "Passionate advocate for patient rights with expertise in community outreach.",
    },
     {
      name: "Regish Shrestha",
      role: "Member",
      image: Regish,
      description: "Passionate advocate for patient rights with expertise in community outreach.",
    },
     {
      name: "Jebin Dangol",
      role: "Member",
      image: User,
      description: "Passionate advocate for patient rights with expertise in community outreach.",
    },
  ]

  const values = [
    {
      title: "Transparency",
      description: "We ensure every donation is tracked and used exactly as intended for medical care.",
      icon: Target,
    },
    {
      title: "Compassion",
      description: "We treat every patient and family with dignity, respect, and understanding.",
      icon: Heart,
    },
    {
      title: "Community",
      description: "We believe in the power of people coming together to help those in need.",
      icon: Users,
    },
  ]

  return (
    <div className="p-5 min-h-screen ">
      {/* Hero Section */}
      <div className="rounded-xl bg-gradient-to-r from-green-300 to-green-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Our Mission</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            We're dedicated to connecting generous hearts with families facing medical emergencies, making life-saving
            treatments accessible to everyone.
          </p>
          <Button size="lg" className="bg-gray-950 text-white hover:bg-green-300 hover:text-black">
            Join Our Mission
          </Button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>The idea for this project was born out of a simple question: "How can we make fundraising truly transparent and accessible for everyone?" With the rise of blockchain technology, we saw an opportunity to transform traditional crowdfunding by eliminating middlemen, reducing transaction costs, and ensuring full transparency of fund flow.
                </p>
                <p>
                  As a team of passionate developers and tech enthusiasts, we envisioned a decentralized solution where trust isn’t assumed — it’s built into the system. By leveraging blockchain and smart contracts, we created a platform where fundraisers can connect directly with supporters, and every transaction is traceable and immutable.
                </p>
                <p>
                  From concept to code, our journey has been about pushing boundaries — creating a dApp that’s not only functional but also user-friendly, secure, and impactful.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <img
                src= {Web}
                alt="Our mission in action"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <blockquote className="text-gray-700 italic">
                "Every campaign represents a real person, a real family, and a real chance to make a life-changing
                difference. That's what drives us every single day."
              </blockquote>
              <cite className="text-sm text-gray-600 mt-4 block">- Sarah Johnson, Founder</cite>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                    <value.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Section */}
      {/* <div className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Build trust through Transparency</h3>
                <p className="text-gray-600 mb-4">
                  Every donation and transaction is stored on the blockchain, giving contributors the confidence that their support reaches the intended cause.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Empowered Fundraisers</h3>
                <p className="text-gray-600 mb-4">
                  Users can launch campaigns instantly, set clear goals and deadlines, and receive funds directly through secure smart contracts — all without relying on a central authority.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div> */}

      {/* Contact Section */}
      <div className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Get In Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Mail className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <p className="text-gray-600">support@medicalfund.org</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <p className="text-gray-600">1-800-MEDICAL</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <MapPin className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600">123 Hope Street, Medical City, MC 12345</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
