import { Users, UserPlus, Check } from 'lucide-react';

const columns = [
  {
    title: 'Backlog',
    color: 'from-slate-200 to-slate-100',
    cards: [
      { title: 'Script breakdown', tags: ['Pre-prod'] },
      { title: 'Location scouts', tags: ['Logistics'] },
    ],
  },
  {
    title: 'In Progress',
    color: 'from-indigo-200 to-indigo-100',
    cards: [
      { title: 'Casting callbacks', tags: ['Casting'] },
      { title: 'Shot list v2', tags: ['Camera'] },
    ],
  },
  {
    title: 'Review',
    color: 'from-amber-200 to-amber-100',
    cards: [
      { title: 'Storyboard edits', tags: ['Art'] },
      { title: 'Budget pass', tags: ['Production'] },
    ],
  },
  {
    title: 'Done',
    color: 'from-emerald-200 to-emerald-100',
    cards: [
      { title: 'Schedule lock', tags: ['AD'] },
      { title: 'Crew onboarding', tags: ['HR'] },
    ],
  },
];

const avatars = [
  { name: 'Ava', color: 'bg-fuchsia-500' },
  { name: 'Noah', color: 'bg-amber-500' },
  { name: 'Maya', color: 'bg-emerald-500' },
  { name: 'Leo', color: 'bg-blue-500' },
];

export default function Collaboration({ onOpenProject }) {
  return (
    <section id="collab" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Collaboration hub</h2>
            <p className="mt-2 text-slate-600 max-w-2xl">Plan projects, track tasks, and bring teammates together across 24 crafts — all in one place.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 shadow-sm">
            <Users className="h-4 w-4" /> Live team presence
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 8 online</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Kanban Preview */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-medium text-slate-900">Project: Night Drive</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs text-slate-500">Sprint · Nov 10–24</div>
                  <button onClick={onOpenProject} className="text-xs rounded-md border border-slate-200 px-2 py-1 hover:bg-slate-50">View Project Details</button>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {columns.map((col) => (
                  <div key={col.title} className="rounded-xl border border-slate-200 bg-slate-50">
                    <div className={`flex items-center justify-between rounded-t-xl bg-gradient-to-br ${col.color} px-3 py-2`}>
                      <div className="text-sm font-medium text-slate-800">{col.title}</div>
                      <span className="text-[10px] text-slate-600">{col.cards.length}</span>
                    </div>
                    <div className="p-3 space-y-3">
                      {col.cards.map((c) => (
                        <div key={c.title} className="rounded-lg bg-white border border-slate-200 p-3 shadow-sm">
                          <div className="text-sm font-medium text-slate-900">{c.title}</div>
                          <div className="mt-2 flex flex-wrap gap-1.5">
                            {c.tags.map((t) => (
                              <span key={t} className="rounded-full bg-slate-100 text-slate-700 px-2 py-0.5 text-[10px]">{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Team Invites */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="font-medium text-slate-900">Invite teammates</div>
                <span className="inline-flex items-center gap-1 rounded-md bg-indigo-600/10 text-indigo-700 px-2 py-0.5 text-[10px] font-medium"><UserPlus className="h-3.5 w-3.5" /> Quick invite</span>
              </div>
              <div className="mt-4 flex -space-x-2">
                {avatars.map((a) => (
                  <div key={a.name} className={`h-9 w-9 rounded-full ${a.color} ring-2 ring-white flex items-center justify-center text-white text-xs font-semibold`}>{a.name[0]}</div>
                ))}
                <button className="h-9 w-9 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center hover:bg-slate-50">
                  +
                </button>
              </div>
              <form className="mt-5">
                <label className="block text-xs font-medium text-slate-600">Email</label>
                <div className="mt-1 flex">
                  <input type="email" placeholder="name@studio.com" className="w-full rounded-l-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                  <button type="button" className="rounded-r-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700">Invite</button>
                </div>
              </form>
              <div className="mt-5 space-y-3">
                <InviteRow name="Unit Production Manager" email="upm@nightdrive.com" />
                <InviteRow name="Gaffer" email="gaffer@nightdrive.com" />
                <InviteRow name="1st AC" email="1stac@nightdrive.com" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InviteRow({ name, email }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 p-3">
      <div>
        <div className="text-sm font-medium text-slate-900">{name}</div>
        <div className="text-xs text-slate-600">{email}</div>
      </div>
      <button className="inline-flex items-center gap-1.5 rounded-md bg-emerald-600 px-2.5 py-1.5 text-xs font-medium text-white hover:bg-emerald-700">
        <Check className="h-3.5 w-3.5" /> Sent
      </button>
    </div>
  );
}
