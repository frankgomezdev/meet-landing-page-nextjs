import Navbar from "./components/nav/Navbar";
import Hero from "./components/hero/Hero";
import MainContent from "./components/main-content/MainContent";
import Footer from "./components/footer-cta/Footer";

export default function HomePage() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <MainContent/>
    <Footer/>
    </>
  )
}
