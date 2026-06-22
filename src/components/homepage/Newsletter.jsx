// src/components/sections/Newsletter.jsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Sparkles,
  Mail,
  Send,
  CheckCircle,
  Users,
  TrendingUp,
  Gift,
  Rocket,
  Clock,
} from "lucide-react";

// ==================== NEWSLETTER COMPONENT ====================
export default function Newsletter({
  title = "Subscribe to Our Newsletter",
  subtitle = "Get the latest property listings and real estate tips delivered to your inbox",
  buttonText = "Subscribe Now",
  placeholderText = "Enter your email address",
  successMessage = "Thank you for subscribing!",
  backgroundImage = "https://www.adanirealty.com/-/media/Project/Realty/Blogs/ready-to-move-vs-under-construction-property-in-mumbai-which-is-the-better-investment",
}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Subscribed email:", email);
    setIsSubmitted(true);
    setIsLoading(false);
    setEmail("");

    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50/80 backdrop-blur-sm rounded-full border border-blue-100/50 mb-4">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-blue-600 font-semibold text-xs uppercase tracking-widest">
              Newsletter
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            {title}
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Newsletter Card with Background Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src={backgroundImage}
              alt="Newsletter background"
              fill
              className="object-cover"
              quality={90}
            />
            {/* Gradient Overlay - Same as blue gradient theme */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(135deg, rgba(30,58,138,0.85) 0%, rgba(59,130,246,0.75) 50%, rgba(96,165,250,0.65) 100%)",
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-10 lg:p-14">
            <div className="grid lg:grid-cols-5 gap-10 items-center">
              {/* Left Content - Takes 3/5 space */}
              <div className="lg:col-span-3">
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 mb-4"
                >
                  <Rocket className="w-4 h-4 text-white" />
                  <span className="text-white font-semibold text-xs uppercase tracking-widest">
                    Join 10,000+ Subscribers
                  </span>
                </motion.div>

                {/* Title */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-3 leading-tight">
                  Get <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-white">Exclusive</span> Property Updates
                </h2>

                <p className="text-blue-100 text-sm md:text-base max-w-lg leading-relaxed">
                  {subtitle}
                </p>

                {/* Animated Stats */}
                <div className="flex flex-wrap gap-6 mt-6">
                  {[
                    { icon: Users, label: "10,000+", sub: "Subscribers" },
                    { icon: TrendingUp, label: "Weekly", sub: "Updates" },
                    { icon: Gift, label: "Exclusive", sub: "Offers" },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/10"
                    >
                      <item.icon className="w-4 h-4 text-blue-300" strokeWidth={2} />
                      <div>
                        <p className="text-white font-bold text-sm">{item.label}</p>
                        <p className="text-blue-200/70 text-[10px]">{item.sub}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Right Form - Takes 2/5 space */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  {isSubmitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 20, delay: 0.1 }}
                        className="w-16 h-16 bg-emerald-400/20 rounded-2xl flex items-center justify-center mx-auto mb-3"
                      >
                        <CheckCircle className="w-8 h-8 text-emerald-300" strokeWidth={2} />
                      </motion.div>
                      <p className="text-white font-semibold text-lg">
                        {successMessage}
                      </p>
                      <p className="text-blue-200/70 text-sm">
                        Check your inbox for confirmation
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="relative group">
                        <input
                          type="email"
                          placeholder={placeholderText}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-5 py-4 bg-white/95 backdrop-blur-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder:text-gray-400 text-sm shadow-lg transition-all duration-300 group-hover:shadow-xl"
                          required
                        />
                        <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-colors duration-300 group-focus-within:text-blue-500" strokeWidth={2} />
                      </div>

                      <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full cursor-pointer px-6 py-4 bg-white text-blue-700 font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-2">
                          {isLoading ? (
                            <>
                              <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
                              <span>Subscribing...</span>
                            </>
                          ) : (
                            <>
                              <span>{buttonText}</span>
                              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
                            </>
                          )}
                        </span>
                        {/* Button shine effect */}
                        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                      </button>

                      <p className="text-blue-200/60 text-xs text-center flex items-center justify-center gap-1">
                        <Clock className="w-3 h-3" />
                        No spam, unsubscribe anytime
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}