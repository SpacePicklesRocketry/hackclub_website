import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(null);

  // Group FAQs into sections
  const faqSections = [
    {
      title: "General ",
      faqs: [
        {
          question: "What is a hackathon?",
          answer: "A hackathon is an event where individuals come together to collaborate on software or hardware projects, typically over a short period of time. Participants form teams, brainstorm ideas, and work intensively to create prototypes or solutions. This hackathon focuses on hands-on building and launching activities. is a bit unique since teams will be working on their project over a course of a few months."
        },
        {
          question: "Who is this for?",
          answer: "This is for any high schooler or middle schooler 18 or under who's interested in working on a model rocketry project. Reaching out of you comfort zone is necessary! If you wanted to switch things up and work on rockets, this is for you! Don't worry if you don't have any experience, most people dont! We'll help you along the way if you need it."
        },
        {
          question: "Do I need experience to sign up?",
          answer: "No experience is necessary to sign up! We will set up regular calls with our team to help those in need, and include many resources written by experienced leadership and reputed authors!"
        },
        {
          question: "Do I need a team to participate?",
          answer: "Yes, you will need a team of 3-5 to particpate! The team is to allow for collaboration and inspiration!"
        },
         {
          question: "Is this free?",
          answer: "Yes, this is completely free! We want to make sure that everyone has the opportunity to participate, regardless of their financial situation. We'll cover the cost of the launch, food, a project budget, and flights through a series of stipends and grants."

        },
        {
          question: "Who is running this?",
          answer: "This hackathon is organized by a team of high school students passionate about model rocketry. We are all part of the Hack Club community, and we are excited to bring this event to you!"
        },
                {
                  question: "What is Hack Club?",
                  answer: `This event is an official Hack Club project, run by experienced members of the Hack Club community in partnership with Apex.
        Hack Club is a 501(c)(3) nonprofit founded in 2014, empowering high schoolers worldwide to build hardware, software, and more. Through its free, student-led programs, Hack Club reaches over 50,000 teenagers each year.
        Backed by leaders and founders from GitHub, Dell, SpaceX, Apple, Microsoft, and more, Hack Club hosts unique, transformative experiences from cross-country hackathons to global hardware grants—making technology accessible to all.`
                },
        {
          question: "Is there a support channel?",
          answer: "There is! We have a channel on the Hack Club Slack called #apogee. Join here! We provide support here and post important updates in #apogee-bulletin. Membership of these channels is mandatory for all participants."
        }
      ]
    },
    {
      title: "Logistics",
      faqs: [
                {
                  question: "How does this work?",
                  answer: 
                   `Here's a quick summary:
        
        1. Build your project! We'll help you along the way.
        2. Track your time spent working on your project.
        3. Reach 50 hours of work (as a team) to qualify for the event and unlock your project budget.
        4. Reach 100 hours of work (individually) and earn your flight stipends (optional).
        5. Head to Fresno for the event!
        6. Launch, recover, and tune your rocket!
        7. Launch your rocket for the finals flight!
        8. Celebrate!          
        `
                },
        {
          question: "When and where is this happening?",
          answer: "The event will take place in Fresno, California from March 10-12, 2023."
        },
        {
          question: "We need to track our time spent working?",
          answer: "You do! In order to verify that you actually spent the time on your project, you'll need to log your hours using our time tracking tool as well as your team journal."
        },
        {
          question: "How do I track my time?",
          answer: "You can track your time using our dedicated time tracking tool available in the #apogee slack channel."
        },
        {
          question: "What is the project budget?",
          answer: "Every person on a team that works for more than 20 hours will get $100 - $150 depending on if active control is present. A team could then earn anywhere from $300 - $750!"
        },
        {
          question: "Are flights free?",
          answer: "We will cover the cost of your flight to Fresno up to $400 per person. If you are flying from outside the US, we will cover up to $800 per person. We will also cover the cost of your hotel stay for the duration of the event. You will receive $5/hours for each additional hours over 100 hours. Other teammates can also choose to donate thei excess funds to you!"
        },
        {
          question: "Do we need to stay overnight?",
          answer: "Yep! To make sure the event is safe, we'll be staying overnight at the venue."
        },
        {
          question: "What if I get stuck and need help?",
          answer: "Don't worry! Our team will be available to provide assistance and guidance. We will have weekly guidance calls for you to drop in and ask questions."
        }
      ]
    }
  ];

  // To keep FAQ indices unique across all sections
  let faqIndex = 0;

  return (
    <div className="py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Questions</span>
          </h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Everything you need to know about Apogee
          </p>
        </motion.div>

        {/* FAQ Sections */}
        <div className="grid gap-12">
          {faqSections.map((section, sectionIdx) => (
            <div key={sectionIdx}>
              <h3 className="text-2xl font-bold text-white mb-6">{section.title}</h3>
              <div className="grid gap-6">
                {section.faqs.map((faq) => {
                  const currentIndex = faqIndex++;
                  return (
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: currentIndex * 0.1 }}
                    >
                      <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300">
                        <CardHeader>
                          <Button
                            variant="ghost"
                            className="w-full p-0 h-auto justify-start hover:bg-transparent"
                            onClick={() => setOpenFAQ(openFAQ === currentIndex ? null : currentIndex)}
                          >
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center gap-4">
                                {/* Icon removed */}
                                <CardTitle className="text-lg text-white text-left">
                                  {faq.question}
                                </CardTitle>
                              </div>
                              <motion.div
                                animate={{ rotate: openFAQ === currentIndex ? 180 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronDown className="w-5 h-5 text-white/60" />
                              </motion.div>
                            </div>
                          </Button>
                        </CardHeader>
                        <AnimatePresence>
                          {openFAQ === currentIndex && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <CardContent className="pt-0">
                                <div className="ml-14 text-white/80 leading-relaxed">
                                  {faq.answer}
                                </div>
                              </CardContent>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section (still commented out) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-md border-purple-400/30 inline-block">
            {/* <CardContent className="p-8">
              <HelpCircle className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-white/70 mb-4">
                Our team is here to help you prepare for launch
              </p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white">
                Contact Support
              </Button>
            </CardContent> */}
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
