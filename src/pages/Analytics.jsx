import {
  LineChart, Line, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import Card from '../components/ui/Card'
import {
  applicationChartData, revenueChartData, countryChartData, visaTypeData,
} from '../lib/mockData'

const CHART_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444']

const TOOLTIP_STYLE = {
  backgroundColor: '#fff',
  border: '1px solid #e2e8f0',
  borderRadius: '8px',
  fontSize: '12px',
}

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Reports &amp; Analytics</h1>
        <p className="text-sm text-slate-500 mt-1">Platform performance and immigration trends.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Applications over time */}
        <Card className="p-6">
          <h2 className="font-semibold text-slate-900 mb-1">Applications Over Time</h2>
          <p className="text-xs text-slate-500 mb-5">Monthly submitted visa applications</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={applicationChartData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={TOOLTIP_STYLE} />
                <Line
                  type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2.5}
                  dot={{ r: 3, fill: '#3b82f6' }} activeDot={{ r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Revenue growth */}
        <Card className="p-6">
          <h2 className="font-semibold text-slate-900 mb-1">Revenue Growth</h2>
          <p className="text-xs text-slate-500 mb-5">Monthly recurring revenue from sponsor &amp; advisor fees</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={revenueChartData}>
                <defs>
                  <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.25} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis
                  stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false}
                  tickFormatter={v => `£${v / 1000}k`}
                />
                <Tooltip contentStyle={TOOLTIP_STYLE} formatter={v => [`£${v.toLocaleString()}`, 'Revenue']} />
                <Area type="monotone" dataKey="amount" stroke="#10b981" strokeWidth={2.5} fill="url(#revGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Top sponsor regions */}
        <Card className="p-6">
          <h2 className="font-semibold text-slate-900 mb-1">Top Sponsor Regions</h2>
          <p className="text-xs text-slate-500 mb-5">Active job listings by destination country</p>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={countryChartData} layout="vertical" margin={{ left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={TOOLTIP_STYLE} />
                <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Visa distribution */}
        <Card className="p-6">
          <h2 className="font-semibold text-slate-900 mb-1">Visa Route Distribution</h2>
          <p className="text-xs text-slate-500 mb-5">Breakdown of application types</p>
          <div className="h-64 flex items-center">
            <ResponsiveContainer width="60%" height="100%">
              <PieChart>
                <Pie
                  data={visaTypeData} cx="50%" cy="50%"
                  innerRadius={65} outerRadius={95} paddingAngle={3} dataKey="value"
                >
                  {visaTypeData.map((_, i) => (
                    <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip contentStyle={TOOLTIP_STYLE} formatter={v => [`${v}%`, 'Share']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 space-y-2.5">
              {visaTypeData.map((d, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span
                    className="w-2.5 h-2.5 rounded-full shrink-0"
                    style={{ background: CHART_COLORS[i] }}
                  />
                  <span className="text-slate-600 flex-1 truncate">{d.name}</span>
                  <span className="font-semibold text-slate-800">{d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
