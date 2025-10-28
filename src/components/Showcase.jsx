import { ChevronLeft, ChevronRight, Star, User } from 'lucide-react';
import { useMemo, useRef, useState } from 'react';

const creators = [
  {
    name: 'Ava Romero',
    role: 'Director',
    highlight: 'Sundance 2024 Official Selection',
    colorFrom: 'from-fuchsia-500',
    colorTo: 'to-indigo-500',
  },
  {
    name: 'Noah Patel',
    role: 'Cinematographer',
    highlight: 'Shot 15+ festival shorts',
    colorFrom: 'from-amber-500',
    colorTo: 'to-rose-500',
  },
  {
    name: 'Maya Chen',
    role: 'Editor',
    highlight: 'Docu-series with 2M views',
    colorFrom: 'from-emerald-500',
    colorTo: 'to-cyan-500',
  },
  {
    name: 'Leo Martins',
    role: 'Sound Designer',
    highlight: 'Clio Award winner 2023',
    colorFrom: 'from-blue-500',
    colorTo: 'to-violet-500',
  },
  {
    name: 'Sara Ali',
    role: 'Producer',
    highlight: 'Scaled 6 international shoots',
    colorFrom: 'from-pink-500',
    colorTo: 'to-purple-500',
  },
];

export default function Showcase() {
  const [index, setIndex] = useState(0);
  const max = creators.length;
  const visible = 3; // cards visible at a time on desktop
  const clampedIndex = useMemo(() => Math.max(0, Math.min(index, Math.max(0, max - visible))), [index, max]);
  const trackRef = useRef(null);

  function prev() {
    setIndex((i) => Math.max(0, i - 1));
  }
  function next() {
    setIndex((i) => Math.min(max - visible, i + 1));
  }

  return (
    <section id="community" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Creator spotlight</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Discover filmmakers and crew shaping today’s stories across narrative, doc, and commercial.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button aria-label="Previous" onClick={prev} className="rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 disabled:opacity-40" disabled={clampedIndex === 0}>
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button aria-label="Next" onClick={next} className="rounded-md border border-slate-200 bg-white p-2 text-slate-700 hover:bg-slate-50 disabled:opacity-40" disabled={clampedIndex >= max - visible}>
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative mt-8 overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500"
            style={{ transform: `translateX(-${clampedIndex * (100 / visible)}%)` }}
          >
            {creators.map((c) => (
              <CreatorCard key={c.name} creator={c} />
            ))}
          </div>

          {/* Mobile scroll hint */}
          <div className="mt-4 text-center text-xs text-slate-500 sm:hidden">Swipe to explore</div>
        </div>
      </div>
    </section>
  );
}

function initials(name) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function CreatorCard({ creator }) {
  return (
    <div className="min-w-[85%] sm:min-w-0 sm:w-1/3 flex-1 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${creator.colorFrom} ${creator.colorTo} flex items-center justify-center text-white font-semibold`}>{initials(creator.name)}</div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{creator.name}</h3>
            <span className="inline-flex items-center gap-1 rounded-md bg-amber-500/10 text-amber-700 px-2 py-0.5 text-xs font-medium"><Star className="h-3.5 w-3.5" />Top</span>
          </div>
          <div className="text-sm text-slate-600">{creator.role}</div>
        </div>
      </div>
      <p className="mt-4 text-sm text-slate-700">{creator.highlight}</p>
      <div className="mt-5 flex items-center gap-2">
        <button className="inline-flex items-center gap-1.5 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-50">
          <User className="h-4 w-4" /> View profile
        </button>
        <button className="inline-flex items-center gap-1.5 rounded-md bg-indigo-600 px-3 py-1.5 text-xs font-medium text-white hover:bg-indigo-700">Message</button>
      </div>
    </div>
  );
}
