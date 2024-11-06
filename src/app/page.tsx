import { Footer } from "./components/footer";
import { Hero } from "./components/hero";
import { HomeContent } from "./components/home";
import { Nav } from "./components/nav";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <HomeContent />
      <Footer />
    </div>
  );
}
