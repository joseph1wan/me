import { useState } from 'react';

export default function Home() {
  {/* const [text, setText] = useState<string>("404 | Not Found") */}
  const [text, setText] = useState<string>("404 | Not Found")

  return (
    <div className="grid h-screen px-4 place-content-center"> 
      <h1 className="tracking-widest text-gray-400 uppercase"> 
        <a href="/" 
          onMouseEnter={() => setText("Return Home")}
          onMouseLeave={() => setText("404 | Not Found")}
        >
          {text}
        </a>
      </h1>
    </div>
  );
}
