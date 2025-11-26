import { Outlet, Link, useLocation } from 'react-router';
import { Activity, FlaskConical, Monitor, LayoutDashboard, Pill, CloudUpload } from 'lucide-react';

export function Root() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card/50 backdrop-blur-xl border-b border-white/10 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                <Activity className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-foreground">HealthTrack</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="flex max-w-7xl mx-auto">
        {/* Sidebar Navigation */}
        <nav className="w-64 bg-card/50 backdrop-blur-xl border-r border-white/10 min-h-[calc(100vh-4rem)] p-4">
          <div className="space-y-1">
            <Link
              to="/"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/')
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              to="/vitals"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/vitals')
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
            >
              <Activity className="w-5 h-5" />
              <span>Vitals</span>
            </Link>
            <Link
              to="/labs"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/labs')
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
            >
              <FlaskConical className="w-5 h-5" />
              <span>Lab Results</span>
            </Link>
            <Link
              to="/monitors"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/monitors')
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
            >
              <Monitor className="w-5 h-5" />
              <span>Testing Monitors</span>
            </Link>
            <Link
              to="/medications"
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive('/medications')
                  ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                  : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
              }`}
            >
              <Pill className="w-5 h-5" />
              <span>Medications</span>
            </Link>
            
            <div className="pt-4 mt-4 border-t border-white/10">
              <Link
                to="/sync"
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive('/sync')
                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 border border-indigo-500/30 shadow-lg shadow-indigo-500/10'
                    : 'text-muted-foreground hover:bg-white/5 hover:text-foreground'
                }`}
              >
                <CloudUpload className="w-5 h-5" />
                <span>Data & Sync</span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}