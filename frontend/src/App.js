import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Users from "./Component/Users/index";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;