import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
  const [category, setCategory] = useState("name");
  const [filter, setFilter] = useState("name")


  const onCategoryChange = event => setCategory(event.target.value);

  const handleFilter = event => {
    event.preventDefault();
    setFilter(category);
  }

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
          <h2 className="header">Filters</h2>
          <form onSubmit={handleFilter}>
            <div>
              <input type="radio" id="name" name="name" value="name" checked={category === "name"} onChange={onCategoryChange}/>
              <label for="name">Name</label>
            </div>
            <div>
              <input type="radio" id="age" name="age" value="age" checked={category === "age"} onChange={onCategoryChange}/>
              <label for="age">Age</label>
            </div>
            <div>
              <input type="radio" id="job" name="job" value="job" checked={category === "job"} onChange={onCategoryChange}/>
              <label for="job">Job Title</label>
            </div>
            <div classNam="input-button-container">
              <input type="submit" value="Apply"/>
            </div>
          </form>
        </div>
        <div className="results">
          <h2 className="header">Results</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
