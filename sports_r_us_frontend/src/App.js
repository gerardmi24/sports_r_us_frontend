import React, {useEffect, useState} from "react";
import './App.css';
import Header from './Header';
import DefaultHomePage from './DefaultHomePage';

function App() {
  const [search, setSearch] = useState("")
  // console.log("Search", search)

  // useEffect(() => {
  //   fetch()
  //   .then(resp => resp.json())
  //   .then((teams) => )
  // })
  
  return (
    <div className="App">
     <Header search={search} setSearch={setSearch} />
     <DefaultHomePage />
    </div>
  );
}

export default App;
