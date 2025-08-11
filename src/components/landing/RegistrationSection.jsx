import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const TIMELINE = [
  {
    date: " SEP 15",
    step: "1",
    title: "REGISTER",
    description: "Signing up for Apogee is easy, no need for an idea, or commitment, only a team!",
    button: "SIGNUP"
  },
  {
    date: "OCT 15",
    step: "2",
    title: "SUBMIT PROPOSAL",
    description: "Finalize your ideas and designs with your team and submit them for review!",
    button: "RESOURCES"
  },
  {
    date: "DEC 10",
    step: "3",
    title: "BUILD YOUR PROJECT",
    description: "After your hard work and iteration, get approval for the final version of your rocket over Zoom with our team.",
    button: "DETAILS"
  },
  {
    date: "JAN 16",
    step: "4",
    title: "LAUNCH!",
    description: "Head over to Fresno to launch, recover, and tune your rocket during the 4-day event!",
    button: "INFO"
  }
];

export default function RegistrationTimeline() {
  return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 min-h-screen text-white flex items-center">
          <div className="max-w-6xl mx-auto w-full space-y-20">
            {TIMELINE.map((event, idx) => (
              <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 text-lg" // Increased text size
            >
              {/* Date and Step */}
              <div className="flex flex-col items-start md:items-center w-32">
                <span className="text-pink-400 text-base tracking-widest whitespace-pre-line">{event.date}</span>
                <div className="mt-2 w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-sm font-bold text-white">
                  {event.step}
                </div>
              </div>
              {/* Main Content */}
              <div className="flex-1 space-y-2">
                <h3 className="text-3xl font-bold tracking-wide uppercase">{event.title}</h3>
                <p className="text-white/80 text-base md:text-lg max-w-xl">{event.description}</p>
              </div>
              {/* Button */}
              {event.button && (
                <div className="shrink-0 flex justify-center md:justify-end w-full md:w-auto">
                  <Button className="rounded-full px-10 py-4 text-xl font-semibold bg-pink-400 hover:bg-pink-500 text-white mx-auto">
                    {event.button}
                  </Button>
                </div>
              )}
            </motion.div>
            ))}
          </div>
        </div>
      </div>
  );
}