import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, School, BookOpen } from "lucide-react";

// Education details array
const educationDetails = [
  {
    title: "Bachelor of Technology",
    institution: "Maulana Abdul Kalam Azad University of Technology, Kolkata",
    year: "Aug 2017 - May 2021",
    degree: "Electronics & Communication Engineering",
    icon: <GraduationCap />,
  },
  {
    title: "XII (ISC)",
    institution: "Holy Home, Kolkata",
    year: "August 2015 - May 2017",
    icon: <School />,
  },
  {
    title: "X (ICSE)",
    institution: "Jogamaya Memorial Institute, Kolkata",
    year: "June 2014 - March 2015",
    icon: <BookOpen />,
  },
];

// Category selector for education
const EducationSelector = ({
  selected,
  setSelected,
  hovered,
  setHovered,
}) => (
  <>
    {/* Mobile Dropdown */}
    <div className="md:hidden mb-2">
      <label htmlFor="education-select" className="block text-sm font-medium text-gray-700 mb-1">
        Select Education
      </label>
      <select
        id="education-select"
        value={selected.title}
        onChange={(e) => {
          const selectedItem = educationDetails.find((item) => item.title === e.target.value);
          if (selectedItem) setSelected(selectedItem);
        }}
        className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        {educationDetails.map((item, index) => (
          <option key={index} value={item.title}>
            {item.title}
          </option>
        ))}
      </select>
    </div>

    {/* Desktop Buttons */}
    <div className="hidden md:flex flex-col space-y-4">
      {educationDetails.map((item, index) => (
        <motion.button
          key={index}
          onClick={() => setSelected(item)}
          onMouseEnter={() => setHovered(item.title)}
          onMouseLeave={() => setHovered(null)}
          tabIndex={0}
          aria-selected={selected.title === item.title}
          whileTap={{ scale: 0.95 }}
          className={`flex items-center space-x-3 p-3 rounded-lg text-left transition group
            ${selected.title === item.title
              ? "bg-blue-100 text-blue-700 font-semibold"
              : "bg-gray-100 text-gray-700 hover:bg-blue-50"}`}
        >
          <motion.span
            className="text-2xl"
            animate={{
              rotate: hovered === item.title ? 15 : 0,
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {item.icon}
          </motion.span>
          <span className="text-base">{item.title}</span>
        </motion.button>
      ))}
    </div>
  </>
);

// Education detail card
const EducationCard = ({ data }) => (
  <motion.div
    key={data.title}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-md"
  >
    <div className="flex items-center mb-4 md:mb-6">
      <span className="text-blue-600 text-2xl md:text-3xl mr-3">{data.icon}</span>
      <h3 className="text-xl md:text-2xl font-semibold text-gray-800">{data.title}</h3>
    </div>
    {data.degree && (
      <p className="text-gray-600 font-medium text-lg mb-1">{data.degree}</p>
    )}
    <p className="text-gray-700 text-lg">{data.institution}</p>
    <p className="text-gray-500 text-md">{data.year}</p>
  </motion.div>
);

// Main Education component
const Education = () => {
  const [selected, setSelected] = useState(educationDetails[0]);
  const [hovered, setHovered] = useState(null);

  const renderedCard = useMemo(() => <EducationCard data={selected} />, [selected]);

  // Prevent context menu (right-click)
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
      id="education" 
      className="py-10 px-4 sm:px-6 md:px-16 bg-white select-none"
      onContextMenu={handleContextMenu}
      onSelectStart={handleSelectStart}
      onDragStart={handleDragStart}
      onKeyDown={handleKeyDown}
      style={{ 
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none'
      }}
    >
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-8 md:mb-4 pb-2 border-blue-500">
          Education
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left - Selector */}
          <div>
            <EducationSelector
              selected={selected}
              setSelected={setSelected}
              hovered={hovered}
              setHovered={setHovered}
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

export default Education;