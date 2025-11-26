import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Switch } from './ui/switch';
import { Label } from './ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  CloudUpload, 
  Download, 
  Upload, 
  RefreshCw, 
  CheckCircle2, 
  Cloud, 
  Database,
  FileText,
  Share2,
  Smartphone,
  Monitor,
  HardDrive,
  Wifi,
  WifiOff,
  Clock,
  Calendar,
  FileJson,
  FileCsv,
  FileSpreadsheet,
  Settings
} from 'lucide-react';

const syncProviders = [
  {
    id: 'google',
    name: 'Google Drive',
    icon: Cloud,
    description: 'Sync with Google Drive cloud storage',
    connected: true,
    lastSync: '2 hours ago',
    status: 'active',
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
    iconColor: 'text-blue-400'
  },
  {
    id: 'icloud',
    name: 'iCloud',
    description: 'Sync with Apple iCloud',
    icon: Cloud,
    connected: false,
    lastSync: 'Never',
    status: 'inactive',
    color: 'from-slate-500/20 to-slate-600/20',
    borderColor: 'border-slate-500/30',
    iconColor: 'text-slate-400'
  },
  {
    id: 'dropbox',
    name: 'Dropbox',
    description: 'Sync with Dropbox cloud storage',
    icon: Database,
    connected: false,
    lastSync: 'Never',
    status: 'inactive',
    color: 'from-slate-500/20 to-slate-600/20',
    borderColor: 'border-slate-500/30',
    iconColor: 'text-slate-400'
  },
  {
    id: 'onedrive',
    name: 'OneDrive',
    description: 'Sync with Microsoft OneDrive',
    icon: Cloud,
    connected: true,
    lastSync: '1 day ago',
    status: 'active',
    color: 'from-indigo-500/20 to-purple-500/20',
    borderColor: 'border-indigo-500/30',
    iconColor: 'text-indigo-400'
  }
];

const exportFormats = [
  {
    id: 'json',
    name: 'JSON Format',
    description: 'Complete data export in JSON format',
    icon: FileJson,
    size: '2.4 MB',
    recommended: true
  },
  {
    id: 'csv',
    name: 'CSV Spreadsheet',
    description: 'Tabular data for Excel/Sheets',
    icon: FileSpreadsheet,
    size: '1.8 MB',
    recommended: false
  },
  {
    id: 'pdf',
    name: 'PDF Report',
    description: 'Formatted health report',
    icon: FileText,
    size: '3.2 MB',
    recommended: false
  }
];

const syncHistory = [
  { date: 'Nov 26, 2024 2:30 PM', provider: 'Google Drive', status: 'success', items: 42 },
  { date: 'Nov 26, 2024 8:00 AM', provider: 'OneDrive', status: 'success', items: 38 },
  { date: 'Nov 25, 2024 9:45 PM', provider: 'Google Drive', status: 'success', items: 35 },
  { date: 'Nov 25, 2024 12:00 PM', provider: 'Google Drive', status: 'success', items: 31 },
  { date: 'Nov 24, 2024 6:30 PM', provider: 'OneDrive', status: 'failed', items: 0 },
];

