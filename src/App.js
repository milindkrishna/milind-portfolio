import './App.css';
import React, { useState } from 'react';
import ReactGA from 'react-ga4';

// Component imports
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Experience from './components/Experience';
import ScrollToTopButton from './components/ScrollToTopButton';
import Footer from './components/Footer';
import Education from './components/Education';
import { ThemeProvider } from './components/ThemeContext';

// Google Analytics configuration
const TRACKING_ID = "G-W9BM9GSX4M";
ReactGA.initialize(TRACKING_ID);

function App() {
  // State for active tab management
  const [activeTab, setActiveTab] = useState('experience');

  // Navigation tabs configuration
  const navigationTabs = [
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  // Render the active section based on selected tab
  const renderActiveSection = () => {
    switch (activeTab) {
      case 'experience':
        return <Experience />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Experience />;
    }
  };

  return (
    <ThemeProvider>
      <div>
        <Header setActiveTab={setActiveTab} />
        <About />

        {/* Tab Navigation */}
        <div id="sections-container" className="bg-white py-5 sm:py-4 sticky top-0 z-50 shadow-sm">
          <div className="max-w-6xl mx-auto px-2 sm:px-4">
            <div className="grid grid-cols-5 sm:flex sm:justify-center gap-1 sm:gap-6">
              {navigationTabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-2 sm:px-4 py-2 font-medium text-xs sm:text-sm transition-all whitespace-nowrap
            ${activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="min-h-screen bg-white">
          {renderActiveSection()}
        </div>

        <ScrollToTopButton />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;