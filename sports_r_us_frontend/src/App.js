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
  const [allFavs, setAllFavs] = useState([])
  const [allTeams, setAllTeams] = useState([])
  const [currentUsername, setCurrentUsername] = useState("")
  
  useEffect(() => {
    fetch(sports)
    .then(r => r.json())
    .then((sports) => {
      setAllSports(sports)
    });
  }, []);

  useEffect(() => {
    fetch(users)
    .then(r => r.json())
    .then((users) => {
      setCurrentUsername(sports)
    });
  }, []);

  useEffect(() => {
    fetch(favorites)
    .then(r => r.json())
    .then((favorites) => {
      setAllFavs(favorites)
    });
  }, []);

  useEffect(() => {
    fetch(teams)
    .then(r => r.json())
    .then((teams) => {
      setAllTeams(teams)
    });
  }, []);

  function deleteFromFav() {
    console.log("Delete from fav")
  }

  function addToFav() {
    console.log("Add to fav")
  }

  return (
    <div className="App">
     <Header search={search} setSearch={setSearch} teams={allTeams} />
     <DefaultHomePage addFav={addToFav} deleteFav={deleteFromFav} search={search} currentUser={currentUsername} allSports={allSports} allTeams={allTeams} allFavs={allFavs} />
    </div>
  );
}

export default App;
