export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">About Me</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          I craft clean, accessible web applications with a focus on performance and user experience. I enjoy working across the stack, turning complex ideas into simple, elegant interfaces.
        </p>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-left">
          <Feature title="Performance" desc="Lighthouse-focused builds with caching and code-splitting." />
          <Feature title="Accessibility" desc="Semantics, contrast, and keyboard navigation by default." />
          <Feature title="Animations" desc="Tasteful motion that guides attention and feels alive." />
        </div>
      </div>
    </section>
  )
}

function Feature({ title, desc }) {
  return (
    <div className="p-5 rounded-xl ring-1 ring-gray-200 bg-white">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{desc}</p>
    </div>
  )
}
