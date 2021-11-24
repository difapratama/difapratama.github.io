import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <div class="site-wrapper">
          <Navbar />
          <main class="content float-right">
            <Switch>
              <Route path="/" component={Home} exact></Route>
              <Route path="/about" component={About} exact></Route>
              <Route path="/Services" component={Services}></Route>
              <Route path="/resume" component={Resume}></Route>
              <Route path="/Works"></Route>
              <Route path="/Blog"></Route>
              <Route path="/contact" component={Contact}></Route>
            </Switch>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
