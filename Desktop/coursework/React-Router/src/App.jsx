import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import BlueComponent from './components/Blue.jsx';
import RedComponent from './components/Red.jsx';
import HomeComponent from './components/Home.jsx';


function Home() {
  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the main section!</p>
    </div>
  );
}

function Blue() {
  return (
    <div>
      <h2>About</h2>
      <break>
      <p>This is the blue section.</p>
      </break>
    </div>
  );
}

function Red() {
  return (
    <div>
      <h2>About</h2>
      <p>This is the red section.</p>
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div id="container">
        <h1>Hello React Router!</h1>
        <div id="navbar">
          <nav>
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/blue" className="nav-link">Blue</Link>
                <Link to="/red" className="nav-link">Red</Link>
          </nav>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/blue" element={<BlueComponent />} />
            <Route path="/red" element={<RedComponent />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
