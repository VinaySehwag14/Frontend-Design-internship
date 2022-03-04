import "./App.css";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
