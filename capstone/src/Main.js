import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
import About from "./About";

export default function Main() {
  return (
    <main className="Main">
      <Hero />
      <Highlights />
      <Testimonials />
      <About />
    </main>
  );
}
