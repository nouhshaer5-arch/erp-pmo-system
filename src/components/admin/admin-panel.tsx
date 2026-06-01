"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Shield, Settings, LogOut, Edit2, Trash2, Plus, Search } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "manager" | "engineer" | "viewer";
  status: "active" | "inactive";
  joinDate: string;
}

const sampleUsers: User[] = [
  { id: "1", name: "أحمد محمد", email: "ahmed@company.com", role: "admin", status: "active", joinDate: "2025-01-15" },
  { id: "2", name: "فاطمة علي", email: "fatima@company.com", role: "manager", status: "active", joinDate: "2025-02-20" },
  { id: "3", name: "محمود سالم", email: "mahmoud@company.com", role: "engineer", status: "active", joinDate: "2025-03-10" },
  { id: "4", name: "ليلى حسن", email: "layla@company.com", role: "viewer", status: "inactive", joinDate: "2025-04-05" },
];

const roleColors = {
  admin: "bg-red-500/20 text-red-400",
  manager: "bg-blue-500/20 text-blue-400",
  engineer: "bg-purple-500/20 text-purple-400",
  viewer: "bg-gray-500/20 text-gray-400",
};

const roleLabels = {
  admin: "إداري",
  manager: "مدير",
  engineer: "مهندس",
  viewer: "عارض",
};

export function AdminPanel() {
  const [users, setUsers] = useState(sampleUsers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = users.filter(
      (user) =>
        user.name.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2 flex items-center gap-3">
              <Shield size={40} className="text-blue-500" />
              لوحة التحكم الإدارية
            </h1>
            <p className="text-gray-400">Admin Control Panel</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 font-semibold"
          >
            <Plus size={20} /> مستخدم جديد
          </motion.button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "إجمالي المستخدمين", value: "24", icon: Users, color: "from-blue-500 to-blue-600" },
            { label: "مستخدمون نشطون", value: "18", icon: Shield, color: "from-green-500 to-green-600" },
            { label: "الإداريون", value: "3", icon: Shield, color: "from-purple-500 to-purple-600" },
            { label: "المديرون", value: "7", icon: Shield, color: "from-orange-500 to-orange-600" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`bg-gradient-to-br ${stat.color} rounded-xl p-6 text-white backdrop-blur-xl shadow-lg border border-white/10`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm opacity-80">{stat.label}</p>
                  <p className="text-3xl font-bold mt-2">{stat.value}</p>
                </div>
                <stat.icon size={32} className="opacity-60" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search */}
        <div className="mb-8 relative">
          <Search className="absolute right-4 top-3.5 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="ابحث عن مستخدم..."
            value={searchTerm}
            onChange={(e) => handleSearch(e.target.value)}
            className="w-full bg-slate-800 text-white pl-4 pr-12 py-3 rounded-lg border border-slate-700 focus:border-blue-500 outline-none transition"
          />
        </div>

        {/* Users Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 backdrop-blur-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">الاسم</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">البريد الإلكتروني</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">الدور</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">الحالة</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">تاريخ الانضمام</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300">الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.map((user, index) => (
                  <motion.tr
                    key={user.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-b border-slate-800 hover:bg-slate-800/50 transition"
                  >
                    <td className="px-6 py-4 text-white font-medium">{user.name}</td>
                    <td className="px-6 py-4 text-gray-300">{user.email}</td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${roleColors[user.role]}`}>
                        {roleLabels[user.role]}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          user.status === "active"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-red-500/20 text-red-400"
                        }`}
                      >
                        {user.status === "active" ? "نشط" : "غير نشط"}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-300 text-sm">{user.joinDate}</td>
                    <td className="px-6 py-4 flex gap-2">
                      <motion.button whileHover={{ scale: 1.1 }} className="text-blue-400 hover:text-blue-300">
                        <Edit2 size={18} />
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
