import { useEffect, useRef } from "react";
import Hls from "hls.js";

interface Props {
  src: string;
  className?: string;
}

const MuxVideo = ({ src, className }: Props) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    } else if (Hls.isSupported()) {
      const hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
      return () => hls.destroy();
    }
  }, [src]);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className={className}
    />
  );
};

export default MuxVideo;
