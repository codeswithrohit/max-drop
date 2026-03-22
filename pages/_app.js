import Footer from "@/src/components/reusable/Footer";
import Header from "@/src/components/reusable/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />

      <Component {...pageProps} />

      <Footer />
    </>
  );
}