import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InfoIcon from "@material-ui/icons/Info";
import SystemUpdateAltIcon from "@material-ui/icons/SystemUpdateAlt";
import SettingsIcon from "@material-ui/icons/Settings";
import Fab from "@material-ui/core/Fab";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    extendedIcon: {
      marginRight: theme.spacing(2),
    },
  },
}));

export default function PenjualanMenuTop() {
  const classes = useStyles();

  return (
    <div className={classes.root} style={{ margin: "0 0px 0 -20px" }}>
      <Grid container spacing={2}>
        <Grid item sm={6}>
          <h3 variant="contained">Daftar Pesanan</h3>
        </Grid>
        <Grid
          item
          sm={6}
          // spacing={10}
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
        >
          <Grid>
            <Button
              variant="outlined"
              size="medium"
              style={{
                marginLeft: "-10px",
                marginRight: "10px",
                backgroundColor: "white",
                textTransform: "none",
              }}
              className={classes.button}
              startIcon={<InfoIcon />}
            >
              Info Penjualan
            </Button>
          </Grid>
          <Grid>
            <Button
              variant="outlined"
              style={{ backgroundColor: "white", textTransform: "none" }}
              size="medium"
              className={classes.button}
              startIcon={<SystemUpdateAltIcon />}
            >
              Unduh Laporan Penjualan
            </Button>
          </Grid>
          <Grid>
            <Fab
              // variant="round"
              size="small"
              style={{
                backgroundColor: "#dbdbdb",
                textTransform: "none",
                boxShadow: "none",
              }}
              aria-label="add"
              className={classes.margin}
            >
              <SettingsIcon className={classes.extendedIcon} />
            </Fab>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
