import logo from './logo.svg';
import './App.css';
import Board from './components/Board';
import Header from './components/Header';
import Player from './components/Player';
import Clock from './components/Clock';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Player nombre="José" />
      <Clock />
      <Board />
      <Player nombre="Juan" />
      <Clock/>
      <Footer/>
    </div>
  );
}

export default App;
