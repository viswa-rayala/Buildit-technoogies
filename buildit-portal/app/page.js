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
      title: "Python & Data Science",
      tech: "Python, NumPy, Pandas, Scikit-Learn",
      icon: <Database className="w-8 h-8 text-emerald-400" />,
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "Cloud Architecture & DevOps",
      tech: "AWS, Docker, CI/CD Pipelines",
      icon: <Blocks className="w-8 h-8 text-purple-400" />,
      color: "from-purple-500/20 to-fuchsia-500/10",
      border: "border-purple-500/20",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans overflow-hidden relative">

      {/* Background Blobs */}
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

          {/* Logo */}
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

          {/* Apply Button */}
          <a
            href="https://forms.gle/1eAAW2q8vdYAhUDXA"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
          >
            Apply Now
            <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <main className="relative max-w-7xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-blue-300 mb-8 backdrop-blur-md"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>

          Remote Industry Internships 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
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
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed"
        >
          Join our elite cohort. Gain hands-on experience with production-grade
          tech stacks, mentorship, and industry certification.
        </motion.p>

        {/* Hero Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"
        >
          {[
            {
              icon: <Rocket className="w-5 h-5 text-purple-400" />,
              title: "4-8 Weeks",
              subtitle: "Fully Remote",
            },
            {
              title: "Stipend",
              subtitle: "Performance-based",
              icon: <span className="text-emerald-400 font-bold text-lg">₹</span>,
            },
            {
              icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />,
              title: "Certification",
              subtitle: "& LOR Available",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm"
            >
              <div className="p-3 bg-white/5 rounded-xl mb-3 shadow-inner">
                {item.icon}
              </div>

              <h3 className="font-semibold text-white">{item.title}</h3>

              <p className="text-sm text-slate-400">{item.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Domains */}
      <section className="relative w-full py-24 bg-slate-950/50 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-4"
            >
              Select Your Domain
            </motion.h2>

            <p className="text-slate-400 max-w-xl mx-auto text-lg">
              Choose an exclusive track tailored to match modern software
              industry demands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tracks.map((track, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`relative group p-8 rounded-3xl bg-gradient-to-b ${track.color} border ${track.border} hover:border-white/20 transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="absolute inset-0 bg-slate-950/80 rounded-3xl -z-10" />

                <div className="mb-6 inline-flex p-4 rounded-2xl bg-white/5 border border-white/10">
                  {track.icon}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                  {track.title}
                </h3>

                <div className="inline-block px-3 py-1 rounded-md bg-slate-900/50 border border-white/10 text-xs font-mono text-slate-300 mb-6">
                  {track.tech}
                </div>

                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-slate-500" />
                    Build 2+ live capstone projects
                  </li>

                  <li className="flex items-center">
                    <CheckCircle2 className="w-4 h-4 mr-2 text-slate-500" />
                    Code review sessions with leads
                  </li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] backdrop-blur-xl p-12 md:p-20"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-blue-500/10 pointer-events-none" />

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
                Shortlisted candidates will receive further communication via
                email.
              </p>

              <a
                href="https://forms.gle/1eAAW2q8vdYAhUDXA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-lg transition-all duration-300 shadow-[0_0_40px_rgba(37,99,235,0.25)] hover:shadow-[0_0_60px_rgba(37,99,235,0.45)]"
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