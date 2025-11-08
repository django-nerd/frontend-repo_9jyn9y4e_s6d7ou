import { Shield, Sparkles, Wallet } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank‑grade security',
    description: 'Protected by industry-leading encryption, biometric-ready, and 24/7 fraud monitoring.'
  },
  {
    icon: Sparkles,
    title: 'Minimalist design',
    description: 'Pastel aesthetics with a focus on clarity and speed. Nothing extra, just what you need.'
  },
  {
    icon: Wallet,
    title: 'Cards for every need',
    description: 'Physical and virtual Visa cards, spending controls, and instant notifications.'
  }
]

function Features() {
  return (
    <section id="features" className="relative w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Designed to be calm and capable</h2>
          <p className="mt-3 text-slate-700/90">Everything in Xeera Store is crafted to reduce friction and encourage flow — from onboarding to everyday payments.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-500 text-white grid place-items-center shadow-sm">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-700/90">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
