import { useEffect } from "react";
import { useState } from "react";

function LoadingScreen({onComplete}) {
  const [text, setText] = useState("");
  const fullText = "<Welcome To Ahmed Fadl Portfolio/>";

  useEffect(function () {
    let i = 0;
    const interval = setInterval(function () {
      setText(fullText.substring(0, i));
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(onComplete , 2000);
      }
      i++;
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);
  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center z-50 w-full h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden text-gray-500">
      <div className="mb-7 text-center text-4xl font-bold font-mono">
        {text} <span className="animate-pulse">|</span>
      </div>
      <div className="w-[300px] h-[4px] bg-gray-800 rounded relative overflow-hidden">
        <div className="h-full w-[40%] bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
