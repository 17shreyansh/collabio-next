"use client";

import { useState, useRef } from "react";

const ASSET = "/sites/famekeeda-com-a1b2c3d4/root-e5f6g7h8/showreel";

interface VideoPlayerProps {
  poster: string;
  src: string;
  type: string;
  className: string;
}

function VideoPlayer({ poster, src, type, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
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
    <div className={`relative rounded-[20px] overflow-hidden cursor-pointer bg-black group ${className}`} onClick={togglePlay}>
      <div 
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-10 transition-all duration-300 group-hover:bg-white/40 group-hover:scale-110 ${isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"}`}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M6 19h4V5H6zm8-14v14h4V5z"></path>
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path d="M8 5v14l11-7z"></path>
          </svg>
        )}
      </div>
      <video
        ref={videoRef}
        poster={poster}
        playsInline
        preload="metadata"
        loop
        className="w-full h-full object-cover block"
      >
        <source src={src} type={type} />
      </video>
    </div>
  );
}

export function ShowReelGrid() {
  return (
    <section className="py-[60px] px-6 bg-white max-w-[1400px] mx-auto">
      <div className="flex flex-col gap-5">
        
        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Column 1 */}
          <div className="flex flex-col gap-5">
            <VideoPlayer
              poster={`${ASSET}/PolicyBazaar_Thumbnail.webp`}
              src="https://cdn.famekeeda.com/videos/policy-bazar.webm"
              type="video/webm"
              className="aspect-video"
            />
            <div className="grid grid-cols-2 gap-5">
              <VideoPlayer
                poster={`${ASSET}/CEAT_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/Ceat.webm"
                type="video/webm"
                className="aspect-[9/16]"
              />
              <VideoPlayer
                poster={`${ASSET}/Kotak_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/Kotak.webm"
                type="video/webm"
                className="aspect-[9/16]"
              />
            </div>
          </div>
          
          {/* Column 2 */}
          <div className="flex flex-col gap-5">
            <div className="grid grid-cols-2 gap-5">
              <VideoPlayer
                poster={`${ASSET}/Mobikwik_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/mobikiwik.webm"
                type="video/webm"
                className="aspect-[9/16]"
              />
              <VideoPlayer
                poster={`${ASSET}/Skybags_Thumbnail.webp`}
                src="https://cdn.famekeeda.com/videos/Skybag.webm"
                type="video/webm"
                className="aspect-[9/16]"
              />
            </div>
            <VideoPlayer
              poster={`${ASSET}/Mstock_Thumbnail.webp`}
              src="https://cdn.famekeeda.com/videos/Mstock.webm"
              type="video/webm"
              className="aspect-video"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <VideoPlayer
            poster={`${ASSET}/Amazon_Thumbnail.webp`}
            src="https://cdn.famekeeda.com/videos/Alexa.webm"
            type="video/webm"
            className="aspect-[4/3]"
          />
          <VideoPlayer
            poster={`${ASSET}/Duracell_Thumbnail.webp`}
            src="https://storage.googleapis.com/babylonfk/Videos/Duracell.mp4"
            type="video/mp4"
            className="aspect-[4/3]"
          />
          <VideoPlayer
            poster={`${ASSET}/Intel_Thumbnail.webp`}
            src="https://cdn.famekeeda.com/videos/Intel.webm"
            type="video/webm"
            className="aspect-[4/3]"
          />
        </div>

      </div>
    </section>
  );
}
