import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AktifitasPesanan from "./HomeAktifitasPesanan";
import HomeSideBar from "./HomeSideBar";
import Grafik from "./PenjualanGrafik";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
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

const HomeMenu = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeSideBar {...props} />
      <main className={classes.content} style={{ backgroundColor: "#dbdbdb" }}>
        <div className={classes.toolbar} />
        <Grid container justify="flex-start" style={{ marginBottom: "20px" }}>
          <Grid style={{ marginRight: "10px" }}>
            <Avatar>
              <img src={require("../media/logosellerno1.png")} />
            </Avatar>
          </Grid>
          <Grid>
            <Typography style={{ fontSize: "15px", fontWeight: "bolder" }}>
              Hallo, {props.username}!
            </Typography>
            <Typography style={{ fontSize: "13px", color: "gray" }}>
              Ini kabar terbaru dari tokomu
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="space-between">
          <Grid md={7}>
            <Grid>
              <img
                src={require("../media/sponsore.jpg")}
                style={{ width: "100%", marginBottom: "10px" }}
                alt="sponsore"
              />
            </Grid>
            <Grid>
              <AktifitasPesanan {...props} />
            </Grid>
          </Grid>
          <Grid style={{ paddingLeft: "30px" }} md={5}>
            <Grafik />
          </Grid>
        </Grid>
      </main>
    </div>
  );
};

export default HomeMenu;
