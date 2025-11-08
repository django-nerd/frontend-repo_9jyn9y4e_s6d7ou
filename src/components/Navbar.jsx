import { ShoppingBag } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-cyan-500 to-indigo-500 grid place-items-center text-white shadow-md">
            <ShoppingBag size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800 text-lg">Xeera Store</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition-colors">Features</a>
          <a href="#products" className="hover:text-slate-900 transition-colors">Cards</a>
          <a href="#support" className="hover:text-slate-900 transition-colors">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="hidden sm:inline-flex h-10 items-center rounded-xl border border-slate-300/70 px-4 text-sm font-medium text-slate-700 hover:bg-white/70 hover:border-slate-400/80 transition-colors">Sign in</button>
          <button className="inline-flex h-10 items-center rounded-xl bg-slate-900 px-4 text-sm font-medium text-white hover:bg-slate-800 transition-colors">Get started</button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
