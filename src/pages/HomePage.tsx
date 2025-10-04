import About from "@/components/layout/About";
import PortfolioForm from "@/components/layout/PortFolioForm";
import Hero from "@/components/layout/Hero";
import Work from "@/components/layout/Work";
import MySkills from "@/components/layout/Skills";

function HomePage() {
    return ( 
        <>
      <Hero />
      <About />
      <Work />
      <MySkills />
      <PortfolioForm />
        </>
     );
}

export default HomePage;