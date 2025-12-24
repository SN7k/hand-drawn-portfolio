import portfolioData from '../data/portfolio.json';

const Footer = () => {
  return (
    <footer className="mt-32 py-12 border-t-4 border-double border-zinc-300 text-center opacity-60">
      <p className="text-xl">© 2025 {portfolioData.personalInfo.name}</p>
      
      <div className="mt-6 flex justify-center gap-2">
        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
