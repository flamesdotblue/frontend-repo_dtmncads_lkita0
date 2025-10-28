import Spline from '@splinetool/react-spline';
import { Film, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/80" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-black/80 text-white px-3 py-1 text-xs font-medium shadow-sm">
            <Film className="h-3.5 w-3.5" />
            Built for film & 24 creative crafts
          </span>
          <h1 className="mt-6 font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl text-slate-900">
            Connect, create, and get hired in the world of cinema
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-700">
            A modern space that blends professional networking with content sharing. Showcase your reels and portfolios, collaborate on projects, and discover jobs tailored to your craft.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <Link to="/feed" className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700 active:bg-indigo-800">
              Join the community
            </Link>
            <Link to="/features" className="inline-flex items-center justify-center rounded-md border border-slate-200 bg-white px-5 py-3 text-slate-800 font-medium hover:bg-slate-50">
              Explore features
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Stat icon={Users} label="Creators & crew" value="25k+" />
            <Stat icon={Briefcase} label="Active opportunities" value="1.4k" />
            <Stat icon={Film} label="Projects launched" value="3.2k" />
          </dl>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl bg-white/70 backdrop-blur border border-black/5 p-4">
      <div className="flex items-center gap-3">
        <div className="rounded-lg bg-indigo-600/10 text-indigo-700 p-2">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xl font-semibold text-slate-900">{value}</div>
          <div className="text-xs text-slate-600">{label}</div>
        </div>
      </div>
    </div>
  );
}
