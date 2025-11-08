const products = [
  {
    title: 'Xeera Pastel Visa',
    color: 'from-pink-300 via-rose-300 to-orange-300',
    accent: 'bg-rose-400',
  },
  {
    title: 'Xeera Arctic Visa',
    color: 'from-cyan-200 via-sky-200 to-indigo-200',
    accent: 'bg-sky-400',
  },
  {
    title: 'Xeera Forest Visa',
    color: 'from-emerald-200 via-green-200 to-teal-200',
    accent: 'bg-emerald-400',
  },
]

function Card({ title, color, accent }) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className={`relative h-40 rounded-xl bg-gradient-to-tr ${color} overflow-hidden` }>
        <div className={`absolute top-4 left-4 h-2 w-10 rounded-full ${accent} opacity-80`}></div>
        <div className="absolute bottom-4 left-4 text-slate-800 font-medium">VISA</div>
        <div className="absolute bottom-4 right-4 text-slate-600 text-sm">•••• 2846</div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">Instant issuance, global ready</p>
        </div>
        <button className="inline-flex items-center rounded-lg bg-slate-900 px-3 py-2 text-xs font-medium text-white hover:bg-slate-800">Add</button>
      </div>
    </div>
  )
}

function ProductGrid() {
  return (
    <section id="products" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Cards that match your flow</h2>
            <p className="mt-2 text-slate-700/90">Elegant gradients, subtle details, and controls that keep you in charge.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex text-slate-700 hover:text-slate-900">View all</a>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <Card key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
