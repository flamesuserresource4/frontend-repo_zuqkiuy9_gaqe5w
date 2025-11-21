import { Menu, Sparkles } from 'lucide-react'

function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="max-w-7xl mx-auto flex items-center justify-between py-5 px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-blue-200/80">Profile</p>
            <h1 className="text-white font-semibold -mt-1">AI + ML Engineer</h1>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-7 text-blue-100/80">
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          <a href="#work" className="hover:text-white transition-colors">Work</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <button className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-blue-100/80">
          <Menu className="h-5 w-5" />
        </button>
      </nav>
    </header>
  )
}

export default Navbar
