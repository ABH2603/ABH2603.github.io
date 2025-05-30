"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub, FaEnvelope, FaBriefcase, FaCode, FaStar, FaLightbulb } from "react-icons/fa";

const sections = [
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "interests", label: "Interests" },
];

const heroVariants = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const sectionVariants = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const projects = [
  {
    title: "Bidsquare AI Auto Cataloging",
    year: "May 2024 – Mar 2025",
    desc: (
      <>
        At Bidsquare, I led the development of AI Auto Cataloging. This first-of-its-kind tool leverages Google Gemini AI to automate the cataloging of auction items based on images and descriptions, streamlining the workflow for millions of items. The AI generates detailed item titles, descriptions, conditions, and categories, dramatically reducing manual input and increasing efficiency for auction houses. <br /><br />
        <span className="block italic text-blue-700 dark:text-blue-300 border-l-4 border-blue-400 pl-4 my-2">“Bidsquare, a trailblazer in auction technology, is redefining the auction industry with the launch of Bidsquare AI Auto Cataloging, a game-changing part of the company's all-in-one inventory and auction management software Bidsquare Cloud. This first-of-its-kind AI simplifies one of the most labor-intensive aspects of auction management – cataloging – by enabling auction houses to expedite the cataloging process with greater efficiency and accuracy.”</span>
        <a href="https://artdaily.com/news/177137/Bidsquare-launches-groundbreaking-AI-Auto-Cataloging-to-transform-the-auction-industry" target="_blank" rel="noopener noreferrer" className="inline-block mt-2 px-3 py-1 bg-blue-600 text-white rounded font-semibold hover:bg-blue-700 transition">Read more</a>
      </>
    ),
  },
  {
    title: "Android Malware Classification Project",
    year: "Apr 2024 – May 2024",
    desc:
      "Worked with a team to analyze and classify Android malware using the UNB AndMal2020 dataset, which includes about 400,000 instances and 9,500 features. Engineered and fine-tuned a multi-class classifier to enhance the model's ability to differentiate between malware types and detect benign vs. malicious applications. Implemented advanced data preprocessing and dimensionality reduction strategies, such as PCA, to mitigate overfitting and optimize algorithm performance. Developed and evaluated models using logistic regression, Random Forest, and XGBoost, integrating SMOTE to address severe class imbalances.",
  },
  {
    title: "PowerNotes Mobile App",
    year: "Sep 2023 – Dec 2023",
    desc:
      "Developed a seamless, native user experience for Android devices using React Native. Implemented robust backend solutions with Node.js and Ruby to efficiently manage data transactions and server-side logic, ensuring smooth and reliable app performance.",
  },
];

