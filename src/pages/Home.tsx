import { Globe, Database, Layers } from 'lucide-react';
import Button from '../components/Button';
import portfolioData from '../data/portfolio.json';
import { useTheme } from '../context/ThemeContext';

interface HomeProps {
  onNavigate: (tab: string) => void;
}

const Home = ({ onNavigate }: HomeProps) => {
  const { setHoverColor, resetColor } = useTheme();
  
  const roughBorderStyle = {
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
    borderWidth: '2px',
    borderColor: '#333',
    borderStyle: 'solid'
  };

  const iconMap: { [key: string]: any } = {
    Globe,
    Database,
    Layers
  };

  return (
    <div className="space-y-20 animate-in fade-in slide-in-from-bottom-6 duration-700">
      <section className="flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1 bg-zinc-100 mb-2" style={roughBorderStyle}>
            {portfolioData.availability.label}
          </div>
          <h1 className="text-5xl md:text-8xl font-bold leading-none">
            <span className="marker-highlight">{portfolioData.personalInfo.name.split(' ')[0]}</span> <br />
            <span className="ml-4 md:ml-12">{portfolioData.personalInfo.name.split(' ')[1]}</span>
          </h1>
          <p className="text-2xl italic opacity-70">
            "{portfolioData.personalInfo.subtitle}"
          </p>
          <p className="text-xl md:text-2xl leading-relaxed max-w-xl opacity-90 border-l-4 border-zinc-300 pl-6">
            {portfolioData.aboutText}
          </p>
          <div className="flex gap-4 pt-4">
            <Button onClick={() => onNavigate('projects')}>
              View Projects
            </Button>
            <Button variant="secondary">
              My Resume
            </Button>
          </div>
        </div>

        <div className="relative w-64 h-64 md:w-96 md:h-96">
          <div className="absolute inset-0 bg-zinc-200 rotate-6" style={roughBorderStyle}></div>
          <div 
            className="absolute inset-0 bg-white -rotate-3 flex items-center justify-center border-2 border-zinc-800 overflow-hidden cursor-pointer transition-transform hover:scale-105" 
            style={roughBorderStyle}
            onMouseEnter={() => setHoverColor('#f3e5f5')}
            onMouseLeave={resetColor}
          >
            <img 
              src={portfolioData.personalInfo.logo} 
              alt={portfolioData.personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-purple-200/50 rounded-full blur-xl"></div>
        </div>
      </section>

      <section className="space-y-8">
        <h2 className="text-4xl font-bold underline decoration-wavy underline-offset-8">Tech Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioData.techStack.map((stack, idx) => {
            const IconComponent = iconMap[stack.icon];
            const rotations = ['', 'rotate-1', '-rotate-1'];
            const colors = ['text-blue-500', 'text-green-600', 'text-purple-500'];
            const hoverColors = ['#e3f2fd', '#e8f5e9', '#f3e5f5'];
            
            return (
              <div 
                key={stack.title} 
                className={`p-8 bg-white ${rotations[idx]} cursor-pointer transition-transform hover:scale-105 text-zinc-800`} 
                style={roughBorderStyle}
                onMouseEnter={() => setHoverColor(hoverColors[idx])}
                onMouseLeave={resetColor}
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className={colors[idx]} />
                  <h3 className="text-2xl font-bold text-zinc-800">{stack.title}</h3>
                </div>
                <ul className="space-y-2 text-lg text-zinc-800">
                  {stack.items.map(item => <li key={item}>- {item}</li>)}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default Home;
