import React, { useEffect, useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
// import {getArticleList, searchArticle} from "./Services/api"
import './Components/fonts/IBMPlexMono-Regular.ttf'
import './Components/fonts/BeausiteClassicMedium.ttf'
import "./App.css"
// import { Router } from "react-router-dom"
import Router from "./Routers/Router"
import Navbar from "./Navigation/Navbar"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Navbar />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
