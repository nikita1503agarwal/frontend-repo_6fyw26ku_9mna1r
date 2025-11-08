import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 min-h-[90vh] flex items-stretch">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/20 to-white/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 items-center gap-8 w-full">
        <div className="py-16 md:py-24">
          <p className="text-sm uppercase tracking-wider text-gray-600">Portfolio</p>
          <h1 className="mt-3 text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            RAIHAN AZIZ FURQONI
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-xl">
            Creative developer crafting playful, modern experiences with a technical edge. I build fast, beautiful interfaces and bring ideas to life.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">
              View Projects
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full border border-gray-900 text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-900/5 transition">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hidden md:block" />
      </div>
    </section>
  );
}
