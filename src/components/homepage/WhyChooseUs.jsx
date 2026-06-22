// src/components/sections/WhyChooseUs.jsx
"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Users,
  Clock,
  HandHeart,
  Sparkles,
  CheckCircle,
  Building2,
  CreditCard,
  BadgeCheck,
  Headphones,
  Award,
  Zap,
} from "lucide-react";

// ==================== WHY CHOOSE US COMPONENT ====================
export default function WhyChooseUs({
  title = "Why Choose Us",
  subtitle = "We make property rental simple, secure, and hassle-free",
  features = [
    {
      id: 1,
      title: "Secure Transactions",
      description: "All payments are protected with Stripe encryption for your peace of mind",
      icon: Shield,
      color: "blue",
    },
    {
      id: 2,
      title: "Verified Users",
      description: "All tenants and owners are verified and trusted by our community",
      icon: BadgeCheck,
      color: "emerald",
    },
    {
      id: 3,
      title: "24/7 Support",
      description: "Our dedicated team is here to help you anytime, anywhere",
      icon: Headphones,
      color: "purple",
    },
    {
      id: 4,
      title: "Best Prices",
      description: "Get the best deals on premium properties with no hidden fees",
      icon: HandHeart,
      color: "orange",
    },
    {
      id: 5,
      title: "Smart Matching",
      description: "AI-powered recommendations to find your perfect property faster",
      icon: Zap,
      color: "indigo",
    },
    {
      id: 6,
      title: "Trusted Platform",
      description: "Join thousands of happy users who trust us with their rental needs",
      icon: Award,
      color: "rose",
    },
  ],
  showStats = true,
  stats = [
    { value: "10,000+", label: "Happy Users", icon: Users },
    { value: "2,500+", label: "Properties Listed", icon: Building2 },
    { value: "98%", label: "Satisfaction Rate", icon: CheckCircle },
    { value: "500+", label: "Trusted Owners", icon: Award },
  ],
}) {
  const getColorStyles = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        icon: "text-blue-600",
        border: "border-blue-200/60",
        hover: "hover:border-blue-300/80 hover:shadow-blue-100/30",
        gradient: "from-blue-50/80 to-transparent",
        cardBg: "bg-gradient-to-br from-blue-50/90 via-blue-50/50 to-white",
      },
      emerald: {
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-100",
        icon: "text-emerald-600",
        border: "border-emerald-200/60",
        hover: "hover:border-emerald-300/80 hover:shadow-emerald-100/30",
        gradient: "from-emerald-50/80 to-transparent",
        cardBg: "bg-gradient-to-br from-emerald-50/90 via-emerald-50/50 to-white",
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        icon: "text-purple-600",
        border: "border-purple-200/60",
        hover: "hover:border-purple-300/80 hover:shadow-purple-100/30",
        gradient: "from-purple-50/80 to-transparent",
        cardBg: "bg-gradient-to-br from-purple-50/90 via-purple-50/50 to-white",
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        icon: "text-orange-600",
        border: "border-orange-200/60",
        hover: "hover:border-orange-300/80 hover:shadow-orange-100/30",
        gradient: "from-orange-50/80 to-transparent",
        cardBg: "bg-gradient-to-br from-orange-50/90 via-orange-50/50 to-white",
      },
      indigo: {
        bg: "bg-indigo-50",
        iconBg: "bg-indigo-100",
        icon: "text-indigo-600",
        border: "border-indigo-200/60",
        hover: "hover:border-indigo-300/80 hover:shadow-indigo-100/30",
        gradient: "from-indigo-50/80 to-transparent",
        cardBg: "bg-gradient-to-br from-indigo-50/90 via-indigo-50/50 to-white",
      },
      rose: {
        bg: "bg-rose-50",
        iconBg: "bg-rose-100",
        icon: "text-rose-600",
        border: "border-rose-200/60",
        hover: "hover:border-rose-300/80 hover:shadow-rose-100/30",
        gradient: "from-rose-50/80 to-transparent",
        cardBg: "bg-gradient-to-br from-rose-50/90 via-rose-50/50 to-white",
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="py-20 bg-white">
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
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            {title}
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = getColorStyles(feature.color);

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className={`
                  group relative ${colors.cardBg} rounded-2xl p-7 
                  border-2 ${colors.border} 
                  shadow-[0_8px_30px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] 
                  transition-all duration-400 ${colors.hover}
                  hover:-translate-y-2
                `}
              >
                {/* Gradient overlay on hover */}
                <div className={`
                  absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                  transition-opacity duration-500 bg-gradient-to-br ${colors.gradient}
                  pointer-events-none
                `} />

                {/* Icon */}
                <div className={`
                  relative w-14 h-14 ${colors.iconBg} rounded-2xl 
                  flex items-center justify-center mb-4
                  transition-all duration-300 group-hover:scale-110
                `}>
                  <Icon className={`w-7 h-7 ${colors.icon} transition-colors`} strokeWidth={2} />
                  
                  {/* Glow effect on hover */}
                  <div className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 
                    transition-opacity duration-500 blur-xl ${colors.iconBg}/30
                  `} />
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Stats Section */}
        {showStats && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-2xl p-6 text-center border-2 border-blue-100/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-2.5 bg-blue-50 rounded-xl">
                      <Icon className="w-5 h-5 text-blue-500" strokeWidth={2} />
                    </div>
                  </div>
                  <p className="text-2xl md:text-3xl font-extrabold text-gray-900">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}