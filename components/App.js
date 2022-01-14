import React from "react"
import Signup from "./Signup";
import { Container } from 'react-bootstrap'
//import {BrowserRouter as Router, Switch, Route } from "react-router-dom"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Dashboard from "./Dashboard";
import Login from "./Login";
import Share from "./Share"
import AddPhysician from "./AddPhysician";
// import ErrorPage from "./Pages/ErrorPage";


const  App = () => {
  return (
    <Container className = "d-flex algin-items-center justify-content-center" 
    style = {{minHeight: "100vh"}}
    >
      <div className = "w-100" style = {{maxWidth: "400px"}}>
        <Router> 
          <Routes>

            <Route path = "/signup" element = {<Signup />}/>
            <Route path = "/" element = {<Login />}/>
            <Route path = "/dashboard" element = {<Dashboard />}/>
            <Route path = "/share" element = {<Share />}/>
            <Route path = "/share/add-physician" element = {<AddPhysician />}/>
            {/* <Route path = "*" element = {<ErrorPage />}/> */}
          </Routes>
        </Router> 
        
      </div>
      
    </Container>
   
  );
    
};

export default App
