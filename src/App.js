import "./App.css";
import About from "./components/About/About";
import Download from "./components/Download/Download";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Features />
      <Download />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
