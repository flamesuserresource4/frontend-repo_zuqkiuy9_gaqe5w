import Spline from '@splinetool/react-spline'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden">
      {/* Gradient aura background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950" />
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_30%,black,transparent)]">
        <div className="absolute inset-0 bg-[conic-gradient(at_50%_20%,rgba(56,189,248,0.15),rgba(99,102,241,0.1),rgba(14,165,233,0.15),rgba(56,189,248,0.15))]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-10 pt-20 pb-24">
        <div className="lg:col-span-6 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 w-max">
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
            <span className="text-xs text-blue-100">Iridescent Identity • Verified</span>
          </div>
          <h2 className="mt-5 text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
            Machine Learning Engineer
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400">Building Intelligent, Human-Centered AI</span>
          </h2>
          <p className="mt-5 text-blue-100/80 text-lg max-w-xl">
            I design and deploy production-grade ML systems with a focus on user experience. From generative AI to real-time inference, I craft delightful, explainable interfaces around powerful models.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#work" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 px-5 py-3 text-white font-semibold shadow-[0_10px_30px_rgba(56,189,248,0.35)] hover:shadow-[0_12px_40px_rgba(56,189,248,0.45)] transition-shadow">
              View Work
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/5 border border-white/10 px-5 py-3 text-blue-100 hover:bg-white/10 transition-colors">
              Get in touch
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 relative h-[520px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/10 bg-white/5">
          <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          {/* soft glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  )
}

export default Hero
