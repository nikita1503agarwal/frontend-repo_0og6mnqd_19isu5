import { motion } from 'framer-motion'

const projects = [
  {
    title: 'SaaS Dashboard',
    description: 'Analytics-first dashboard with charts, auth and role-based access.',
    tags: ['React', 'Tailwind', 'API'],
    image: 'https://images.unsplash.com/photo-1651760464181-49092525ca3b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTYWFTJTIwRGFzaGJvYXJkfGVufDB8MHx8fDE3NjMyMTQ3MTJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'E‑commerce Store',
    description: 'Headless storefront with cart, checkout, and CMS integration.',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxFJUUyJTgwJTkxY29tbWVyY2UlMjBTdG9yZXxlbnwwfDB8fHwxNzYzMjE0NzEyfDA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
    link: '#'
  },
  {
    title: 'AI Landing Page',
    description: 'Conversion-focused marketing page with 3D hero and animations.',
    tags: ['Vite', 'Spline', 'Framer'],
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop',
    link: '#'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Projects</h2>
            <p className="text-gray-600 mt-1">A selection of work that highlights craft and problem‑solving.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-4 py-2 hover:bg-black">Work together</a>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.title}
              href={p.link}
              className="group rounded-2xl overflow-hidden ring-1 ring-gray-200/70 bg-white hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: idx * 0.06 }}
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.image} alt="" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 mb-2">
                  {p.tags.map(t => (
                    <span key={t} className="text-[10px] font-medium px-2 py-1 rounded-full bg-gray-100 text-gray-700 ring-1 ring-gray-200">{t}</span>
                  ))}
                </div>
                <h3 className="font-semibold text-gray-900">{p.title}</h3>
                <p className="text-sm text-gray-600 mt-1">{p.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
