interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Header = ({ activeTab, onTabChange }: HeaderProps) => {
  return (
    <nav className="flex flex-wrap justify-center items-center mb-16 gap-6">
      <div className="flex gap-6 md:gap-10 text-xl font-bold">
        {['home', 'projects', 'contact'].map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`capitalize relative transition-all ${activeTab === tab ? 'scale-110' : 'opacity-40 hover:opacity-100'}`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute -bottom-1 left-0 w-full h-1 bg-zinc-800 rounded-full transform rotate-1"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Header;

