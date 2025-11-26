import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Heart, Activity, Thermometer, Droplets, Plus, TrendingUp, TrendingDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';

const heartRateData = [
  { date: '11/20', value: 72, time: '8:00 AM' },
  { date: '11/21', value: 75, time: '8:15 AM' },
  { date: '11/22', value: 70, time: '8:10 AM' },
  { date: '11/23', value: 73, time: '8:05 AM' },
  { date: '11/24', value: 71, time: '8:20 AM' },
  { date: '11/25', value: 74, time: '8:30 AM' },
  { date: '11/26', value: 72, time: '8:30 AM' },
];

const bloodPressureData = [
  { date: '11/20', systolic: 118, diastolic: 78 },
  { date: '11/21', systolic: 120, diastolic: 80 },
  { date: '11/22', systolic: 115, diastolic: 76 },
  { date: '11/23', systolic: 119, diastolic: 79 },
  { date: '11/24', systolic: 117, diastolic: 77 },
  { date: '11/25', systolic: 121, diastolic: 81 },
  { date: '11/26', systolic: 118, diastolic: 78 },
];

const temperatureData = [
  { date: '11/20', value: 98.3 },
  { date: '11/21', value: 98.1 },
  { date: '11/22', value: 98.4 },
  { date: '11/23', value: 98.2 },
  { date: '11/24', value: 98.3 },
  { date: '11/25', value: 98.0 },
  { date: '11/26', value: 98.2 },
];

const oxygenData = [
  { date: '11/20', value: 98 },
  { date: '11/21', value: 97 },
  { date: '11/22', value: 98 },
  { date: '11/23', value: 99 },
  { date: '11/24', value: 98 },
  { date: '11/25', value: 97 },
  { date: '11/26', value: 98 },
];

export function Vitals() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground mb-1">Vital Signs</h2>
          <p className="text-muted-foreground">Track and monitor your vital health metrics</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/20">
              <Plus className="w-4 h-4 mr-2" />
              Add Reading
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-card border-white/10">
            <DialogHeader>
              <DialogTitle className="text-foreground">Add Vital Reading</DialogTitle>
              <DialogDescription>Enter your vital signs measurements</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="heartRate">Heart Rate (bpm)</Label>
                <Input id="heartRate" type="number" placeholder="72" className="bg-background/50 border-white/10" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="systolic">Systolic (mmHg)</Label>
                  <Input id="systolic" type="number" placeholder="120" className="bg-background/50 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="diastolic">Diastolic (mmHg)</Label>
                  <Input id="diastolic" type="number" placeholder="80" className="bg-background/50 border-white/10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="temperature">Temperature (°F)</Label>
                <Input id="temperature" type="number" step="0.1" placeholder="98.6" className="bg-background/50 border-white/10" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="oxygen">Blood Oxygen (%)</Label>
                <Input id="oxygen" type="number" placeholder="98" className="bg-background/50 border-white/10" />
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">Save Reading</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Current Readings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-red-500/10 to-pink-500/10 border-red-500/20 backdrop-blur-xl hover:border-red-500/30 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Heart Rate</CardTitle>
            <Heart className="h-5 w-5 text-red-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">72 bpm</div>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3 text-green-400" />
              <span className="text-green-400">Normal</span>
            </p>
            <p className="text-muted-foreground mt-1">Today, 8:30 AM</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-xl hover:border-blue-500/30 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Blood Pressure</CardTitle>
            <Activity className="h-5 w-5 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">118/78 mmHg</div>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3 text-green-400" />
              <span className="text-green-400">Normal</span>
            </p>
            <p className="text-muted-foreground mt-1">Today, 8:30 AM</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20 backdrop-blur-xl hover:border-orange-500/30 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Temperature</CardTitle>
            <Thermometer className="h-5 w-5 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">98.2°F</div>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingDown className="h-3 w-3 text-green-400" />
              <span className="text-green-400">Normal</span>
            </p>
            <p className="text-muted-foreground mt-1">Today, 8:30 AM</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border-cyan-500/20 backdrop-blur-xl hover:border-cyan-500/30 transition-all">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Blood Oxygen</CardTitle>
            <Droplets className="h-5 w-5 text-cyan-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">98%</div>
            <p className="text-muted-foreground flex items-center gap-1 mt-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              <span className="text-green-400">Excellent</span>
            </p>
            <p className="text-muted-foreground mt-1">Today, 8:30 AM</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Charts */}
      <Tabs defaultValue="heartRate" className="space-y-4">
        <TabsList className="bg-card/50 backdrop-blur-xl border border-white/10">
          <TabsTrigger value="heartRate" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">Heart Rate</TabsTrigger>
          <TabsTrigger value="bloodPressure" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">Blood Pressure</TabsTrigger>
          <TabsTrigger value="temperature" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">Temperature</TabsTrigger>
          <TabsTrigger value="oxygen" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">Blood Oxygen</TabsTrigger>
        </TabsList>

        <TabsContent value="heartRate" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Heart Rate History</CardTitle>
              <CardDescription>Your heart rate readings over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={heartRateData}>
                  <defs>
                    <linearGradient id="colorHR" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[60, 85]} />
                  <Tooltip contentStyle={{ backgroundColor: '#141b2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }} />
                  <Area type="monotone" dataKey="value" stroke="#ef4444" fillOpacity={1} fill="url(#colorHR)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-muted-foreground">Average</p>
                  <p className="text-foreground">72.4 bpm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Lowest</p>
                  <p className="text-foreground">70 bpm</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Highest</p>
                  <p className="text-foreground">75 bpm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bloodPressure" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Blood Pressure History</CardTitle>
              <CardDescription>Your blood pressure readings over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bloodPressureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[70, 130]} />
                  <Tooltip contentStyle={{ backgroundColor: '#141b2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }} />
                  <Line type="monotone" dataKey="systolic" stroke="#3b82f6" strokeWidth={2} name="Systolic" />
                  <Line type="monotone" dataKey="diastolic" stroke="#8b5cf6" strokeWidth={2} name="Diastolic" />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="text-muted-foreground">Avg Systolic</p>
                  <p className="text-foreground">118.3 mmHg</p>
                </div>
                <div className="text-center">
                  <p className="text-muted-foreground">Avg Diastolic</p>
                  <p className="text-foreground">78.4 mmHg</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="temperature" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Temperature History</CardTitle>
              <CardDescription>Your body temperature readings over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={temperatureData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[97.5, 99]} />
                  <Tooltip contentStyle={{ backgroundColor: '#141b2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }} />
                  <Line type="monotone" dataKey="value" stroke="#f97316" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-muted-foreground">Average</p>
                  <p className="text-foreground">98.2°F</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Lowest</p>
                  <p className="text-foreground">98.0°F</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Highest</p>
                  <p className="text-foreground">98.4°F</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="oxygen" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Blood Oxygen History</CardTitle>
              <CardDescription>Your SpO2 readings over the past 7 days</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={oxygenData}>
                  <defs>
                    <linearGradient id="colorOxy" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" domain={[95, 100]} />
                  <Tooltip contentStyle={{ backgroundColor: '#141b2e', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '0.5rem' }} />
                  <Area type="monotone" dataKey="value" stroke="#06b6d4" fillOpacity={1} fill="url(#colorOxy)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-muted-foreground">Average</p>
                  <p className="text-foreground">97.9%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Lowest</p>
                  <p className="text-foreground">97%</p>
                </div>
                <div>
                  <p className="text-muted-foreground">Highest</p>
                  <p className="text-foreground">99%</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
