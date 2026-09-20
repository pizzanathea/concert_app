"use client";

import Topbar from "@/app/components/admin/Topbar";
import { Ticket, CalendarDays, Clock, Wallet } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Data dummy — nanti ganti dengan fetch dari endpoint summary backend
const summary = [
  { label: "Total Tiket Terjual", value: "3.240", icon: Ticket },
  { label: "Event Aktif", value: "5", icon: CalendarDays },
  { label: "Pesanan Pending", value: "18", icon: Clock },
  { label: "Total Pendapatan", value: "Rp 972.000.000", icon: Wallet },
];

const chartData = [
  { event: "Z Fest Day 1", terjual: 1200 },
  { event: "Z Fest Day 2", terjual: 980 },
  { event: "Pre Event A", terjual: 450 },
  { event: "Pre Event B", terjual: 610 },
];

export default function DashboardPage() {
  return (
    <>
      <Topbar title="Dashboard" />

      <div className="p-8">
        {/* Kartu ringkasan */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {summary.map(({ label, value, icon: Icon }) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-white/50">
                  {label}
                </span>
                <Icon size={18} className="text-amber-400" />
              </div>
              <p className="mt-3 text-2xl font-bold text-white">{value}</p>
            </div>
          ))}
        </div>

        {/* Chart tiket terjual per event */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wide text-white/60">
            Tiket Terjual per Event
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="rgba(255,255,255,0.08)"
              />
              <XAxis
                dataKey="event"
                stroke="rgba(255,255,255,0.5)"
                fontSize={12}
              />
              <YAxis stroke="rgba(255,255,255,0.5)" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#0a0500",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Bar dataKey="terjual" fill="#fbbf24" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
