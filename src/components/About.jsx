export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">About</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            I’m Raihan — a developer who enjoys blending technology and design. I focus on clean, accessible interfaces, smooth interactions, and performance. I believe the best experiences are both delightful and practical.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            My toolkit includes React, TypeScript, Tailwind, and 3D on the web. I love exploring new tools and shipping polished products.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900">5+</div>
            <div className="text-sm text-gray-600">Years coding</div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900">20+</div>
            <div className="text-sm text-gray-600">Projects shipped</div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">Client focus</div>
          </div>
          <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="text-3xl font-bold text-gray-900">∞</div>
            <div className="text-sm text-gray-600">Curiosity</div>
          </div>
        </div>
      </div>
    </section>
  );
}
