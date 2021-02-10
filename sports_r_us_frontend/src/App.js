import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import DefaultHomePage from './DefaultHomePage';

function App() {
  const sports = "http://localhost:3000/sports/"
  const users = "http://localhost:3000/users/"
  const favorites = "http://localhost:3000/favorites/"
  const teams = "http://localhost:3000/teams/"
  const [search, setSearch] = useState("")
  const [allSports, setAllSports] = useState([])
  const [allFavs, setAllFavs] = useState([])
  const [allTeams, setAllTeams] = useState([])
  const [currentUsername, setCurrentUsername] = useState("")
  const [profileClicked, setProfileClicked] = useState(false)
  const [goHomePage, setGoHomePage] = useState(false)
  const [signedIn, setSignedIn] = useState(false)

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

  function deleteFromFav(id) {
    const newAllFavs = allFavs.filter((fav) => fav.id !== id)
    setAllFavs(newAllFavs)
  }

  function addToFav(newFav) {
    setAllFavs([...allFavs, newFav])
  }

  function userPage(e) {
    setProfileClicked(!profileClicked)
    console.log("Profile Clicked", profileClicked)
  }

  function homePage(e) {
    setGoHomePage(!goHomePage)
    console.log("Home Clicked", goHomePage)
  }

  function changeSignIn(e) {
    setSignedIn(!signedIn)
  }

  return (
    <div className="App">
     <Header signedIn={signedIn} changeSignIn={changeSignIn} returnHome={homePage} goToProfile={userPage} search={search} currentUsername={currentUsername} setSearch={setSearch} teams={allTeams} />
     <DefaultHomePage goHomePage={goHomePage} favLink={favorites} signedIn={signedIn} profileClicked={profileClicked} addFav={addToFav} deleteFav={deleteFromFav} search={search} currentUserName={currentUsername} allSports={allSports} allTeams={allTeams} allFavs={allFavs} />
    </div>
  );
}

export default App;
