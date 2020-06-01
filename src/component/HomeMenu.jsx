import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AktifitasPesanan from "./HomeAktifitasPesanan";
import HomeSideBar from "./HomeSideBar";
import Grafik from "./PenjualanGrafik";
import Grid from "@material-ui/core/Grid";
import { requirePropFactory } from "@material-ui/core";

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
      <HomeSideBar />
      <main className={classes.content} style={{ backgroundColor: "#dbdbdb" }}>
        <div className={classes.toolbar} />
        <Grid container justify="space-between">
          <Grid md={7}>
            <Grid>
              <img
                style={{ width: "100%", marginBottom: "10px" }}
                src={require("../media/sponsore.jpg")}
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
