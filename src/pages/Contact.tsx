import { Send, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useState, FormEvent } from 'react';
import portfolioData from '../data/portfolio.json';
import { useTheme } from '../context/ThemeContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { setHoverColor, resetColor } = useTheme();

  const roughBorderStyle = {
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
    borderWidth: '2px',
    borderColor: '#333',
    borderStyle: 'solid'
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:${portfolioData.personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-6 duration-700">
      <div
        className="bg-white p-10 md:p-16 shadow-2xl relative"
        style={{
          ...roughBorderStyle,
          transform: 'rotate(-0.5deg)'
        }}
      >
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-2 bg-zinc-400/30 rounded-full"></div>

        <h2 className="text-5xl font-bold mb-8 text-center underline decoration-double">Contact Me</h2>

        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <label className="block text-xl mb-2 font-bold underline">Your Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-transparent border-b-2 border-zinc-800 p-2 outline-none focus:border-yellow-500"
                placeholder="Type here..."
              />
            </div>
            <div>
              <label className="block text-xl mb-2 font-bold underline">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-transparent border-b-2 border-zinc-800 p-2 outline-none focus:border-yellow-500"
                placeholder="email@example.com"
              />
            </div>
          </div>
          <div>
            <label className="block text-xl mb-2 font-bold underline">The Brief</label>
            <textarea
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-zinc-50 border-2 border-zinc-800 p-4 outline-none focus:bg-white"
              style={roughBorderStyle}
              placeholder="Let's build something cool..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-5 bg-zinc-900 text-white text-3xl font-bold flex items-center justify-center gap-4 sketch-animate transition-colors"
            style={roughBorderStyle}
            onMouseEnter={() => setHoverColor('#1f2937')}
            onMouseLeave={resetColor}
          >
            Send Message <Send size={32} />
          </button>
        </form>
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {portfolioData.socialLinks.map((social) => {
          const iconMap: Record<string, any> = { Github, Linkedin, Twitter, Mail };
          const IconComponent = iconMap[social.icon];
          const hoverColors: Record<string, string> = {
            yellow: '#ffeb3b',
            blue: '#b2ebf2',
            zinc: '#f5f5f5',
            red: '#ffcdd2'
          };
          
          return (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 transition-colors cursor-pointer"
              style={roughBorderStyle}
              onMouseEnter={() => setHoverColor(hoverColors[social.hoverColor])}
              onMouseLeave={resetColor}
            >
              <IconComponent size={24} className="mx-auto mb-2" />
              <span className="font-bold">{social.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
