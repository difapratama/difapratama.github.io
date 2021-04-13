import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main id="main">
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/resume" component={Resume} exact />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
