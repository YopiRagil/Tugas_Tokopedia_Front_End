import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BoxPesanan from "./HomePesananBoxPesanan";

const useStyles = makeStyles({
  root: {
    maxWidth: NaN,
  },
});

export default function AktifitasPesanan(props) {
  const classes = useStyles();
  // console.log("cek order props HAP", props);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h7" component="h6">
            Penting hari ini
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Aktivitas penting untuk menjaga performa tokomu
          </Typography>
        </CardContent>
      </CardActionArea>
      <Divider />
      <BoxPesanan {...props} />
    </Card>
  );
}
