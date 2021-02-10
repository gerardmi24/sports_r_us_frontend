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
  const [profileClicked, setProfileClicked] = useState("")
  const [signedIn, setSignedIn] = useState("")
  // const [eric, setEric] = useState({})
  // const [gerard, setGerard] = useState({})
  // const [annie, setAnnie] = useState({})
  // console.log(signedIn)

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
      // .then((users) => users.map((user) => {
      //   setEric(user[0]),
      //   setGerard(user[1]),
      //   setAnnie(user[2])
      // })
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
    // console.log("Delete from fav")
  }

  function addToFav(newFav) {
    // console.log("New fav", newFav)
    setAllFavs([...allFavs, newFav])
    // console.log("Updated Favs", allFavs)
  }

  function userPage(e) {
    setProfileClicked(!profileClicked)
    // console.log("Profile", profileClicked)
  }

  function changeSignIn(e) {
    setSignedIn(!signedIn)
    // console.log("Signed In", signedIn)
  }

  return (
    <div className="App">
     <Header signedIn={signedIn} changeSignIn={changeSignIn} profile={userPage} search={search} currentUsername={currentUsername} setSearch={setSearch} teams={allTeams} />
     <DefaultHomePage favLink={favorites} signedIn={signedIn} profileClick={profileClicked} addFav={addToFav} deleteFav={deleteFromFav} search={search} currentUserName={currentUsername} allSports={allSports} allTeams={allTeams} allFavs={allFavs} />
    </div>
  );
}

export default App;
