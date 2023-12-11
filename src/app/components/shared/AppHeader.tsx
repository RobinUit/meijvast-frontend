import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { Divider, List, ListItem, Drawer } from "@mui/material";

import logo from "assets/meijvast-logo.png";
import logoWithoutText from "assets/meijvast-logo-no-text.png";

import "./AppHeader.scss";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Aanbod",
    path: "/aanbod",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export default function AppHeader(props: any) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileNavOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={logoWithoutText}
        className="header-logo-mobile"
        alt="Meijvast B.V. logo"
        onClick={() => navigate("/")}
      />
      <Divider />
      <List>
        <div className="nav-links mobile">
          {navLinks.map((item, index) => (
            <ListItem key={index} disablePadding>
              <NavLink to={item.path} key={index} className="nav-link mobile">
                {item.name}
              </NavLink>
            </ListItem>
          ))}
        </div>
      </List>
    </Box>
  );

  return (
    <header>
      <AppBar component="nav" position="static" color="inherit">
        <Toolbar disableGutters>
          <Box
            className="mobile-nav"
            sx={{
              display: { xs: "flex", sm: "none" },
              alignItems: "center",
              position: "relative",
            }}
          >
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerToggle}
              sx={{
                position: "absolute",
                display: { sm: "none" },
              }}
            >
              <MenuIcon />
            </IconButton>
            <img
              src={logoWithoutText}
              className="header-logo-mobile"
              alt="Meijvast B.V. logo"
              onClick={() => navigate("/")}
            />
          </Box>
          <Box
            className="desktop-nav"
            sx={{ display: { xs: "none", sm: "flex" } }}
          >
            <img
              src={logo}
              className="header-logo"
              alt="Meijvast B.V. logo"
              onClick={() => navigate("/")}
            />

            <div className="nav-links">
              {navLinks.map((item, index) => (
                <NavLink to={item.path} key={index} className="nav-link">
                  {item.name}
                </NavLink>
              ))}
            </div>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileNavOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </header>
  );
}
