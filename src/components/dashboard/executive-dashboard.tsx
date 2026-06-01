"use client";

import { useEffect, useState } from "react";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";
import { TrendingUp, Users, Briefcase, DollarSign, AlertCircle, CheckCircle } from "lucide-react";

const projectData = [
  { name: "يناير", completed: 12, pending: 8, delayed: 2 },
  { name: "فبراير", completed: 15, pending: 5, delayed: 1 },
  { name: "مارس", completed: 18, pending: 3, delayed: 1 },
  { name: "أبريل", completed: 22, pending: 2, delayed: 0 },
];

const budgetData = [
  { name: "المبلغ المخطط", value: 50000000, fill: "#0ea5e9" },
  { name: "المبلغ المنفق", value: 35000000, fill: "#8b5cf6" },
  { name: "المتبقي", value: 15000000, fill: "#10b981" },
];

const villaStatusData = [
  { name: "مكتملة", value: 48, fill: "#10b981" },
  { name: "قيد الإنشاء", value: 78, fill: "#f59e0b" },
  { name: "مخطط لها", value: 30, fill: "#6366f1" },
];

const KPICard = ({ icon: Icon, title, value, change, color }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`bg-gradient-to-br ${color} rounded-2xl p-6 text-white backdrop-blur-xl bg-opacity-80 shadow-lg border border-white/10`}
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-sm opacity-90 mb-2">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
        {change && (
          <p className="text-xs opacity-75 mt-2 flex items-center gap-1">
            <TrendingUp size={12} /> {change}% من الشهر السابق
          </p>
        )}
      </div>
      <Icon size={32} className="opacity-80" />
    </div>
  </motion.div>
);

const ChartCard = ({ title, children }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    className="bg-dark-900 dark:bg-slate-900 rounded-2xl p-6 backdrop-blur-xl shadow-lg border border-white/5"
  >
    <h3 className="text-lg font-semibold text-white mb-4">{title}</h3>
    {children}
  </motion.div>
);

export function ExecutiveDashboard() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">لوحة المعلومات التنفيذية</h1>
          <p className="text-gray-400">Executive Dashboard</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <KPICard
            icon={Briefcase}
            title="إجمالي المشاريع"
            value="24"
            change="+8"
            color="from-blue-500 to-blue-600"
          />
          <KPICard
            icon={Users}
            title="إجمالي الفيلل"
            value="156"
            change="+12"
            color="from-purple-500 to-purple-600"
          />
          <KPICard
            icon={CheckCircle}
            title="نسبة الإنجاز"
            value="67%"
            change="+5"
            color="from-green-500 to-green-600"
          />
          <KPICard
            icon={AlertCircle}
            title="مشاريع متأخرة"
            value="5"
            change="-2"
            color="from-orange-500 to-orange-600"
          />
        </div>

        {/* Financial KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <KPICard
            icon={DollarSign}
            title="إجمالي التكاليف"
            value="50 م"
            color="from-pink-500 to-pink-600"
          />
          <KPICard
            icon={DollarSign}
            title="المبلغ المنفق"
            value="35 م"
            color="from-red-500 to-red-600"
          />
          <KPICard
            icon={DollarSign}
            title="الربح المتوقع"
            value="15 م"
            color="from-cyan-500 to-cyan-600"
          />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Progress Chart */}
          <ChartCard title="تقدم المشاريع الشهري">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={projectData}>
                <defs>
                  <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #444" }} />
                <Area
                  type="monotone"
                  dataKey="completed"
                  stroke="#10b981"
                  fillOpacity={1}
                  fill="url(#colorCompleted)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Budget Chart */}
          <ChartCard title="توزيع الميزانية">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {budgetData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${(value / 1000000).toFixed(1)}م`} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>

        {/* Bottom Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Project Status */}
          <ChartCard title="حالة الفيلل">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip contentStyle={{ backgroundColor: "#1f2937", border: "1px solid #444" }} />
                <Legend />
                <Bar dataKey="completed" fill="#10b981" name="مكتمل" />
                <Bar dataKey="pending" fill="#f59e0b" name="قيد الإنجاز" />
                <Bar dataKey="delayed" fill="#ef4444" name="متأخر" />
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* Villa Status Distribution */}
          <ChartCard title="توزيع حالة الفيلل">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={villaStatusData}
                  cx="50%"
                  cy="50%"
                  paddingAngle={2}
                  dataKey="value"
                  label
                >
                  {villaStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>
        </div>
      </motion.div>
    </div>
  );
}
