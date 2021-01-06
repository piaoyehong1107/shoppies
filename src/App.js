import './App.css';
import Search from '../src/Search'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          <h1>
            The Shippies' Movie awards
          </h1>
        </p>
        <p>
         <Search />
        </p>
      </header>
    </div>
  );
}

export default App;
