import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexWrap: "wrap",
    "& > *": {
      //   margin: theme.spacing(1),
      width: theme.spacing(30),
      height: theme.spacing(16),
    },
  },
}));

export default function BoxPesanan() {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.root}>
        <Paper>
          <Typography
            style={{ margin: "20px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Pesanan baru
          </Typography>
          <Typography
            style={{ margin: "20px" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            0
          </Typography>
        </Paper>
        <Paper>
          <Typography
            style={{ margin: "20px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Siap Dikirim
          </Typography>
          <Typography
            style={{ margin: "20px" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            0
          </Typography>
        </Paper>
        <Paper>
          <Typography
            style={{ margin: "20px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Komplain Pesanan
          </Typography>
          <Typography
            style={{ margin: "20px" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            0
          </Typography>
        </Paper>
      </div>
      <div className={classes.root}>
        <Paper>
          <Typography
            style={{ margin: "20px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Chat belum dibaca
          </Typography>
          <Typography
            style={{ margin: "20px" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            0
          </Typography>
        </Paper>
        <Paper>
          <Typography
            style={{ margin: "20px" }}
            variant="body2"
            color="textSecondary"
            component="p"
          >
            Diskusi belum dibaca
          </Typography>
          <Typography
            style={{ margin: "20px" }}
            gutterBottom
            variant="h6"
            component="h6"
          >
            0
          </Typography>
        </Paper>
        <Paper />
      </div>
    </div>
  );
}
