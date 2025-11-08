export default function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description:
        'A modern personal site featuring interactive 3D objects, smooth transitions, and accessible UI.',
      tags: ['React', 'Spline', 'Tailwind'],
      link: '#',
    },
    {
      title: 'Realtime Dashboard',
      description:
        'Live metrics with sockets, advanced charts, and delightful micro-interactions.',
      tags: ['React', 'WebSockets', 'Charts'],
      link: '#',
    },
    {
      title: 'Product Landing Page',
      description:
        'High-converting page with clean typography, responsive layout, and A/B tested components.',
      tags: ['Next.js', 'Design', 'A/B'],
      link: '#',
    },
  ];

  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Featured Projects</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">A selection of things I’ve designed and built recently.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">{p.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-900 text-white">{p.tags[0]}</span>
              </div>
              <p className="mt-3 text-sm text-gray-600">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-black/5">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 text-sm font-medium text-gray-900 group-hover:underline">View details →</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
