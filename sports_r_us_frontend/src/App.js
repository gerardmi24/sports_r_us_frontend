import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import DefaultHomePage from './DefaultHomePage';

function App() {
  const sports = "http://localhost:3000/sports"
  const users = "http://localhost:3000/users"
  const favorites = "http://localhost:3000/favorites"
  const teams = "http://localhost:3000/teams"
  const [search, setSearch] = useState("")
  const [allSports, setAllSports] = useState([])
  // console.log("Search", search)
  
  useEffect(() => {
    fetch(sports)
    .then(r => r.json())
    .then((sports) => {
      console.log(sports)
      // setAllSports(sports)
    });
  }, []);

  return (
    <div className="App">
     <Header search={search} setSearch={setSearch} />
     <DefaultHomePage />
    </div>
  );
}

export default App;
