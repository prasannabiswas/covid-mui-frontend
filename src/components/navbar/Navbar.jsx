import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import SearchIcon from "@mui/icons-material/Search";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import { Avatar, Link, Tooltip } from "@mui/material";

const leftLinks = [
  {
    title: "Home",
    pathLink: "#home",
  },
  {
    title: "About",
    pathLink: "#about",
  },
  {
    title: "Take Action",
    patpathLink: "#action",
  },
];

const rightLinks = [
  {
    title: "News",
    pathLink: "#news",
  },
  {
    title: "Doctors",
    pathLink: "#doctors",
  },
  {
    title: "Contact",
    patpathLink: "#contact",
  },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ height: "5.5rem" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <SearchIcon
            sx={{
              display: { xs: "none", md: "flex" },
              height: 30,
              scale: "2",
              cursor: "pointer",
            }}
          />

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {leftLinks.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.pathLink}>
                    <Typography
                      textAlign="center"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
              {rightLinks.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.pathLink}>
                    <Typography
                      textAlign="center"
                      sx={{ textDecoration: "none", color: "black" }}
                    >
                      {page.title}
                    </Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CoronavirusIcon
            sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
          />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".1rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            CORONA
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "center",
              gap: 6,
            }}
          >
            {leftLinks.map((link, key) => {
              return (
                <Link key={key} href={link.pathLink}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.title}
                  </Button>
                </Link>
              );
            })}
            <Button
              onClick={handleCloseNavMenu}
              sx={{
                my: 2,
                color: "white",
                display: "block",
                fontWeight: "bold",
                fontSize: "1.2rem",
              }}
            >
              CORONA
            </Button>
            {rightLinks.map((link, key) => {
              return (
                <Link key={key} href={link.pathLink}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontWeight: 500,
                      fontSize: "0.8rem",
                      textTransform: "uppercase",
                    }}
                  >
                    {link.title}
                  </Button>
                </Link>
              );
            })}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="User">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
