import About from "./component/About";
import Develobers from "./component/Develobers";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Subscribe from "./component/Subscribe";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Develobers />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
