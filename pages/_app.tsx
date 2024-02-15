"use client";
import { useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll({
        lenisOptions: {
          lerp: 0.05,
        },
      });
    })();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
