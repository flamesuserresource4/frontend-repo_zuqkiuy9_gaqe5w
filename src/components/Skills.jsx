import { Brain, Boxes, Cpu, Database, LineChart, Sparkles } from 'lucide-react'

const skills = [
  { icon: Brain, title: 'Generative AI', items: ['LLMs (OpenAI, Llama)', 'RAG Systems', 'Prompt/Chain Engineering'] },
  { icon: Cpu, title: 'ML Engineering', items: ['Training & Fine-tuning', 'MLOps (Docker, CI/CD)', 'Vector DBs'] },
  { icon: Database, title: 'Data Systems', items: ['Pipelines', 'Feature Stores', 'Lakehouse & Warehousing'] },
  { icon: Boxes, title: 'Product & UX', items: ['A/B + Telemetry', 'Explainability', 'Design Systems'] },
  { icon: LineChart, title: 'Analytics', items: ['Experimentation', 'Dashboards', 'Observability'] },
]

function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_0%,black,transparent)]">
        <div className="absolute inset-0 bg-[radial-gradient(40%_60%_at_30%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(40%_60%_at_70%_0%,rgba(99,102,241,0.15),transparent)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Sparkles className="h-5 w-5 text-cyan-400" />
          <h3 className="text-white text-2xl font-semibold">Signature Skills</h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(({ icon: Icon, title, items }) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center">
                  <Icon className="h-5 w-5 text-white" />
                </div>
                <h4 className="text-white font-semibold">{title}</h4>
              </div>
              <ul className="space-y-2 text-blue-100/80 text-sm">
                {items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
