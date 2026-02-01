import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-4">
        <p className="text-sm uppercase tracking-widest opacity-70">
          Preparing something special
        </p>
        <div className="text-4xl font-bold animate-pulse">
          🎂
        </div>
      </div>
    </div>
  );
};

export default Loader;
