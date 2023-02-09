import React from "react";
import { Routes, BrowserRouter, Route, } from "react-router-dom";
import Insight from "../Pages/Insight";
import InsightDetail from "../Pages/InsightDetail";

function Router(params) {
    return (        
    <Routes>
        <Route exact path="/" element={<Insight/>}/>
        <Route path="/insight/:newsItemPublishedAt" element={<InsightDetail/>}/>
    </Routes>        
    )
}

export default Router