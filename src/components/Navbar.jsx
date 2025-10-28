import { Rocket, User } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="w-full sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 font-semibold text-slate-900">
          <Rocket className="h-6 w-6 text-indigo-600" />
          <span className="text-lg tracking-tight">CineCraft Connect</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <Link to="/features" className="hover:text-slate-900 transition-colors">Features</Link>
          <Link to="/collab" className="hover:text-slate-900 transition-colors">Collab</Link>
          <Link to="/showcase" className="hover:text-slate-900 transition-colors">Showcase</Link>
          <Link to="/feed" className="hover:text-slate-900 transition-colors">Feed</Link>
          <Link to="/jobs" className="hover:text-slate-900 transition-colors">Jobs</Link>
        </nav>
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center gap-2 rounded-md border border-slate-200 px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 active:bg-slate-100">
            <User className="h-4 w-4" />
            Sign in
          </button>
          <Link to="/feed" className="inline-flex items-center rounded-md bg-indigo-600 px-3.5 py-1.5 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 active:bg-indigo-800">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}
