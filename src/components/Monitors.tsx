import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Moon, Activity, Zap, Clock, TrendingUp, Calendar } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const sleepData = [
  { date: '11/20', deep: 1.5, light: 4.2, rem: 1.8, awake: 0.3, total: 7.8 },
  { date: '11/21', deep: 1.3, light: 4.5, rem: 1.6, awake: 0.4, total: 7.8 },
  { date: '11/22', deep: 1.7, light: 4.0, rem: 2.0, awake: 0.2, total: 7.9 },
  { date: '11/23', deep: 1.4, light: 4.3, rem: 1.7, awake: 0.5, total: 7.9 },
  { date: '11/24', deep: 1.6, light: 4.1, rem: 1.9, awake: 0.3, total: 7.9 },
  { date: '11/25', deep: 1.8, light: 3.9, rem: 2.1, awake: 0.2, total: 8.0 },
  { date: '11/26', deep: 1.5, light: 4.2, rem: 1.8, awake: 0.3, total: 7.8 },
];

const activityData = [
  { date: '11/20', steps: 8234, calories: 2145, active: 45 },
  { date: '11/21', steps: 10521, calories: 2389, active: 62 },
  { date: '11/22', steps: 7892, calories: 2098, active: 38 },
  { date: '11/23', steps: 9456, calories: 2267, active: 53 },
  { date: '11/24', steps: 11234, calories: 2456, active: 71 },
  { date: '11/25', steps: 8967, calories: 2187, active: 48 },
  { date: '11/26', steps: 9823, calories: 2298, active: 56 },
];

const heartRateZones = [
  { name: 'Resting', value: 45, color: '#94a3b8' },
  { name: 'Light', value: 30, color: '#3b82f6' },
  { name: 'Moderate', value: 15, color: '#f59e0b' },
  { name: 'Vigorous', value: 8, color: '#ef4444' },
  { name: 'Peak', value: 2, color: '#dc2626' },
];

const latestSleep = sleepData[sleepData.length - 1];
const sleepScore = Math.round((latestSleep.deep / 2 * 100 + latestSleep.rem / 2 * 100 + latestSleep.total / 8 * 100) / 3);

const latestActivity = activityData[activityData.length - 1];

