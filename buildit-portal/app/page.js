"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, Code2, Database, Rocket, Laptop, Blocks } from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    graduationYear: "",
    domain: "web-dev",
    github: "",
    codingExperience: "beginner",
    motivation: "",
  });

  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Submission failed. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg("Network error. Could not connect to the server.");
    }
  };

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
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-blue-500/30 overflow-hidden relative">
      
      {/* Background Decorative Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[50%] rounded-full bg-purple-600/20 blur-[120px] pointer-events-none" />

      {/* Navbar */}
      <motion.nav 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/60 border-b border-white/5"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Code2 className="w-8 h-8 text-blue-500" />
            <span className="font-bold tracking-tight text-xl text-white">
              BuildIT<span className="text-blue-500">.</span>
            </span>
          </div>
          <a
            href="#apply"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-medium text-white transition-all duration-200 bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-600 focus:ring-offset-slate-900 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
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
          Build Real Tech Products.<br />
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
          Join our elite cohort. Gain hands-on experience with production-grade tech stacks,
          mentorship, and industry certification.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl"
        >
          {[
            { icon: <Rocket className="w-5 h-5 text-purple-400" />, title: "4-8 Weeks", subtitle: "Fully Remote" },
            { title: "Stipend", subtitle: "Performance-based", icon: <span className="text-emerald-400 font-bold text-lg">₹</span> },
            { icon: <CheckCircle2 className="w-5 h-5 text-blue-400" />, title: "Certification", subtitle: "& LOR Available" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center p-4 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
              <div className="p-3 bg-white/5 rounded-xl mb-3 shadow-inner">
                {item.icon}
              </div>
              <h3 className="font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.subtitle}</p>
            </div>
          ))}
        </motion.div>
      </main>

      {/* Tracks Section */}
      <section className="relative w-full py-24 bg-slate-950/50 border-y border-white/5 overflow-hidden">
        {/* subtle noise texture can go here or skip for now */}
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
              Choose an exclusive track tailored to match modern software industry demands.
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
                <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
                <div className="inline-block px-3 py-1 rounded-md bg-slate-900/50 border border-white/10 text-xs font-mono text-slate-300 mb-6">
                  {track.tech}
                </div>
                <ul className="space-y-3 text-sm text-slate-400">
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-slate-500" /> Build 2+ live capstone projects</li>
                  <li className="flex items-center"><CheckCircle2 className="w-4 h-4 mr-2 text-slate-500" /> Code review sessions with leads</li>
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="relative py-32">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div 
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
            className="p-1 rounded-3xl bg-gradient-to-b from-white/10 to-transparent p-[1px]"
          >
            <div className="bg-slate-950 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500" />
              
              <div className="px-8 pt-12 pb-8 border-b border-white/5 text-center">
                <h2 className="text-3xl font-bold text-white mb-3">Internship Application</h2>
                <p className="text-slate-400 text-sm">Please fill out the details carefully. Incomplete applications will be rejected.</p>
              </div>

              <div className="p-8 md:p-12">
                {status === "success" ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                    <p className="text-slate-400 max-w-md mx-auto">
                      Our review team will evaluate your profile. Shortlisted candidates will receive an assessment link via email within 3 working days.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    
                    {status === "error" && (
                       <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-start">
                         <div className="mt-0.5 w-2 h-2 bg-red-400 rounded-full mr-3 animate-pulse shrink-0" />
                         <span>{errorMsg}</span>
                       </div>
                    )}

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Full Name *</label>
                        <input
                          type="text" required
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Email Address *</label>
                        <input
                          type="email" required
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="john@example.com"
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Contact Number *</label>
                        <input
                          type="tel" required
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="+91 XXXXX XXXXX"
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">College / University *</label>
                        <input
                          type="text" required
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          placeholder="NIT, IIT, XYZ Univ"
                          onChange={(e) => setFormData({ ...formData, college: e.target.value })}
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Graduation Year *</label>
                        <select
                          required
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                          onChange={(e) => setFormData({ ...formData, graduationYear: e.target.value })}
                        >
                          <option value="">Select Year</option>
                          <option value="2026">2026</option>
                          <option value="2027">2027</option>
                          <option value="2028">2028</option>
                          <option value="Post-Grad / Other">Post-Grad / Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-300">Target Domain *</label>
                        <select
                          className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                          onChange={(e) => setFormData({ ...formData, domain: e.target.value })}
                        >
                          <option value="web-dev">Full-Stack Web Development</option>
                          <option value="python">Python & Data Science</option>
                          <option value="devops">Cloud Architecture & DevOps</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">GitHub / Portfolio Link</label>
                      <input
                        type="url"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://github.com/..."
                        onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                      />
                    </div>

                    <div className="space-y-4">
                      <label className="text-sm font-medium text-slate-300">Coding Experience Level *</label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { id: "beginner", title: "Beginner", desc: "No major projects yet" },
                          { id: "intermediate", title: "Intermediate", desc: "Built minor apps" },
                          { id: "advanced", title: "Advanced", desc: "API, Git, Full-Stack" }
                        ].map(exp => (
                          <div 
                            key={exp.id}
                            onClick={() => setFormData({ ...formData, codingExperience: exp.id })}
                            className={`cursor-pointer border rounded-2xl p-5 transition-all duration-200 ${
                              formData.codingExperience === exp.id 
                              ? "bg-blue-500/10 border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.15)]" 
                              : "bg-slate-900/50 border-slate-800 hover:border-slate-700"
                            }`}
                          >
                            <h4 className={`font-semibold mb-1 ${formData.codingExperience === exp.id ? "text-blue-400" : "text-white"}`}>{exp.title}</h4>
                            <p className="text-xs text-slate-400">{exp.desc}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-medium text-slate-300">Motivation *</label>
                      <textarea
                        required rows="4"
                        className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        placeholder="Why do you want to intern with us?"
                        onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full relative group overflow-hidden rounded-xl bg-blue-600 text-white font-bold py-4 transition-all duration-300 hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-[0_0_20px_rgba(37,99,235,0.2)] hover:shadow-[0_0_40px_rgba(37,99,235,0.4)]"
                    >
                      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-20 transition-opacity" />
                      {status === "submitting" ? (
                        <span className="flex items-center justify-center">
                           <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        "Submit Engineering Application"
                      )}
                    </button>

                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-white/5 text-center px-6">
        <p className="text-slate-500 text-sm">© 2026 Buildit Technologies Pvt. Ltd. All Rights Reserved.</p>
      </footer>
    </div>
  );
}