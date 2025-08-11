import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Users, 
  Trophy, 
  Zap,
  Target,
  Code,
  Wrench,
  Award,
  Video,
  Presentation
} from "lucide-react";

export default function EventInfoSection() {
  const eventDetails = [
    {
      icon: Calendar,
      title: "Event Date",
      details: " Januray 16-19, 2026"
      //description: "A full weekend of launches of competition"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Fresno, California"
      // description: "State-of-the-art launch grounds"
    },
     {
      icon: Clock,
      title: "Duration",
      details: "67 Hours"
    //   description: "Non-stop hacking, building, and testing"
     },
    {
      icon: Users,
      title: "Team Size",
      details: "2-4 Members"
      // description: "Perfect balance of skills and collaboration"
    }
  ];

  const challenges = [
    {
      icon: Target,
      title: "Precision Challenge",
      description: "Design a rocket that can hit a specific target with high accuracy.",
      prize: "$500"
    },
    {
      icon: Video,
      title: "Video Challenge",
      description: "Create a fun and engaging video that captures your team's journey and project.",
      prize: "$500"
    },

    {
      icon: Presentation,
      title: "Presentation Challenge",
      description: "Develop a presentation that effectively showcases your work.",
      prize: "$500"
    },
  ];

  const timeline = [
    { time: "Friday 6:00 PM", event: "Registration & Opening Ceremony" },
    { time: "Friday 7:00 PM", event: "Team Formation & Brainstorming" },
    { time: "Friday 8:00 PM", event: "Hacking Begins!" },
    { time: "Saturday 9:00 AM", event: "Mentorship Sessions" },
    { time: "Saturday 12:00 PM", event: "Lunch & Networking" },
    { time: "Saturday 6:00 PM", event: "Progress Check-ins" },
    { time: "Sunday 10:00 AM", event: "Final Testing & Debugging" },
    { time: "Sunday 2:00 PM", event: "Project Submissions" },
    { time: "Sunday 3:00 PM", event: "Launch Competition" },
    { time: "Sunday 5:00 PM", event: "Awards & Closing Ceremony" }
  ];

  return (
    <div className="py-24 relative">
      <div className="max-w-7xl mx-auto px-2 sm:px-8 lg:px-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8">
            Event <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-400">Details</span>
          </h2>
          <p className="text-2xl text-white/70 max-w-3xl mx-auto">
            Four days of intensive innovation, collaboration, and rocket science!
          </p>
        </motion.div>

        {/* Event Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {eventDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full px-6 py-8">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full flex items-center justify-center">
                    <detail.icon className="w-12 h-12 text-white" />
                  </div>
                  <CardTitle className="text-white text-2xl">{detail.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-pink-400 mb-2">{detail.details}</div>
                  <p className="text-white/60 text-base">{detail.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Challenges Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h3 className="text-5xl font-bold text-white text-center mb-14">
            Competition <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Challenges</span>
          </h3>
          
          <div className="flex flex-col items-center gap-12">
            {/* First card centered */}
            {challenges[0] && (() => {
              const Icon = challenges[0].icon;
              return (
                <motion.div
                  initial={{ opacity: 0, y: -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0 }}
                  className="w-full max-w-lg"
                >
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full px-6 py-8">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          <CardTitle className="text-white text-2xl">{challenges[0].title}</CardTitle>
                        </div>
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-4 py-2">
                          {challenges[0].prize}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 text-lg">{challenges[0].description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })()}

            {/* Next two cards on the next row */}
            <div className="flex flex-col md:flex-row gap-10 w-full justify-center">
              {challenges.slice(1).map((challenge, index) => (
                <motion.div
                  key={index + 1}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
                  className="flex-1 max-w-lg"
                >
                  <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 h-full px-6 py-8">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                            <challenge.icon className="w-10 h-10 text-white" />
                          </div>
                          <CardTitle className="text-white text-2xl">{challenge.title}</CardTitle>
                        </div>
                        <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold text-lg px-4 py-2">
                          {challenge.prize}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/70 text-lg">{challenge.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}