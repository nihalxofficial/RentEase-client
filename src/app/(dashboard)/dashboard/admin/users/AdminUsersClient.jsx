"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Search,
  Filter,
  ChevronDown,
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Shield,
  Building2,
  Home,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
  Sparkles,
  Eye,
  Edit,
  Trash2,
  RefreshCw,
  UserCog,
  Award,
  Crown,
  UserPlus,
  Ban,
  Check,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import {
  Modal,
  Button,
  Input,
  Select,
  ListBox,
  Label,
  Switch,
} from "@heroui/react";
import { updateUser } from "@/lib/action/users";

// ==================== ADMIN USERS CLIENT ====================
export default function AdminUsersClient({ users: initialUsers = [], adminId }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRole, setFilterRole] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");
  const [users, setUsers] = useState(initialUsers);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showStatusModal, setShowStatusModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [isRefreshing, setIsRefreshing] = useState(false);

  // Role options
  const roleOptions = [
    { id: "all", label: "All Roles" },
    { id: "admin", label: "Administrator" },
    { id: "owner", label: "Property Owner" },
    { id: "tenant", label: "Tenant" },
  ];

  const statusOptions = [
    { id: "all", label: "All Status" },
    { id: "active", label: "Active" },
    { id: "suspended", label: "Suspended" },
    { id: "pending", label: "Pending" },
  ];

  const availableRoles = [
    { id: "admin", label: "Administrator", icon: <Crown className="w-4 h-4" /> },
    { id: "owner", label: "Property Owner", icon: <Building2 className="w-4 h-4" /> },
    { id: "tenant", label: "Tenant", icon: <Home className="w-4 h-4" /> },
  ];

  const availableStatuses = [
    { id: "active", label: "Active", icon: <CheckCircle className="w-4 h-4" /> },
    { id: "suspended", label: "Suspended", icon: <XCircle className="w-4 h-4" /> },
    { id: "pending", label: "Pending", icon: <Clock className="w-4 h-4" /> },
  ];

  // ========== FILTERED USERS ==========
  const filteredUsers = users.filter((user) => {
    const matchesSearch = user.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = filterRole === "all" || user.role === filterRole;
    const matchesStatus = filterStatus === "all" || user.status === filterStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  // ========== STATS ==========
  const stats = {
    total: users.length,
    active: users.filter(u => u.status === "active").length,
    suspended: users.filter(u => u.status === "suspended").length,
    pending: users.filter(u => u.status === "pending").length,
    admins: users.filter(u => u.role === "admin").length,
    owners: users.filter(u => u.role === "owner").length,
    tenants: users.filter(u => u.role === "tenant").length,
  };

  // ========== STATS CARDS ==========
  const statsCards = [
    {
      title: "Total Users",
      value: stats.total,
      icon: Users,
      color: "blue",
      change: "All registered users",
      trend: "up",
    },
    {
      title: "Active",
      value: stats.active,
      icon: CheckCircle,
      color: "emerald",
      change: "Active accounts",
      trend: "up",
    },
    {
      title: "Suspended",
      value: stats.suspended,
      icon: XCircle,
      color: "rose",
      change: "Suspended accounts",
      trend: "down",
    },
    {
      title: "Pending",
      value: stats.pending,
      icon: Clock,
      color: "amber",
      change: "Awaiting verification",
      trend: "neutral",
    },
  ];

  // ========== GET COLOR STYLES ==========
  const getColorStyles = (color) => {
    const colors = {
      blue: { bg: "bg-blue-50", iconBg: "bg-blue-100", icon: "text-blue-600", border: "border-blue-200/60" },
      emerald: { bg: "bg-emerald-50", iconBg: "bg-emerald-100", icon: "text-emerald-600", border: "border-emerald-200/60" },
      rose: { bg: "bg-rose-50", iconBg: "bg-rose-100", icon: "text-rose-600", border: "border-rose-200/60" },
      amber: { bg: "bg-amber-50", iconBg: "bg-amber-100", icon: "text-amber-600", border: "border-amber-200/60" },
      purple: { bg: "bg-purple-50", iconBg: "bg-purple-100", icon: "text-purple-600", border: "border-purple-200/60" },
    };
    return colors[color] || colors.blue;
  };

  // ========== GET ROLE BADGE ==========
  const getRoleBadge = (role) => {
    const roleMap = {
      admin: { label: "Admin", className: "bg-purple-100 text-purple-700 border-purple-200", icon: <Crown className="w-3.5 h-3.5" /> },
      owner: { label: "Owner", className: "bg-blue-100 text-blue-700 border-blue-200", icon: <Building2 className="w-3.5 h-3.5" /> },
      tenant: { label: "Tenant", className: "bg-emerald-100 text-emerald-700 border-emerald-200", icon: <Home className="w-3.5 h-3.5" /> },
    };
    return roleMap[role] || roleMap.tenant;
  };

  // ========== GET STATUS BADGE ==========
  const getStatusBadge = (status) => {
    const statusMap = {
      active: { label: "Active", className: "bg-emerald-50 text-emerald-700 border-emerald-200", icon: <CheckCircle className="w-3.5 h-3.5" /> },
      suspended: { label: "Suspended", className: "bg-rose-50 text-rose-700 border-rose-200", icon: <XCircle className="w-3.5 h-3.5" /> },
      pending: { label: "Pending", className: "bg-amber-50 text-amber-700 border-amber-200", icon: <Clock className="w-3.5 h-3.5" /> },
    };
    return statusMap[status] || statusMap.pending;
  };

  // ========== HANDLE ROLE CHANGE ==========
  const handleRoleClick = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role || "tenant");
    setShowRoleModal(true);
  };

  // ========== HANDLE STATUS CHANGE ==========
  const handleStatusClick = (user) => {
    setSelectedUser(user);
    setSelectedStatus(user.status || "active");
    setShowStatusModal(true);
  };

  // ========== HANDLE USER UPDATE ==========
  const handleUserUpdate = async (updateData) => {
    setIsProcessing(true);
    try {
      const result = await updateUser(selectedUser._id, updateData);
      
      setUsers((prev) =>
        prev.map((u) =>
          u._id === selectedUser._id
            ? { ...u, ...updateData }
            : u
        )
      );
      
      return true;
    } catch (error) {
      console.error("Update error:", error);
      toast.error(error?.message || "Failed to update user");
      return false;
    } finally {
      setIsProcessing(false);
    }
  };

  // ========== HANDLE ROLE UPDATE ==========
  const handleRoleUpdate = async () => {
    const success = await handleUserUpdate({ role: selectedRole });
    if (success) {
      toast.success(`User role updated to ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}!`);
      setShowRoleModal(false);
      setSelectedUser(null);
    }
  };

  // ========== HANDLE STATUS UPDATE ==========
  const handleStatusUpdate = async () => {
    const success = await handleUserUpdate({ status: selectedStatus });
    if (success) {
      toast.success(`User status updated to ${selectedStatus.charAt(0).toUpperCase() + selectedStatus.slice(1)}!`);
      setShowStatusModal(false);
      setSelectedUser(null);
    }
  };

  // ========== FORMAT DATE ==========
  const formatDate = (date) => {
    if (!date) return "N/A";
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900">
            User <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Management</span>
          </h1>
          <p className="text-gray-500 mt-1">Manage all users, roles, and account status</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          <button
            onClick={() => {
              setSearchTerm("");
              setFilterRole("all");
              setFilterStatus("all");
            }}
            className="inline-flex cursor-pointer items-center gap-2 px-4 py-2.5 bg-white text-gray-600 font-medium rounded-xl border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            <RefreshCw className="w-4 h-4" strokeWidth={2.2} />
            <span>Reset</span>
          </button>
          <Link
            href="/dashboard/admin/users/add"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.3)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.4)] transition-all duration-200 hover:-translate-y-0.5"
          >
            <UserPlus className="w-4 h-4" strokeWidth={2.2} />
            <span>Add User</span>
          </Link>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
        {statsCards.map((stat, index) => {
          const Icon = stat.icon;
          const colors = getColorStyles(stat.color);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`bg-white rounded-2xl p-5 border-2 ${colors.border} shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{stat.title}</p>
                  <p className="text-2xl font-extrabold text-gray-900 mt-1">{stat.value}</p>
                  <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${
                    stat.trend === "up" ? "text-emerald-600" : 
                    stat.trend === "down" ? "text-rose-600" : "text-gray-400"
                  }`}>
                    {stat.trend === "up" && <TrendingUp className="w-3 h-3" strokeWidth={2.5} />}
                    {stat.trend === "down" && <TrendingDown className="w-3 h-3" strokeWidth={2.5} />}
                    <span>{stat.change}</span>
                  </div>
                </div>
                <div className={`w-11 h-11 ${colors.iconBg} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon className={`w-5 h-5 ${colors.icon}`} strokeWidth={2.2} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex-1 max-w-md">
          <Input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
            classNames={{
              input: "bg-transparent text-gray-800 placeholder:text-gray-400",
              inputWrapper: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300",
            }}
            startContent={<Search className="w-4 h-4 text-gray-400" strokeWidth={2} />}
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <div className="w-full sm:w-40">
            <Select
              className="w-full"
              value={filterRole}
              onChange={(val) => setFilterRole(val || "all")}
              aria-label="Filter by role"
              classNames={{
                trigger: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
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
                  {roleOptions.map((role) => (
                    <ListBox.Item
                      key={role.id}
                      id={role.id}
                      textValue={role.label}
                      className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                    >
                      {role.label}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
          <div className="w-full sm:w-40">
            <Select
              className="w-full"
              value={filterStatus}
              onChange={(val) => setFilterStatus(val || "all")}
              aria-label="Filter by status"
              classNames={{
                trigger: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
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
                  {statusOptions.map((status) => (
                    <ListBox.Item
                      key={status.id}
                      id={status.id}
                      textValue={status.label}
                      className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                    >
                      {status.label}
                      <ListBox.ItemIndicator />
                    </ListBox.Item>
                  ))}
                </ListBox>
              </Select.Popover>
            </Select>
          </div>
        </div>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl border-2 border-blue-100/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(37,99,235,0.06)] transition-all duration-300 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50">
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">User</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden md:table-cell">Role</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider hidden lg:table-cell">Joined</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="text-left py-3 px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user, index) => {
                const roleBadge = getRoleBadge(user.role);
                const statusBadge = getStatusBadge(user.status);
                const isAdmin = user.role === "admin";

                return (
                  <motion.tr
                    key={user._id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.03 }}
                    className="border-b border-gray-50 hover:bg-gray-50/50 transition-colors"
                  >
                    {/* User */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                          {user.image ? (
                            <Image src={user.image} alt={user.name} fill className="object-cover" />
                          ) : (
                            (user.name || "U").charAt(0).toUpperCase()
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{user.name || "Unknown"}</p>
                          <p className="text-xs text-gray-400">{user.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-3 px-4 hidden md:table-cell">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${roleBadge.className}`}>
                        {roleBadge.icon}
                        {roleBadge.label}
                      </span>
                    </td>

                    {/* Joined */}
                    <td className="py-3 px-4 text-sm text-gray-500 hidden lg:table-cell">
                      {formatDate(user.createdAt)}
                    </td>

                    {/* Status */}
                    <td className="py-3 px-4">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${statusBadge.className}`}>
                        {statusBadge.icon}
                        {statusBadge.label}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-1">
                        {!isAdmin && (
                          <>
                            <button
                              onClick={() => handleRoleClick(user)}
                              className="p-2 text-blue-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all cursor-pointer"
                              title="Change Role"
                            >
                              <UserCog className="w-4 h-4" strokeWidth={2} />
                            </button>
                            <button
                              onClick={() => handleStatusClick(user)}
                              className="p-2 text-amber-400 hover:text-amber-600 hover:bg-amber-50 rounded-lg transition-all cursor-pointer"
                              title="Change Status"
                            >
                              {user.status === "active" ? (
                                <Ban className="w-4 h-4" strokeWidth={2} />
                              ) : (
                                <Check className="w-4 h-4" strokeWidth={2} />
                              )}
                            </button>
                          </>
                        )}
                        {isAdmin && (
                          <span className="text-xs text-blue-600 font-medium">Admin</span>
                        )}
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="text-center py-12 px-4">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-gray-400" strokeWidth={2} />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No users found</h3>
            <p className="text-gray-500 text-sm">
              {searchTerm || filterRole !== "all" || filterStatus !== "all"
                ? "Try adjusting your search or filter criteria"
                : "No users registered yet."}
            </p>
          </div>
        )}

        {/* Table Footer */}
        {filteredUsers.length > 0 && (
          <div className="px-6 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span>Showing {filteredUsers.length} of {users.length} users</span>
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-purple-400" />
                Admins: {stats.admins}
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-blue-400" />
                Owners: {stats.owners}
              </span>
              <span className="inline-flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Tenants: {stats.tenants}
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Role Change Modal */}
      <Modal isOpen={showRoleModal} onClose={() => setShowRoleModal(false)} size="md" className="max-w-md">
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="bg-white rounded-2xl border-2 border-blue-100/50 shadow-2xl">
              <Modal.Header className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <UserCog className="w-5 h-5 text-blue-600" strokeWidth={2} />
                    </div>
                    <div>
                      <Modal.Heading className="text-lg font-bold text-gray-900">
                        Change User Role
                      </Modal.Heading>
                      <p className="text-sm text-gray-500">{selectedUser?.name || "User"}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowRoleModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-gray-400" strokeWidth={2} />
                  </button>
                </div>
              </Modal.Header>

              <Modal.Body className="px-6 py-6">
                <div className="space-y-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Select New Role
                    </Label>
                    <Select
                      className="w-full"
                      value={selectedRole}
                      onChange={(val) => setSelectedRole(val)}
                      aria-label="Select Role"
                      classNames={{
                        trigger: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
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
                          {availableRoles.map((role) => (
                            <ListBox.Item
                              key={role.id}
                              id={role.id}
                              textValue={role.label}
                              className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-blue-600">{role.icon}</span>
                                {role.label}
                              </div>
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <div className="bg-amber-50/50 rounded-xl p-3 border border-amber-200/50">
                    <p className="text-xs text-amber-700 flex items-center gap-2">
                      <AlertCircle className="w-4 h-4" strokeWidth={2} />
                      <span>Changing a user&apos;s role will update their permissions immediately.</span>
                    </p>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="px-6 pb-6 pt-4 border-t border-gray-100 flex gap-3">
                <Button
                  onPress={() => setShowRoleModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  onPress={handleRoleUpdate}
                  isDisabled={isProcessing}
                  className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <UserCog className="w-4 h-4" strokeWidth={2} />
                      <span>Update Role</span>
                    </>
                  )}
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

      {/* Status Change Modal */}
      <Modal isOpen={showStatusModal} onClose={() => setShowStatusModal(false)} size="md" className="max-w-md">
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className={`bg-white rounded-2xl border-2 ${
              selectedStatus === "suspended" ? "border-rose-100/50" : "border-emerald-100/50"
            } shadow-2xl`}>
              <Modal.Header className="px-6 pt-6 pb-4 border-b border-gray-100">
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 ${
                      selectedStatus === "suspended" ? "bg-rose-100" : "bg-emerald-100"
                    } rounded-xl flex items-center justify-center flex-shrink-0`}>
                      {selectedStatus === "suspended" ? (
                        <Ban className="w-5 h-5 text-rose-600" strokeWidth={2} />
                      ) : (
                        <CheckCircle className="w-5 h-5 text-emerald-600" strokeWidth={2} />
                      )}
                    </div>
                    <div>
                      <Modal.Heading className="text-lg font-bold text-gray-900">
                        Change User Status
                      </Modal.Heading>
                      <p className="text-sm text-gray-500">{selectedUser?.name || "User"}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowStatusModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-gray-400" strokeWidth={2} />
                  </button>
                </div>
              </Modal.Header>

              <Modal.Body className="px-6 py-6">
                <div className="space-y-4">
                  <div>
                    <Label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Select New Status
                    </Label>
                    <Select
                      className="w-full"
                      value={selectedStatus}
                      onChange={(val) => setSelectedStatus(val)}
                      aria-label="Select Status"
                      classNames={{
                        trigger: "bg-white border-2 border-blue-200/60 rounded-xl focus-within:ring-2 focus-within:ring-blue-500/20 focus-within:border-blue-500 transition-all duration-200 shadow-sm hover:border-blue-300 data-[open=true]:border-blue-500",
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
                          {availableStatuses.map((status) => (
                            <ListBox.Item
                              key={status.id}
                              id={status.id}
                              textValue={status.label}
                              className="text-gray-700 hover:bg-blue-50 rounded-lg data-[selected=true]:bg-blue-100 data-[selected=true]:text-blue-700 transition-colors cursor-pointer px-3 py-2.5"
                            >
                              <div className="flex items-center gap-2">
                                <span className={
                                  status.id === "active" ? "text-emerald-600" :
                                  status.id === "suspended" ? "text-rose-600" :
                                  "text-amber-600"
                                }>{status.icon}</span>
                                {status.label}
                              </div>
                              <ListBox.ItemIndicator />
                            </ListBox.Item>
                          ))}
                        </ListBox>
                      </Select.Popover>
                    </Select>
                  </div>

                  <div className={`${
                    selectedStatus === "suspended" ? "bg-rose-50/50 border-rose-200/50" : "bg-emerald-50/50 border-emerald-200/50"
                  } rounded-xl p-3 border`}>
                    <p className={`text-xs ${
                      selectedStatus === "suspended" ? "text-rose-700" : "text-emerald-700"
                    } flex items-center gap-2`}>
                      <AlertCircle className="w-4 h-4" strokeWidth={2} />
                      <span>
                        {selectedStatus === "suspended" 
                          ? "Suspending this user will prevent them from accessing the platform."
                          : selectedStatus === "active"
                          ? "Activating this user will restore full access to the platform."
                          : "Setting this user to pending will require verification."
                        }
                      </span>
                    </p>
                  </div>
                </div>
              </Modal.Body>

              <Modal.Footer className="px-6 pb-6 pt-4 border-t border-gray-100 flex gap-3">
                <Button
                  onPress={() => setShowStatusModal(false)}
                  className="flex-1 py-3 bg-gray-100 text-gray-700 font-medium rounded-xl hover:bg-gray-200 transition-all duration-300 cursor-pointer"
                >
                  Cancel
                </Button>
                <Button
                  onPress={handleStatusUpdate}
                  isDisabled={isProcessing}
                  className={`flex-1 py-3 ${
                    selectedStatus === "suspended" 
                      ? "bg-gradient-to-r from-rose-500 to-rose-600" 
                      : "bg-gradient-to-r from-emerald-500 to-emerald-600"
                  } text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_24px_rgba(37,99,235,0.45)] transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer`}
                >
                  {isProcessing ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      {selectedStatus === "suspended" ? (
                        <Ban className="w-4 h-4" strokeWidth={2} />
                      ) : (
                        <CheckCircle className="w-4 h-4" strokeWidth={2} />
                      )}
                      <span>Update Status</span>
                    </>
                  )}
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
}