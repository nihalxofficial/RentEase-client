// src/app/403/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Shield,
  Lock,
  Home,
  ArrowLeft,
  Sparkles,
  Building2,
} from "lucide-react";

// ==================== 403 UNAUTHORIZED PAGE ====================
export default function UnauthorizedClient() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
      {/* Hero Section with proper spacing */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-blue-50/50 via-white to-white overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-2 border-blue-100/50"
            >
              {/* Decorative Gradient Top */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600" />

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {/* Logo */}
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2.5 group mb-8"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/30 flex-shrink-0">
                      <Building2 className="w-5 h-5 text-white" strokeWidth={2} />
                    </div>
                    <span className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
                      Rent<span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Ease</span>
                    </span>
                  </Link>

                  {/* Status Code */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="px-3 py-1 bg-rose-50 text-rose-600 text-sm font-semibold rounded-full border border-rose-200">
                      403 Error
                    </div>
                    <div className="flex items-center gap-1.5 text-rose-500">
                      <Shield className="w-4 h-4" strokeWidth={2} />
                      <span className="text-xs font-medium">Access Denied</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                    Unauthorized
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">
                      Access
                    </span>
                  </h1>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    You don&apos;t have permission to access this page. Please contact your
                    administrator if you believe this is a mistake.
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <Home className="w-4 h-4" strokeWidth={2} />
                      <span>Go Home</span>
                    </Link>
                    <button
                      onClick={() => window.history.back()}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl border-2 border-blue-100 hover:border-blue-400 shadow-sm hover:shadow-[0_8px_24px_rgba(37,99,235,0.12)] transition-all duration-300 hover:-translate-y-1 group"
                    >
                      <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" strokeWidth={2} />
                      <span>Go Back</span>
                    </button>
                  </div>

                  {/* Help Text */}
                  <div className="mt-6 p-4 bg-amber-50 rounded-xl border border-amber-200">
                    <p className="text-sm text-amber-700 flex items-start gap-2">
                      <span className="text-amber-500">💡</span>
                      <span>
                        Need access? Contact your administrator or try logging in with a different account.
                      </span>
                    </p>
                  </div>
                </div>

                {/* Right Side - Visual */}
                <div className="relative hidden lg:flex items-center justify-center p-12 bg-gradient-to-br from-blue-50/50 via-blue-100/30 to-white">
                  <div className="relative">
                    {/* Main Icon */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="relative"
                    >
                      <div className="w-48 h-48 mx-auto bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl flex items-center justify-center shadow-2xl border-4 border-blue-200/50">
                        <Lock className="w-24 h-24 text-blue-600/70" strokeWidth={1.5} />
                      </div>

                      {/* Decorative Badge */}
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 25, delay: 0.4 }}
                        className="absolute -top-3 -right-3 bg-rose-500 text-white text-xs font-bold rounded-full px-4 py-2 shadow-lg"
                      >
                        403
                      </motion.div>

                      {/* Floating Elements */}
                      <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-8 -left-8 w-16 h-16 bg-blue-400/20 rounded-full blur-xl"
                      />
                      <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"
                      />
                    </motion.div>

                    {/* Stats Badges */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="mt-8 grid grid-cols-2 gap-3"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center border border-blue-100/50 shadow-sm">
                        <p className="text-xs font-medium text-gray-500">Need Help?</p>
                        <p className="text-sm font-semibold text-blue-600">Contact Support</p>
                      </div>
                      <div className="bg-white/80 backdrop-blur-sm rounded-xl p-3 text-center border border-blue-100/50 shadow-sm">
                        <p className="text-xs font-medium text-gray-500">Try Again</p>
                        <p className="text-sm font-semibold text-blue-600">Refresh Page</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Bottom Footer */}
              <div className="border-t border-gray-100/60 px-8 py-4 bg-gray-50/30 flex flex-col sm:flex-row items-center justify-between gap-2">
                <p className="text-xs text-gray-400">
                  &copy; {new Date().getFullYear()} RentEase. All rights reserved.
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-400">
                  <Link href="/privacy" className="hover:text-blue-600 transition-colors">
                    Privacy Policy
                  </Link>
                  <span className="w-px h-3 bg-gray-300" />
                  <Link href="/terms" className="hover:text-blue-600 transition-colors">
                    Terms of Service
                  </Link>
                  <span className="w-px h-3 bg-gray-300" />
                  <Link href="/contact" className="hover:text-blue-600 transition-colors">
                    Contact
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}