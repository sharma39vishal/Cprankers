import React from 'react'
import "./header.css"
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  return (
    <nav className="navbar  navbar-dark bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    <div className="container-fluid">
      <a className="navbar-brand"  style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>
        CPRanker
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        {/* <span style={{color:"white"}} >X</span> */}
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link"  style={{cursor:"pointer"}} onClick={()=>{navigate("/contest")}}>
              Contest
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{cursor:"pointer"}}
            >
                Discussion
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={()=>{navigate("/group/Developer")}} style={{cursor:"pointer"}}>
                    Developer
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={()=>{navigate("/group/DSAlgo")}}  style={{cursor:"pointer"}}>
                    DSAlgo
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={()=>{navigate("/group/Gudiance")}}  style={{cursor:"pointer"}}>
                  Guidance
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  )
}
