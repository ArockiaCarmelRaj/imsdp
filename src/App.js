import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import History from './components/History';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Sidebar />
      <History />
      
    </div>
  );
}

export default App;

