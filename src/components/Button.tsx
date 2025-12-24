import { ReactNode } from 'react';
import { useTheme } from '../context/ThemeContext';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const Button = ({ children, onClick, variant = 'primary', className = '' }: ButtonProps) => {
  const { setHoverColor, resetColor } = useTheme();
  
  const roughBorderStyle = {
    borderRadius: '255px 15px 225px 15px/15px 225px 15px 255px',
    borderWidth: '2px',
    borderColor: '#333',
    borderStyle: 'solid'
  };

  const baseClasses = 'px-8 py-3 text-xl sketch-animate';
  const variantClasses = variant === 'primary' 
    ? 'bg-zinc-900 text-white' 
    : 'bg-white text-zinc-800 border-2 border-zinc-800';
  
  const hoverColor = variant === 'primary' ? '#424242' : '#f5f5f5';

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={roughBorderStyle}
      onClick={onClick}
      onMouseEnter={() => setHoverColor(hoverColor)}
      onMouseLeave={resetColor}
    >
      {children}
    </button>
  );
};

export default Button;
