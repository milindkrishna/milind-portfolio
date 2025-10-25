import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Plug, Gauge, Bot, Keyboard } from "lucide-react";

// Skill categories data
const skillCategories = [
  {
    title: "Programming Languages",
    icon: <Code />,
    items: ["Java (OOPs Concepts)","JavaScript", "SQL"],
  },
  {
    title: "Automation Testing",
    icon: <Bot />,
    items: ["Selenium", "Cucumber (BDD Framework)", "TestNG", "JUnit", "Automation Framework Design (POM)", "Test Script Development & Maintenance", "Cross-Browser & Parallel Testing", "Dynamic Locators & Wait Strategies", "CI/CD Integration (Jenkins, Azure ADO)"],
  },
  {
    title: "Performance Testing",
    icon: <Gauge />,
    items: ["JMeter (Script Development & Execution)", "Performance Test Planning & Strategy", "Load & Stress Testing", "Test Result Analysis & Reporting", "Correlation & Parameterization in JMeter"],
  },
  {
    title: "Manual Testing",
    icon: <Keyboard />,
    items: ["Test Case Design & Execution", "Functional & Regression Testing", "Smoke & Sanity Testing", "Integration Testing", "User Acceptance Testing (UAT)", "Bug Reporting & Defect Tracking", "JIRA & Azure Boards", "Test Planning & Coverage Analysis", "Agile Testing Methodology"],
  },
  {
    title: "API Testing",
    icon: <Plug />,
    items: ["Manual API Testing (Postman)", "Rest Assured Framework", "REST API Testing (GET, POST, PUT, DELETE)", "JSON Data Validation", "Authentication", "API Response Validation & Assertions", "API Performance & Load Testing"],
  },
];

// Category selector component
const CategorySelector = ({ selectedCategory, setSelectedCategory, hoveredCategory, setHoveredCategory }) => (
  <>
    {/* Mobile Dropdown */}
    <div className="md:hidden mb-2">
      <label htmlFor="category-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select Category
      </label>
      <select
        id="category-select"
        value={selectedCategory.title}
        onChange={(e) => {
          const category = skillCategories.find((c) => c.title === e.target.value);
          if (category) setSelectedCategory(category);
        }}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {skillCategories.map((category, index) => (
          <option key={index} value={category.title}>
            {category.title}
          </option>
        ))}
      </select>
    </div>

    {/* Desktop Buttons */}
    <div className="hidden md:flex flex-col space-y-4">
      {skillCategories.map((category, index) => (
        <motion.button
          key={index}
          onClick={() => setSelectedCategory(category)}
          onMouseEnter={() => setHoveredCategory(category.title)}
          onMouseLeave={() => setHoveredCategory(null)}
          tabIndex={0}
          aria-selected={selectedCategory.title === category.title}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-3 p-3 rounded-lg text-left transition group
            ${selectedCategory.title === category.title
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
        >
          <motion.span
            className="text-2xl"
            animate={{
              rotate: hoveredCategory === category.title ? 15 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {category.icon}
          </motion.span>
          <span className="text-base">{category.title}</span>
        </motion.button>
      ))}
    </div>
  </>
);

const SkillCategoryCard = ({ category }) => (
  <motion.div
    key={category.title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
  >
    <div className="flex items-center mb-4 md:mb-6">
      <span className="text-blue-600 text-2xl md:text-3xl mr-3">{category.icon}</span>
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{category.title}</h3>
    </div>
    <motion.ul
      className="list-disc list-outside grid grid-cols-1 sm:grid-cols-2 gap-4 pl-5 text-gray-700 text-sm md:text-base"
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.05 } },
        hidden: {},
      }}
    >
      {category.items.map((item, idx) => (
        <motion.li
          key={idx}
          variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 10 } }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.03 }}
          className="hover:text-blue-700 transition-transform duration-200 ease-in-out cursor-default"
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  </motion.div>
);

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]);
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const renderedCard = useMemo(() => <SkillCategoryCard category={selectedCategory} />, [selectedCategory]);

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
      id="skills" 
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
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 md:mb-4 pb-2 border-blue-500">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left - Selector */}
          <div>
            <CategorySelector
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              hoveredCategory={hoveredCategory}
              setHoveredCategory={setHoveredCategory}
            />
          </div>

          {/* Right - Details */}
          <div className="md:col-span-2">
            <AnimatePresence mode="wait">{renderedCard}</AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;