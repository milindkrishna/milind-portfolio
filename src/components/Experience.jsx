import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
// import { IoChevronDown } from "react-icons/io5";
import { Building2, CalendarDays, ChevronDown } from "lucide-react";

const experienceList = [
  {
    role: "Test Automation Engineer",
    company: "Tata Consultancy Services",
    duration: "Nov 2023 – Present",
    details: [
      "Built and maintained automation frameworks for web and API testing using Selenium and REST Assured, reducing manual testing by 80%.",
      "Delivered 7+ releases with full UAT and regression coverage, achieving 95% on-time completion rate.",
      "Created detailed test plans, defect reports, and lessons-learned documentation, improving project knowledge transfer.",
      "Partnered with DevOps teams to integrate automated testing into CI/CD pipelines (Jenkins, Azure ADO).",
      "Reported project status and risks to stakeholders with weekly/monthly reports, achieving 95%+ customer satisfaction."
    ],
  },
  {
    role: "Salesforce/CPQ QA Analyst",
    company: "Tata Consultancy Services",
    duration: "July 2021 – Sept 2023",
    details: [
      "Proficient SFDC CPQ tester specializing in manual testing on Azure DevOps",
      "Skilled in analyzing user stories to derive detailed test cases",
      "Proficient in executing test cases on Azure DevOps platform",
      "Collaborates effectively with developer teams for bug resolution and seamless testing processes",
      "Instrumental in achieving a 30% reduction in defects and enhancing system stability Integration Testing, and Regression Testing",
      "Collaborates effectively with cross-functional teams to advance testing processes Facilitates seamless communication between development, QA, and other departments"
    ],
  }
];

const Experience = () => {
  const [expandedIndex, setExpandedIndex] = useState(0);
  const [hovered, setHovered] = useState(null);

  const customBulletStyle = {
    width: "5px",
    height: "5px",
    backgroundColor: "#4A4A4A",
    borderRadius: "50%",
    marginTop: "0.6rem",
  };

  const toggleExperience = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  // Function to disable context menu
  const handleContextMenu = (e) => {
    e.preventDefault();
  };

  // Function to disable text selection
  const handleSelectStart = (e) => {
    e.preventDefault();
  };

  // Function to disable drag
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  // Function to disable keyboard shortcuts
  const handleKeyDown = (e) => {
    // Disable Ctrl+A (Select All), Ctrl+C (Copy), Ctrl+V (Paste), F12 (DevTools)
    if (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'v')) {
      e.preventDefault();
    }
    if (e.key === 'F12') {
      e.preventDefault();
    }
  };

  return (
    <section 
      id="experience" 
      className="py-10 px-4 sm:px-6 md:px-16 bg-white select-none"
      onContextMenu={handleContextMenu}
      onSelectStart={handleSelectStart}
      onDragStart={handleDragStart}
      onKeyDown={handleKeyDown}
      style={{ 
        userSelect: 'none',
        webkitUserSelect: 'none',
        mozUserSelect: 'none',
        msUserSelect: 'none',
        webkitTouchCallout: 'none',
        webkitUserDrag: 'none',
        khtmlUserSelect: 'none'
      }}
    >
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 sm:mb-4  pb-2 border-blue-500">
          Experience
        </h2>

        <div className="space-y-4">
          {experienceList.map((exp, index) => {
            const isOpen = expandedIndex === index;
            return (
              <motion.div
                key={index}
                layout
                transition={{ duration: 0.3 }}
                className={`rounded-xl shadow-md border transition-all ${
                  isOpen ? "bg-white border-blue-500" : "bg-white hover:bg-blue-50 border-gray-300"
                }`}
              >
                <div
                  className={`flex items-center justify-between flex-wrap ${
                    isOpen ? "p-5 sm:p-6" : "p-3"
                  } cursor-pointer transition-all`}
                  onClick={() => toggleExperience(index)}
                  onMouseEnter={() => setHovered(exp.role)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div className={`space-y-1 ${isOpen ? "text-base" : "text-sm"}`}>
                    <div className="flex items-center text-blue-700 font-semibold space-x-2">
                      <motion.span
                        className="text-xl"
                        animate={{ rotate: hovered === exp.role ? 0 : 0 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Building2 />
                      </motion.span>
                      <span>{exp.company}</span>
                    </div>
                    <div
                      className={`font-bold text-gray-800 ${isOpen ? "text-lg sm:text-xl" : "text-sm"
                        }`}
                    >
                      {exp.role}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <CalendarDays className="mr-1" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-2 sm:mt-0 text-xl text-blue-500"
                  >
                    <ChevronDown />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2 text-gray-700 overflow-hidden"
                    >
                      <ul className="list-none pl-0 ml-0 space-y-2 max-h-80 sm:max-h-60 overflow-y-auto pr-2">
                        {exp.details.map((point, idx) => (
                          <motion.li
                            key={`${index}-${idx}`}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05 }}
                            className="flex items-start space-x-2 text-sm sm:text-base"
                          >
                            <div className="flex-shrink-0">
                              <div style={customBulletStyle}></div>
                            </div>
                            <div className="flex-1 break-words">
                              {point}
                            </div>
                          </motion.li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;