"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, TrendingDown, DollarSign, AlertCircle } from "lucide-react";

const expensesData = [
  { month: "يناير", expenses: 2500000, revenue: 3200000 },
  { month: "فبراير", expenses: 2800000, revenue: 3500000 },
  { month: "مارس", expenses: 2200000, revenue: 2900000 },
  { month: "أبريل", expenses: 3100000, revenue: 4200000 },
  { month: "مايو", expenses: 2900000, revenue: 3800000 },
  { month: "يونيو", expenses: 3300000, revenue: 4500000 },
];

const categoryData = [
  { name: "العمالة", value: 15000000, fill: "#3b82f6" },
  { name: "المواد", value: 12000000, fill: "#8b5cf6" },
  { name: "المعدات", value: 5000000, fill: "#ec4899" },
  { name: "الإدارة", value: 3000000, fill: "#f59e0b" },
];

const StatCard = ({ title, value, change, icon: Icon, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-gradient-to-br ${color} rounded-xl p-6 text-white backdrop-blur-xl shadow-lg border border-white/10`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm opacity-80 mb-1">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
        {change && (
          <p className={`text-xs mt-2 flex items-center gap-1 ${change > 0 ? "text-green-300" : "text-red-300"}`}>
            {change > 0 ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
            {Math.abs(change)}% من الشهر السابق
          </p>
        )}
      </div>
      <Icon size={28} className="opacity-60" />
    </div>
  </motion.div>
);

export function FinancialDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("6months");

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">الإدارة المالية</h1>
          <p className="text-gray-400">Financial Management</p>
        </div>

        {/* Period Selector */}
        <div className="flex gap-3 mb-8">
          {["month", "quarter", "6months", "year"].map((period) => (
            <motion.button
              key={period}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedPeriod(period)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                selectedPeriod === period
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-gray-400 hover:text-white hover:bg-slate-700"
              }`}
            >
              {period === "month" && "شهر"}
              {period === "quarter" && "ربع سنة"}
              {period === "6months" && "ستة أشهر"}
              {period === "year" && "سنة"}
            </motion.button>
          ))}
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            title="إجمالي الإيرادات"
            value="22.1 مليون"
            change={15}
            icon={DollarSign}
            color="from-green-500 to-green-600"
          />
          <StatCard
            title="إجمالي المصروفات"
            value="16.3 مليون"
            change={-8}
            icon={DollarSign}
            color="from-red-500 to-red-600"
          />
          <StatCard
            title="الربح الإجمالي"
            value="5.8 مليون"
            change={25}
            icon={TrendingUp}
            color="from-blue-500 to-blue-600"
          />
          <StatCard
            title="معدل الهامش"
            value="26.2%"
            change={12}
            icon={AlertCircle}
            color="from-purple-500 to-purple-600"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Revenue vs Expenses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2 bg-slate-900 rounded-2xl p-6 border border-slate-800 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">الإيرادات مقابل المصروفات</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={expensesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="month" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #444" }} />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="الإيرادات" />
                <Bar dataKey="expenses" fill="#ef4444" name="المصروفات" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Category Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900 rounded-2xl p-6 border border-slate-800 backdrop-blur-xl"
          >
            <h3 className="text-lg font-semibold text-white mb-4">توزيع التكاليف</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${(value / 1000000).toFixed(1)}م`} />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Invoices Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-900 rounded-2xl border border-slate-800 backdrop-blur-xl overflow-hidden"
        >
          <div className="p-6 border-b border-slate-800">
            <h3 className="text-lg font-semibold text-white">الفواتير الأخيرة</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-800 bg-slate-800/50">
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-300">الفاتورة</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-300">المورد</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-300">المبلغ</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-300">التاريخ</th>
                  <th className="px-6 py-3 text-right text-sm font-semibold text-gray-300">الحالة</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-slate-800 hover:bg-slate-800/50 transition"
                  >
                    <td className="px-6 py-4 text-white font-medium">INV-{1000 + i}</td>
                    <td className="px-6 py-4 text-gray-300">شركة التوريد {i}</td>
                    <td className="px-6 py-4 text-white font-medium">{(250000 * i).toLocaleString()}ر.س</td>
                    <td className="px-6 py-4 text-gray-300">2026-06-0{i}</td>
                    <td className="px-6 py-4">
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                        مدفوعة
                      </span>
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
