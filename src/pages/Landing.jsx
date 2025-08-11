import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Rocket, 
  Calendar, 
  MapPin, 
  Users, 
  Trophy, 
  Zap,
  ChevronDown,
  Star,
  Orbit
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import HeroSection from "../components/landing/HeroSection";
import RegistrationSection from "../components/landing/RegistrationSection";
import EventInfoSection from "../components/landing/EventInfoSection";
import FAQSection from "../components/landing/FAQSection";

export default function Landing() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'registration', 'event', 'faq'];
      const newVisible = {};
      
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          newVisible[section] = rect.top < window.innerHeight && rect.bottom > 0;
        }
      });
      
      setIsVisible(newVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-black">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-900 to-blue-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-pink-500/20" />

        {/* Animated Stars */}
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </motion.div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Orbit className="w-8 h-8 text-pink-400" />
              <span className="text-white font-bold text-xl">Apogee</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('event')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Event Info
              </button>
              <button 
                onClick={() => scrollToSection('registration')}
                className="text-white/80 hover:text-white transition-colors"
              >
                Register
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-white/80 hover:text-white transition-colors"
              >
                FAQ
              </button>
            </div>
            
            <Button 
              onClick={() => scrollToSection('registration')}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Register Now
            </Button>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      <div className="relative z-10">
        <section id="hero">
          <HeroSection onScrollToRegistration={() => scrollToSection('registration')} />
        </section>

        <section id="registration">
          <RegistrationSection />
        </section>

        <section id="event">
          <EventInfoSection />
        </section>

        <section id="faq">
          <FAQSection />
        </section>

        {/* Footer */}
        <footer className="bg-black/50 backdrop-blur-md border-t border-white/10 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Orbit className="w-8 h-8 text-pink-400" />
                <span className="text-white font-bold text-2xl">Apogee</span>
              </div>
              <p className="text-white/60 mb-8">
                <br/>Apogee is run by Hack Club community members and sponsored by Hack Club, a 501(c)(3) non-profit (EIN: 81-2908499).
              </p>
              {/* <div className="flex justify-center space-x-6">
                <span className="text-white/40">© 2025 HackARocket</span>
                <span className="text-white/40">•</span>
                <span className="text-white/40">Model Rocketry Event</span>
              </div> */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  ); 
}
