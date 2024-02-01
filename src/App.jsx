import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
  return (
    <div>
      {/* Your main content goes here */}
      <section className="pb-16">
        <Home />
      </section>
      {/* Include the Navbar component at the bottom of the page */}
      <Navbar />
    </div>
  );
}

export default App;
