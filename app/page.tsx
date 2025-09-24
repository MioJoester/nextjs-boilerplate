import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[48px] row-start-2 items-center sm:items-start max-w-3xl w-full">

        {/* Logo */}
        <Image
          className="dark:invert self-center sm:self-start"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        {/* Hero Section */}
        <section className="text-center sm:text-left space-y-4">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Welcome to Your Next.js App
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            Build fast, modern, and accessible web apps with Next.js and Tailwind CSS.
          </p>
          <div className="flex gap-4 justify-center sm:justify-start">
            <a
              href="#features"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Explore Features
            </a>
            <a
              href="#contact"
              className="border border-gray-300 dark:border-gray-600 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full space-y-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Fast Rendering</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Leverage the power of server-side rendering and static site generation.
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Built-in Routing</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Navigate pages easily using the built-in file-based router.
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Tailwind CSS</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Style rapidly using utility-first CSS classes with full responsiveness.
              </p>
            </div>
            <div className="p-4 border rounded-md dark:border-gray-700">
              <h3 className="font-semibold mb-1 text-gray-900 dark:text-white">Deploy to Vercel</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Deploy instantly with seamless GitHub integration and CI/CD.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="w-full space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Contact Us
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded dark:border-gray-700 dark:bg-black dark:text-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded dark:border-gray-700 dark:bg-black dark:text-white"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full px-4 py-2 border rounded dark:border-gray-700 dark:bg-black dark:text-white"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
