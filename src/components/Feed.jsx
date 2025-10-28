import { useState } from 'react';
import { User, Image as ImageIcon, Send, Heart } from 'lucide-react';

export default function Feed() {
  const [text, setText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      author: 'Ava Chen',
      handle: '@ava_dp',
      time: '1h',
      text: 'Wrapped a moody night exterior. Sodium vapor gels did the trick!',
      image: '',
      likes: 24,
    },
    {
      id: 2,
      author: 'Leo Park',
      handle: '@leopark',
      time: '3h',
      text: 'Shared my shot list v2 for feedback — open to notes!',
      image: '',
      likes: 12,
    },
  ]);

  const submitPost = () => {
    const content = text.trim();
    if (!content && !imageUrl.trim()) return;
    setPosts((prev) => [
      {
        id: Date.now(),
        author: 'You',
        handle: '@you',
        time: 'now',
        text: content,
        image: imageUrl.trim(),
        likes: 0,
      },
      ...prev,
    ]);
    setText('');
    setImageUrl('');
  };

  const likePost = (id) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));
  };

  return (
    <section id="feed" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">Community Feed</h2>
        <p className="mt-2 text-slate-600">Share updates, get feedback, and connect with other creators.</p>

        {/* Composer */}
        <div className="mt-6 rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-full bg-indigo-600 text-white flex items-center justify-center">
              <User className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={3}
                placeholder="What are you working on?"
                className="w-full resize-none rounded-md border border-slate-200 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      value={imageUrl}
                      onChange={(e) => setImageUrl(e.target.value)}
                      placeholder="Optional image URL"
                      className="w-56 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                </div>
                <button onClick={submitPost} className="inline-flex items-center gap-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700">
                  <Send className="h-4 w-4" /> Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Posts */}
        <div className="mt-6 space-y-4">
          {posts.map((p) => (
            <article key={p.id} className="rounded-2xl border border-black/5 bg-white p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="h-10 w-10 rounded-full bg-slate-800 text-white flex items-center justify-center text-sm font-semibold">
                  {p.author[0]}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{p.author}</div>
                      <div className="text-xs text-slate-500">{p.handle} • {p.time}</div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm text-slate-800 whitespace-pre-line">{p.text}</p>
                  {p.image && (
                    <div className="mt-3 overflow-hidden rounded-lg border border-slate-200">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.image} alt="post" className="w-full object-cover" />
                    </div>
                  )}
                  <div className="mt-3 flex items-center gap-4 text-sm text-slate-600">
                    <button onClick={() => likePost(p.id)} className="inline-flex items-center gap-1 hover:text-slate-900">
                      <Heart className="h-4 w-4" /> {p.likes}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
