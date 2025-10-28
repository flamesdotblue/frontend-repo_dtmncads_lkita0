import { Github, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-semibold text-slate-900">CineCraft Connect</div>
            <p className="mt-1 text-sm text-slate-600 max-w-sm">
              A creative network for cinema and the 24 crafts — connect, collaborate, and grow your career.
            </p>
          </div>
          <div className="flex items-center gap-4 text-slate-500">
            <a aria-label="Twitter" href="#" className="hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
            <a aria-label="Instagram" href="#" className="hover:text-slate-900"><Instagram className="h-5 w-5" /></a>
            <a aria-label="GitHub" href="#" className="hover:text-slate-900"><Github className="h-5 w-5" /></a>
          </div>
        </div>
        <div className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} CineCraft Connect. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
