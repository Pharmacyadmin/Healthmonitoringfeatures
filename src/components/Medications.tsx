import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Pill, Plus, Clock, AlertCircle, CheckCircle2, Calendar, ImageIcon, Info, Bell } from 'lucide-react';

const medications = [
  {
    id: 1,
    name: 'Lisinopril',
    dosage: '10 mg',
    frequency: 'Once daily',
    time: '8:00 AM',
    purpose: 'Blood pressure management',
    prescribedBy: 'Dr. Sarah Johnson',
    startDate: 'Jan 15, 2024',
    refillDate: 'Dec 28, 2024',
    instructions: [
      'Take on an empty stomach, 1 hour before or 2 hours after meals',
      'Take at the same time each day',
      'Do not stop taking without consulting your doctor',
      'May cause dizziness, especially when standing up quickly',
      'Avoid potassium supplements unless directed by your doctor'
    ],
    sideEffects: 'Dizziness, dry cough, headache',
    warnings: 'Do not take if pregnant. Avoid alcohol.',
    imageUrl: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=400',
    status: 'active',
    adherence: 95
  },
  {
    id: 2,
    name: 'Metformin',
    dosage: '500 mg',
    frequency: 'Twice daily',
    time: '8:00 AM, 8:00 PM',
    purpose: 'Type 2 diabetes management',
    prescribedBy: 'Dr. Michael Chen',
    startDate: 'Mar 10, 2024',
    refillDate: 'Jan 05, 2025',
    instructions: [
      'Take with meals to reduce stomach upset',
      'Swallow tablets whole, do not crush or chew',
      'Stay well hydrated while taking this medication',
      'Monitor blood sugar levels regularly',
      'Report unusual muscle pain or weakness to your doctor'
    ],
    sideEffects: 'Nausea, diarrhea, stomach upset',
    warnings: 'Avoid excessive alcohol. Monitor kidney function.',
    imageUrl: 'https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=400',
    status: 'active',
    adherence: 88
  },
  {
    id: 3,
    name: 'Atorvastatin',
    dosage: '20 mg',
    frequency: 'Once daily',
    time: '9:00 PM',
    purpose: 'Cholesterol management',
    prescribedBy: 'Dr. Sarah Johnson',
    startDate: 'Feb 20, 2024',
    refillDate: 'Dec 15, 2024',
    instructions: [
      'Can be taken with or without food',
      'Take at the same time each day for best results',
      'Avoid grapefruit and grapefruit juice',
      'Report any unexplained muscle pain or weakness',
      'Continue healthy diet and exercise routine'
    ],
    sideEffects: 'Muscle pain, digestive problems',
    warnings: 'Avoid grapefruit. Report muscle pain immediately.',
    imageUrl: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=400',
    status: 'active',
    adherence: 92
  },
  {
    id: 4,
    name: 'Vitamin D3',
    dosage: '2000 IU',
    frequency: 'Once daily',
    time: '8:00 AM',
    purpose: 'Vitamin D supplementation',
    prescribedBy: 'Dr. Sarah Johnson',
    startDate: 'Jan 05, 2024',
    refillDate: 'Jan 20, 2025',
    instructions: [
      'Take with food for better absorption',
      'Best absorbed when taken with a meal containing fats',
      'Safe for long-term use at this dosage',
      'Consider getting sun exposure when possible',
      'Annual blood tests recommended to monitor levels'
    ],
    sideEffects: 'Rare at recommended doses',
    warnings: 'Do not exceed recommended dose.',
    imageUrl: 'https://images.unsplash.com/photo-1550572017-4e0d5c8d6b5e?w=400',
    status: 'active',
    adherence: 78
  }
];

const upcomingDoses = [
  { medication: 'Lisinopril 10mg', time: '8:00 AM', status: 'upcoming' },
  { medication: 'Metformin 500mg', time: '8:00 AM', status: 'upcoming' },
  { medication: 'Vitamin D3 2000 IU', time: '8:00 AM', status: 'upcoming' },
  { medication: 'Metformin 500mg', time: '8:00 PM', status: 'pending' },
  { medication: 'Atorvastatin 20mg', time: '9:00 PM', status: 'pending' },
];

