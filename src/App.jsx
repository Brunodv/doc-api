import './App.css';
import MyState from './context/MyState';
import Home from './components/Home';
import Docs from './components/Docs';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
      <MyState>
      <Router basename="/doc-api"> {/* ← IMPORTANTE para GitHub Pages */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </MyState>
  );
}

export default App;
