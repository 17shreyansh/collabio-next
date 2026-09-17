"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export interface HeroSectionProps {
  title: string;
  titleHighlight: string;
  desc: string;
  buttonText: string;
  videoSrc: string;
  poster: string;
}

export function HeroSection({ title, titleHighlight, desc, buttonText, videoSrc, poster }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (isPlaying && videoRef.current) {
              videoRef.current.play().catch(console.error);
            }
          } else {
            if (videoRef.current) {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isPlaying]);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const restartVideo = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="relative w-full h-[100svh] overflow-hidden bg-fk-dark">
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          poster={poster}
          className="object-cover w-full h-full opacity-60"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-80"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-20">
        <h1 
          className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 max-w-5xl [&>span]:text-fk-red"
          dangerouslySetInnerHTML={{ __html: title + (titleHighlight ? `<br class="hidden md:block" /><span> ${titleHighlight}</span>` : "") }}
        />
        
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-8">
          {desc}
        </p>

        <button 
          className="bg-white text-fk-dark rounded-full px-8 py-3 font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center gap-2 group"
          onClick={() => {
            document.dispatchEvent(new CustomEvent('open-contact-modal'));
          }}
        >
          {buttonText}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
            <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="absolute bottom-8 right-8 z-20 flex items-center gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
        <button onClick={togglePlay} className="text-white hover:text-fk-red transition-colors" aria-label={isPlaying ? "Pause" : "Play"}>
          {isPlaying ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zm8 0h4v16h-4z"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          )}
        </button>
        <button onClick={toggleMute} className="text-white hover:text-fk-red transition-colors" aria-label={isMuted ? "Unmute" : "Mute"}>
          {isMuted ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/></svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></svg>
          )}
        </button>
        <button onClick={restartVideo} className="text-white hover:text-fk-red transition-colors" aria-label="Restart">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"/></svg>
        </button>
      </div>
    </section>
  );
}
