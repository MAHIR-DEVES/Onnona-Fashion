import { useRef, useState } from 'react';
import Video from '../../assets/video/Video.mp4';

const Slider = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const handleToggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Container with responsive height */}
      <div className="relative w-full h-[60vh] md:h-screen">
        {/* Video with aspect ratio on mobile */}
        <video
          ref={videoRef}
          src={Video}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover md:object-cover"
        />

        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent md:from-black/40" />

        {/* Title Overlay - positioned better for mobile */}
        <div className="absolute bottom-20 left-4 right-4 md:bottom-6 md:left-6 text-white max-w-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-2 drop-shadow-lg">
            New Premium Collection 💯
          </h1>
          <p className="text-sm md:text-base opacity-90 drop-shadow">
            আমাদের কাছে পেয়ে যাচ্ছেন অরিজিনাল সিল্ক কাতান শাড়ী কালেকশন 💯
          </p>
        </div>

        {/* Controls - adjusted for mobile */}
        <div className="absolute bottom-4 md:bottom-6 right-4 md:right-6 flex space-x-3 md:space-x-4">
          <button
            onClick={handleTogglePlay}
            className="
              bg-black/70 hover:bg-black/90
              text-white
              px-3 py-2 md:px-4 md:py-3
              rounded-full
              transition-all duration-200
              shadow-lg
              flex items-center space-x-2
              backdrop-blur-sm
            "
          >
            {isPlaying ? (
              <>
                <span className="text-base md:text-lg">⏸️</span>
                <span className="text-xs md:text-sm">Pause</span>
              </>
            ) : (
              <>
                <span className="text-base md:text-lg">▶️</span>
                <span className="text-xs md:text-sm">Play</span>
              </>
            )}
          </button>

          <button
            onClick={handleToggleMute}
            className="
              bg-black/70 hover:bg-black/90
              text-white
              px-3 py-2 md:px-4 md:py-3
              rounded-full
              transition-all duration-200
              shadow-lg
              flex items-center space-x-2
              backdrop-blur-sm
            "
          >
            {isMuted ? (
              <>
                <span className="text-base md:text-lg">🔇</span>
                <span className="text-xs md:text-sm">Sound On</span>
              </>
            ) : (
              <>
                <span className="text-base md:text-lg">🔊</span>
                <span className="text-xs md:text-sm">Sound Off</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Optional: Content below the video on mobile */}
      <div className="md:hidden bg-gray-50 p-6">
        <h2 className="text-xl font-bold mb-3">More Content Below</h2>
        <p className="text-gray-600">
          This section appears below the video on mobile devices. You can add
          more content here.
        </p>
      </div>
    </div>
  );
};

export default Slider;
