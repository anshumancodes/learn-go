"use client"
import { VideoIcon } from "lucide-react"

export default function ResourcesPage() {
  const youtubeVideos = [
    {
      num: 1,
      title: "Fastest and best way to master Go backend development",
      url: "https://youtu.be/inOiIpDHB-o",
      published: "Dec 10, 2024",
    },
    {
      num: 2,
      title: "Why and how to learn backend engineering with Go?",
      url: "https://youtu.be/QTmck00dDoU",
      published: "Dec 12, 2024",
    },
    {
      num: 3,
      title: "Build a Production-grade Boilerplate in Go from Scratch",
      url: "https://youtu.be/E4CSP_KixPM",
      published: "Jul 28, 2025",
    },
    {
      num: 4,
      title: "The LAST Go basics video you will ever watch",
      url: "https://youtu.be/tgGNwG_UxFo",
      published: "Dec 30, 2024",
    },
    {
      num: 5,
      title:
        "Part-2: Task Management App in Go (Repositories, Services, Handlers and OpenAPI contract)",
      url: "https://youtu.be/KVEth4MlMLM",
      published: "Aug 9, 2025",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="border-b border-zinc-800 sticky top-0 z-20 bg-zinc-950/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-0.5">
            30-Day Go + AI Tracker
          </p>
          <h1 className="text-sm font-semibold text-zinc-100">Resources</h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-10 space-y-12">

        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              01
            </span>
            <h2 className="text-sm font-semibold text-zinc-100">
              YouTube · Go Backend Development
            </h2>
          </div>
          <div className="rounded-xl border border-zinc-800 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60">
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium w-8">
                    #
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Title
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium whitespace-nowrap">
                    Published
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                {youtubeVideos.map((v, i) => (
                  <tr
                    key={v.num}
                    className={`border-b border-zinc-800/50 last:border-0 hover:bg-zinc-800/30 transition-colors ${
                      i % 2 === 0 ? "bg-transparent" : "bg-zinc-900/20"
                    }`}
                  >
                    <td className="px-4 py-3 text-zinc-600 font-mono tabular-nums">
                      {String(v.num).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-3 text-zinc-300 leading-relaxed">
                      {v.title}
                    </td>
                    <td className="px-4 py-3 text-zinc-500 whitespace-nowrap">
                      {v.published}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={v.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors group"
                      >
                        <VideoIcon />
                        <span className="font-mono text-[10px] group-hover:underline underline-offset-2">
                          Watch
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

       
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              02
            </span>
            <h2 className="text-sm font-semibold text-zinc-100">
              Applied AI · Course
            </h2>
          </div>
          <div className="rounded-xl border border-zinc-800 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60">
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Platform
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Course
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Link
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-4 py-3 text-zinc-300">100xDevs</td>
                  <td className="px-4 py-3 text-zinc-300">
                    Applied AI — Full Course
                  </td>
                  <td className="px-4 py-3">
                    <a
                      href="https://100xdevs.com/new-courses/23/content?activeTab=Content"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors group"
                    >
                      <svg
                        className="w-3 h-3 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span className="font-mono text-[10px] group-hover:underline underline-offset-2">
                        Open Course
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ── PDF Book ────────────────────────────────────────────── */}
        <section>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
              03
            </span>
            <h2 className="text-sm font-semibold text-zinc-100">
              Book · PDF
            </h2>
          </div>
          <div className="rounded-xl border border-zinc-800 overflow-hidden">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b border-zinc-800 bg-zinc-900/60">
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Title
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Author
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    Edition
                  </th>
                  <th className="text-left px-4 py-3 text-zinc-500 font-medium">
                    File
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-zinc-800/30 transition-colors">
                  <td className="px-4 py-3 text-zinc-300 leading-relaxed">
                    Learning Go: An Idiomatic Approach to Real-world Go
                    Programming
                  </td>
                  <td className="px-4 py-3 text-zinc-300">Jon Bodner</td>
                  <td className="px-4 py-3 text-zinc-500">2nd Edition</td>
                  <td className="px-4 py-3">
                    <a
                      href="/Learning Go An Idiomatic Approach to Real-world Go Programming, 2nd Edition (Jon Bodner) (Z-Library).pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors group"
                    >
                      <svg
                        className="w-3 h-3 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      <span className="font-mono text-[10px] group-hover:underline underline-offset-2">
                        Open PDF
                      </span>
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

      </main>
    </div>
  );
}
