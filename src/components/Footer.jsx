function Footer() {
  return (
    <footer id="support" className="bg-white border-t border-slate-200/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-semibold text-slate-900">Xeera Store</h4>
            <p className="mt-2 text-sm text-slate-600 max-w-sm">A calm, minimalist platform for digital banking and e‑commerce. Issue cards, manage spend, and grow with confidence.</p>
          </div>
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="text-sm font-medium text-slate-900">Product</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a className="hover:text-slate-900" href="#features">Features</a></li>
                <li><a className="hover:text-slate-900" href="#products">Cards</a></li>
                <li><a className="hover:text-slate-900" href="#">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-medium text-slate-900">Company</h5>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><a className="hover:text-slate-900" href="#">About</a></li>
                <li><a className="hover:text-slate-900" href="#support">Support</a></li>
                <li><a className="hover:text-slate-900" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="md:text-right">
            <p className="text-sm text-slate-600">© {new Date().getFullYear()} Xeera Store. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
