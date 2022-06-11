import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home"

import RestaurantSearch from "./components/RestaurantSearch"
import RestaurantCreate from "./components/RestaurantCreate"
import RestaurantList from "./components/RestaurantList"
import RestaurantUpdate from "./components/RestaurantUpdate"
import Login from "./components/Login"
import Logout from "./components/Logout"
import Protected from "./components/Protected"
import SignUp from "./components/SignUp"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/list" element={<Protected Component={RestaurantList} />} />
          <Route path="/create" element={<Protected Component={RestaurantCreate} />} />
          <Route path="/search" element={<Protected Component={RestaurantSearch} />} />
          <Route path="/update/:id" element={<Protected Component={RestaurantUpdate} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Protected Component={Home} />} />

        </Routes>
      </Router>
    </div >
  );
}

export default App;
