import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import DefaultHomePage from './DefaultHomePage';
import { Switch, Route } from "react-router-dom";
import NavagationBar from './NavagationBar';
import LoginForm from './LoginForm';
import AllTeamsContainer from './AllTeamsContainer';
import ProfilePage from './ProfilePage'
import Search from './Search.js'

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
    // console.log("Id", id)
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

  const searchTeams = allTeams.filter((team) => 
    team.city.toLowerCase().includes(search.toLowerCase()))

  function editRoster(e, team, currentRoster){
    console.log("PATCH Edit Id", team, team.id, currentRoster)
    // e.preventDefault()
    // console.log("Roster Edit", e, currentRoster)
    // setCurrentRoster(e.target.value)
    fetch(`http://localhost:3000/teams/${team.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({roster: currentRoster})
    })
    .then(r => r.json())
    .then((fixedRoster) => {
      console.log("FixedRoster", fixedRoster)
      // let newAllTeams = [...allTeams]
      // let teamObj = newAllTeams.find(team => team.id === fixedRoster.id)
      // let teamIdx = newAllTeams.indexOf(teamObj)
      // newAllTeams[teamIdx] = fixedRoster
      // setAllTeams(newAllTeams)
      let newAllFavs = [...allFavs]
      console.log("New all favs", newAllFavs)
      let favObj = newAllFavs.find(fav => fav.team_id === fixedRoster.id)
      let favIdx = newAllFavs.indexOf(favObj)
      console.log("Fav index", favIdx)
      console.log("Fav Obj", favObj)

      newAllFavs[favIdx].team = fixedRoster
      console.log("All new favs", newAllFavs)
      setAllFavs(newAllFavs)
    })
  }

  return (
    <div className="App">
      <NavagationBar onChangePage={setPage} />
      <Switch>
        <Route exact path="/">
          <Header signedIn={signedIn} changeSignIn={changeSignIn} returnHome={homePage} goToProfile={userPage} search={search} currentUserName={currentUserName} setSearch={setSearch} teams={allTeams} />
          <LoginForm changedSignIn={changeSignIn} signedIn={signedIn} currentUserName={currentUserName} />
          {/* <DefaultHomePage goHomePage={goHomePage} favLink={favorites} signedIn={signedIn} profileClicked={profileClicked} addFav={addToFav} deleteFav={deleteFromFav} search={search} currentUserName={currentUserName} allSports={allSports} allTeams={allTeams} allFavs={allFavs} /> */}
        </Route>
        {/* <Route exact path="/login">
          <Header signedIn={signedIn} changeSignIn={changeSignIn} returnHome={homePage} goToProfile={userPage} search={search} currentUserName={currentUserName} setSearch={setSearch} teams={allTeams} />
          <LoginForm changedSignIn={changeSignIn} signedIn={signedIn} currentUserName={currentUserName} />
        </Route> */}
        <Route exact path="/home">
          <Header signedIn={signedIn} changeSignIn={changeSignIn} returnHome={homePage} goToProfile={userPage} search={search} currentUserName={currentUserName} setSearch={setSearch} teams={allTeams} />
          <Search setSearch={setSearch} search={search} />
          <AllTeamsContainer signedIn={signedIn} currentUserName={currentUserName} search={search} favLink={favorites} addFav={addToFav} allSports={allSports} allTeams={searchTeams} />
        </Route>
        <Route exact path="/profile">
          <Header signedIn={signedIn} changeSignIn={changeSignIn} returnHome={homePage} goToProfile={userPage} search={search} currentUserName={currentUserName} setSearch={setSearch} teams={allTeams} />
          <ProfilePage allFavs={allFavs} editRoster={editRoster} userPage={userPage} profileClicked={profileClicked} signedIn={signedIn} deleteFav={deleteFromFav} allSports={allSports} />
        </Route>
        <Route path="*">
          <h1>404 not found</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
