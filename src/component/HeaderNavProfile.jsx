import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import StorefrontIcon from "@material-ui/icons/Storefront";
import IconButton from "@material-ui/core/IconButton";
import SettingsIcon from "@material-ui/icons/Settings";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "-10px",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function NavbarProfile(props) {
  const classes = useStyles();
  const logOut = async () => {
    await props.doLogout();
    await props.doClear();
  };

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid item xs={12} sm container>
          <Grid sm={8}>
            <h6 className="mr-5">{props.name}</h6>
            <IconButton>
              <StorefrontIcon
                style={{ fontSize: "20px", margin: "0 3px 8px -10px" }}
              />
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {props.username}
              </Typography>
            </IconButton>
          </Grid>
          <Grid sm={2}>
            <img className="fotoProfile mb-3" src={props.avatar} />
          </Grid>
        </Grid>
        <hr />
        <IconButton
          style={{
            margin: "-30px 0 -30px -10px",
          }}
        >
          <Typography
            style={{
              fontSize: "15px",
            }}
            size="small"
          >
            Kembali Ke Toko
          </Typography>
        </IconButton>
        <hr />
      </CardContent>
      <CardActions>
        <IconButton
          style={{
            marginTop: "-40px",
            fontSize: "15px",
          }}
        >
          <SettingsIcon style={{ fontSize: "20px", margin: "0 3px 0 -10px" }} />
          <Typography
            style={{
              fontSize: "15px",
            }}
            size="small"
          >
            Pengaturan Akun
          </Typography>
        </IconButton>
      </CardActions>
      <CardActions>
        <IconButton
          style={{
            marginTop: "-30px",
          }}
          onClick={logOut}
        >
          <ExitToAppIcon
            style={{ fontSize: "20px", margin: "0 3px 0 -10px" }}
          />
          <Typography
            style={{
              fontSize: "15px",
            }}
            size="small"
          >
            Keluar
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}
