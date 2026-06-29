import { useState, useRef } from "react";
import { motion } from "framer-motion";

const cardClass =
  "rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] p-4 sm:p-6 shadow-[var(--shadow)]";

const NoTrailer = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className={cardClass}
  >
    <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
      Trailers
    </h2>
    <div className="mt-4 flex items-center justify-center h-40 sm:h-48 rounded-xl bg-[var(--bg-secondary)]">
      <p className="text-sm sm:text-base text-[var(--text-secondary)] font-[var(--font-secondary-font)]">
        No trailer available
      </p>
    </div>
  </motion.div>
);

const GameTrailer = ({ trailers }) => {
  const [videoError, setVideoError] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showCaptions, setShowCaptions] = useState(false);
  const videoRef = useRef(null);

  if (!trailers || trailers.length === 0) return null;

  const trailer = trailers[0];

  const getVideoUrl = (t) => {
    if (!t?.data) return null;
    return t.data.max || t.data["480"] || null;
  };

  const videoUrl = getVideoUrl(trailer);
  const previewImg = trailer.preview || null;

  if (!videoUrl || videoError) return <NoTrailer />;

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleCaptions = () => {
    if (videoRef.current) {
      const tracks = videoRef.current.textTracks;
      if (tracks.length > 0) {
        tracks[0].mode = showCaptions ? "hidden" : "showing";
      }
      setShowCaptions(!showCaptions);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cardClass}
    >
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] font-[var(--font-primary-font)]">
        Trailers
      </h2>

      <div className="mt-4 relative aspect-video rounded-xl overflow-hidden bg-black/50 group">
        <video
          ref={videoRef}
          key={videoUrl}
          className="w-full h-full"
          controls
          muted
          poster={previewImg}
          onError={() => setVideoError(true)}
        >
          <source src={videoUrl} type="video/webm" />
          <source src={videoUrl.replace(".webm", ".mp4")} type="video/mp4" />
          {showCaptions && (
            <track
              kind="captions"
              srcLang="en"
              label="English"
              default
            />
          )}
        </video>

        {/* Custom Controls Overlay */}
        <div className="absolute bottom-3 right-3 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          {/* Mute Button */}
          <button
            onClick={toggleMute}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-black/70 hover:bg-black/90 text-white transition-colors backdrop-blur-sm"
            title={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <line x1="23" y1="9" x2="17" y2="15" />
                <line x1="17" y1="9" x2="23" y2="15" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </svg>
            )}
          </button>

          {/* Captions Button */}
          <button
            onClick={toggleCaptions}
            className={`flex items-center justify-center w-9 h-9 rounded-full transition-colors backdrop-blur-sm text-xs font-bold
              ${showCaptions
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-black/70 text-white hover:bg-black/90"
              }`}
            title={showCaptions ? "Hide Captions" : "Show Captions"}
          >
            CC
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GameTrailer;