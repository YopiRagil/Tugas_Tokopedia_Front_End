import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import FilterDate from "./PenjualanFilterDate";
import PenjualanSorter from "./PenjualanSorter";
import PenjualanSearch from "./PenjualanSearch";
import PenjualanPilihFilter from "./PenjualanPilihFilter";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  root: {
    "& > *": {
      paddingRight: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      margin: theme.spacing(1),
    },
  },
}));

export default function PenjualanSubMenuTop(props) {
  const classes = useStyles();

  const changeRouter = async (statusOrder) => {
    if (props.inputCategory) {
      await props.inputCategory(statusOrder);
    } else {
      props.history.replace("penjualan/" + statusOrder);
    }
  };
  const getallData = async () => {
    await props.allData();
    props.history.push("/penjualan");
  };
  return (
    <Card className={classes.root} style={{ margin: "0 -10px 0 -20px" }}>
      <Grid container justify="flex-start" alignItems="center">
        <h6
          style={{
            paddingRight: "10px",
            marginTop: "7px",
            marginLeft: "-10px",
          }}
        >
          Status
        </h6>
        <Link onClick={async () => getallData()}>
          <Fab
            variant="extended"
            size="medium"
            style={{
              backgroundColor: "white",
              textTransform: "none",
              borderColor: "black",
            }}
            aria-label="add"
            className={classes.margin}
          >
            Semua Pesan
          </Fab>
        </Link>
        <Link onClick={() => changeRouter("baru")}>
          <Fab
            variant="extended"
            size="medium"
            style={{
              backgroundColor: "white",
              textTransform: "none",
              borderColor: "black",
            }}
            //   aria-label="add"
            className={classes.margin}
          >
            Pesan Baru
          </Fab>
        </Link>
        <Fab
          variant="extended"
          size="medium"
          style={{
            backgroundColor: "white",
            textTransform: "none",
            borderColor: "black",
          }}
          //   aria-label="add"
          className={classes.margin}
          onClick={() => changeRouter("tersedia")}
        >
          Siap Dikirim
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          style={{
            backgroundColor: "white",
            textTransform: "none",
            borderColor: "black",
          }}
          //   aria-label="add"
          className={classes.margin}
          onClick={() => changeRouter("dikirim")}
        >
          Dalam Pengiriman
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          style={{
            backgroundColor: "white",
            textTransform: "none",
            borderColor: "black",
          }}
          //   aria-label="add"
          className={classes.margin}
          onClick={() => changeRouter("sukses")}
        >
          Pesanan Selesai
        </Fab>
        <Fab
          variant="extended"
          size="medium"
          style={{
            backgroundColor: "white",
            textTransform: "none",
            borderColor: "black",
          }}
          //   aria-label="add"
          className={classes.margin}
          onClick={() => changeRouter("batal")}
        >
          Pesanan Dibatalkan
        </Fab>
      </Grid>
      <Divider />
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <PenjualanPilihFilter />
        <FilterDate {...props} />
        <PenjualanSorter {...props} />
        <PenjualanSearch
          {...props}
          keyword={props.search}
          doSearch={(event) => props.InputSearchOrder(event)}
        />
        <Button
          variant="text"
          style={{
            backgroundColor: "white",
            textTransform: "none",
            color: "green",
          }}
          size="medium"
          className={classes.button}
        >
          Reset
        </Button>
      </Grid>
    </Card>
  );
}
