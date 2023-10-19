import Image from "next/image";
import CLAYZANE from "../images/CLAYZANE.png"
import React from 'react';

export default function Home() {
  return (
    <main>
      <div>
      <Image
        src={CLAYZANE} // Provide the path to your image
        alt="Description of the image"
        width={300} // Set the width of the image
        height={200} 
      />
      </div>
      <div className="margin-x-4">
        <button suppressHydrationWarning={true} className="cybr-btn">
        こんにちは<span aria-hidden>_</span>
          <span aria-hidden className="cybr-btn__glitch">
          こんにちは
          </span>
          <span aria-hidden className="cybr-btn__tag">
            Nexus-12
          </span>
        </button>

        <button suppressHydrationWarning={true} className="cybr-btn">
        Info<span aria-hidden>_</span>
          <span aria-hidden className="cybr-btn__glitch">
          こんにちは
          </span>
          <span aria-hidden className="cybr-btn__tag">
            Nexus-12
          </span>
        </button>

       

        
        


      </div>
    </main>
  );
}
