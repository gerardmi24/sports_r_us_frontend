import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import { Switch, Route } from "react-router-dom";
import NavagationBar from './NavagationBar';
import LoginForm from './LoginForm';
import AllTeamsContainer from './AllTeamsContainer';
import ProfilePage from './ProfilePage'
import Search from './Search.js'
import Dropdown from "./Dropdown";

function App() {
  const sports = "http://localhost:3000/sports/"
  const users = "http://localhost:3000/users/"
  const favorites = "http://localhost:3000/favorites/"
  const teams = "http://localhost:3000/teams/"
  const [search, setSearch] = useState("")
  const [allSports, setAllSports] = useState([])
  const [allFavs, setAllFavs] = useState([])
  const [allTeams, setAllTeams] = useState([])
  const [currentUserName, setCurrentUserName] = useState("")
  const [profileClicked, setProfileClicked] = useState(false)
  const [goHomePage, setGoHomePage] = useState(false)
  const [signedIn, setSignedIn] = useState(false)
  const [page, setPage] = useState("/")
  const [loggedIn, setLoggedIn] = useState(false)
  const [currentSport, setCurrentSport] = useState("All")

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
      setCurrentUserName(users)
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
  }

  function homePage(e) {
    setGoHomePage(!goHomePage)
  }

  function changeSignIn(e) {
    setSignedIn(!signedIn)
  }

  function editRoster(e, team, currentRoster){
    fetch(`http://localhost:3000/teams/${team.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({roster: currentRoster})
    })
    .then(r => r.json())
    .then((fixedRoster) => {
      let newAllFavs = [...allFavs]
      let favObj = newAllFavs.find(fav => fav.team_id === fixedRoster.id)
      let favIdx = newAllFavs.indexOf(favObj)
      newAllFavs[favIdx].team = fixedRoster
      setAllFavs(newAllFavs)
    })
  }

  function changeLog(e) {
    setLoggedIn(!loggedIn)
    setSignedIn(!signedIn)
  }

  const searchTeams = allTeams.filter((team) => 
    team.city.toLowerCase().includes(search.toLowerCase())
    // setAllTeams(searchTeams)
  )

  const searchSport = allTeams.filter((team) => 
    team.sport.sport_name.toLowerCase() === currentSport.toLowerCase()
    // setAllTeams(searchSport)
  )

  return (
    <div className="App">
      <NavagationBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Header />
          <LoginForm loggedIn={loggedIn} changeLog={changeLog} changedSignIn={changeSignIn} signedIn={signedIn} currentUserName={currentUserName} />
        </Route>
        <Route exact path="/home">
          <Header />
          {signedIn ? <Search setSearch={setSearch} search={search} /> : null}
          {signedIn ? <Dropdown allSports={allSports} setCurrentSport={setCurrentSport} currentSport={currentSport} /> : null}
          {signedIn ? <AllTeamsContainer search={search} currentSport={currentSport} allFavs={allFavs} signedIn={signedIn} currentUserName={currentUserName} search={search} favLink={favorites} addFav={addToFav} allSports={allSports} searchSport={searchSport} allTeams={searchTeams} /> : null}
        </Route>
        <Route exact path="/profile">
          <Header />
          {signedIn ? <ProfilePage allFavs={allFavs} editRoster={editRoster} userPage={userPage} signedIn={signedIn} deleteFav={deleteFromFav} allSports={allSports} /> : null}
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
