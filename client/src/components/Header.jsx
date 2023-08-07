import React, { useState } from 'react'
import "./header.css"
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const history = useLocation();
  const [handburger, sethandburger] = useState(false);
  return (
    <div>
    <div className="navbar">
    <a className="navlogo">Cpranker</a>
    <button className="hamburger" onClick={()=>{sethandburger(!handburger)}}> 
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>

    <div className="navlinkwrap">
      <span className={history?.pathname==="/"?"navlink selectedlink":"navlink" }  style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>Home</span>
      <span className={history?.pathname==="/contest"?"navlink selectedlink":"navlink"}  style={{cursor:"pointer"}} onClick={()=>{navigate("/contest")}}>Contest</span>
      <span className={history?.pathname==="/group"?"navlink selectedlink":"navlink"} style={{cursor:"pointer"}} onClick={()=>{navigate("/group")}}>Discussion</span>
      <span className={history?.pathname==="/mailsender"?"navlink selectedlink":"navlink"}  style={{cursor:"pointer"}} onClick={()=>{navigate("/mailsender")}}>Mail API</span>
    </div>
    <div className="buttonwrap">
      <button className="createbtn selectedbtn" onClick={()=>{window.location.href="https://www.linkedin.com/in/sharma39vishal/"}}>Contact</button>
    </div>

  </div>
  {handburger?<div style={{display:'flex',margin:" 0px 10%",textAlign:"left",flexDirection:"column"}}>
        <span className={history?.pathname==="/"?"navlink selectedlink":"navlink" }  style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>Home</span>
        <span className={history?.pathname==="/contest"?"navlink selectedlink":"navlink"}  style={{cursor:"pointer"}} onClick={()=>{navigate("/contest")}}>Contest</span>
        <span className={history?.pathname==="/group"?"navlink selectedlink":"navlink"} style={{cursor:"pointer"}} onClick={()=>{navigate("/group")}}>Discussion</span>
        <span className={history?.pathname==="/mailsender"?"navlink selectedlink":"navlink"}  style={{cursor:"pointer"}} onClick={()=>{navigate("/mailsender")}}>Mail API</span>
    </div>:null}

  </div>
  )
}
