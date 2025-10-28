import { X, Paperclip, Send, MessageSquare, Image, File } from 'lucide-react';
import { useState } from 'react';

export default function ProjectDetailModal({ open, onClose }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([
    { id: 1, author: 'Ava', text: 'Let’s lock scene 12 by Friday.', time: '2h ago' },
    { id: 2, author: 'Noah', text: 'Storyboard v3 uploaded, feedback welcome!', time: '1h ago' },
  ]);

  if (!open) return null;

  const addComment = () => {
    const text = comment.trim();
    if (!text) return;
    setComments((prev) => [
      ...prev,
      { id: Date.now(), author: 'You', text, time: 'just now' },
    ]);
    setComment('');
  };

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      <div className="absolute inset-0 bg-slate-900/50" onClick={onClose} />
      <div className="relative z-50 w-full max-w-5xl mx-4 rounded-2xl bg-white shadow-2xl border border-black/5 overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <div>
            <div className="text-xs text-slate-500">Project</div>
            <h3 className="text-lg font-semibold text-slate-900">Night Drive — Sprint Nov 10–24</h3>
          </div>
          <button onClick={onClose} className="p-2 rounded-md hover:bg-slate-100">
            <X className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6">
          {/* Overview */}
          <div className="lg:col-span-2 space-y-6">
            <section className="rounded-xl border border-slate-200 p-4">
              <h4 className="text-sm font-semibold text-slate-900">Overview</h4>
              <p className="mt-2 text-sm text-slate-700">
                Urban neo-noir short. Current sprint covers casting callbacks, shot list v2, and storyboard edits.
              </p>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                <Meta label="Owner" value="Ava Chen" />
                <Meta label="Status" value="In Progress" />
                <Meta label="Deadline" value="Nov 24" />
                <Meta label="Budget" value="$12,500" />
              </div>
            </section>

            {/* Attachments */}
            <section className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold text-slate-900">Attachments</h4>
                <button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md border border-slate-200 hover:bg-slate-50">
                  <Paperclip className="h-4 w-4" /> Add file
                </button>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <Attachment icon={Image} name="Storyboard-v3.png" meta="2.1 MB • Ava" />
                <Attachment icon={File} name="Shot-list-v2.pdf" meta="410 KB • Leo" />
                <Attachment icon={File} name="Casting-notes.docx" meta="98 KB • Noah" />
                <Attachment icon={Image} name="Location-refs.jpg" meta="1.8 MB • Maya" />
              </div>
            </section>

            {/* Comments */}
            <section className="rounded-xl border border-slate-200 p-4">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-indigo-600" />
                <h4 className="text-sm font-semibold text-slate-900">Comments</h4>
              </div>
              <div className="mt-3 space-y-3 max-h-56 overflow-y-auto pr-1">
                {comments.map((c) => (
                  <div key={c.id} className="rounded-lg border border-slate-200 p-3">
                    <div className="text-xs text-slate-500">{c.author} • {c.time}</div>
                    <div className="text-sm text-slate-800 mt-1">{c.text}</div>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center gap-2">
                <input
                  className="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Add a comment"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                />
                <button onClick={addComment} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white text-sm px-3 py-2 hover:bg-indigo-700">
                  <Send className="h-4 w-4" /> Post
                </button>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-4">
            <section className="rounded-xl border border-slate-200 p-4">
              <h4 className="text-sm font-semibold text-slate-900">Team</h4>
              <div className="mt-3 flex -space-x-2">
                {['A','N','M','L','Y'].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full bg-indigo-600 text-white flex items-center justify-center ring-2 ring-white text-xs font-semibold">{i}</div>
                ))}
              </div>
            </section>
            <section className="rounded-xl border border-slate-200 p-4">
              <h4 className="text-sm font-semibold text-slate-900">Milestones</h4>
              <ul className="mt-2 space-y-2 text-sm text-slate-700 list-disc list-inside">
                <li>Casting callbacks complete</li>
                <li>Storyboard pass v3 approved</li>
                <li>Shot list v2 reviewed</li>
              </ul>
            </section>
          </aside>
        </div>
      </div>
    </div>
  );
}

function Meta({ label, value }) {
  return (
    <div>
      <div className="text-[11px] text-slate-500">{label}</div>
      <div className="text-sm font-medium text-slate-900">{value}</div>
    </div>
  );
}

function Attachment({ icon: Icon, name, meta }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-slate-200 p-3 hover:bg-slate-50">
      <div className="h-9 w-9 rounded-md bg-slate-100 text-slate-700 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-sm font-medium text-slate-900 truncate">{name}</div>
        <div className="text-xs text-slate-500">{meta}</div>
      </div>
    </div>
  );
}
