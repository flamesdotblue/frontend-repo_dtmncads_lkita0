import { UserCircle2, Film, Briefcase, Users, Calendar, BookOpen } from 'lucide-react';

const features = [
  {
    title: 'Professional Profiles',
    description:
      'Showcase your skills, credits, and portfolio with craft tags and endorsements that highlight your expertise.',
    icon: UserCircle2,
  },
  {
    title: 'Content Sharing',
    description:
      'Post photos, videos, reels, and behind-the-scenes stories. Use hashtags to grow your audience.',
    icon: Film,
  },
  {
    title: 'Job Board',
    description:
      'Discover casting calls, crew roles, and gigs. Apply with your profile or portfolio in one click.',
    icon: Briefcase,
  },
  {
    title: 'Collaboration Hub',
    description:
      'Create projects, find teammates across 24 crafts, and message collaborators with ease.',
    icon: Users,
  },
  {
    title: 'Events & Workshops',
    description:
      'Track festivals, workshops, and seminars. RSVP or purchase tickets directly in-app.',
    icon: Calendar,
  },
  {
    title: 'Learning & Resources',
    description:
      'Explore tutorials, masterclasses, and a resource library. Earn certificates as you grow.',
    icon: BookOpen,
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Everything you need to build your film career
          </h2>
          <p className="mt-3 text-slate-600">
            A hybrid platform that blends the best of networking and content to accelerate your creative journey.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon: Icon }) {
  return (
    <div className="group relative rounded-2xl bg-white border border-black/5 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-4">
        <div className="shrink-0 rounded-xl bg-indigo-600/10 text-indigo-700 p-3">
          <Icon className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{description}</p>
          <div className="mt-4">
            <a href="#get-started" className="text-sm font-medium text-indigo-700 hover:text-indigo-800">
              Learn more →
            </a>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/0 group-hover:via-indigo-500/[0.03]" />
    </div>
  );
}
