"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Home,
  Search,
  ArrowLeft,
  Sparkles,
  Building2,
  AlertCircle,
  Compass,
  MapPin,
  Heart,
  TrendingUp,
} from "lucide-react";

export default function NotFound() {
  const suggestions = [
    { label: "Browse Properties", href: "/properties", icon: Building2 },
    // { label: "Search Again", href: "/search", icon: Search },
    { label: "Go to Dashboard", href: "/dashboard", icon: TrendingUp },
    { label: "Visit Homepage", href: "/", icon: Home },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden px-4">
      {/* Background Decorations */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      
      {/* Floating Elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-32 left-10 text-blue-200/20 hidden lg:block"
      >
        <Building2 className="w-32 h-32" strokeWidth={1} />
      </motion.div>
      
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 right-10 text-blue-200/20 hidden lg:block"
      >
        <MapPin className="w-32 h-32" strokeWidth={1} />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full mx-auto text-center"
      >
        {/* 404 Number with Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: 0.2,
          }}
          className="relative mb-6"
        >
          <div className="text-8xl md:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 select-none">
            404
          </div>
          
          {/* Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -z-10" />
          </div>
          
          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="h-1 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full mx-auto mt-2"
          />
        </motion.div>

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
            delay: 0.3,
          }}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center border-2 border-blue-100/50">
            <Compass className="w-8 h-8 text-blue-600" strokeWidth={2} />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3"
        >
          Oops! Page Not Found
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-lg max-w-md mx-auto mb-8"
        >
          The page you're looking for doesn't exist or has been moved.
          Let's get you back on track.
        </motion.p>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-8"
        >
          {suggestions.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href={item.href}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-gray-700 font-medium rounded-xl border-2 border-blue-100/50 hover:border-blue-400 hover:text-blue-600 shadow-sm hover:shadow-[0_8px_24px_rgba(37,99,235,0.08)] transition-all duration-300 text-sm"
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  <span>{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-1 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2.5} />
            <span>Go Back Home</span>
          </Link>
        </motion.div>

        {/* Help Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-6 text-xs text-gray-400 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-3 h-3 text-blue-400" strokeWidth={2} />
          <span>Need help? </span>
          <Link href="/contact" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            Contact Support
          </Link>
          <span className="text-gray-300">•</span>
          <Link href="/faq" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
            View FAQ
          </Link>
        </motion.p>

        {/* Decorative Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className={`w-2 h-2 rounded-full ${
                i === 0 ? "bg-blue-400" : i === 1 ? "bg-blue-300" : "bg-blue-200"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}