
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md px-6 pt-12 pb-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <div className="relative">
          <img
            alt="Profile"
            className="w-12 h-12 rounded-full border-2 border-primary object-cover"
            src="/my_photo.JPG"
          />
          {/* <div className="absolute bottom-0.5 right-0.5 w-3 h-3 bg-green-500 border-2 border-background rounded-full"></div> */}
        </div>
        <div>
          <h1 className="font-bold text-lg leading-none tracking-tight">박수연</h1>
          <p className="text-[11px] text-slate-500 font-medium mt-1">Android Developer<br />1996.04.30</p>
        </div>
      </div>
      <a
        href="mailto:develop.dduddu@gmail.com"
        className="bg-primary text-white px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-primary/30 active:scale-95 transition-all inline-block"
      >
        Hire Me
      </a>
    </header>
  );
};

export default Header;
