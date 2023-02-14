import React from 'react'
import './navigation.css'
import useTheme from '../useTheme';
import { useNavigate } from 'react-router-dom';
function Navigation() {
    const navigate = useNavigate();
    const DarkMode = useTheme();
  return (
    <nav class=" navbar navbar-expand-lg navbar-light" >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="/assets/Oscar_logo.png" alt="" width="220" height="70" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item cursor-auto" onClick={()=>navigate("/")}>
              <a class="nav-link active pe-auto" aria-current="page" onClick={()=>navigate("/")}>
                Home
              </a>
            </li>
            <li class="nav-item cursor-auto">
              <a class="nav-link cursor-auto"onClick={()=>navigate("/contact")}>
                Contact
              </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">
                  {DarkMode}
                </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation