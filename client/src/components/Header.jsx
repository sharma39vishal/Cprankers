import React from 'react'
import "./header.css"
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const history = useLocation();
  console.log(history.pathname)
  return (
    <div class="navbar">
    <a class="navlogo">Cpranker</a>
    <button class="hamburger">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
          <path d="M3 12h18M3 6h18M3 18h18"/>
        </svg>
      </button>
    <div class="navlinkwrap">
      <span class={history?.pathname==="/"?"navlink selectedlink":"navlink" }  style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>Home</span>
      <span class={history?.pathname==="/contest"?"navlink selectedlink":"navlink"}  style={{cursor:"pointer"}} onClick={()=>{navigate("/contest")}}>Contest</span>
      <span class={history?.pathname==="/group"?"navlink selectedlink":"navlink"} style={{cursor:"pointer"}} onClick={()=>{navigate("/group")}}>Discussion</span>
      <span class={history?.pathname==="/mailsender"?"navlink selectedlink":"navlink"}  style={{cursor:"pointer"}} onClick={()=>{navigate("/mailsender")}}>Mail API</span>
    </div>
    <div class="buttonwrap">
      <button class="createbtn selectedbtn" onClick={()=>{window.location.href="https://www.linkedin.com/in/sharma39vishal/"}}>Contact</button>
    </div>
  </div>
    //   <nav className="navbar  navbar-dark bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  //   <div className="container-fluid">
  //     <a className="navbar-brand"  style={{cursor:"pointer"}} onClick={()=>{navigate("/")}}>
  //       CPRanker
  //     </a>
  //     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  //     <span class="navbar-toggler-icon"></span>
  //   </button>
  //     <div className="collapse navbar-collapse" id="navbarNavDropdown">
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <a className="nav-link"  style={{cursor:"pointer"}} onClick={()=>{navigate("/contest")}}>
  //             Contest
  //           </a>
  //         </li>
  //         <li className="nav-item dropdown">
  //           <a
  //             className="nav-link dropdown-toggle"
  //             role="button"
  //             data-bs-toggle="dropdown"
  //             aria-expanded="false"
  //             style={{cursor:"pointer"}}
  //           >
  //               Discussion
  //           </a>
  //           <ul className="dropdown-menu">
  //             <li>
  //               <a className="dropdown-item" onClick={()=>{navigate("/group/Developer")}} style={{cursor:"pointer"}}>
  //                   Developer
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" onClick={()=>{navigate("/group/DSAlgo")}}  style={{cursor:"pointer"}}>
  //                   DSAlgo
  //               </a>
  //             </li>
  //             <li>
  //               <a className="dropdown-item" onClick={()=>{navigate("/group/Gudiance")}}  style={{cursor:"pointer"}}>
  //                 Guidance
  //               </a>
  //             </li>
  //           </ul>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link"  style={{cursor:"pointer"}} onClick={()=>{navigate("/mailsender")}}>
  //             Mail Sender
  //           </a>
  //         </li>
  //       </ul>
  //     </div>
  //   </div>
  // </nav>  
  )
}
