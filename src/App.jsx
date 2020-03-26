import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialog from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={style.wrapper}>
        <Header/>
        <NavBar/>
        <main>
          <Route path='/profile' component={Profile}/>
          <Route path='/message' component={Dialog}/>
          <Route path='/news' component={News}/>
          <Route path='/music' component={Music}/>
          <Route path='/settings' component={Settings}/>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
