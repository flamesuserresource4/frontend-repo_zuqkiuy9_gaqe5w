function Footer() {
  return (
    <footer id="contact" className="relative py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-white text-2xl font-semibold">Let’s build something intelligent</h4>
            <p className="text-blue-100/80 mt-1">Open to collaborations, product prototyping, and AI consulting.</p>
          </div>
          <a href="mailto:you@domain.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 px-5 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.45)] transition-shadow">
            Contact Me
          </a>
        </div>
        <p className="text-center text-blue-200/60 mt-8">© {new Date().getFullYear()} Your Name — ML Engineer</p>
      </div>
    </footer>
  )
}

export default Footer
