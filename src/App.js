import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useEffect }from "react";
import "./App.css";
import Home from "./pages/Accueil/Home";
import SignIn from "./pages/Inscriptions/SignIn";
import axios from "axios";

function App() {

  const getUsers = async () => {
    const result = await axios.get("http://localhost:8000/admin");
    console.log(result.data.success);
  }

  useEffect (() => {
    getUsers();
  }, [])

  
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/inscriptions" element={ <SignIn />} />
          </Routes>
      </Router>
     
    </div>
  );
}

export default App;
