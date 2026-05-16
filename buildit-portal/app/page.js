"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ChevronRight,
  Code2,
  Database,
  Rocket,
  Laptop,
  Blocks,
} from "lucide-react";

export default function Home() {
  const tracks = [
    {
      title: "Full-Stack Web Development",
      tech: "Next.js, Node.js, MongoDB",
      icon: <Laptop className="w-8 h-8 text-blue-400" />,
      color: "from-blue-500/20 to-indigo-500/10",
      border: "border-blue-500/20",
    },
    {
      title: "Frontend Development",
      tech: "React.js, Tailwind CSS, UI Systems",
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      color: "from-cyan-500/20 to-sky-500/10",
      border: "border-cyan-500/20",
    },
    {
      title: "Backend Development",
      tech: "Node.js, Express.js, APIs",
      icon: <Database className="w-8 h-8 text-orange-400" />,
      color: "from-orange-500/20 to-amber-500/10",
      border: "border-orange-500/20",
    },
    {
      title: "Python Development",
      tech: "Python, Automation, Scripting",
      icon: <Database className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-500/20 to-orange-500/10",
      border: "border-yellow-500/20",
    },
    {
      title: "Data Science & Analytics",
      tech: "Pandas, NumPy, Visualization",
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Artificial Intelligence / Machine Learning",
      tech: "TensorFlow, Scikit-Learn, AI Models",
      icon: <Rocket className="w-8 h-8 text-pink-400" />,
      color: "from-pink-500/20 to-rose-500/10",
      border: "border-pink-500/20",
    },
    {
      title: "Cloud Computing & DevOps",
      tech: "AWS, Docker, CI/CD Pipelines",
      icon: <Blocks className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-fuchsia-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Cybersecurity",
      tech: "Network Security, Ethical Hacking",
      icon: <CheckCircle2 className="w-8 h-8 text-red-400" />,
      color: "from-red-500/20 to-rose-500/10",
      border: "border-red-500/20",
    },
    {
      title: "Mobile App Development",
      tech: "Flutter, React Native, Android",
      icon: <Laptop className="w-8 h-8 text-lime-400" />,
      color: "from-lime-500/20 to-green-500/10",
      border: "border-lime-500/20",
    },
    {
      title: "UI/UX Design",
      tech: "Figma, Wireframes, Design Systems",
      icon: <Code2 className="w-8 h-8 text-violet-400" />,
      color: "from-violet-500/20 to-purple-500/10",
      border: "border-violet-500/20",
    },
    {
      title: "Embedded Systems & IoT",
      tech: "Arduino, Sensors, IoT Devices",
      icon: <Blocks className="w-8 h-8 text-teal-400" />,
      color: "from-teal-500/20 to-cyan-500/10",
      border: "border-teal-500/20",
    },
    {
      title: "Electronics & Communication Projects",
      tech: "Circuits, VLSI, Communication Systems",
      icon: <Rocket className="w-8 h-8 text-indigo-400" />,
      color: "from-indigo-500/20 to-blue-500/10",
      border: "border-indigo-500/20",
    },
    {
      title: "Software Testing & QA",
      tech: "Manual Testing, Automation Testing",
      icon: <CheckCircle2 className="w-8 h-8 text-green-400" />,
      color: "from-green-500/20 to-emerald-500/10",
      border: "border-green-500/20",
    },
    {
      title: "Blockchain Development",
      tech: "Solidity, Smart Contracts, Web3",
      icon: <Blocks className="w-8 h-8 text-amber-400" />,
      color: "from-amber-500/20 to-yellow-500/10",
      border: "border-amber-500/20",
    },
    {
      title: "Java Development",
      tech: "Java, Spring Boot, APIs",
      icon: <Code2 className="w-8 h-8 text-orange-300" />,
      color: "from-orange-400/20 to-red-400/10",
      border: "border-orange-400/20",
    },
    {
      title: "C++ Programming",
      tech: "DSA, Competitive Coding, OOP",
      icon: <Code2 className="w-8 h-8 text-blue-300" />,
      color: "from-blue-400/20 to-indigo-400/10",
      border: "border-blue-400/20",
    },
    {
      title: "Open Source Development",
      tech: "GitHub, Collaboration, OSS",
      icon: <Rocket className="w-8 h-8 text-white" />,
      color: "from-slate-500/20 to-slate-700/10",
      border: "border-slate-500/20",
    },
    {
      title: "Technical Content & Documentation",
      tech: "Docs, Blogs, Technical Writing",
      icon: <Database className="w-8 h-8 text-fuchsia-400" />,
      color: "from-fuchsia-500/20 to-pink-500/10",
      border: "border-fuchsia-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden relative">

      {/* Background */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-purple-600/20 blur-[120px]" />

      {/* Navbar */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="BuildIT Logo"
              className="w-11 h-11 object-contain"
            />

            <div className="flex flex-col leading-none">
              <span className="text-xl font-black tracking-tight text-white">
                BuildIT
              </span>

              <span className="text-xs tracking-[0.2em] uppercase text-blue-400 font-medium">
                Technologies
              </span>
            </div>
          </div>

          <a
            href="https://forms.gle/1eAAW2q8vdYAhUDXA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Apply Now
            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.nav>

      {/* Hero */}
      <main className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-300 mb-8 backdrop-blur-md"
        >
          Remote Industry Internships 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] text-white max-w-4xl"
        >
          Build Real Tech Products.
          <br />

          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            Launch Your Career.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
        >
          Join our elite cohort. Gain hands-on experience with production-grade
          tech stacks, mentorship, and industry certification.
        </motion.p>
      </main>

      {/* Domains */}
      <section className="relative w-full py-24 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Internship Domains
            </h2>

            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Choose a domain aligned with your career interests and technical goals.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative group p-8 rounded-3xl bg-gradient-to-b ${track.color} border ${track.border} hover:border-white/20 transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="absolute inset-0 bg-slate-950/80 rounded-3xl -z-10" />

                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10">
                  {track.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {track.title}
                </h3>

                <div className="inline-block px-3 py-1 rounded-md bg-slate-900/50 border border-white/10 text-xs font-mono text-slate-300">
                  {track.tech}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-12 md:p-20"
          >
            <div className="relative z-10">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-6">
                Applications Open
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                Ready to Start Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  {" "}Tech Journey?
                </span>
              </h2>

              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
                Apply through our official internship application form.
              </p>

              <a
                href="https://forms.gle/1eAAW2q8vdYAhUDXA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300"
              >
                Apply for Internship
                <ChevronRight className="w-5 h-5 ml-2" />
              </a>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center px-6">
        <p className="text-slate-500 text-sm">
          © 2026 Buildit Technologies Pvt. Ltd. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}