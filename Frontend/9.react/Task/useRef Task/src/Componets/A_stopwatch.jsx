import React, { useState, useRef, useEffect } from 'react';

const A_stopwatch = () => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timeInterval = useRef(null);

  const handleStart = () => {
    if (isRunning) return;
    setIsRunning(true);
    timeInterval.current = setInterval(() => {
      setTimer((prev) => prev + 10);
    }, 10);
  };

  const handlePause = () => {
    if (!isRunning) return;
    setIsRunning(false);
    clearInterval(timeInterval.current);
  };

  const handleReset = () => {
    setIsRunning(false);
    clearInterval(timeInterval.current);
    setTimer(0);
  };

  const formatTime = (time) => {
    const minutes = Math.floor((time / 60000) % 60).toString().padStart(2, '0');
    const seconds = Math.floor((time / 1000) % 60).toString().padStart(2, '0');
    const milliseconds = (time % 1000).toString().padStart(3, '0');
    return { minutes, seconds, milliseconds };
  };

  const { minutes, seconds, milliseconds } = formatTime(timer);

  useEffect(() => {
    return () => clearInterval(timeInterval.current);
  }, []);

  return (
    <div className='text-center p-8 m-8'>
      <h1 className='bg-fuchsia-400 rounded-xl inline-block p-2 text-2xl'>Stopwatch</h1>
      <div className="timer-box">
        {minutes}:{seconds}:{milliseconds}
      </div>
      <div className="flex justify-center gap-5">
        <button className='bg-blue-500 px-5 py-2 rounded-md' onClick={handleStart}>Start</button>
        <button className='bg-green-500 px-5  py-2 rounded-md' onClick={handlePause}>Pause</button>
        <button className='bg-yellow-500 px-5  py-2 rounded-md' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default A_stopwatch;