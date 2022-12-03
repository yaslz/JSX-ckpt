import './App.css';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import Movielist from './Components/Movielist'

function App() {
  return (
    <div className="App">
    <NavBar/>
    <Home/>
    <div>
      <Movielist/>
    </div>
    </div>
  );
}

export default App;
