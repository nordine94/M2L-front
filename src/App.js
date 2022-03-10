import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect }from "react";
import "./App.css";
import Home from "./pages/Accueil/Home";
import SignIn from "./pages/Inscriptions/SignIn";
import Login from "./pages/IdentificationUser/LoginUser";
import axios from "axios";
<<<<<<< HEAD
import Reservation from "./pages/reservation/reservation";
=======
import { AuthContext } from "../src/components/context/auth";

>>>>>>> master
function App() {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

<<<<<<< HEAD
  useEffect (() => {
    getUsers();
  }, [])


=======
  
>>>>>>> master
  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={ <Home />} />
<<<<<<< HEAD
            <Route path="/prestations" element={ <Reservation />} />
=======
            <Route path="/inscriptions" element={ <SignIn />} />
            <Route path="/login" element={ <Login />} />
>>>>>>> master
          </Routes>
      </Router>
     
    </div>
    </AuthContext.Provider>
  );
}

export default App;
