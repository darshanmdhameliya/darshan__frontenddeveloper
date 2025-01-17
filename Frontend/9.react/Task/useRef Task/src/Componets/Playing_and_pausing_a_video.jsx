import React, { useRef } from 'react';

const Playing_and_pausing_a_video = () => {
  const iframeRef = useRef(null);

  const playVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
      // iframeRef.current.play()
    }
  };

  const pauseVideo = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      // iframeRef.current.pause()
    }
  };

  return (
    <div className="flex flex-col items-center">
      <iframe
        ref={iframeRef}
        width="384"
        height="384"
        src="https://www.youtube.com/embed/xH-73uxXWbQ?enablejsapi=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="border border-gray-300 rounded-md mb-4"
      ></iframe>
      
      <div>
        <button
          onClick={playVideo}
          className="bg-blue-500 text-white rounded-md px-4 py-2 mr-2 hover:bg-green-600"
        >
          Play
        </button>
        <button
          onClick={pauseVideo}
          className="bg-red-500 text-white rounded-md px-4 py-2 hover:bg-red-600"
        >
          Pause
        </button>
      </div>
    </div>
  );
};

export default Playing_and_pausing_a_video;