export default function Home() {
  const sectionRefs = useRef(sections.map(() => null));

  return (
    <main className="relative min-h-screen font-sans bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] dark:from-[#181e29] dark:via-[#232a36] dark:to-[#2d3748]">
      {/* Vertical Nav */}
      <nav className="hidden md:flex flex-col fixed left-6 top-1/2 -translate-y-1/2 z-50 gap-4">
        {sections.map((s, i) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-700/70 hover:bg-blue-600/80 text-white shadow-lg transition-all border-2 border-slate-500/40"
            aria-label={s.label}
          >
            <span className="sr-only">{s.label}</span>
            <span className="font-bold text-lg">{i + 1}</span>
          </a>
        ))}
      </nav>

      {/* Hero Section - Centered with Animated Wavy SVG Background */}
      <section className="relative flex flex-col items-center justify-center min-h-[80vh] w-full overflow-hidden text-center select-none" id="home">
        {/* Animated Wavy SVG Background */}
        <motion.svg
          className="absolute inset-0 w-full h-full z-0"
          viewBox="0 0 1440 600"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M0,400 Q360,300 720,400 T1440,400 V600 H0 Z"
            fill="#3b82f6"
            initial={{ pathLength: 0.9 }}
            animate={{
              d: [
                "M0,400 Q360,300 720,400 T1440,400 V600 H0 Z",
                "M0,420 Q360,340 720,420 T1440,420 V600 H0 Z",
                "M0,400 Q360,300 720,400 T1440,400 V600 H0 Z"
              ]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ opacity: 0.18 }}
          />
          <motion.path
            d="M0,350 Q360,250 720,350 T1440,350 V600 H0 Z"
            fill="#2563eb"
            initial={{ pathLength: 0.9 }}
            animate={{
              d: [
                "M0,350 Q360,250 720,350 T1440,350 V600 H0 Z",
                "M0,370 Q360,270 720,370 T1440,370 V600 H0 Z",
                "M0,350 Q360,250 720,350 T1440,350 V600 H0 Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            style={{ opacity: 0.22 }}
          />
          <motion.path
            d="M0,300 Q360,200 720,300 T1440,300 V600 H0 Z"
            fill="#0ea5e9"
            initial={{ pathLength: 0.9 }}
            animate={{
              d: [
                "M0,300 Q360,200 720,300 T1440,300 V600 H0 Z",
                "M0,320 Q360,220 720,320 T1440,320 V600 H0 Z",
                "M0,300 Q360,200 720,300 T1440,300 V600 H0 Z"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            style={{ opacity: 0.25 }}
          />
        </motion.svg>
        {/* Main Content */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center py-16 px-4 md:px-12 lg:px-24 w-full max-w-7xl mx-auto"
          variants={heroVariants}
          initial="initial"
          animate="animate"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="w-72 h-72 mb-10 rounded-3xl overflow-hidden border-4 border-blue-300 shadow-2xl bg-white relative"
          >
            <Image src="/profile-placeholder.png" alt="Profile" fill style={{ objectFit: 'cover' }} />
          </motion.div>
          <div className="bg-white/80 dark:bg-slate-900/80 rounded-2xl px-8 py-6 shadow-xl backdrop-blur-md">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-2 tracking-tight drop-shadow-xl text-slate-900 dark:text-white">Alan Hong</h1>
            <div className="text-lg mb-4 text-blue-700 dark:text-blue-300">Artificial Intelligence | Software Engineering</div>
            <a href="/FinalResume.pdf" target="_blank" rel="noopener noreferrer" className="inline-block mb-4 px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold shadow hover:bg-blue-700 transition">Download Resume</a>
            <div className="flex gap-6 mb-4 justify-center">
              <a href="https://www.linkedin.com/in/alanhong26" aria-label="LinkedIn"><FaLinkedin className="text-blue-500 text-3xl hover:scale-125 hover:text-blue-700 transition-transform duration-200" /></a>
              <a href="https://github.com/ABH2603" aria-label="GitHub"><FaGithub className="text-blue-500 text-3xl hover:scale-125 hover:text-blue-700 transition-transform duration-200" /></a>
              <a href="mailto:alanhong@seas.upenn.edu" aria-label="Email"><FaEnvelope className="text-blue-500 text-3xl hover:scale-125 hover:text-blue-700 transition-transform duration-200" /></a>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="w-full py-12">
        <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl shadow p-8 max-w-2xl mx-auto text-center mt-12">
          <h2 className="text-3xl font-bold mb-4 text-blue-700 dark:text-blue-300">About Me</h2>
          <p className="text-lg text-slate-700 dark:text-slate-200">
            I'm an undergraduate student studying artificial intelligence at the University of Pennsylvania. I love building solutions that blend data, design, and real-world impact. Outside of tech, I enjoy DJing and playing instruments, weightlifting, swimming, and exploring unfiction.
          </p>
        </div>
      </section>

      {/* Projects Section - Card Grid */}
      <motion.section
        id="projects"
        className="relative py-24 px-4 md:px-12 lg:px-24 bg-white text-slate-900 border-t border-b border-slate-200 dark:bg-[#232a36] dark:text-white dark:border-[#232a36] w-full"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <FaCode className="text-blue-500 text-3xl" />
            <h2 className="text-4xl font-bold">Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((p, i) => (
              <motion.div
                key={p.title}
                className="bg-slate-50 rounded-2xl shadow-lg p-8 flex flex-col gap-2 border border-slate-200 hover:shadow-xl transition-shadow dark:bg-slate-900 dark:border-slate-700 w-full max-w-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <FaStar className="text-blue-400" />
                  <span className="font-semibold text-blue-700 text-lg dark:text-blue-200">{p.title}</span>
                  <span className="ml-auto text-xs text-slate-400 dark:text-slate-300">{p.year}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-200">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section - Timeline Style */}
      <motion.section
        id="experience"
        className="relative py-24 px-4 md:px-12 lg:px-24 bg-slate-100 text-slate-900 border-b border-slate-200 dark:bg-[#181e29] dark:text-white dark:border-[#181e29] w-full"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <FaBriefcase className="text-blue-500 text-3xl" />
            <h2 className="text-4xl font-bold">Experience</h2>
          </div>
          <div className="relative pl-6 border-l-4 border-blue-200 dark:border-blue-900">
            <div className="mb-10 ml-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-blue-700 dark:text-blue-200">Bidsquare</span>
                <span className="text-xs text-slate-400 ml-auto dark:text-slate-300">May 2024 – Mar 2025</span>
              </div>
              <div className="text-blue-400 mb-1 dark:text-blue-300">Junior Developer, New York City, NY</div>
              <ul className="list-disc list-inside text-slate-700 ml-4 dark:text-slate-200">
                <li>Enhanced the website's backend by integrating the Google Gemini API for autocategorization of items based on images and descriptions, streamlining the workflow for 2,000,000 auction items.</li>
                <li>Leveraged the Google Gemini API to obtain accurate shipping information, optimizing logistics and reducing manual input.</li>
                <li>Assisted in the design, development, and maintenance of web applications, ensuring responsive and user-friendly interfaces.</li>
                <li>Collaborated with senior developers to debug and troubleshoot software issues, contributing to higher code quality and system reliability.</li>
                <li>Participated in code reviews, gaining feedback and improving coding skills while contributing to the overall quality of the codebase.</li>
                <li>Assisted in database management tasks, including writing and optimizing SQL queries, managing migrations, and performing basic database administration.</li>
              </ul>
            </div>
            <div className="ml-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-blue-700 dark:text-blue-200">Engineering Summer Academy at Penn</span>
                <span className="text-xs text-slate-400 ml-auto dark:text-slate-300">July 2023</span>
              </div>
              <div className="text-blue-400 mb-1 dark:text-blue-300">Teaching Assistant / Resident Advisor, Philadelphia, PA</div>
              <ul className="list-disc list-inside text-slate-700 ml-4 dark:text-slate-200">
                <li>Used CS technical background to train 60 students in software development and data analysis, and assisted professor in instructional efforts.</li>
                <li>Led initiatives to collaborate with professors and other TAs to provide additional detailed resources and course materials such as rubrics, autograders, and datasets.</li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Skills Section - Icon Grid */}
      <motion.section
        id="skills"
        className="relative py-24 px-4 md:px-12 lg:px-24 bg-white text-slate-900 border-b border-slate-200 dark:bg-[#232a36] dark:text-white dark:border-[#232a36] w-full"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <FaStar className="text-blue-500 text-3xl" />
            <h2 className="text-4xl font-bold">Skills</h2>
          </div>
          <div className="flex flex-col gap-10 items-center">
            <div className="w-full">
              <div className="mb-4 font-semibold text-lg text-slate-900 dark:text-white text-center">Programming Languages</div>
              <div className="flex flex-wrap justify-center gap-4">
                {["Java", "Python", "PHP", "SQL", "HTML", "R", "Javascript", "OCaml", "Bash"].map(skill => (
                  <div key={skill} className="flex flex-col items-center gap-2 bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-700 min-w-[110px]">
                    <FaCode className="text-blue-400 text-2xl mb-1" />
                    <span className="font-semibold text-blue-700 dark:text-blue-200">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <div className="mb-4 font-semibold text-lg text-slate-900 dark:text-white text-center">Frameworks & Libraries</div>
              <div className="flex flex-wrap justify-center gap-4">
                {["Phalcon", "Jsoup", "JUnit", "Pandas", "SciPy", "NumPy", "PyTorch", "Scikit-learn", "Matplotlib", "Apache Spark", "Apache Kafka", "React", "Langchain.js"].map(framework => (
                  <div key={framework} className="flex flex-col items-center gap-2 bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-700 min-w-[110px]">
                    <FaStar className="text-blue-400 text-2xl mb-1" />
                    <span className="font-semibold text-blue-700 dark:text-blue-200">{framework}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full">
              <div className="mb-4 font-semibold text-lg text-slate-900 dark:text-white text-center">Tools & Technologies</div>
              <div className="flex flex-wrap justify-center gap-4">
                {["Node.js", "Yarn", "IntelliJ IDEA", "Eclipse", "VS Code", "Android Studio", "Docker", "AWS (EC2, S3, DynamoDB)", "OpenAI API", "Google Gemini API"].map(tool => (
                  <div key={tool} className="flex flex-col items-center gap-2 bg-slate-50 rounded-xl p-4 border border-slate-200 shadow-sm dark:bg-slate-900 dark:border-slate-700 min-w-[110px]">
                    <FaBriefcase className="text-blue-400 text-2xl mb-1" />
                    <span className="font-semibold text-blue-700 dark:text-blue-200">{tool}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Interests Section - Icon Row */}
      <motion.section
        id="interests"
        className="relative py-24 px-4 md:px-12 lg:px-24 bg-slate-100 text-slate-900 border-b border-slate-200 dark:bg-[#181e29] dark:text-white dark:border-[#181e29] w-full"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-10">
            <FaLightbulb className="text-blue-500 text-3xl" />
            <h2 className="text-4xl font-bold">Interests</h2>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            {["DJing & Instruments", "Weightlifting", "Swimming", "Unfiction"].map(interest => (
              <div key={interest} className="flex items-center gap-2 bg-slate-50 rounded-full px-6 py-3 border border-slate-200 shadow-sm text-blue-700 font-semibold text-lg dark:bg-slate-900 dark:border-slate-700 dark:text-blue-200">
                <FaLightbulb className="text-blue-400" /> {interest}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section - Card */}
      <motion.section
        id="contact"
        className="relative py-24 px-4 md:px-12 lg:px-24 bg-white text-slate-900 dark:bg-[#232a36] dark:text-white w-full"
        variants={sectionVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="max-w-3xl mx-auto bg-slate-50 rounded-2xl shadow-lg p-12 border border-slate-200 flex flex-col items-center gap-6 dark:bg-slate-900 dark:border-slate-700">
          <h2 className="text-3xl font-bold mb-2 text-blue-700 dark:text-blue-200">Contact</h2>
          <p className="mb-4 text-slate-700 text-center dark:text-slate-200">Let's connect! Reach out for collaboration or questions.</p>
          <div className="flex gap-8">
            <a href="mailto:alanhong@seas.upenn.edu" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors dark:text-blue-300 dark:hover:text-blue-100" aria-label="Email">
              <FaEnvelope className="text-2xl" /> alanhong@seas.upenn.edu
            </a>
            <a href="https://www.linkedin.com/in/alanhong26" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors dark:text-blue-300 dark:hover:text-blue-100" aria-label="LinkedIn">
              <FaLinkedin className="text-2xl" /> LinkedIn
            </a>
            <a href="https://github.com/ABH2603" className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold text-lg transition-colors dark:text-blue-300 dark:hover:text-blue-100" aria-label="GitHub">
              <FaLinkedin className="text-2xl" /> GitHub
            </a>
          </div>
    </div>
      </motion.section>
    </main>
  );
}
