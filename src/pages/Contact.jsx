export default function Contact() {
  return (
    <section className="flex-1 flex items-center justify-center py-10">
      <div className="max-w-md w-full px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">Contact</h2>
        <form
          action="mailto:nbasri4@gmail.com"
          method="POST"
          encType="text/plain"
          className="space-y-6"
        >
          <label htmlFor="name" className="sr-only">Name</label>
          <input
            id="name"
            type="text"
            name="Name"
            placeholder="Your name"
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="email" className="sr-only">Email</label>
          <input
            id="email"
            type="email"
            name="Email"
            placeholder="Your email"
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <label htmlFor="message" className="sr-only">Message</label>
          <textarea
            id="message"
            name="Message"
            placeholder="Your message"
            className="w-full p-3 border rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={5}
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
}