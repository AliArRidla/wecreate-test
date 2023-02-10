import {render, screen, cleanup} from "@testing-library/react"
import Navbar from "../../Navigation/Navbar"
import "jest-dom/extend-expect";
import React from "react";
import { BrowserRouter, useNavigate } from 'react-router-dom';
import axios from "axios";
import Insight from "../../Pages/Insight";
import * as APIService from "../../Services/api";
import InsightDetail from "../../Pages/InsightDetail";
import App from '../../App';

afterEach(() => {
    cleanup(); 
})

jest.mock("../../Services/api")


describe("Test Api on insight page", ()=> {
    test.only("call data from on free API", async () => {
        APIService.getArticleList.mockResolvedValueOnce({ok : true})
        expect(APIService.getArticleList).toReturn
    })
})

describe("Test Insight page", () => {
    test("renders the Insight page", ()=>{
        render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
        
        )
        expect(screen.getAllByRole("nav"))
    })
})



