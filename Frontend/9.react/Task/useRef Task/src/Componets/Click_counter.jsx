import React, { useRef } from 'react';

function Click_counter() {

  const countRef = useRef(0);


  const handleClick = () => {
    countRef.current += 1;
    console.log(`Button clicked ${countRef.current} times`);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold mb-4">Click Counter</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleClick}
      >
        Click me
      </button>
      <p className="mt-4 text-lg">Button clicked {countRef.current} times</p>
    </div>
  );
}

export default Click_counter;
