import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { 
  Rocket, 
  ChevronDown, 
  Zap,
  Star,
  Orbit
} from "lucide-react";

export default function HeroSection({ onScrollToRegistration }) {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Rocket className="w-8 h-8 text-blue-400/60" />
        </motion.div>
        
        <motion.div
          className="absolute top-40 right-20"
          animate={{
            y: [0, 15, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star className="w-6 h-6 text-pink-400/60" />
        </motion.div>
        
        <motion.div
          className="absolute bottom-40 left-20"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Orbit className="w-12 h-12 text-purple-400/40" />
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Main Title with Funky Typography */}
           <div className="mb-8">
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 leading-none tracking-tighter">
              <span style={{ 
                fontFamily: 'Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.7em',
                marginLeft: '0.01em',
                letterSpacing: '0.03em',
              }}>
                APOGEE
              </span>
            </h1>
            {/* Subtitle with Glitch Effect */}
            <motion.div
              animate={{
                textShadow: [
                  '0 0 10px rgba(244, 114, 182, 0.5)',
                  '0 0 20px rgba(244, 114, 182, 0.8)',
                  '0 0 10px rgba(244, 114, 182, 0.5)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-2xl md:text-3xl text-white/90 font-light tracking-wide mt-8 font-bold"
              style={{ 
                fontFamily: 'Monaco, "Courier New", monospace',
                textShadow: '0 0 10px rgba(244, 114, 182, 0.5)',
                letterSpacing: '0.05em',
                fontSize: '1.8em',
                color: 'white',
              }}
            >
              MODEL ROCKETRY HACKATHON
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-xl md:text-9xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed"
            style={{ 
              fontFamily: 'Monaco, "Courier New", monospace',
              textShadow: '0 0 10px rgba(244, 114, 182, 0.5)',
              lineHeight: '1.6',
              letterSpacing: '0.02em',
              fontSize: '1.5em',
              color: 'white',
            }}
          >
            HACK. BUILD. BLAST OFF.

          </motion.p>

          {/* Key Stats */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">48</div>
              <div className="text-white/60">Hours of Innovation</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">$10K</div>
              <div className="text-white/60">In Prizes</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
              <div className="text-white/60">Participants</div>
            </div>
          </motion.div> */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button 
            onClick={onScrollToRegistration}
            size="lg"
            className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-12 py-6 text-2xl font-semibold rounded-2xl shadow-lg shadow-pink-500/25 transition-all duration-300 hover:shadow-xl hover:shadow-pink-500/40"
          >
            <Rocket className="w-6 h-6 mr-3" />
            Launch Your Journey
          </Button>
            
            {/* <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-black hover:bg-white/10 px-8 py-4 text-lg rounded-xl backdrop-blur-sm"
            >
              <Zap className="w-5 h-5 mr-2" />
              Learn More
            </Button> */}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6" />
          </motion.div> */}
        </motion.div>
      </div>
    </div>
  );
}