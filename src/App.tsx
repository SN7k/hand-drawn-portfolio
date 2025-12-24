import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import { useTheme } from './context/ThemeContext';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { hoverColor, textColor } = useTheme();

  useEffect(() => {
    const hash = window.location.hash.slice(1) || 'home';
    if (['home', 'projects', 'contact'].includes(hash)) {
      setActiveTab(hash);
    }

    const handlePopState = () => {
      const hash = window.location.hash.slice(1) || 'home';
      if (['home', 'projects', 'contact'].includes(hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleTabChange = (tab: string) => {
    if (tab !== activeTab) {
      setActiveTab(tab);
      window.history.pushState(null, '', `#${tab}`);
    }
  };

  const paperTexture = {
    backgroundColor: hoverColor,
    backgroundImage: `radial-gradient(#d1d1d1 0.5px, transparent 0.5px)`,
    backgroundSize: '24px 24px',
    transition: 'background-color 0.5s ease, color 0.5s ease'
  };

  return (
    <div className="min-h-screen font-['Architects_Daughter',_cursive] p-4 md:p-8" style={{ ...paperTexture, color: textColor }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap');

        @keyframes scribble {
          0% { transform: translate(0,0) rotate(0deg); }
          25% { transform: translate(1px, -1px) rotate(0.5deg); }
          50% { transform: translate(-1px, 1px) rotate(-0.5deg); }
          75% { transform: translate(1px, 1px) rotate(0.2deg); }
          100% { transform: translate(0,0) rotate(0deg); }
        }

        .sketch-animate:hover {
          animation: scribble 0.3s infinite;
        }

        .marker-highlight {
          position: relative;
          z-index: 1;
        }
        .marker-highlight::after {
          content: "";
          position: absolute;
          left: -4px;
          bottom: 2px;
          width: 108%;
          height: 45%;
          background: #e1bee7;
          z-index: -1;
          transform: rotate(-1.5deg);
          opacity: 0.7;
        }

        input, textarea {
          font-family: 'Architects Daughter', cursive;
        }
      `}</style>

      <div className="max-w-5xl mx-auto">
        <Header activeTab={activeTab} onTabChange={handleTabChange} />

        <main>
          {activeTab === 'home' && <Home onNavigate={handleTabChange} />}
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'contact' && <Contact />}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