export function DataSync() {
  const [autoSync, setAutoSync] = useState(true);
  const [wifiOnly, setWifiOnly] = useState(true);
  const [syncing, setSyncing] = useState(false);

  const handleManualSync = () => {
    setSyncing(true);
    setTimeout(() => setSyncing(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-foreground mb-1">Data & Sync</h2>
          <p className="text-muted-foreground">Manage your health data synchronization and exports</p>
        </div>
        <Button 
          onClick={handleManualSync}
          disabled={syncing}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 shadow-lg shadow-indigo-500/20"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
          {syncing ? 'Syncing...' : 'Sync Now'}
        </Button>
      </div>

      {/* Sync Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Sync Status</CardTitle>
            <CheckCircle2 className="h-4 w-4 text-green-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">Up to date</div>
            <p className="text-muted-foreground">Last sync 2 hours ago</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Connected Services</CardTitle>
            <Cloud className="h-4 w-4 text-blue-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">2 active</div>
            <p className="text-muted-foreground">Google Drive, OneDrive</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Data Size</CardTitle>
            <HardDrive className="h-4 w-4 text-purple-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">2.4 MB</div>
            <p className="text-muted-foreground">42 health records</p>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border-orange-500/20 backdrop-blur-xl">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-muted-foreground">Auto Sync</CardTitle>
            <Wifi className="h-4 w-4 text-orange-400" />
          </CardHeader>
          <CardContent>
            <div className="text-foreground">Enabled</div>
            <p className="text-muted-foreground">WiFi only mode active</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="providers" className="space-y-4">
        <TabsList className="bg-card/50 backdrop-blur-xl border border-white/10">
          <TabsTrigger value="providers" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">
            Sync Providers
          </TabsTrigger>
          <TabsTrigger value="export" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">
            Export Data
          </TabsTrigger>
          <TabsTrigger value="settings" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">
            Sync Settings
          </TabsTrigger>
          <TabsTrigger value="history" className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-indigo-500/20 data-[state=active]:to-purple-500/20 data-[state=active]:text-indigo-300">
            Sync History
          </TabsTrigger>
        </TabsList>

        <TabsContent value="providers" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Cloud Storage Providers</CardTitle>
              <CardDescription>Connect your preferred cloud storage services to automatically sync your health data</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {syncProviders.map((provider) => (
                <Card key={provider.id} className={`bg-gradient-to-br ${provider.color} border ${provider.borderColor} backdrop-blur-xl hover:border-indigo-500/30 transition-all`}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${provider.color} border ${provider.borderColor}`}>
                          <provider.icon className={`w-6 h-6 ${provider.iconColor}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-foreground">{provider.name}</h4>
                            {provider.connected && (
                              <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                                Connected
                              </Badge>
                            )}
                          </div>
                          <p className="text-muted-foreground">{provider.description}</p>
                          <p className="text-muted-foreground mt-1">Last sync: {provider.lastSync}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {provider.connected ? (
                          <>
                            <Button variant="outline" size="sm" className="border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30">
                              <RefreshCw className="w-4 h-4 mr-2" />
                              Sync
                            </Button>
                            <Button variant="outline" size="sm" className="border-white/10 hover:bg-red-500/10 hover:border-red-500/30">
                              Disconnect
                            </Button>
                          </>
                        ) : (
                          <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                            Connect
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Device Sync</CardTitle>
              <CardDescription>Sync data across your devices</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
                    <Smartphone className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-foreground">iPhone 15 Pro</h4>
                    <p className="text-muted-foreground">Last active: 5 minutes ago</p>
                  </div>
                </div>
                <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                  This device
                </Badge>
              </div>

              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30">
                    <Monitor className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h4 className="text-foreground">MacBook Pro</h4>
                    <p className="text-muted-foreground">Last active: 2 hours ago</p>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30">
                  Manage
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Export Your Health Data</CardTitle>
              <CardDescription>Download your health data in various formats for backup or sharing with healthcare providers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {exportFormats.map((format) => (
                <div key={format.id} className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10 hover:border-indigo-500/30 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-indigo-500/20 to-purple-500/20 border border-indigo-500/30">
                      <format.icon className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-foreground">{format.name}</h4>
                        {format.recommended && (
                          <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                            Recommended
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{format.description}</p>
                      <p className="text-muted-foreground mt-1">Approximate size: {format.size}</p>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Import Data</CardTitle>
              <CardDescription>Import health data from other sources or previous exports</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center p-8 border-2 border-dashed border-white/10 rounded-xl hover:border-indigo-500/30 transition-all cursor-pointer">
                <div className="text-center">
                  <Upload className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-foreground mb-2">Drop files here or click to browse</p>
                  <p className="text-muted-foreground">Supports JSON, CSV, and PDF formats</p>
                  <Button className="mt-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                    Choose File
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Share with Healthcare Provider</CardTitle>
              <CardDescription>Generate a secure shareable link for your healthcare provider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
                <div className="flex items-start gap-3">
                  <Share2 className="w-5 h-5 text-blue-400 mt-0.5" />
                  <div>
                    <p className="text-foreground mb-2">Create a secure, time-limited link to share your health data</p>
                    <div className="flex gap-2">
                      <Button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700">
                        Generate Link
                      </Button>
                      <Button variant="outline" className="border-white/10 hover:bg-indigo-500/10 hover:border-indigo-500/30">
                        Email to Provider
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Automatic Sync Settings</CardTitle>
              <CardDescription>Configure how and when your data syncs automatically</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <RefreshCw className="w-5 h-5 text-indigo-400" />
                  <div>
                    <Label htmlFor="auto-sync" className="text-foreground">Auto Sync</Label>
                    <p className="text-muted-foreground">Automatically sync data when changes are made</p>
                  </div>
                </div>
                <Switch id="auto-sync" checked={autoSync} onCheckedChange={setAutoSync} />
              </div>

              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Wifi className="w-5 h-5 text-blue-400" />
                  <div>
                    <Label htmlFor="wifi-only" className="text-foreground">WiFi Only</Label>
                    <p className="text-muted-foreground">Only sync when connected to WiFi</p>
                  </div>
                </div>
                <Switch id="wifi-only" checked={wifiOnly} onCheckedChange={setWifiOnly} />
              </div>

              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <div>
                    <Label className="text-foreground">Sync Frequency</Label>
                    <p className="text-muted-foreground">How often to check for updates</p>
                  </div>
                </div>
                <select className="bg-background border border-white/10 rounded-lg px-3 py-2 text-foreground">
                  <option>Every 15 minutes</option>
                  <option>Every 30 minutes</option>
                  <option>Every hour</option>
                  <option>Every 6 hours</option>
                  <option>Daily</option>
                </select>
              </div>

              <div className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-orange-400" />
                  <div>
                    <Label className="text-foreground">Backup Retention</Label>
                    <p className="text-muted-foreground">How long to keep cloud backups</p>
                  </div>
                </div>
                <select className="bg-background border border-white/10 rounded-lg px-3 py-2 text-foreground">
                  <option>30 days</option>
                  <option>90 days</option>
                  <option>6 months</option>
                  <option>1 year</option>
                  <option>Forever</option>
                </select>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Data Selection</CardTitle>
              <CardDescription>Choose which data types to sync</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {['Vitals', 'Lab Results', 'Medications', 'Activity Monitors', 'Sleep Data'].map((dataType) => (
                <div key={dataType} className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                  <Label className="text-foreground">{dataType}</Label>
                  <Switch defaultChecked />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-4">
          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Sync History</CardTitle>
              <CardDescription>Recent synchronization activity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {syncHistory.map((sync, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-xl border border-white/10">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        sync.status === 'success' 
                          ? 'bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30' 
                          : 'bg-gradient-to-br from-red-500/20 to-pink-500/20 border border-red-500/30'
                      }`}>
                        {sync.status === 'success' ? (
                          <CheckCircle2 className="w-5 h-5 text-green-400" />
                        ) : (
                          <WifiOff className="w-5 h-5 text-red-400" />
                        )}
                      </div>
                      <div>
                        <p className="text-foreground">{sync.provider}</p>
                        <p className="text-muted-foreground">{sync.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={
                        sync.status === 'success'
                          ? 'bg-green-500/20 text-green-300 border-green-500/30'
                          : 'bg-red-500/20 text-red-300 border-red-500/30'
                      }>
                        {sync.status === 'success' ? `${sync.items} items synced` : 'Failed'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-xl border-white/10">
            <CardHeader>
              <CardTitle className="text-foreground">Storage Usage</CardTitle>
              <CardDescription>Cloud storage usage by provider</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Google Drive</span>
                  <span className="text-foreground">2.4 MB / 15 GB</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-600 h-2 rounded-full" style={{ width: '0.016%' }} />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">OneDrive</span>
                  <span className="text-foreground">2.4 MB / 5 GB</span>
                </div>
                <div className="w-full bg-background/50 rounded-full h-2">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full" style={{ width: '0.048%' }} />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}