import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import SEO from "@/components/general/SEO";
import Nav from "@/components/general/nav/Nav";
import Footer from "@/components/general/footer/Footer";

export type AppEngineProps = AppProps & {
  Component: {
    title?: string;
    description?: string;
    image?: string;
    imageDescription?: string;
    locale?: string;
  };
};

export default function App({ Component, pageProps }: AppEngineProps) {
  useEffect(() => {
    aos.init({
      once: true,
      easing: "ease-in-out",
      duration: 1000
    });
  }, []);
  return (
    <>
      <SEO
        title={Component?.title}
        description={Component?.description}
        image={Component?.image}
        imageDescription={Component?.imageDescription}
        locale={Component?.locale}
      />
      <Nav />
      <div className="z-10 min-h-screen">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
