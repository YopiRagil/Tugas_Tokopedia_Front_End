import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import HomeIcon from "@material-ui/icons/Home";
import ChatIcon from "@material-ui/icons/Chat";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import AssignmentIcon from "@material-ui/icons/Assignment";
import InsertChartIcon from "@material-ui/icons/InsertChart";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import DeckIcon from "@material-ui/icons/Deck";
import StorefrontIcon from "@material-ui/icons/Storefront";
import HeadsetMicIcon from "@material-ui/icons/HeadsetMic";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const HomeSideBar = (props) => {
  // console.log("home menu", props.orderData);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  // maximize and minimize side bar
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div style={{ marginTop: "70px" }} className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          <p className="my-auto ml-5" style={{ fontSize: "15px" }}>
            Sembunyikan menu
          </p>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton onClick={handleDrawerOpen}>
          <ChevronRightIcon />
        </IconButton>
      </div>
      <Divider />
      <List>
        <ListItem style={{ marginLeft: "-15px" }} button key={props.username}>
          <ListItemIcon>
            <img
              alt="logoseller"
              style={{ marginRight: "16px" }}
              className="ml-2 logosellerno1"
              src={require("../media/logosellerno1.png")}
            />
          </ListItemIcon>
          <List>
            <Typography style={{ fontSize: "13px", marginTop: "20px" }}>
              {props.username}
            </Typography>
            <img
              style={{ width: "11px" }}
              src={require("../media/point.jpg")}
            />
            <img
              style={{ width: "20px" }}
              src={require("../media/follower.svg")}
            />
          </List>
        </ListItem>
        <Link to="/">
          <ListItem style={{ color: "black" }} button key="Home">
            <ListItemIcon>
              <HomeIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
            </ListItemIcon>
            <Typography style={{ fontSize: "13px" }}>Home</Typography>
          </ListItem>
        </Link>
        <ListItem button key="Chat">
          <ListItemIcon>
            <ChatIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>Chat</Typography>
        </ListItem>
        <ListItem button key="Produk">
          <ListItemIcon>
            <BusinessCenterIcon
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>Produk</Typography>
        </ListItem>
        <Link to="/penjualan">
          <ListItem style={{ color: "black" }} button key="Penjualan">
            <ListItemIcon>
              <AssignmentIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
            </ListItemIcon>
            <Typography style={{ fontSize: "13px" }}>Penjualan</Typography>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <ListItem button key="Statistik">
          <ListItemIcon>
            <InsertChartIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>Statistik</Typography>
        </ListItem>
        <ListItem button key="Iklan dan Promosi">
          <ListItemIcon>
            <AddToHomeScreenIcon
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>
            Iklan dan Promosi
          </Typography>
        </ListItem>
        <ListItem button key="Dekorasi Toko">
          <ListItemIcon>
            <DeckIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>Dekorasi Toko</Typography>
        </ListItem>
        <ListItem button key="Kata Pembeli">
          <ListItemIcon>
            <EmojiEmotionsIcon
              style={{ fontSize: "20px", marginLeft: "5px" }}
            />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>Kata Pembeli</Typography>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button key="Pusat Edukasi Seller">
          <ListItemIcon>
            <StorefrontIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>
            Pusat Edukasi Seller
          </Typography>
        </ListItem>
        <ListItem button key="Tokopedia Care">
          <ListItemIcon>
            <HeadsetMicIcon style={{ fontSize: "20px", marginLeft: "5px" }} />
          </ListItemIcon>
          <Typography style={{ fontSize: "13px" }}>Tokopedia Care</Typography>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default HomeSideBar;
