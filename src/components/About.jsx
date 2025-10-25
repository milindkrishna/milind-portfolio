import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const About = () => {
  const aboutRef = useRef(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Fix: Move window.innerWidth to useEffect to avoid hydration issues
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const currentRef = aboutRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowScrollIndicator(entry.isIntersecting);
      },
      {
        threshold: isMobile ? 0.5 : 1.0,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isMobile]);

  const handleScrollClick = () => {
    const sectionsDiv = document.querySelector('#sections-container'); // Add this ID to your sections container
    if (sectionsDiv) {
      sectionsDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <section
      id="about"
      ref={aboutRef}
      className="relative min-h-screen flex items-center px-4 sm:px-6 md:px-20 py-20 bg-white"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 text-center md:text-left">

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl transform transition duration-300 hover:scale-105 hover:shadow-2xl"
        >
          <img
            src={`${process.env.PUBLIC_URL}/Milind.jpeg`}
            alt="Gulshan Kumar Profile"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* About Text */}
        <div className="max-w-2xl px-2">
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed"
          >
            Hello! I'm <strong className="text-blue-600">Milind Krishna</strong>, Software Development Engineer in Test (SDET) at <strong className="text-blue-600">TCS</strong> with 4 years of experience in Automation, Performance, API, and Manual Testing. Passionate about ensuring software quality, collaborating with teams, and always learning new technologies.
          </motion.p>

          {/* Email and LinkedIn */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-blue-500 text-base sm:text-lg mt-6 justify-center md:justify-start">
            <a
              href="mailto:milindkrishna1998@gmail.com"
              className="flex items-center gap-2 hover:underline hover:text-blue-600 cursor-pointer transition-colors duration-200"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            >
              <Mail className="text-xl sm:text-2xl" />
              <span>milindkrishna1998@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/milindkrishna"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:underline hover:text-blue-600 cursor-pointer transition-colors duration-200"
              style={{ pointerEvents: 'auto', zIndex: 10 }}
            >
              <Linkedin className="text-xl sm:text-2xl" />
              <span>LinkedIn Profile</span>
            </a>
          </div>

          {/* Mobile-only scroll down indicator */}
          {showScrollIndicator && isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0, 10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="block sm:hidden mt-6 text-blue-600 text-sm flex flex-col items-center cursor-pointer"
          onClick={handleScrollClick}
            >
              <span>Scroll Down</span>
              <svg className="w-6 h-6 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          )}

          {/* Desktop scroll down indicator */}
          {showScrollIndicator && !isMobile && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: [10, 0, 10] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-6 text-blue-600 text-sm cursor-pointer flex flex-col items-center space-y-2 hover:text-blue-700"
          style={{ transform: 'translateX(-10%)' }}
          onClick={handleScrollClick}
            >
              <span>Scroll Down</span>
              <svg className="w-6 h-6 mt-1 animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          )}

        </div>
      </div>
    </section>
  );
};

export default About;