export default function Contact() {
  return (
    <section id="contact" className="relative py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Let’s work together</h2>
          <p className="mt-3 text-gray-600 max-w-2xl">Have a project in mind or just want to say hi? I’m always open to new opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <form className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <input className="w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Name" type="text" required />
              <input className="w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Email" type="email" required />
              <textarea className="w-full rounded-md border border-black/10 px-4 py-3 outline-none focus:ring-2 focus:ring-gray-900" placeholder="Message" rows={5} required />
            </div>
            <button type="submit" className="mt-4 inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow hover:shadow-md transition">
              Send Message
            </button>
          </form>

          <div className="rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="space-y-4 text-gray-700">
              <p><span className="font-semibold text-gray-900">Email:</span> raihan@example.com</p>
              <p><span className="font-semibold text-gray-900">Location:</span> Indonesia</p>
              <p><span className="font-semibold text-gray-900">Available for:</span> Freelance & Full-time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
