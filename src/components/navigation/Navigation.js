// import React from 'react'
// import './navigation.css'
// import useTheme from '../useTheme';
// import { useNavigate } from 'react-router-dom';
// function Navigation() {
//     const navigate = useNavigate();
//     const DarkMode = useTheme();
//   return (
//     <nav class=" navbar navbar-expand-lg navbar-light" >
//       <div class="container-fluid">
//         <a class="navbar-brand" href="#">
//           <img src="/assets/Oscar_logo.png" alt="" width="220" height="70" />
//         </a>
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavDropdown"
//           aria-controls="navbarNavDropdown"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavDropdown">
//           <ul class="navbar-nav">
//             <li class="nav-item cursor-auto" onClick={()=>navigate("/")}>
//               <a class="nav-link active pe-auto" aria-current="page" onClick={()=>navigate("/")}>
//                 Home
//               </a>
//             </li>
//             <li class="nav-item cursor-auto">
//               <a class="nav-link cursor-auto"onClick={()=>navigate("/contact")}>
//                 Contact
//               </a>
//             </li>
//             <li class="nav-item cursor-auto">
//               <a class="nav-link cursor-auto"onClick={()=>navigate("/about")}>
//                 About
//               </a>
//             </li>
//             <li class="nav-item cursor-auto">
//               <a class="nav-link cursor-auto"onClick={()=>navigate("/news")}>
//                 News
//               </a>
//             </li>

            
//             <li class="nav-item">
//                 <a class="nav-link" href="#">
//                   {DarkMode}
//                 </a>
//             </li>
//             <li class="nav-item cursor-auto">
//               <a class="btn btn-primary nav-link cursor-auto"onClick={()=>navigate("/news")}>
//                 Login
//               </a>
//             </li>

//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navigation

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { UserAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom/dist';
import Login from '../Login';
const pages = [{name:'Home',url:"/"},{name:'About us',url:"/about"},{name:'Contact',url:"/contact"}];
function Navigation() {
  const {user, logOut} = UserAuth();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
const handleSignOut = async ()=>{
  try {
    await logOut()
  } catch (error) {
    console.log(error);
  }
}
  const [anchorElNav, setAnchorElNav] = React.useState(null);
   const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            OSCAR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={()=>navigate(page.url)}
                >
                  <Typography textAlign="center" oncl>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            OSCAR
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={()=>navigate(page.url)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
              {user?.displayName?(
                <div>
                <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.email} src={user.photoURL} />
                <Typography textAlign="center">

                            Welcome, {user.displayName}
          </Typography>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
               <MenuItem  onClick={handleCloseUserMenu}>
                <Typography textAlign="center" ><Link to='/dashboard' style={{textDecoration:"none"}}>Dashboard</Link></Typography>
                </MenuItem>
                <MenuItem>
                <Typography textAlign="center" onClick={handleSignOut}>Logout</Typography>
                </MenuItem>
            </Menu>
                </div>
              ):(
                <Link to='/login' style={{textDecoration:"none"}} >
                  <Button 
                sx={{ my: 2,  color: 'white', display: 'block' }} 
                >
                  Sign in
                  </Button>
                  </Link>
               )}
          </Box>
        </Toolbar>
      </Container>
   
    </AppBar>
  );
}
export default Navigation;