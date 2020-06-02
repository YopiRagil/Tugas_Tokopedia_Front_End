import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Notif from "./HeaderNotif";
import NavbarProfile from "./HeaderNavProfile";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import TextField from "@material-ui/core/TextField";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "fixed",
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "560px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "250px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    background: "#bebebe",
    borderRadius: "0px 5px 5px 0px",
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "503px",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
    borderColor: "green",
  },
  inputInput: {
    fontSize: "3rem",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
      position: "fixed",
      marginLeft: "900px",
    },
  },
  notif: {
    borderRight: "1px solid",
    height: "30px",
    paddingRight: "20px",
    margin: "10% 0 10% 0  ",
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});
export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [NotifanchorEl, setNotifAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isNotifOpen = Boolean(NotifanchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };
  const handleNotifMenuOpen = (event) => {
    setNotifAnchorEl(event.currentTarget);
  };

  const handleNotifMenuClose = () => {
    setNotifAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      style={{ marginTop: "50px", height: "600px" }}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      id={menuId}
      keepMounted
      className="backgroundHover"
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <NavbarProfile {...props} />
    </Menu>
  );
  const notifId = "primary-search-account-notif";
  const renderNotif = (
    <Menu
      style={{ marginTop: "50px", height: "550px" }}
      anchorEl={NotifanchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      id={notifId}
      keepMounted
      className="backgroundHover"
      transformOrigin={{ vertical: "top", horizontal: "center" }}
      open={isNotifOpen}
      onClose={handleNotifMenuClose}
    >
      <Notif {...props} />
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar
        position="static"
        color="white"
        style={{ zIndex: "9009", background: "white", position: "fixed" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <img className="logotoped" src={require("../media/logo.png")} />
          </IconButton>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <ThemeProvider theme={theme}>
              <TextField
                size="small"
                id="mui-theme-provider-outlined-input"
                variant="outlined"
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </ThemeProvider>
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              aria-controls={notifId}
              aria-haspopup="true"
              onClick={handleNotifMenuOpen}
              color="inherit"
              aria-label="show 17 new notifications"
            >
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <div className={classes.notif}></div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <img className="logoProfile" src={props.avatar} />
              <Typography
                style={{ fontSize: "14px", marginLeft: "10px", color: "gray" }}
              >
                {props.name}
              </Typography>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderNotif}
    </div>
  );
}
