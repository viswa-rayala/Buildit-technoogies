"use client";

import { useState } from "react";

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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Candidate Data Submitted:", formData);

    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
{/* Navbar */}
<nav className="bg-white shadow-sm border-b border-slate-100 sticky top-0 z-50">
  <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
    
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt="Build IT Technologies"
        className="h-14 w-auto object-contain"
      />
    </div>

    {/* Apply Button */}
    <a
      href="#apply"
      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold text-sm transition shadow-sm"
    >
      Apply Now
    </a>
  </div>
</nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
            Remote Industry Internships 2026
          </span>

          <h1 className="text-4xl md:text-5xl font-black mt-4 tracking-tight leading-tight">
            Build Real Tech Products.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              Launch Your Engineering Career.
            </span>
          </h1>

          <p className="text-slate-400 mt-4 text-base md:text-lg max-w-xl mx-auto">
            Join Buildit Technologies' elite cohort. Gain hands-on
            experience with production-grade tech stacks,
            mentorship, and industry certification.
          </p>

          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4 md:gap-6 text-sm text-slate-300">
            <div>
              🚀{" "}
              <span className="font-semibold text-white">
                4-8 Weeks
              </span>{" "}
              Remote
            </div>

            <div>
              💼{" "}
              <span className="font-semibold text-white">
                Stipend Available
              </span>{" "}
              (Performance-based)
            </div>

            <div>
              📜{" "}
              <span className="font-semibold text-white">
                Letter of Rec
              </span>{" "}
              & Certificate
            </div>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        {/* Tracks */}
        <section>
          <h2 className="text-2xl font-bold text-center text-slate-800 mb-2">
            Select Your Technology Domain
          </h2>

          <p className="text-center text-slate-500 mb-12 text-sm max-w-md mx-auto">
            Choose an exclusive track tailored to match modern
            software industry demands.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Full-Stack Web Development",
                tech: "Next.js, Node.js, MongoDB",
                icon: "🌐",
              },
              {
                title: "Python & Data Science",
                tech: "Python, NumPy, Pandas, Scikit-Learn",
                icon: "🐍",
              },
              {
                title: "Cloud Architecture & DevOps",
                tech: "AWS, Docker, CI/CD Pipelines",
                icon: "☁️",
              },
            ].map((track, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition"
              >
                <div className="text-3xl mb-3">{track.icon}</div>

                <h3 className="font-bold text-lg text-slate-800">
                  {track.title}
                </h3>

                <p className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded mt-2 inline-block">
                  {track.tech}
                </p>

                <ul className="text-xs text-slate-500 mt-4 space-y-2">
                  <li>• Build 2+ live capstone projects</li>
                  <li>• Code review sessions with tech leads</li>
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Form Section */}
        <section
          id="apply"
          className="mt-20 max-w-2xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-slate-900 text-white p-6">
            <h2 className="text-xl font-bold">
              Internship Screening Application
            </h2>

            <p className="text-xs text-slate-400 mt-1">
              Please fill out the details carefully.
              Incomplete applications will be auto-rejected.
            </p>
          </div>

          {submitted ? (
            <div className="p-12 text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-2xl mb-4">
                ✓
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                Application Received!
              </h3>

              <p className="text-sm text-slate-500 mt-2">
                The Buildit Technologies review team will evaluate
                your profile. Shortlisted candidates will receive
                an online coding assessment via email within
                3 working days.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="p-6 space-y-5 text-sm"
            >
              {/* Name + Email */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Email Address *
                  </label>

                  <input
                    type="email"
                    required
                    placeholder="john@example.com"
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Phone + College */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Contact Number *
                  </label>

                  <input
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    College/University Name *
                  </label>

                  <input
                    type="text"
                    required
                    placeholder="IIT, NIT, ABC University"
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        college: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Graduation + Domain */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Year of Graduation *
                  </label>

                  <select
                    required
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        graduationYear: e.target.value,
                      })
                    }
                  >
                    <option value="">Select Year</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="Post-Grad / Other">
                      Post-Grad / Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-medium text-slate-700 mb-1">
                    Target Internship Domain *
                  </label>

                  <select
                    className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none bg-white"
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        domain: e.target.value,
                      })
                    }
                  >
                    <option value="web-dev">
                      Full-Stack Web Development
                    </option>

                    <option value="python">
                      Python & Data Science
                    </option>

                    <option value="devops">
                      Cloud Architecture & DevOps
                    </option>
                  </select>
                </div>
              </div>

              <hr className="border-slate-100 my-2" />

              {/* GitHub */}
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  GitHub / Portfolio Link
                </label>

                <input
                  type="url"
                  placeholder="https://github.com/yourusername"
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      github: e.target.value,
                    })
                  }
                />
              </div>

              {/* Coding Experience */}
              <div>
                <label className="block font-medium text-slate-700 mb-2">
                  Current Coding Experience Level *
                </label>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    {
                      val: "beginner",
                      label: "Beginner",
                      desc: "No projects yet",
                    },
                    {
                      val: "intermediate",
                      label: "Intermediate",
                      desc: "Built minor apps",
                    },
                    {
                      val: "advanced",
                      label: "Advanced",
                      desc: "Comfortable with API/Git",
                    },
                  ].map((exp) => (
                    <button
                      type="button"
                      key={exp.val}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          codingExperience: exp.val,
                        })
                      }
                      className={`border rounded-xl p-4 transition text-left ${
                        formData.codingExperience === exp.val
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <h4
                        className={`font-semibold ${
                          formData.codingExperience === exp.val
                            ? "text-blue-700"
                            : "text-slate-800"
                        }`}
                      >
                        {exp.label}
                      </h4>

                      <p className="text-xs text-slate-500 mt-1">
                        {exp.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block font-medium text-slate-700 mb-1">
                  Why do you want to intern at Buildit
                  Technologies? *
                </label>

                <textarea
                  required
                  rows="3"
                  placeholder="Explain how this internship aligns with your technical career goals..."
                  className="w-full border border-slate-300 rounded-md p-2 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      motivation: e.target.value,
                    })
                  }
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-md transition shadow-md mt-4"
              >
                Submit Engineering Application
              </button>
            </form>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs text-center mt-20">
        <p>
          © 2026 Buildit Technologies Pvt. Ltd.
          All Rights Reserved.
        </p>

        <p className="mt-1 text-slate-600">
          Contact: career@buildittechnologies.com |
          Pune, India
        </p>
      </footer>
    </div>
  );
}