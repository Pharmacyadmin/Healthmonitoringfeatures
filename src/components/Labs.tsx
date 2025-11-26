import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { FlaskConical, Plus, TrendingUp, TrendingDown, Minus, FileText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const lipidPanelHistory = [
  { date: '05/26', total: 195, ldl: 115, hdl: 55, triglycerides: 125 },
  { date: '08/26', total: 190, ldl: 110, hdl: 58, triglycerides: 110 },
  { date: '11/26', total: 185, ldl: 105, hdl: 60, triglycerides: 100 },
];

const glucoseHistory = [
  { date: '05/26', fasting: 95, hba1c: 5.6 },
  { date: '08/26', fasting: 93, hba1c: 5.5 },
  { date: '11/26', fasting: 92, hba1c: 5.4 },
];

const labResults = [
  {
    category: 'Lipid Panel',
    date: 'Nov 20, 2024',
    tests: [
      { name: 'Total Cholesterol', value: 185, unit: 'mg/dL', range: '< 200', status: 'normal' },
      { name: 'LDL Cholesterol', value: 105, unit: 'mg/dL', range: '< 100', status: 'borderline' },
      { name: 'HDL Cholesterol', value: 60, unit: 'mg/dL', range: '> 40', status: 'optimal' },
      { name: 'Triglycerides', value: 100, unit: 'mg/dL', range: '< 150', status: 'normal' },
    ],
  },
  {
    category: 'Metabolic Panel',
    date: 'Nov 20, 2024',
    tests: [
      { name: 'Glucose (Fasting)', value: 92, unit: 'mg/dL', range: '70-100', status: 'normal' },
      { name: 'HbA1c', value: 5.4, unit: '%', range: '< 5.7', status: 'normal' },
      { name: 'Creatinine', value: 0.9, unit: 'mg/dL', range: '0.7-1.3', status: 'normal' },
      { name: 'eGFR', value: 95, unit: 'mL/min', range: '> 60', status: 'normal' },
    ],
  },
  {
    category: 'Complete Blood Count',
    date: 'Nov 20, 2024',
    tests: [
      { name: 'White Blood Cells', value: 7.2, unit: 'K/uL', range: '4.5-11.0', status: 'normal' },
      { name: 'Red Blood Cells', value: 4.8, unit: 'M/uL', range: '4.5-5.5', status: 'normal' },
      { name: 'Hemoglobin', value: 14.5, unit: 'g/dL', range: '13.5-17.5', status: 'normal' },
      { name: 'Platelets', value: 250, unit: 'K/uL', range: '150-400', status: 'normal' },
    ],
  },
  {
    category: 'Thyroid Function',
    date: 'Aug 15, 2024',
    tests: [
      { name: 'TSH', value: 2.1, unit: 'mIU/L', range: '0.4-4.0', status: 'normal' },
      { name: 'T4 (Free)', value: 1.2, unit: 'ng/dL', range: '0.8-1.8', status: 'normal' },
      { name: 'T3 (Free)', value: 3.2, unit: 'pg/mL', range: '2.3-4.2', status: 'normal' },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case 'optimal':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'normal':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'borderline':
      return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    case 'high':
      return 'bg-red-100 text-red-800 border-red-200';
    default:
      return 'bg-slate-100 text-slate-800 border-slate-200';
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'optimal':
    case 'normal':
      return <TrendingUp className="w-3 h-3" />;
    case 'borderline':
      return <Minus className="w-3 h-3" />;
    case 'high':
      return <TrendingDown className="w-3 h-3" />;
    default:
      return null;
  }
};

export function Labs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-slate-900 mb-1">Laboratory Results</h2>
          <p className="text-slate-600">View and track your lab test results</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Add Lab Result
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Add Lab Result</DialogTitle>
              <DialogDescription>Enter your laboratory test results</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="category">Test Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="lipid">Lipid Panel</SelectItem>
                    <SelectItem value="metabolic">Metabolic Panel</SelectItem>
                    <SelectItem value="cbc">Complete Blood Count</SelectItem>
                    <SelectItem value="thyroid">Thyroid Function</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="testName">Test Name</Label>
                <Input id="testName" placeholder="e.g., Total Cholesterol" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="value">Value</Label>
                  <Input id="value" type="number" placeholder="185" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="unit">Unit</Label>
                  <Input id="unit" placeholder="mg/dL" />
                </div>
              </div>
              <Button className="w-full">Save Result</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Latest Results</CardTitle>
            <FileText className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">Nov 20, 2024</div>
            <p className="text-slate-600">3 panels completed</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Normal Results</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">14 of 15</div>
            <p className="text-slate-600">93% within normal range</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-slate-600">Next Test Due</CardTitle>
            <FlaskConical className="h-4 w-4 text-purple-500" />
          </CardHeader>
          <CardContent>
            <div className="text-slate-900">Feb 20, 2025</div>
            <p className="text-slate-600">Lipid panel scheduled</p>
          </CardContent>
        </Card>
      </div>

      {/* Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Cholesterol Trends</CardTitle>
            <CardDescription>Last 3 lipid panels</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={lipidPanelHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#3b82f6" strokeWidth={2} name="Total" />
                <Line type="monotone" dataKey="ldl" stroke="#ef4444" strokeWidth={2} name="LDL" />
                <Line type="monotone" dataKey="hdl" stroke="#10b981" strokeWidth={2} name="HDL" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Glucose Control</CardTitle>
            <CardDescription>Fasting glucose and HbA1c trends</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={glucoseHistory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="date" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="fasting" fill="#8b5cf6" name="Fasting (mg/dL)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Results */}
      <div className="space-y-4">
        {labResults.map((panel, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>{panel.category}</CardTitle>
                  <CardDescription>{panel.date}</CardDescription>
                </div>
                <FlaskConical className="w-5 h-5 text-blue-600" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {panel.tests.map((test, testIndex) => (
                  <div key={testIndex} className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-slate-900">{test.name}</p>
                        <Badge variant="outline" className={getStatusColor(test.status)}>
                          {getStatusIcon(test.status)}
                          <span className="ml-1 capitalize">{test.status}</span>
                        </Badge>
                      </div>
                      <p className="text-slate-600 mt-1">Reference: {test.range}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-900">{test.value} {test.unit}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
