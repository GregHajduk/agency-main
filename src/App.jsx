import Navbar from "./components/Navbar";
import Intro from "./pages/Intro";
import About from "./pages/About";
import Services from "./pages/Services";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import "./global.css";
import "./variables.css";
import { useState } from "react";

function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      <Navbar active={active} setActive={setActive} />

      <Intro />

      <About />

      <Services />

      <Work />

      <Contact />
    </>
  );
}

export default App;
