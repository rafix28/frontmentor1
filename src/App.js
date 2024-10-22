import React from 'react';
import './App.css';
import image from './assets/image-qr-code.png';

function App() {
  return (
    <div className="flex items-center justify-center bg-slate-300 min-h-screen w-full">
      <div className="bg-white p-4 rounded-3xl max-w-96 text-center  sm:m-6 md:m-12 lg:m-14 xl:m-16 2xl:m-20">
        <div>
          <img src={image} alt="" className="rounded-3xl" />
        </div>
        <h2 className="font-bold text-xl p-3">Improve your front-end skills by building projects</h2>
        <p className="p-3 text-sm">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </div>
  );
}

export default App;
