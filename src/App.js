import logo from './logo.svg';
import Navbar from './components/navbar/navbar';
import Preparation from './components/preparetion/method';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Preparation />
      </header>
    </div>
  );
}

export default App;
