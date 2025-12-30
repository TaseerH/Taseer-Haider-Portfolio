import React from 'react';

export const PixelDecorations: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      
      {/* 0. Starfield / Static Noise Background */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      {/* 1. Animated City Skyline Background (Far Parallax Layer) */}
      <div className="absolute bottom-0 left-0 w-full h-96 opacity-30 will-change-transform">
        <div className="flex items-end justify-around w-[200%] h-full animate-[scrollLeft_120s_linear_infinite]">
          {/* Back layer buildings */}
          {Array.from({ length: 30 }).map((_, i) => (
            <div 
              key={i}
              className="bg-cp-dark border-t-2 border-l-2 border-r-2 border-slate-900"
              style={{
                width: `${Math.random() * 100 + 40}px`,
                height: `${Math.random() * 200 + 150}px`,
                marginRight: '2px',
                backgroundColor: i % 2 === 0 ? '#0a0a0a' : '#111',
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. Mid-ground City (Faster) */}
      <div className="absolute bottom-0 left-0 w-full h-64 opacity-40 will-change-transform">
        <div className="flex items-end justify-around w-[200%] h-full animate-[scrollLeft_80s_linear_infinite]">
          {Array.from({ length: 20 }).map((_, i) => (
            <div 
              key={i}
              className="bg-cp-gray border-4 border-black relative"
              style={{
                width: `${Math.random() * 120 + 60}px`,
                height: `${Math.random() * 150 + 50}px`,
                marginRight: '30px'
              }}
            >
              {/* Lit Windows */}
              <div className="grid grid-cols-3 gap-1 p-2">
                {Array.from({ length: 9 }).map((_, j) => (
                  <div key={j} className={`w-2 h-2 ${Math.random() > 0.8 ? 'bg-cp-yellow' : (Math.random() > 0.9 ? 'bg-cp-red' : 'bg-black')}`}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Pixel Clouds */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 animate-[scrollRight_180s_linear_infinite] will-change-transform">
         <div className="absolute top-10 left-[10%] w-64 h-16 bg-slate-800 blur-xl"></div>
         <div className="absolute top-32 left-[40%] w-96 h-24 bg-slate-800 blur-xl"></div>
         <div className="absolute top-20 left-[70%] w-48 h-12 bg-slate-800 blur-xl"></div>
      </div>

      {/* 4. Flying Car 1 (Right - Fast) */}
      <div className="absolute top-[15%] -left-32 animate-[flyCar_20s_linear_infinite] will-change-transform z-10">
        <svg width="64" height="32" viewBox="0 0 32 16" fill="none">
          <path d="M4 8H12V6H20V8H28V12H4V8Z" fill="#00F0FF"/>
          <path d="M8 8V6H24V8" fill="#FCEE0A"/>
          <path d="M6 12H10V14H6V12Z" fill="#FF003C"/> 
          <rect x="10" y="10" width="12" height="2" fill="black" opacity="0.5"/>
        </svg>
        <div className="absolute top-3 -left-20 w-32 h-1 bg-gradient-to-r from-transparent to-cp-blue opacity-60"></div>
      </div>

      {/* 4b. Flying Car 2 (Right - Slower, Different Height) */}
      <div className="absolute top-[40%] -left-32 animate-[flyCar_35s_linear_infinite] will-change-transform opacity-70 z-0" style={{ animationDelay: '5s' }}>
        <svg width="48" height="24" viewBox="0 0 32 16" fill="none">
          <path d="M2 8H12V6H20V8H30V12H2V8Z" fill="#FF003C"/>
          <path d="M8 8V6H24V8" fill="#aaa"/>
          <rect x="10" y="10" width="12" height="2" fill="black" opacity="0.5"/>
        </svg>
        <div className="absolute top-3 -left-16 w-24 h-1 bg-gradient-to-r from-transparent to-cp-red opacity-40"></div>
      </div>

      {/* 4c. Flying Car 3 (Right - Very Fast, Top) */}
      <div className="absolute top-[5%] -left-32 animate-[flyCar_15s_linear_infinite] will-change-transform opacity-40 z-0" style={{ animationDelay: '12s' }}>
        <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
          <path d="M0 8H32V12H0V8Z" fill="#FCEE0A"/>
        </svg>
        <div className="absolute top-2 -left-32 w-48 h-0.5 bg-gradient-to-r from-transparent to-cp-yellow opacity-80"></div>
      </div>

      {/* 5. Surveillance Drone 1 */}
      <div className="absolute top-1/3 left-1/4 animate-[dronePatrol_25s_ease-in-out_infinite] will-change-transform z-20">
         <div className="relative w-12 h-12">
            <svg viewBox="0 0 24 24" fill="none">
               <rect x="8" y="8" width="8" height="6" fill="#111" stroke="#00F0FF" strokeWidth="1" />
               <rect x="4" y="6" width="4" height="2" fill="#333" />
               <rect x="16" y="6" width="4" height="2" fill="#333" />
               <circle cx="12" cy="11" r="1.5" fill="#FF003C" className="animate-pulse" />
               <rect x="10" y="14" width="4" height="2" fill="#333" />
            </svg>
            <div className="absolute top-full left-1/2 w-[1px] h-24 bg-gradient-to-b from-cp-red/50 to-transparent -translate-x-1/2"></div>
         </div>
      </div>

       {/* 5b. Surveillance Drone 2 (Background) */}
       <div className="absolute top-[10%] right-[20%] animate-[dronePatrol_30s_ease-in-out_infinite] will-change-transform z-0 opacity-50" style={{ animationDirection: 'reverse' }}>
         <div className="relative w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none">
               <rect x="8" y="8" width="8" height="6" fill="#111" stroke="#FCEE0A" strokeWidth="1" />
               <circle cx="12" cy="11" r="1.5" fill="#FCEE0A" className="animate-pulse" />
            </svg>
         </div>
      </div>

      {/* 6. Walking Character (Right) */}
      <div className="absolute bottom-0 -left-16 animate-[walkRight_45s_linear_infinite] will-change-transform z-30">
         <div className="relative w-20 h-20 animate-[bounce_0.5s_infinite]">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-lg">
              <rect x="10" y="2" width="4" height="4" fill="#FCEE0A"/>
              <rect x="11" y="3" width="3" height="1" fill="#000"/>
              <rect x="8" y="6" width="8" height="8" fill="#00F0FF"/>
              <rect x="6" y="6" width="2" height="6" fill="#00F0FF"/>
              <rect x="16" y="6" width="2" height="6" fill="#00F0FF"/>
              <rect x="8" y="14" width="3" height="6" fill="#2b2b2b"/>
              <rect x="13" y="14" width="3" height="6" fill="#2b2b2b"/>
            </svg>
            <div className="absolute -top-6 -right-6 bg-cp-black text-cp-yellow text-[8px] font-pixel p-1 border border-cp-yellow whitespace-nowrap hidden md:block">
              NETRUNNER_01
            </div>
         </div>
      </div>

      {/* 7. Walking Character (Left - Punk) */}
      <div className="absolute bottom-0 -right-16 animate-[walkLeft_40s_linear_infinite] will-change-transform z-40 delay-5000">
         <div className="relative w-20 h-20 animate-[bounce_0.6s_infinite]">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full drop-shadow-lg scale-x-[-1]">
              <rect x="10" y="0" width="2" height="4" fill="#FF003C"/>
              <rect x="10" y="2" width="4" height="4" fill="#e5e5e5"/>
              <rect x="8" y="6" width="8" height="8" fill="#7127BA"/>
              <rect x="6" y="6" width="2" height="6" fill="#333"/>
              <rect x="16" y="6" width="2" height="6" fill="#7127BA"/>
              <rect x="8" y="14" width="3" height="6" fill="#111"/>
              <rect x="13" y="14" width="3" height="6" fill="#111"/>
            </svg>
         </div>
      </div>

      <style>{`
        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          from { transform: translateX(-20%); }
          to { transform: translateX(10%); }
        }
        @keyframes flyCar {
          0% { transform: translateX(-200px) translateY(0); }
          25% { transform: translateX(25vw) translateY(40px); }
          50% { transform: translateX(50vw) translateY(0); }
          75% { transform: translateX(75vw) translateY(-40px); }
          100% { transform: translateX(110vw) translateY(0); }
        }
        @keyframes walkRight {
          0% { transform: translateX(-50px); }
          100% { transform: translateX(105vw); }
        }
        @keyframes walkLeft {
          0% { transform: translateX(100px); }
          100% { transform: translateX(-105vw); }
        }
        @keyframes dronePatrol {
            0%, 100% { transform: translate(0, 0); }
            25% { transform: translate(150px, -50px); }
            50% { transform: translate(50px, -80px); }
            75% { transform: translate(-100px, -30px); }
        }
      `}</style>
    </div>
  );
};