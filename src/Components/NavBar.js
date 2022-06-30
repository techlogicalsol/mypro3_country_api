import React from "react";

function NavBar(){
    return(
        <>
<nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">

  <ul class="navbar-nav">
  <span class="navbar-text">TechLogex Solutions</span>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>

      </ul>
  </div>
  
</nav>

        </>
    )
}

export default NavBar