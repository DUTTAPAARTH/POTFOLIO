import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaCertificate, FaSearch, FaTimes } from "react-icons/fa";

const certificates = [
  {
    id: 1,
    title: "Certificate Course in CORE JAVA",
    issuer: "i Technologies",
    date: "July 2025",
    image: "/certificates/CORE JAVA I TECHNOLOGIES.jpg",
    link: "/certificates/CORE JAVA I TECHNOLOGIES.jpg",
    category: "Programming",
    skills: ["Java", "Core Java", "OOP", "Software Development"]
  },
  {
    id: 2,
    title: "Certificate Course in C , C++",
    issuer: "i Technologies",
    date: "July 2024",
    image: "/certificates/C C++ i TECHNOLOGIES.jpg",
    link: "/certificates/C C++ i TECHNOLOGIES.jpg",
    category: "Programming",
    skills: ["C", "C++", "System Programming", "DSA"]
  },
  {
    id: 3,
    title: "Investment Banking Virtual Internship",
    issuer: "J.P. Morgan",
    date: "2024",
    image: "https://images.unsplash.com/photo-1611974714131-318e8f2e2136?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/JPmorganPAARTHDutta.pdf",
    category: "Finance & Fintech",
    skills: ["Financial Analysis", "Investment Banking", "Excel", "Valuation"]
  },
  {
    id: 4,
    title: "IBM Professional Certification",
    issuer: "IBM",
    date: "2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/IBM PAARTH.pdf",
    category: "Technology",
    skills: ["Cloud Computing", "AI", "Enterprise Systems"]
  },
  {
    id: 5,
    title: "Cybersecurity Job Simulation",
    issuer: "Deloitte",
    date: "2024",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/Cyber Job delloote.pdf",
    category: "Cybersecurity",
    skills: ["Network Security", "Risk Assessment", "Threat Modeling"]
  },
  {
    id: 6,
    title: "Data Analytics Job Simulation",
    issuer: "Tata",
    date: "2024",
    image: "https://images.unsplash.com/photo-1551288049-bbbda536ad0a?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/PAARTHDuttatata.pdf",
    category: "Data Science",
    skills: ["Data Visualization", "Data Interpretation", "Business Intelligence"]
  },
  {
    id: 7,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    date: "2024",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/Technology Job delliote.pdf",
    category: "Technology",
    skills: ["Software Engineering", "Agile", "Solution Architecture"]
  },
  {
    id: 8,
    title: "Pitch and Patch Certificate",
    issuer: "Pitch and Patch",
    date: "2024",
    image: "https://images.unsplash.com/photo-1475721027785-f74dea327912?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/PAARTH DUTTA Pitch and Patch .pdf",
    category: "Soft Skills",
    skills: ["Presentation", "Innovation", "Problem Solving"]
  },
  {
    id: 9,
    title: "AI For Everyone: Master the Basics",
    issuer: "IBM Skills Network",
    date: "2024",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2000&auto=format&fit=crop",
    link: "/certificates/IBMSkillsNetwork AI0117EN Certificate  Cognitive Class.pdf",
    category: "AI & ML",
    skills: ["Artificial Intelligence", "Machine Learning", "Neural Networks", "Generative AI"]
  },
  {
    id: 10,
    title: "Smart India Hackathon 2025 (Internal)",
    issuer: "SRM IST / Ministry of Education",
    date: "Sept 2025",
    image: "/certificates/SIH certificate.jpg",
    link: "/certificates/SIH certificate.jpg",
    category: "Hackathon",
    skills: ["Problem Solving", "Team Collaboration", "Rapid Prototyping", "Innovation"]
  }
];

const categories = ["All", ...new Set(certificates.map(cert => cert.category))];

export default function Certificates() {
  const [filter, setFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = filter === "All" 
    ? certificates 
    : certificates.filter(cert => cert.category === filter);

  return (
    <div className="min-h-screen bg-[#020617] pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-blue-400 font-medium tracking-widest uppercase text-sm mb-3 flex items-center justify-center gap-2">
              <FaCertificate className="animate-pulse" /> My Achievements
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Certificates & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Accomplishments</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              A collection of professional certifications and courses I've completed to sharpen my technical skills and stay updated with modern technologies.
            </p>
          </motion.div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 border
                ${filter === cat 
                  ? "bg-blue-500 border-blue-500 text-white shadow-lg shadow-blue-500/20" 
                  : "bg-gray-800/50 border-gray-700 text-gray-400 hover:border-blue-400/50 hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert) => (
              <motion.div
                key={cert.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative"
              >
                <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent opacity-60"></div>
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <button 
                        onClick={() => setSelectedCert(cert)}
                        className="p-3 bg-white text-blue-600 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                      >
                        <FaSearch size={20} />
                      </button>
                    </div>

                    <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-gray-700">
                      <span className="text-blue-400 text-xs font-bold uppercase">{cert.date}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {cert.issuer}
                      </span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-500">{cert.category}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                      {cert.title}
                    </h3>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {cert.skills.map((skill, idx) => (
                        <span key={idx} className="text-[10px] text-gray-400 bg-gray-900/50 px-2 py-1 rounded border border-gray-800">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <a 
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gray-800/50 hover:bg-blue-600 text-white rounded-xl transition-all duration-300 border border-gray-700 hover:border-blue-500"
                    >
                      <span className="text-sm font-semibold">View Certificate</span>
                      <FaExternalLinkAlt size={12} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl border border-gray-800"
              onClick={e => e.stopPropagation()}
            >
              <button 
                className="absolute top-6 right-6 z-10 p-2 bg-gray-800/80 text-white rounded-full hover:bg-red-500 transition-colors"
                onClick={() => setSelectedCert(null)}
              >
                <FaTimes size={20} />
              </button>
              
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 h-[300px] lg:h-auto relative">
                  <img 
                    src={selectedCert.image} 
                    alt={selectedCert.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:w-1/3 p-8 flex flex-col justify-center">
                  <span className="text-blue-400 font-bold text-sm uppercase mb-2 tracking-widest">{selectedCert.issuer}</span>
                  <h2 className="text-3xl font-bold text-white mb-4 leading-tight">{selectedCert.title}</h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-emerald-500 mb-6 rounded-full"></div>
                  
                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-gray-500 text-xs uppercase font-bold mb-1 tracking-widest">Date Issued</h4>
                      <p className="text-white">{selectedCert.date}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-xs uppercase font-bold mb-1 tracking-widest">Category</h4>
                      <p className="text-white">{selectedCert.category}</p>
                    </div>
                    <div>
                      <h4 className="text-gray-500 text-xs uppercase font-bold mb-1 tracking-widest">Skills Covered</h4>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {selectedCert.skills.map((skill, idx) => (
                          <span key={idx} className="text-xs bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <a 
                    href={selectedCert.link}
                    className="block w-full text-center py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-500/20 transform hover:-translate-y-1"
                  >
                    Launch Credential Check
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
