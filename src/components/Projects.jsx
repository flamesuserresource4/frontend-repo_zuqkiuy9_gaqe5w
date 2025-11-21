import { ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Realtime Agentic Chat UX',
    desc: 'Streaming tokens, tool-use, and memory with a silky smooth UI.',
    tags: ['React', 'WebSockets', 'OpenAI Realtime'],
    link: '#',
    repo: '#'
  },
  {
    title: 'RAG for Enterprise Docs',
    desc: 'Hybrid search + re-ranking with guardrails and feedback loops.',
    tags: ['Python', 'LangChain', 'PGVector'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Explainable Vision System',
    desc: 'Grad-CAM overlays and uncertainty visualizations for QA lines.',
    tags: ['PyTorch', 'FastAPI', 'Triton'],
    link: '#',
    repo: '#'
  }
]

function Projects() {
  return (
    <section id="work" className="relative py-20">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-white text-2xl font-semibold">Selected Work</h3>
          <a href="#" className="text-cyan-400 hover:underline">View all</a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
              <div className="aspect-[16/10] bg-gradient-to-br from-slate-800 to-slate-900" />
              <div className="p-6">
                <h4 className="text-white font-semibold mb-1">{p.title}</h4>
                <p className="text-blue-100/80 text-sm mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-blue-100/80">{t}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-blue-200/80">
                  <a href={p.link} className="inline-flex items-center gap-1 hover:text-white"><ExternalLink className="h-4 w-4" /> Live</a>
                  <a href={p.repo} className="inline-flex items-center gap-1 hover:text-white"><Github className="h-4 w-4" /> Code</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
