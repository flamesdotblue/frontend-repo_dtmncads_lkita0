import { Briefcase, MapPin, Calendar } from 'lucide-react';

const jobs = [
  {
    title: 'Assistant Director',
    company: 'Silverline Studios',
    location: 'Los Angeles, CA',
    type: 'Contract',
    start: 'Nov 12',
    tags: ['On-set', 'Feature Film', 'Union Preferred'],
  },
  {
    title: 'Colorist',
    company: 'Neon Post',
    location: 'Remote',
    type: 'Freelance',
    start: 'Nov 20',
    tags: ['DaVinci Resolve', 'Short Film'],
  },
  {
    title: 'Sound Recordist',
    company: 'Aurora Productions',
    location: 'Atlanta, GA',
    type: 'Day Rate',
    start: 'Dec 2',
    tags: ['Location Sound', 'Documentary'],
  },
  {
    title: 'Gaffer',
    company: 'LightCraft',
    location: 'Vancouver, BC',
    type: 'Contract',
    start: 'Nov 28',
    tags: ['LED', 'Commercial'],
  },
];

export default function Jobs() {
  return (
    <section id="jobs" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Jobs spotlight</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Curated roles across 24 film crafts. Apply with your profile in one click.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black">Browse all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.title + job.company} job={job} />
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  return (
    <div className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-md bg-indigo-600/10 text-indigo-700 px-2.5 py-1 text-xs font-medium">
            <Briefcase className="h-3.5 w-3.5" />
            {job.type}
          </div>
          <h3 className="mt-3 text-lg font-semibold text-slate-900">{job.title}</h3>
          <p className="text-sm text-slate-600">{job.company}</p>
        </div>
        <button className="shrink-0 rounded-md bg-indigo-600 px-3 py-2 text-xs font-medium text-white hover:bg-indigo-700">Apply</button>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-700">
        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4 text-slate-400" />{job.location}</span>
        <span className="inline-flex items-center gap-1"><Calendar className="h-4 w-4 text-slate-400" />Start {job.start}</span>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {job.tags.map((t) => (
          <span key={t} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">{t}</span>
        ))}
      </div>
    </div>
  );
}
