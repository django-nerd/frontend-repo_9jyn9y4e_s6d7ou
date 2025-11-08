import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8nsoLg1te84JZcE9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-32 pb-24">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">Modern fintech for everyone</span>
          <h1 className="mt-6 text-4xl md:text-6xl font-semibold tracking-tight text-slate-900">Banking for the new economy</h1>
          <p className="mt-4 text-lg md:text-xl text-slate-700/90 max-w-xl">Xeera Store brings elegant visa cards, simple payments, and powerful tools together in one minimalist platform — built for modern e‑commerce.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#products" className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-800 transition-colors">Explore cards</a>
            <a href="#features" className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-slate-800 font-medium hover:bg-slate-50 transition-colors">See features</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/40 via-white/40 to-white" />
    </section>
  )
}

export default Hero
