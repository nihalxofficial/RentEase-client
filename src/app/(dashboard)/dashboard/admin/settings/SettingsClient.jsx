// src/app/(dashboard)/dashboard/admin/settings/SettingsClient.jsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Shield,
  Globe,
  Moon,
  Sun,
  Languages,
  Save,
  CheckCircle,
  AlertCircle,
  LogOut,
  Trash2,
  Eye,
  EyeOff,
  Key,
  Fingerprint,
  Sparkles,
  Smartphone,
  Mail,
  Lock,
  User,
  CreditCard,
  Home,
  Clock,
  Calendar,
  MessageSquare,
  Zap,
  Building2,
  DollarSign,
  Users,
  Settings,
  Database,
  Server,
  Cloud,
  FileText,
  UserCog,
  BarChart3,
  TrendingUp,
  Award,
  Crown,
  UserCheck,
} from "lucide-react";
import { toast } from "react-toastify";
import {
  Button,
  Input,
  Select,
  ListBox,
  Switch,
  Label,
} from "@heroui/react";

// ==================== ADMIN SETTINGS CLIENT ====================
export default function SettingsClient({ userId }) {
  const [activeTab, setActiveTab] = useState("preferences");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Password Form State
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // Notification Settings
  const [notificationSettings, setNotificationSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    bookingAlerts: true,
    propertyAlerts: true,
    userAlerts: true,
    systemAlerts: true,
    promotionalEmails: false,
    securityAlerts: true,
  });

  // Preference Settings
  const [preferenceSettings, setPreferenceSettings] = useState({
    language: "en",
    timezone: "UTC-5",
    dateFormat: "MM/DD/YYYY",
    currency: "USD",
    itemsPerPage: "10",
    defaultUserRole: "tenant",
  });

  // Appearance Settings
  const [appearanceSettings, setAppearanceSettings] = useState({
    theme: "light",
    compactView: false,
    animations: true,
    showUserAvatars: true,
  });

  // System Settings
  const [systemSettings, setSystemSettings] = useState({
    maintenanceMode: false,
    allowNewRegistrations: true,
    requireEmailVerification: true,
    allowPropertyDeletion: true,
    autoApproveProperties: false,
    commissionRate: "10",
    maxPropertyImages: 10,
    maxBookingDays: 365,
  });

  // ========== TABS ==========
  const tabs = [
    { id: "preferences", label: "Preferences", icon: Sparkles },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "appearance", label: "Appearance", icon: Globe },
    { id: "security", label: "Security", icon: Shield },
    { id: "system", label: "System", icon: Server },
  ];

  // ========== OPTIONS ==========
  const languageOptions = [
    { id: "en", label: "English" },
    { id: "es", label: "Spanish" },
    { id: "fr", label: "French" },
    { id: "de", label: "German" },
    { id: "zh", label: "Chinese" },
    { id: "ar", label: "Arabic" },
    { id: "hi", label: "Hindi" },
  ];

  const timezoneOptions = [
    { id: "UTC-12", label: "UTC-12" },
    { id: "UTC-11", label: "UTC-11" },
    { id: "UTC-10", label: "UTC-10" },
    { id: "UTC-9", label: "UTC-9" },
    { id: "UTC-8", label: "UTC-8" },
    { id: "UTC-7", label: "UTC-7" },
    { id: "UTC-6", label: "UTC-6" },
    { id: "UTC-5", label: "UTC-5" },
    { id: "UTC-4", label: "UTC-4" },
    { id: "UTC-3", label: "UTC-3" },
    { id: "UTC-2", label: "UTC-2" },
    { id: "UTC-1", label: "UTC-1" },
    { id: "UTC+0", label: "UTC+0" },
    { id: "UTC+1", label: "UTC+1" },
    { id: "UTC+2", label: "UTC+2" },
    { id: "UTC+3", label: "UTC+3" },
    { id: "UTC+4", label: "UTC+4" },
    { id: "UTC+5", label: "UTC+5" },
    { id: "UTC+6", label: "UTC+6" },
    { id: "UTC+7", label: "UTC+7" },
    { id: "UTC+8", label: "UTC+8" },
    { id: "UTC+9", label: "UTC+9" },
    { id: "UTC+10", label: "UTC+10" },
    { id: "UTC+11", label: "UTC+11" },
    { id: "UTC+12", label: "UTC+12" },
  ];

  const dateFormatOptions = [
    { id: "MM/DD/YYYY", label: "MM/DD/YYYY" },
    { id: "DD/MM/YYYY", label: "DD/MM/YYYY" },
    { id: "YYYY-MM-DD", label: "YYYY-MM-DD" },
    { id: "MMM DD, YYYY", label: "MMM DD, YYYY" },
  ];

  const currencyOptions = [
    { id: "USD", label: "USD ($)" },
    { id: "EUR", label: "EUR (€)" },
    { id: "GBP", label: "GBP (£)" },
    { id: "CAD", label: "CAD (C$)" },
    { id: "AUD", label: "AUD (A$)" },
    { id: "JPY", label: "JPY (¥)" },
    { id: "INR", label: "INR (₹)" },
  ];

  const itemsPerPageOptions = [
    { id: "5", label: "5 items" },
    { id: "10", label: "10 items" },
    { id: "25", label: "25 items" },
    { id: "50", label: "50 items" },
    { id: "100", label: "100 items" },
  ];

  const defaultUserRoleOptions = [
    { id: "tenant", label: "Tenant" },
    { id: "owner", label: "Property Owner" },
    { id: "admin", label: "Administrator" },
  ];

  // ========== HANDLE PASSWORD UPDATE ==========
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }
    
    if (passwordData.newPassword.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setIsLoading(true);
    try {
      // Call your password update API
      // await updatePassword(userId, passwordData);
      toast.success("Password updated successfully!");
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      toast.error("Failed to update password");
    } finally {
      setIsLoading(false);
    }
  };

  // ========== HANDLE NOTIFICATION UPDATE ==========
  const handleNotificationUpdate = (key) => {
    setNotificationSettings((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
    toast.success("Notification preference updated!");
  };

  // ========== HANDLE PREFERENCE UPDATE ==========
  const handlePreferenceUpdate = (key, value) => {
    setPreferenceSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    toast.success("Preference updated!");
  };

  // ========== HANDLE APPEARANCE UPDATE ==========
  const handleAppearanceUpdate = (key, value) => {
    setAppearanceSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    toast.success("Appearance setting updated!");
  };

  // ========== HANDLE SYSTEM UPDATE ==========
  const handleSystemUpdate = (key, value) => {
    setSystemSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
    toast.success("System setting updated!");
  };

  // ========== GET COLOR STYLES ==========
  const getColorStyles = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", icon: "text-blue-600", border: "border-blue-200/60" },
      rose: { bg: "bg-rose-50", iconBg: "bg-rose-100", icon: "text-rose-600", border: "border-rose-200/60" },
      emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", icon: "text-emerald-600", border: "border-emerald-200/60" },
      purple: { bg: "bg-purple-50", iconBg: "bg-purple-100", icon: "text-purple-600", border: "border-purple-200/60" },
      amber: { bg: "bg-amber-50", iconBg: "bg-amber-100", icon: "text-amber-600", border: "border-amber-200/60" },
      indigo: { bg: "bg-indigo-50", iconBg: "bg-indigo-100", icon: "text-indigo-600", border: "border-indigo-200/60" },
    };
    return colors[color] || colors.blue;
  };

  // ========== RENDER TAB CONTENT ==========
  const renderTabContent = () => {
    switch (activeTab) {
      case "preferences":
        return renderPreferences();
      case "notifications":
        return renderNotifications();
      case "appearance":
        return renderAppearance();
      case "security":
        return renderSecurity();
      case "system":
        return renderSystem();
      default:
        return renderPreferences();
    }
  };

  // ========== RENDER PREFERENCES ==========
  const renderPreferences = () => (
    <div className="space-y-6">
      {/* Language */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Languages className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Language
        </h3>
        <Select
          className="w-full"
          value={preferenceSettings.language}
          onChange={(val) => handlePreferenceUpdate("language", val)}
          aria-label="Language"
          classNames={{
            trigger:
              "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
            value: "text-gray-800",
            placeholder: "text-gray-400",
            indicator: "text-blue-400",
            popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
            listBox: "p-1",
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {languageOptions.map((option) => (
                <ListBox.Item
                  key={option.id}
                  id={option.id}
                  textValue={option.label}
                  className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                >
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Timezone */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Timezone
        </h3>
        <Select
          className="w-full"
          value={preferenceSettings.timezone}
          onChange={(val) => handlePreferenceUpdate("timezone", val)}
          aria-label="Timezone"
          classNames={{
            trigger:
              "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
            value: "text-gray-800",
            placeholder: "text-gray-400",
            indicator: "text-blue-400",
            popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
            listBox: "p-1",
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {timezoneOptions.map((option) => (
                <ListBox.Item
                  key={option.id}
                  id={option.id}
                  textValue={option.label}
                  className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                >
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>

      {/* Date Format, Currency & Items Per Page */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" strokeWidth={2} />
            Date Format
          </h3>
          <Select
            className="w-full"
            value={preferenceSettings.dateFormat}
            onChange={(val) => handlePreferenceUpdate("dateFormat", val)}
            aria-label="Date Format"
            classNames={{
              trigger:
                "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
              value: "text-gray-800",
              placeholder: "text-gray-400",
              indicator: "text-blue-400",
              popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
              listBox: "p-1",
            }}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {dateFormatOptions.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                    className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                  >
                    {option.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-blue-600" strokeWidth={2} />
            Currency
          </h3>
          <Select
            className="w-full"
            value={preferenceSettings.currency}
            onChange={(val) => handlePreferenceUpdate("currency", val)}
            aria-label="Currency"
            classNames={{
              trigger:
                "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
              value: "text-gray-800",
              placeholder: "text-gray-400",
              indicator: "text-blue-400",
              popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
              listBox: "p-1",
            }}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {currencyOptions.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                    className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                  >
                    {option.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
        <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
          <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-600" strokeWidth={2} />
            Items Per Page
          </h3>
          <Select
            className="w-full"
            value={preferenceSettings.itemsPerPage}
            onChange={(val) => handlePreferenceUpdate("itemsPerPage", val)}
            aria-label="Items Per Page"
            classNames={{
              trigger:
                "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
              value: "text-gray-800",
              placeholder: "text-gray-400",
              indicator: "text-blue-400",
              popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
              listBox: "p-1",
            }}
          >
            <Select.Trigger>
              <Select.Value />
              <Select.Indicator />
            </Select.Trigger>
            <Select.Popover>
              <ListBox>
                {itemsPerPageOptions.map((option) => (
                  <ListBox.Item
                    key={option.id}
                    id={option.id}
                    textValue={option.label}
                    className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                  >
                    {option.label}
                    <ListBox.ItemIndicator />
                  </ListBox.Item>
                ))}
              </ListBox>
            </Select.Popover>
          </Select>
        </div>
      </div>

      {/* Default User Role */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <UserCog className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Default User Role
        </h3>
        <Select
          className="w-full"
          value={preferenceSettings.defaultUserRole}
          onChange={(val) => handlePreferenceUpdate("defaultUserRole", val)}
          aria-label="Default User Role"
          classNames={{
            trigger:
              "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
            value: "text-gray-800",
            placeholder: "text-gray-400",
            indicator: "text-blue-400",
            popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
            listBox: "p-1",
          }}
        >
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              {defaultUserRoleOptions.map((option) => (
                <ListBox.Item
                  key={option.id}
                  id={option.id}
                  textValue={option.label}
                  className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                >
                  {option.label}
                  <ListBox.ItemIndicator />
                </ListBox.Item>
              ))}
            </ListBox>
          </Select.Popover>
        </Select>
      </div>
    </div>
  );

  // ========== RENDER NOTIFICATIONS ==========
  const renderNotifications = () => {
    const notificationOptions = [
      { key: "emailNotifications", label: "Email Notifications", description: "Receive updates via email", icon: Mail },
      { key: "pushNotifications", label: "Push Notifications", description: "Receive push notifications on your device", icon: Smartphone },
      { key: "bookingAlerts", label: "Booking Alerts", description: "Get notified about new booking requests", icon: Calendar },
      { key: "propertyAlerts", label: "Property Alerts", description: "Get notified about new property listings", icon: Home },
      { key: "userAlerts", label: "User Alerts", description: "Get notified about new user registrations", icon: Users },
      { key: "systemAlerts", label: "System Alerts", description: "Get notified about system events", icon: Server },
      { key: "securityAlerts", label: "Security Alerts", description: "Get notified about security-related events", icon: Shield },
      { key: "promotionalEmails", label: "Promotional Emails", description: "Receive special offers and promotions", icon: Building2 },
    ];

    return (
      <div className="space-y-4">
        {notificationOptions.map((option) => {
          const Icon = option.icon;
          const colors = getColorStyles(option.key === "securityAlerts" ? "rose" : "blue");
          return (
            <div
              key={option.key}
              className="flex items-center justify-between p-4 bg-gray-50/80 rounded-2xl border border-gray-100/50 hover:border-blue-200/50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} strokeWidth={2} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{option.label}</h4>
                  <p className="text-sm text-gray-500">{option.description}</p>
                </div>
              </div>
              <Switch
                isSelected={notificationSettings[option.key]}
                onChange={() => handleNotificationUpdate(option.key)}
                className="cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    );
  };

  // ========== RENDER APPEARANCE ==========
  const renderAppearance = () => (
    <div className="space-y-6">
      {/* Theme */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Moon className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Theme Preference
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button
            onClick={() => handleAppearanceUpdate("theme", "light")}
            className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
              appearanceSettings.theme === "light"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Sun className="w-5 h-5 text-amber-500" strokeWidth={2} />
            <span className="font-medium">Light Mode</span>
          </button>
          <button
            onClick={() => handleAppearanceUpdate("theme", "dark")}
            className={`cursor-pointer flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all ${
              appearanceSettings.theme === "dark"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          >
            <Moon className="w-5 h-5 text-blue-600" strokeWidth={2} />
            <span className="font-medium">Dark Mode</span>
          </button>
        </div>
      </div>

      {/* Display Options */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Zap className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Display Options
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Compact View</h4>
              <p className="text-sm text-gray-500">Show more content with reduced spacing</p>
            </div>
            <Switch
              isSelected={appearanceSettings.compactView}
              onChange={() => handleAppearanceUpdate("compactView", !appearanceSettings.compactView)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Animations</h4>
              <p className="text-sm text-gray-500">Enable smooth animations throughout the app</p>
            </div>
            <Switch
              isSelected={appearanceSettings.animations}
              onChange={() => handleAppearanceUpdate("animations", !appearanceSettings.animations)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Show User Avatars</h4>
              <p className="text-sm text-gray-500">Display user avatars in lists and tables</p>
            </div>
            <Switch
              isSelected={appearanceSettings.showUserAvatars}
              onChange={() => handleAppearanceUpdate("showUserAvatars", !appearanceSettings.showUserAvatars)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );

  // ========== RENDER SECURITY ==========
  const renderSecurity = () => (
    <div className="space-y-6">
      {/* Change Password */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Lock className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Change Password
        </h3>
        <form onSubmit={handlePasswordUpdate} className="space-y-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1.5">
              Current Password *
            </Label>
            <div className="relative">
              <Input
                type={showPassword ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                className="w-full"
                classNames={{
                  input: "bg-transparent text-gray-800",
                  inputWrapper: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300",
                }}
                required
                endContent={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="cursor-pointer text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" strokeWidth={2} />
                    ) : (
                      <Eye className="w-4 h-4" strokeWidth={2} />
                    )}
                  </button>
                }
              />
            </div>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1.5">
              New Password *
            </Label>
            <Input
              type="password"
              value={passwordData.newPassword}
              onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
              className="w-full"
              classNames={{
                input: "bg-transparent text-gray-800",
                inputWrapper: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300",
              }}
              required
              minLength={6}
            />
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1.5">
              Confirm New Password *
            </Label>
            <Input
              type="password"
              value={passwordData.confirmPassword}
              onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
              className="w-full"
              classNames={{
                input: "bg-transparent text-gray-800",
                inputWrapper: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300",
              }}
              required
            />
          </div>
          <Button
            type="submit"
            isDisabled={isLoading}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-all duration-200 hover:-translate-y-0.5 flex items-center gap-2 disabled:opacity-70 cursor-pointer"
          >
            {isLoading ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>Updating...</span>
              </>
            ) : (
              <>
                <Key className="w-4 h-4" strokeWidth={2} />
                <span>Update Password</span>
              </>
            )}
          </Button>
        </form>
      </div>

      {/* Two-Factor Authentication */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Fingerprint className="w-5 h-5 text-blue-600" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Two-Factor Authentication</h4>
              <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
            </div>
          </div>
          <Button className="px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors cursor-pointer">
            Enable
          </Button>
        </div>
      </div>

      {/* Session Management */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <User className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Active Sessions
        </h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-blue-600" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Chrome on Windows</p>
                <p className="text-xs text-gray-400">New York, USA • Active now</p>
              </div>
            </div>
            <span className="text-xs text-emerald-600 font-medium flex items-center gap-1">
              <CheckCircle className="w-3 h-3" strokeWidth={2} />
              Current
            </span>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-gray-600" strokeWidth={2} />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Safari on iPhone</p>
                <p className="text-xs text-gray-400">Los Angeles, USA • 2 hours ago</p>
              </div>
            </div>
            <button className="text-xs text-rose-600 hover:text-rose-700 font-medium cursor-pointer">
              Logout
            </button>
          </div>
        </div>
        <Button className="mt-3 w-full px-4 py-2 text-sm font-medium text-rose-600 bg-rose-50 rounded-xl hover:bg-rose-100 transition-colors cursor-pointer">
          Logout All Other Sessions
        </Button>
      </div>

      {/* Admin Activity Log */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <div className="flex items-center justify-between">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <BarChart3 className="w-5 h-5 text-indigo-600" strokeWidth={2} />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">Admin Activity Log</h4>
              <p className="text-sm text-gray-500">View all admin actions and system events</p>
            </div>
          </div>
          <Button className="px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50 rounded-xl hover:bg-indigo-100 transition-colors cursor-pointer">
            View Log
          </Button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="bg-rose-50/80 rounded-2xl p-6 border-2 border-rose-200/50">
        <div className="flex items-center gap-2 mb-4">
          <AlertCircle className="w-5 h-5 text-rose-600" strokeWidth={2} />
          <h3 className="text-lg font-bold text-rose-700">Danger Zone</h3>
        </div>
        <div className="space-y-3">
          <button className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl border border-rose-200 hover:bg-rose-50 transition-colors cursor-pointer group">
            <span className="text-sm font-medium text-rose-600">Log Out from All Devices</span>
            <LogOut className="w-4 h-4 text-rose-400 group-hover:text-rose-600 transition-colors" strokeWidth={2} />
          </button>
          <button className="flex items-center justify-between w-full px-4 py-3 bg-white rounded-xl border border-rose-200 hover:bg-rose-50 transition-colors cursor-pointer group">
            <span className="text-sm font-medium text-rose-600">Delete Account</span>
            <Trash2 className="w-4 h-4 text-rose-400 group-hover:text-rose-600 transition-colors" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );

  // ========== RENDER SYSTEM ==========
  const renderSystem = () => (
    <div className="space-y-6">
      {/* General Settings */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Settings className="w-5 h-5 text-blue-600" strokeWidth={2} />
          General Settings
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Maintenance Mode</h4>
              <p className="text-sm text-gray-500">Put the site into maintenance mode</p>
            </div>
            <Switch
              isSelected={systemSettings.maintenanceMode}
              onChange={() => handleSystemUpdate("maintenanceMode", !systemSettings.maintenanceMode)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Allow New Registrations</h4>
              <p className="text-sm text-gray-500">Allow new users to register on the platform</p>
            </div>
            <Switch
              isSelected={systemSettings.allowNewRegistrations}
              onChange={() => handleSystemUpdate("allowNewRegistrations", !systemSettings.allowNewRegistrations)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Require Email Verification</h4>
              <p className="text-sm text-gray-500">Users must verify their email before accessing the platform</p>
            </div>
            <Switch
              isSelected={systemSettings.requireEmailVerification}
              onChange={() => handleSystemUpdate("requireEmailVerification", !systemSettings.requireEmailVerification)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Allow Property Deletion</h4>
              <p className="text-sm text-gray-500">Allow owners to delete their properties</p>
            </div>
            <Switch
              isSelected={systemSettings.allowPropertyDeletion}
              onChange={() => handleSystemUpdate("allowPropertyDeletion", !systemSettings.allowPropertyDeletion)}
              className="cursor-pointer"
            />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h4 className="font-semibold text-gray-900">Auto-Approve Properties</h4>
              <p className="text-sm text-gray-500">Automatically approve new property listings</p>
            </div>
            <Switch
              isSelected={systemSettings.autoApproveProperties}
              onChange={() => handleSystemUpdate("autoApproveProperties", !systemSettings.autoApproveProperties)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Commission & Limits */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-blue-600" strokeWidth={2} />
          Commission & Limits
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1.5">
              Default Commission Rate
            </Label>
            <Select
              className="w-full"
              value={systemSettings.commissionRate}
              onChange={(val) => handleSystemUpdate("commissionRate", val)}
              aria-label="Commission Rate"
              classNames={{
                trigger:
                  "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
                value: "text-gray-800",
                placeholder: "text-gray-400",
                indicator: "text-blue-400",
                popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
                listBox: "p-1",
              }}
            >
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {[
                    { id: "5", label: "5%" },
                    { id: "7", label: "7%" },
                    { id: "10", label: "10%" },
                    { id: "12", label: "12%" },
                    { id: "15", label: "15%" },
                    { id: "20", label: "20%" },
                  ].map((option) => (
                    <ListBox.Item
                      key={option.id}
                      id={option.id}
                      textValue={option.label}
                      className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                    >
                      {option.label}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1.5">
              Max Property Images
            </Label>
            <Select
              className="w-full"
              value={systemSettings.maxPropertyImages}
              onChange={(val) => handleSystemUpdate("maxPropertyImages", val)}
              aria-label="Max Property Images"
              classNames={{
                trigger:
                  "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
                value: "text-gray-800",
                placeholder: "text-gray-400",
                indicator: "text-blue-400",
                popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
                listBox: "p-1",
              }}
            >
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {[
                    { id: "5", label: "5 images" },
                    { id: "10", label: "10 images" },
                    { id: "15", label: "15 images" },
                    { id: "20", label: "20 images" },
                    { id: "30", label: "30 images" },
                  ].map((option) => (
                    <ListBox.Item
                      key={option.id}
                      id={option.id}
                      textValue={option.label}
                      className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                    >
                      {option.label}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
          <div>
            <Label className="block text-sm font-medium text-gray-700 mb-1.5">
              Max Booking Days
            </Label>
            <Select
              className="w-full"
              value={systemSettings.maxBookingDays}
              onChange={(val) => handleSystemUpdate("maxBookingDays", val)}
              aria-label="Max Booking Days"
              classNames={{
                trigger:
                  "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
                value: "text-gray-800",
                placeholder: "text-gray-400",
                indicator: "text-blue-400",
                popover: "bg-white rounded-xl shadow-lg border border-blue-100/50 mt-1",
                listBox: "p-1",
              }}
            >
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>
                  {[
                    { id: "30", label: "30 days" },
                    { id: "60", label: "60 days" },
                    { id: "90", label: "90 days" },
                    { id: "180", label: "180 days" },
                    { id: "365", label: "365 days" },
                  ].map((option) => (
                    <ListBox.Item
                      key={option.id}
                      id={option.id}
                      textValue={option.label}
                      className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                    >
                      {option.label}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>
      </div>

      {/* System Status */}
      <div className="bg-gray-50/80 rounded-2xl p-6 border border-gray-100/50">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <Server className="w-5 h-5 text-blue-600" strokeWidth={2} />
          System Status
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-medium text-gray-900">API Status</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">All systems operational</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-medium text-gray-900">Database</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">Connected and healthy</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <p className="text-sm font-medium text-gray-900">Storage</p>
            </div>
            <p className="text-xs text-gray-500 mt-1">85% used</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Settings</span>
          </h1>
          <p className="text-gray-500 mt-1">Manage admin account preferences and system settings</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto gap-2 mb-8 pb-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`cursor-pointer flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                isActive
                  ? "bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-[0_4px_14px_rgba(37,99,235,0.3)]"
                  : "bg-gray-100/80 text-gray-600 hover:bg-gray-200/80"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={2} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl p-6 border-2 border-blue-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
      >
        {renderTabContent()}
      </motion.div>
    </div>
  );
}