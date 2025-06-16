import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TierList from './pages/TierList';
import Character from './pages/Character';
import Guide from './pages/Guide';

function App() {
  return (
    <Router>
      <header className="bg-gradient-to-r from-primary to-secondary p-4 text-center">
        <h1 className="text-2xl font-bold">✨ Enigma — Etheria: Restart</h1>
        <nav className="mt-2 flex justify-center gap-4">
          <Link to="/" className="hover:text-primary">Inicio</Link>
          <Link to="/tierlist" className="hover:text-primary">Tier List</Link>
          <Link to="/guia" className="hover:text-primary">Guía</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tierlist" element={<TierList />} />
        <Route path="/character/:id" element={<Character />} />
        <Route path="/guia" element={<Guide />} />
      </Routes>
    </Router>
  );
}

export default App;