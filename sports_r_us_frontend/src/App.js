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
  const [profileClicked, setProfileClicked] = useState("false")
  const [signedIn, setSignedIn] = useState("false")
  // console.log(currentUsername)

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
      setCurrentUsername(users)
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

  function userPage(e) {
    setProfileClicked(!profileClicked)
    console.log("Profile", profileClicked)
  }

  function changeSignIn(e) {
    setSignedIn(!signedIn)
    console.log("Signed In", signedIn)
  }

  return (
    <div className="App">
     <Header signIn={changeSignIn} profile={userPage} search={search} currentUsername={currentUsername} setSearch={setSearch} teams={allTeams} />
     <DefaultHomePage signedIn={signedIn} profileClick={profileClicked} addFav={addToFav} deleteFav={deleteFromFav} search={search} currentUser={currentUsername} allSports={allSports} allTeams={allTeams} allFavs={allFavs} />
    </div>
  );
}

export default App;
