import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AktifitasPesanan from "./HomeAktifitasPesanan";
import HomeSideBar from "./HomeSideBar";

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
  // console.log("home menu", props.orderData);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <HomeSideBar />
      <main className={classes.content} style={{ backgroundColor: "#fafafa" }}>
        <div className={classes.toolbar} />
        <div className="row">
          <div className="col-7">
            <AktifitasPesanan {...props} />
          </div>
          <div className="col-5">
            <Typography paragraph></Typography>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomeMenu;
