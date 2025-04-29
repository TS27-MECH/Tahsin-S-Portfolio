import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "Precision. Innovation. Transformation.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            onComplete();
          }, 400); // fade-out duration matches here
        }, 300); // slight pause after typing
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center p-4 transition-opacity duration-400 ease-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="mb-4 font-mono font-bold text-center text-lg sm:text-xl md:text-4xl">
        <div className="inline-flex flex-wrap items-center justify-center">
          {text}
          <span className="animate-blink ml-1">|</span>
        </div>
      </div>

      <div className="w-[70%] max-w-[300px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
