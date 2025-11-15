import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const data = Object.fromEntries(form)

    try {
      setStatus('Sending...')
      await new Promise(r => setTimeout(r, 800))
      setStatus('Thanks! I will get back to you shortly.')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('Something went wrong. Please try again.')
    }
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 text-center">Contact</h2>
        <p className="text-gray-600 mt-2 text-center">Tell me about your project. Ill reply within 1	6 hours.</p>

        <form onSubmit={onSubmit} className="mt-8 grid gap-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Subject</label>
            <input name="subject" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" rows="5" required className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" />
          </div>
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm text-gray-600">I respect your privacy. No spam, ever.</p>
            <button type="submit" className="inline-flex items-center rounded-full bg-gray-900 text-white text-sm px-5 py-3 hover:bg-black">Send</button>
          </div>
          {status && <p className="text-sm text-green-700 bg-green-50 border border-green-200 rounded-md p-3">{status}</p>}
        </form>
      </div>
    </section>
  )
}
