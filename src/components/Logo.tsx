interface LogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function Logo({ variant = 'dark', className = '', size = 'md' }: LogoProps) {
  const isDark = variant === 'dark'; // Dark text on light bg
  
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11'
  };

  const textSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <div className={`flex items-center gap-2.5 font-bold tracking-tight select-none ${className}`}>
      {/* Biru Symbol: Stylized curved 'b' with vibrant blue and cyan accent */}
      <div className={`relative ${iconSizes[size]} flex items-center justify-center shrink-0`}>
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-sm">
          {/* Main outer b-stem & loop in Royal Blue */}
          <path
            d="M12 7C9.23858 7 7 9.23858 7 12V32C7 34.7614 9.23858 37 12 37H26C32.6274 37 38 31.6274 38 25C38 18.3726 32.6274 13 26 13H15V12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12"
            stroke="#0066FF"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Inner Cyan Glowing Core Dot */}
          <circle cx="25.5" cy="25" r="4.5" fill="#38BDF8" />
        </svg>
      </div>

      {/* Typography: "biru" */}
      <span className={`${textSizes[size]} font-extrabold tracking-tight font-sans transition-colors ${isDark ? 'text-slate-900' : 'text-white'}`}>
        biru
      </span>
    </div>
  );
}
