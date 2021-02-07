import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ReactDom from 'react-dom';

function App() {
  const [view, setView] = useState("search-view");
  const [search, setSearch] = useState();
  const [category, setCategory] = useState("name");
  // const [filter, setFilter] = useState("name");
  const [searchResult, setSearchResult] = useState();
  const [sortFunction, setSortFunction] = useState();

  const onCategoryChange = event => setCategory(event.target.value);

  const handleFilter = event => {
    event.preventDefault();
    // setFilter(category);
    if (category === "name") {
      setSortFunction(nameCompare);
    } else if (category === "age") {
      setSortFunction(ageCompare);
    } else if (category === "job") {
      setSortFunction(jobCompare);
    }
  }

  const onSearchChange = event => setSearch(event.target.value);

  const handleSearch = () => {
    console.log(search);
    fetch('/search', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ search: search })
    })
      .then(response => response.json())
      .then(data => setSearchResult(data))
      .then(setView("filter-view"));
  }

  const nameCompare = (name1, name2) => {
    if (name1.name < name2.name) {
      return -1;
    } else if (name2.name > name1.name) {
      return 1;
    }
    return 0;
  }

  const jobCompare = (name1, name2) => {
    if (name1.job < name2.job) {
      return -1;
    } else if (name2.job > name1.job) {
      return 1;
    }
    return 0;
  }

  const ageCompare = (name1, name2) => {
    if (name1.age < name2.age) {
      return -1;
    } else if (name2.age > name1.age) {
      return 1;
    }
    return 0;
  }

  return (
    <div className="App">
      <div className="top-bar">
      </div>
      { view === "search-view"
        ? <div className="search-view">
            <div>
            <input className="search-input" type="text" placeholder="Search" required size="30" onChange={onSearchChange}/>
              <i className="fas fa-search fa-lg" onClick={handleSearch}></i>
            </div>
          </div>
        : <div className="filter-view">
            <div className="filters">
              <h2 className="header">Filters</h2>
              <form onSubmit={handleFilter}>
                <div>
                  <input type="radio" id="name" name="name" value="name" checked={category === "name"} onChange={onCategoryChange}/>
                  <label htmlFor="name">Name</label>
                </div>
                <div>
                  <input type="radio" id="age" name="age" value="age" checked={category === "age"} onChange={onCategoryChange}/>
                  <label htmlFor="age">Age</label>
                </div>
                <div>
                  <input type="radio" id="job" name="job" value="job" checked={category === "job"} onChange={onCategoryChange}/>
                  <label htmlFor="job">Job Title</label>
                </div>
                <div classNam="input-button-container">
                  <input type="submit" value="Apply"/>
                </div>
              </form>
            </div>
            <div className="results">
              <h2 className="header">Results</h2>
              {
                searchResult ?
                <div>
                  {searchResult.sort(sortFunction).map(user => {
                    return (
                      <div className="users-result">
                        <h3>Name: {user.name}</h3>
                        <p>Age: {user.age}</p>
                        <p>Job Title: {user.job}</p>
                      </div>
                      )
                    })
                  }
                </div>
                : <>
                  </>
              }
            </div>
          </div>
        }
    </div>
  );
}

export default App;
