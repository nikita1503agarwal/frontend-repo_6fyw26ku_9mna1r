import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/50 bg-white/60 border-b border-black/5">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-gray-900 text-lg">
          RAIHAN AZIZ FURQONI
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm font-medium shadow hover:shadow-md transition"
          >
            Get in touch
          </a>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <div className="space-y-1">
            <span className="block w-5 h-0.5 bg-gray-900" />
            <span className="block w-5 h-0.5 bg-gray-900" />
            <span className="block w-5 h-0.5 bg-gray-900" />
          </div>
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90 backdrop-blur">
          <div className="px-4 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2 text-gray-800"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
