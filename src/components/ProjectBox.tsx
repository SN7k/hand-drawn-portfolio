import { Github, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ProjectBoxProps {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
  index: number;
  github?: string;
  demo?: string;
}

const ProjectBox = ({ id, title, desc, tags, color, index, github, demo }: ProjectBoxProps) => {
  const { setHoverColor, resetColor } = useTheme();
  
  const roughBorderStyle = {
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
    borderWidth: '2px',
    borderColor: '#333',
    borderStyle: 'solid'
  };

  return (
    <div
      className="group relative bg-white p-6 transition-transform hover:-translate-y-2"
      style={{
        ...roughBorderStyle,
        transform: `rotate(${index % 2 === 0 ? '1' : '-1'}deg)`
      }}
      onMouseEnter={() => setHoverColor(color)}
      onMouseLeave={resetColor}
    >
      <div className="absolute -top-4 -left-4 px-3 py-1 bg-zinc-900 text-white font-bold" style={roughBorderStyle}>
        {id}
      </div>

      <div
        className="aspect-square mb-6 border-2 border-zinc-800 flex flex-col items-center justify-center p-4 text-center group-hover:bg-opacity-80 transition-all"
        style={{ backgroundColor: color }}
      >
        <h3 className="text-3xl font-bold mb-2 uppercase">{title}</h3>
        <div className="w-12 h-1 bg-zinc-800 mb-4"></div>
        <p className="text-sm italic">{desc}</p>
      </div>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span key={tag} className="text-[10px] font-bold border border-zinc-800 px-2 py-0.5 rounded-sm bg-white/50">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 pt-2 border-t border-zinc-200">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-bold text-sm">
              <Github size={14} /> Source
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline font-bold text-sm">
              <ExternalLink size={14} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
