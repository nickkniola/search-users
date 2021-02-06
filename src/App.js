import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="top-bar">
      </div>
      {/* <div className="search-view">
        <div>
          <input className="search-input" type="text" placeholder="Search" required size="30"></input>
          <i className="fas fa-search fa-lg"></i>
        </div>
      </div> */}
      <div className="filter-view">
        <div className="filters">

        </div>
        <div className="results">

        </div>
      </div>
    </div>
  );
}

export default App;
