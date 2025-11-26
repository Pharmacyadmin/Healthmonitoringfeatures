import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Activity, Heart, Thermometer, Droplets, FlaskConical, Monitor, TrendingUp, TrendingDown } from 'lucide-react';
import { Link } from 'react-router';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const recentVitals = [
  { date: '11/20', heartRate: 72, systolic: 118, diastolic: 78 },
  { date: '11/21', heartRate: 75, systolic: 120, diastolic: 80 },
  { date: '11/22', heartRate: 70, systolic: 115, diastolic: 76 },
  { date: '11/23', heartRate: 73, systolic: 119, diastolic: 79 },
  { date: '11/24', heartRate: 71, systolic: 117, diastolic: 77 },
  { date: '11/25', heartRate: 74, systolic: 121, diastolic: 81 },
  { date: '11/26', heartRate: 72, systolic: 118, diastolic: 78 },
];

export function Dashboard() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-foreground mb-1">Health Overview</h2>
        <p className="text-muted-foreground">Your health metrics at a glance</p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Heart Rate</CardTitle>
            <Heart className="h-4 w-4 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">72 bpm</div>
            <p className="text-muted-foreground flex items-center gap-1">
              <TrendingDown className="h-3 w-3 text-green-400" />
              <span className="text-green-400">2 bpm lower</span> than yesterday
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Blood Pressure</CardTitle>
            <Activity className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">118/78 mmHg</div>
            <p className="text-muted-foreground">
              <span className="text-green-400">Normal</span> range
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Temperature</CardTitle>
            <Thermometer className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">98.2°F</div>
            <p className="text-muted-foreground">
              <span className="text-green-400">Normal</span> range
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Blood Oxygen</CardTitle>
            <Droplets className="h-4 w-4 text-cyan-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">98%</div>
            <p className="text-muted-foreground">
              <span className="text-green-400">Excellent</span> level
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-foreground">Heart Rate Trend</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={recentVitals}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[60, 85]} />
                <Tooltip contentStyle={{ backgroundColor: '#141b2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }} />
                <Line type="monotone" dataKey="heartRate" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-xl border-white/10">
          <CardHeader>
            <CardTitle className="text-foreground">Blood Pressure Trend</CardTitle>
            <CardDescription>Last 7 days</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <LineChart data={recentVitals}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                <XAxis dataKey="date" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" domain={[70, 130]} />
                <Tooltip contentStyle={{ backgroundColor: '#141b2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }} />
                <Line type="monotone" dataKey="systolic" stroke="#3b82f6" strokeWidth={2} />
                <Line type="monotone" dataKey="diastolic" stroke="#8b5cf6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="bg-card/50 backdrop-blur-xl border-white/10 hover:border-indigo-500/30 transition-all">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg flex items-center justify-center">
                <Activity className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <CardTitle className="text-foreground">Latest Vitals</CardTitle>
                <CardDescription>Today, 8:30 AM</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Heart Rate</span>
                <span className="text-foreground">72 bpm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">BP</span>
                <span className="text-foreground">118/78 mmHg</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">SpO2</span>
                <span className="text-foreground">98%</span>
              </div>
            </div>
            <Link to="/vitals">
              <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30">View All Vitals</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-xl border-white/10 hover:border-indigo-500/30 transition-all">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg flex items-center justify-center">
                <FlaskConical className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <CardTitle className="text-foreground">Recent Lab</CardTitle>
                <CardDescription>Nov 20, 2024</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cholesterol</span>
                <span className="text-foreground">185 mg/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Glucose</span>
                <span className="text-foreground">92 mg/dL</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">HbA1c</span>
                <span className="text-foreground">5.4%</span>
              </div>
            </div>
            <Link to="/labs">
              <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30">View Lab Results</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="bg-card/50 backdrop-blur-xl border-white/10 hover:border-indigo-500/30 transition-all">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg flex items-center justify-center">
                <Monitor className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <CardTitle className="text-foreground">Last Monitor</CardTitle>
                <CardDescription>Nov 25, 2024</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sleep Duration</span>
                <span className="text-foreground">7h 23m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Deep Sleep</span>
                <span className="text-foreground">1h 45m</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Sleep Score</span>
                <span className="text-foreground">82/100</span>
              </div>
            </div>
            <Link to="/monitors">
              <Button variant="outline" className="w-full mt-4 border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30">View Monitors</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}