export function Monitors() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900 mb-1">Testing Monitors</h2>
          <p className="text-slate-600">Track your sleep, activity, and continuous health monitoring</p>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Sleep Score</CardTitle>
            <Moon className="h-4 w-4 text-indigo-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{sleepScore}/100</div>
            <Progress value={sleepScore} className="mt-2" />
            <p className="text-slate-600 mt-2">Last night: {latestSleep.total}h</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Daily Steps</CardTitle>
            <Activity className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{latestActivity.steps.toLocaleString()}</div>
            <Progress value={(latestActivity.steps / 10000) * 100} className="mt-2" />
            <p className="text-slate-600 mt-2">Goal: 10,000 steps</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Active Minutes</CardTitle>
            <Zap className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{latestActivity.active} min</div>
            <Progress value={(latestActivity.active / 60) * 100} className="mt-2" />
            <p className="text-slate-600 mt-2">Goal: 60 minutes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Calories Burned</CardTitle>
            <TrendingUp className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">{latestActivity.calories}</div>
            <p className="text-slate-600 mt-2">Total daily expenditure</p>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Monitors */}
      <Tabs defaultValue="sleep" className="space-y-4">
        <TabsList>
          <TabsTrigger value="sleep">Sleep Analysis</TabsTrigger>
          <TabsTrigger value="activity">Activity Tracking</TabsTrigger>
          <TabsTrigger value="heartRate">Heart Rate Zones</TabsTrigger>
        </TabsList>

        <TabsContent value="sleep" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Sleep Stages</CardTitle>
                <CardDescription>Your sleep patterns over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={sleepData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="deep" stackId="a" fill="#4338ca" name="Deep Sleep" />
                    <Bar dataKey="light" stackId="a" fill="#6366f1" name="Light Sleep" />
                    <Bar dataKey="rem" stackId="a" fill="#818cf8" name="REM Sleep" />
                    <Bar dataKey="awake" stackId="a" fill="#cbd5e1" name="Awake" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Last Night</CardTitle>
                <CardDescription>Nov 25 - Nov 26, 2024</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-600">Sleep Score</span>
                    <span className="text-slate-900">{sleepScore}/100</span>
                  </div>
                  <Progress value={sleepScore} />
                </div>
                <div className="space-y-3 pt-2">
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-800"></div>
                      <span className="text-slate-600">Deep Sleep</span>
                    </div>
                    <span className="text-slate-900">{latestSleep.deep}h</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-500"></div>
                      <span className="text-slate-600">Light Sleep</span>
                    </div>
                    <span className="text-slate-900">{latestSleep.light}h</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-indigo-300"></div>
                      <span className="text-slate-600">REM Sleep</span>
                    </div>
                    <span className="text-slate-900">{latestSleep.rem}h</span>
                  </div>
                  <div className="flex justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                      <span className="text-slate-600">Awake</span>
                    </div>
                    <span className="text-slate-900">{latestSleep.awake}h</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600">Bedtime</span>
                    <span className="text-slate-900">10:45 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Wake Time</span>
                    <span className="text-slate-900">6:30 AM</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Sleep Insights</CardTitle>
              <CardDescription>Personalized recommendations based on your sleep data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                <TrendingUp className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-slate-900">Consistent Sleep Schedule</p>
                  <p className="text-slate-600">You've maintained a regular sleep schedule for 7 days. Great job!</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <Moon className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-slate-900">Deep Sleep Optimization</p>
                  <p className="text-slate-600">Your deep sleep averages 1.5 hours. Consider avoiding caffeine after 2 PM to improve this.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Daily Steps</CardTitle>
                <CardDescription>Your step count over the past 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Bar dataKey="steps" fill="#10b981" name="Steps" />
                  </BarChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-slate-600">Average</p>
                    <p className="text-slate-900">9,447</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Lowest</p>
                    <p className="text-slate-900">7,892</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Highest</p>
                    <p className="text-slate-900">11,234</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Active Minutes</CardTitle>
                <CardDescription>Minutes of moderate to vigorous activity</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={activityData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                    <XAxis dataKey="date" stroke="#64748b" />
                    <YAxis stroke="#64748b" />
                    <Tooltip />
                    <Line type="monotone" dataKey="active" stroke="#eab308" strokeWidth={2} name="Active Minutes" />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-slate-600">Average</p>
                    <p className="text-slate-900">53 min</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Lowest</p>
                    <p className="text-slate-900">38 min</p>
                  </div>
                  <div>
                    <p className="text-slate-600">Highest</p>
                    <p className="text-slate-900">71 min</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Activity Summary</CardTitle>
              <CardDescription>Your activity performance this week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Step Goal Achievement</span>
                    <span className="text-slate-900">5/7 days</span>
                  </div>
                  <Progress value={(5/7) * 100} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Active Minutes Goal</span>
                    <span className="text-slate-900">4/7 days</span>
                  </div>
                  <Progress value={(4/7) * 100} />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-600">Weekly Distance</span>
                    <span className="text-slate-900">42.3 miles</span>
                  </div>
                  <Progress value={85} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heartRate" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Heart Rate Distribution</CardTitle>
                <CardDescription>Time spent in each heart rate zone today</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={heartRateZones}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {heartRateZones.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Heart Rate Zones</CardTitle>
                <CardDescription>Time spent in each zone today</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {heartRateZones.map((zone, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: zone.color }}></div>
                        <span className="text-slate-600">{zone.name}</span>
                      </div>
                      <span className="text-slate-900">{zone.value}%</span>
                    </div>
                    <Progress value={zone.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Heart Rate Insights</CardTitle>
              <CardDescription>Understanding your heart rate zones</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                  <p className="text-slate-900">Resting</p>
                </div>
                <p className="text-slate-600">50-60 bpm</p>
                <p className="text-slate-600 mt-2">Recovery and rest</p>
              </div>
              <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <p className="text-slate-900">Light</p>
                </div>
                <p className="text-slate-600">60-70% max</p>
                <p className="text-slate-600 mt-2">Warm up and cool down</p>
              </div>
              <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <p className="text-slate-900">Moderate</p>
                </div>
                <p className="text-slate-600">70-80% max</p>
                <p className="text-slate-600 mt-2">Aerobic fitness</p>
              </div>
              <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <p className="text-slate-900">Vigorous</p>
                </div>
                <p className="text-slate-600">80-90% max</p>
                <p className="text-slate-600 mt-2">Performance training</p>
              </div>
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-700"></div>
                  <p className="text-slate-900">Peak</p>
                </div>
                <p className="text-slate-600">90-100% max</p>
                <p className="text-slate-600 mt-2">Maximum effort</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
