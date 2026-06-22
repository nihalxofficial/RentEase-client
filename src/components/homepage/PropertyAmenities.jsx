// src/components/sections/PropertyAmenities.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  ChevronRight,
  Wifi,
  Car,
  Dumbbell,
  Coffee,
  Shield,
  TreePine,
  Waves,
  Zap,
  CheckCircle,
} from "lucide-react";

// ==================== PROPERTY AMENITIES COMPONENT ====================
export default function PropertyAmenities({
  title = "Premium Amenities",
  subtitle = "Discover the features that make every property extraordinary",
  viewAllLink = "/properties",
  viewAllText = "Explore All Properties",
  amenities = [
    {
      id: 1,
      name: "High-Speed WiFi",
      icon: Wifi,
      description: "Stay connected with blazing fast fiber internet",
      color: "blue",
      popular: true,
      iconBg: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Free Parking",
      icon: Car,
      description: "Secure covered parking with EV charging",
      color: "emerald",
      popular: false,
      iconBg: "from-emerald-400 to-emerald-600",
    },
    {
      id: 3,
      name: "Fitness Center",
      icon: Dumbbell,
      description: "State-of-the-art gym with personal trainers",
      color: "purple",
      popular: true,
      iconBg: "from-purple-400 to-purple-600",
    },
    {
      id: 4,
      name: "Coffee Bar",
      icon: Coffee,
      description: "Premium espresso bar with organic beans",
      color: "orange",
      popular: false,
      iconBg: "from-orange-400 to-orange-600",
    },
    {
      id: 5,
      name: "24/7 Security",
      icon: Shield,
      description: "Advanced surveillance with facial recognition",
      color: "rose",
      popular: true,
      iconBg: "from-rose-400 to-rose-600",
    },
    {
      id: 6,
      name: "Green Garden",
      icon: TreePine,
      description: "Zen gardens with meditation spaces",
      color: "emerald",
      popular: false,
      iconBg: "from-emerald-500 to-teal-600",
    },
    {
      id: 7,
      name: "Swimming Pool",
      icon: Waves,
      description: "Infinity pool with stunning city views",
      color: "cyan",
      popular: true,
      iconBg: "from-cyan-400 to-blue-500",
    },
  ],
}) {
  const [hoveredId, setHoveredId] = useState(null);

  const getColorStyles = (color) => {
    const colors = {
      blue: {
        bg: "bg-blue-50",
        iconBg: "bg-blue-100",
        icon: "text-blue-600",
        border: "border-blue-200/60",
        hover: "hover:border-blue-300/80 hover:shadow-blue-100/30",
        gradient: "from-blue-500 to-blue-600",
        light: "bg-blue-50/50",
      },
      emerald: {
        bg: "bg-emerald-50",
        iconBg: "bg-emerald-100",
        icon: "text-emerald-600",
        border: "border-emerald-200/60",
        hover: "hover:border-emerald-300/80 hover:shadow-emerald-100/30",
        gradient: "from-emerald-500 to-emerald-600",
        light: "bg-emerald-50/50",
      },
      purple: {
        bg: "bg-purple-50",
        iconBg: "bg-purple-100",
        icon: "text-purple-600",
        border: "border-purple-200/60",
        hover: "hover:border-purple-300/80 hover:shadow-purple-100/30",
        gradient: "from-purple-500 to-purple-600",
        light: "bg-purple-50/50",
      },
      orange: {
        bg: "bg-orange-50",
        iconBg: "bg-orange-100",
        icon: "text-orange-600",
        border: "border-orange-200/60",
        hover: "hover:border-orange-300/80 hover:shadow-orange-100/30",
        gradient: "from-orange-500 to-orange-600",
        light: "bg-orange-50/50",
      },
      rose: {
        bg: "bg-rose-50",
        iconBg: "bg-rose-100",
        icon: "text-rose-600",
        border: "border-rose-200/60",
        hover: "hover:border-rose-300/80 hover:shadow-rose-100/30",
        gradient: "from-rose-500 to-rose-600",
        light: "bg-rose-50/50",
      },
      cyan: {
        bg: "bg-cyan-50",
        iconBg: "bg-cyan-100",
        icon: "text-cyan-600",
        border: "border-cyan-200/60",
        hover: "hover:border-cyan-300/80 hover:shadow-cyan-100/30",
        gradient: "from-cyan-500 to-cyan-600",
        light: "bg-cyan-50/50",
      },
    };
    return colors[color] || colors.blue;
  };

  // Split amenities into two rows
  const midPoint = Math.ceil(amenities.length / 2);
  const firstRow = amenities.slice(0, midPoint);
  const secondRow = amenities.slice(midPoint);

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
              Amenities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2">
            Premium{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
              Amenities
            </span>
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* First Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
          {firstRow.map((amenity, index) => {
            const Icon = amenity.icon;
            const colors = getColorStyles(amenity.color);
            const isHovered = hoveredId === amenity.id;

            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                onMouseEnter={() => setHoveredId(amenity.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white rounded-2xl p-6 border-2 ${colors.border} shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-400 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${colors.hover}`}
              >
                {/* Background Gradient on Hover */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Popular Badge */}
                {amenity.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className="absolute top-3 right-3 z-10"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-400 blur-lg opacity-50 animate-pulse" />
                      <div className="relative flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-lg">
                        <Zap className="w-3 h-3 text-white" />
                        <span className="text-white text-[10px] font-bold">POPULAR</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Icon with Gradient Background */}
                <div className="relative z-10">
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300`}
                    style={{
                      background: isHovered
                        ? "rgba(255,255,255,0.2)"
                        : `linear-gradient(135deg, ${amenity.iconBg})`,
                    }}
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        isHovered ? "text-white" : colors.icon
                      }`}
                      strokeWidth={2}
                    />
                    {/* Glow Effect */}
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                      style={{
                        background: isHovered
                          ? "rgba(255,255,255,0.1)"
                          : `${colors.iconBg}30`,
                      }}
                    />
                  </motion.div>

                  {/* Name */}
                  <h3
                    className={`text-sm font-bold mb-1.5 transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {amenity.name}
                  </h3>

                  {/* Description */}
                  <p
                    className={`text-xs transition-colors duration-300 ${
                      isHovered ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {amenity.description}
                  </p>

                  {/* Interactive Checkmark on Hover */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-3"
                  >
                    <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Included</span>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/5 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {secondRow.map((amenity, index) => {
            const Icon = amenity.icon;
            const colors = getColorStyles(amenity.color);
            const isHovered = hoveredId === amenity.id;

            return (
              <motion.div
                key={amenity.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08 + 0.3,
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                }}
                onMouseEnter={() => setHoveredId(amenity.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`group relative bg-white rounded-2xl p-6 border-2 ${colors.border} shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-400 cursor-pointer overflow-hidden hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] ${colors.hover}`}
              >
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colors.gradient}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                />

                {amenity.popular && (
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 20,
                      delay: 0.2,
                    }}
                    className="absolute top-3 right-3 z-10"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-amber-400 blur-lg opacity-50 animate-pulse" />
                      <div className="relative flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full shadow-lg">
                        <Zap className="w-3 h-3 text-white" />
                        <span className="text-white text-[10px] font-bold">POPULAR</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="relative z-10">
                  <motion.div
                    className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300`}
                    style={{
                      background: isHovered
                        ? "rgba(255,255,255,0.2)"
                        : `linear-gradient(135deg, ${amenity.iconBg})`,
                    }}
                    animate={{
                      scale: isHovered ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon
                      className={`w-7 h-7 transition-colors duration-300 ${
                        isHovered ? "text-white" : colors.icon
                      }`}
                      strokeWidth={2}
                    />
                    <div
                      className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                      style={{
                        background: isHovered
                          ? "rgba(255,255,255,0.1)"
                          : `${colors.iconBg}30`,
                      }}
                    />
                  </motion.div>

                  <h3
                    className={`text-sm font-bold mb-1.5 transition-colors duration-300 ${
                      isHovered ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {amenity.name}
                  </h3>

                  <p
                    className={`text-xs transition-colors duration-300 ${
                      isHovered ? "text-white/90" : "text-gray-500"
                    }`}
                  >
                    {amenity.description}
                  </p>

                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -10,
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-3"
                  >
                    <div className="flex items-center gap-1.5 text-white/90 text-xs font-medium">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>Included</span>
                    </div>
                  </motion.div>
                </div>

                <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-500" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-white/5 rounded-full blur-3xl group-hover:w-40 group-hover:h-40 transition-all duration-700" />
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href={viewAllLink}
            className="cursor-pointer inline-flex items-center gap-2 px-8 py-3.5 bg-white text-blue-600 font-semibold rounded-2xl border-2 border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-1 group"
          >
            <span>{viewAllText}</span>
            <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}