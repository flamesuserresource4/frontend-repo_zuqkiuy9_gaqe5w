import { motion } from 'framer-motion'
import { BadgeCheck, Calendar, MapPin, Sparkles } from 'lucide-react'

function Stat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="text-blue-100/80 text-sm mt-1">{label}</p>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative py-20">
      {/* soft background accents */}
      <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_20%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_60%_at_80%_0%,rgba(129,140,248,0.12),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
        {/* Intro card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="lg:col-span-5 rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
              <Sparkles className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-white text-xl font-semibold">About</h3>
          </div>
          <p className="text-blue-100/80 leading-relaxed">
            I’m a machine learning engineer focused on designing human-centered AI systems. My craft blends
            rigorous modeling with product sense: fast feedback loops, measurable impact, and delightful interfaces.
            I’ve shipped models to production, built data pipelines, and led experiments that move metrics.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-3">
            <Stat value="6+" label="Years in AI" />
            <Stat value="25+" label="Models shipped" />
            <Stat value="10x" label="Latency gains" />
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-blue-100/80 text-sm">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
              <BadgeCheck className="h-4 w-4 text-cyan-400" /> Production-first
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
              <Calendar className="h-4 w-4 text-indigo-400" /> Rapid iteration
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1">
              <MapPin className="h-4 w-4 text-blue-400" /> Remote-friendly
            </span>
          </div>
        </motion.div>

        {/* Experience / Focus areas */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-4"
        >
          {[
            {
              title: 'Generative AI & Agents',
              body:
                'LLMs, multimodal models, RAG, and tool-using agents. Focused on controllability, safety, and evaluation at scale.'
            },
            {
              title: 'MLOps & Systems',
              body:
                'From experiment tracking to CI/CD, containers, feature stores, and serving on GPU/CPU with observability.'
            },
            {
              title: 'Product + UX for AI',
              body:
                'Designing explainable interactions, realtime feedback, and trustworthy interfaces that users love.'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 md:p-6">
              <h4 className="text-white font-semibold mb-1">{item.title}</h4>
              <p className="text-blue-100/80 text-sm">{item.body}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