export function Medications() {
  const [open, setOpen] = useState(false);
  const [selectedMed, setSelectedMed] = useState<typeof medications[0] | null>(null);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground mb-1">Medications</h2>
          <p className="text-muted-foreground">Manage your prescriptions and medication schedule</p>
        </div>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/20">
              <Plus className="w-4 h-4 mr-2" />
              Add Medication
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-card border-white/10">
            <DialogHeader>
              <DialogTitle className="text-foreground">Add New Medication</DialogTitle>
              <DialogDescription>Enter your medication details and prescription information</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="medName">Medication Name</Label>
                <Input id="medName" placeholder="e.g., Lisinopril" className="bg-background/50 border-white/10" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dosage">Dosage</Label>
                  <Input id="dosage" placeholder="e.g., 10 mg" className="bg-background/50 border-white/10" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency">Frequency</Label>
                  <Select>
                    <SelectTrigger className="bg-background/50 border-white/10">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-white/10">
                      <SelectItem value="once">Once daily</SelectItem>
                      <SelectItem value="twice">Twice daily</SelectItem>
                      <SelectItem value="three">Three times daily</SelectItem>
                      <SelectItem value="asneeded">As needed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose</Label>
                <Input id="purpose" placeholder="e.g., Blood pressure" className="bg-background/50 border-white/10" />
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">Save Medication</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Active Medications</CardTitle>
            <Pill className="h-4 w-4 text-indigo-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">4 medications</div>
            <p className="text-muted-foreground">All prescriptions current</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Adherence Rate</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">88%</div>
            <p className="text-green-400">Above target (80%)</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Next Refill</CardTitle>
            <Calendar className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">Dec 15</div>
            <p className="text-muted-foreground">Atorvastatin refill due</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Today's Doses</CardTitle>
            <Clock className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">5 scheduled</div>
            <p className="text-muted-foreground">3 upcoming, 2 pending</p>
          </CardContent>
        </Card>
      </div>

      {/* Today's Schedule */}
      <Card className="bg-card/50 backdrop-blur-xl border-white/10">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-foreground">Today's Schedule</CardTitle>
              <CardDescription>Upcoming medication doses for Nov 26, 2024</CardDescription>
            </div>
            <Bell className="w-5 h-5 text-indigo-400" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingDoses.map((dose, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/5 hover:border-indigo-500/30 transition-all">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    dose.status === 'upcoming' 
                      ? 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30' 
                      : 'bg-gradient-to-br from-slate-500/20 to-slate-600/20 border border-slate-500/30'
                  }`}>
                    <Clock className={`w-5 h-5 ${dose.status === 'upcoming' ? 'text-indigo-400' : 'text-slate-400'}`} />
                  </div>
                  <div>
                    <p className="text-foreground">{dose.medication}</p>
                    <p className="text-muted-foreground">{dose.time}</p>
                  </div>
                </div>
                <Badge variant="outline" className={
                  dose.status === 'upcoming' 
                    ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30' 
                    : 'bg-slate-500/10 text-slate-300 border-slate-500/30'
                }>
                  {dose.status === 'upcoming' ? 'Upcoming' : 'Later Today'}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Medications List */}
      <div className="space-y-4">
        <h3 className="text-foreground">Your Medications</h3>
        {medications.map((med) => (
          <Card key={med.id} className="bg-card/50 backdrop-blur-xl border-white/10 overflow-hidden hover:border-indigo-500/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
              {/* Left: Image and Basic Info */}
              <div className="space-y-4">
                <div className="relative h-48 rounded-xl overflow-hidden bg-background/50 border border-white/10">
                  <img
                    src={med.imageUrl}
                    alt={med.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-green-500/90 text-white border-0 shadow-lg">
                      {med.status === 'active' ? 'Active' : 'Inactive'}
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="text-foreground mb-1">{med.name}</h4>
                  <p className="text-muted-foreground">{med.dosage} • {med.frequency}</p>
                  <p className="text-indigo-400 mt-2">{med.purpose}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Adherence</span>
                    <span className="text-foreground">{med.adherence}%</span>
                  </div>
                  <div className="w-full bg-background/50 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all"
                      style={{ width: `${med.adherence}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Middle: Instructions */}
              <div className="space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Info className="w-4 h-4 text-indigo-400" />
                    <h5 className="text-foreground">How to Take</h5>
                  </div>
                  <ul className="space-y-2">
                    {med.instructions.map((instruction, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span>{instruction}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Details and Warnings */}
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="w-4 h-4 text-blue-400" />
                      <p className="text-blue-300">Dosing Schedule</p>
                    </div>
                    <p className="text-foreground">{med.time}</p>
                  </div>

                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400" />
                      <p className="text-yellow-300">Side Effects</p>
                    </div>
                    <p className="text-muted-foreground text-sm">{med.sideEffects}</p>
                  </div>

                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl">
                    <div className="flex items-center gap-2 mb-2">
                      <AlertCircle className="w-4 h-4 text-red-400" />
                      <p className="text-red-300">Warnings</p>
                    </div>
                    <p className="text-muted-foreground text-sm">{med.warnings}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Prescribed by</span>
                    <span className="text-foreground">{med.prescribedBy}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Start date</span>
                    <span className="text-foreground">{med.startDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Next refill</span>
                    <span className="text-indigo-400">{med.refillDate}</span>
                  </div>
                </div>

                <Button 
                  variant="outline" 
                  className="w-full border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30"
                  onClick={() => setSelectedMed(med)}
                >
                  <ImageIcon className="w-4 h-4 mr-2" />
                  View Prescription Image
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}