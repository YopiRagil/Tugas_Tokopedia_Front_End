import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
  },
  box: {
    display: "flex",
    "& > *": {
      width: theme.spacing(30),
      height: theme.spacing(16),
    },
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
}));

export default function Grafik() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <h6>Ringkasan Penjualan</h6>
        <h6>[Beta]</h6>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Pantau perkembangan Tokomu
        </Typography>
        <div className={classes.box}>
          <Paper style={{ paddingBottom: "20px" }}>
            <Typography
              style={{ margin: "10px" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Produk terjual
            </Typography>
            <Typography
              style={{ margin: "20px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              0
            </Typography>
            <Typography
              style={{ margin: "20px" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              0% dari minggu lalu
            </Typography>
          </Paper>
          <Paper style={{ paddingBottom: "20px" }}>
            <Typography
              style={{ margin: "10px" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Produk terjual
            </Typography>
            <Typography
              style={{ margin: "20px" }}
              gutterBottom
              variant="h6"
              component="h6"
            >
              0
            </Typography>
            <Typography
              style={{ margin: "20px" }}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              0% dari minggu lalu
            </Typography>
          </Paper>
        </div>
        <Typography
          style={{ margin: "20px 0 20px 0" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          Pendapatan Kotor
        </Typography>
        <h4>Rp 0</h4>
        <Typography
          style={{ margin: "20px 0 20px 0" }}
          variant="body2"
          color="textSecondary"
          component="p"
        >
          dari minggu lalu
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Lihat selengkapnya ></Button>
      </CardActions>
    </Card>
  );
}
