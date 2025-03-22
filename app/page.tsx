// import { FaHome } from "react-icons/fa";
import Hero from "./components/Hero";
// import { FloatingNav } from "./components/ui/flootingNav";
import Grid from "./components/Grid";
import Recentproject from "./components/Recentproject";
import Experience from "./components/Experience";
import Clients from "./components/clients";
import Footer from "./components/Footer";
import { Navbar } from "./components/navBar";
import ScrollToTop from "./components/ui/ScrollToTop";


export default function Home() {
  return (
   <main className=" relative bg-black flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        {/* <FloatingNav navItems={[
          {name: "Home", link:"/", icon: <FaHome/>},
        ]}/> */}
        <Navbar/>
        <Hero />
        <Grid/>
        <Recentproject/>
        <Clients/>
        <Experience/>
        <Footer/>
        <ScrollToTop />
      </div>
   </main>
  );
}
