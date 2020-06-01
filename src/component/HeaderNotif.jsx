import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={5}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "300px",
    height: "500px",
    marginTop: "-10px",
    marginBottom: "-10px",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    "& .MuiTabs-indicator": {
      backgroundColor: "#00b906",
      height: "4px",
    },
    "& .MuiTab-textColorPrimary": {
      color: "green",
    },
  },
}));

export default function Notif() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          style={{ backgroundColor: "white", position: "fixed" }}
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          textColor="primary"
          aria-label="full width tabs example"
        >
          <Tab label="Transaksi" {...a11yProps(0)} />
          <Tab label="Update" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel style={{ margin: "5% -9% 0 -9%" }} value={value} index={0}>
        <Grid item xs={12} sm container>
          <Grid sm={6}>
            <Typography
              className={classes.topText}
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              Penjualan
            </Typography>
          </Grid>
          <Grid sm={6}>
            <Typography
              style={{
                fontSize: "13px",
                textAlign: "right",
              }}
            >
              <Link style={{ color: "#00b906" }}>Lihat Semua</Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item sm={12} sm container>
          <Grid sm={3}>
            <img
              style={{ margin: "20px 0 0 10px" }}
              src={require("../media/pesanbaru.svg")}
            />
            <Typography
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: "lighter",
              }}
            >
              Pesanan Baru
            </Typography>
          </Grid>
          <Grid sm={3}>
            <img
              style={{ margin: "20px 0 0 10px" }}
              src={require("../media/siapkirim.svg")}
            />
            <Typography
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: "lighter",
              }}
            >
              Siap Dikirim
            </Typography>
          </Grid>
          <Grid sm={3}>
            <img
              style={{ margin: "20px 0 0 10px" }}
              src={require("../media/perjalanan.svg")}
            />
            <Typography
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: "lighter",
              }}
            >
              Sedang Dikirim
            </Typography>
          </Grid>
          <Grid sm={3}>
            <img
              style={{ margin: "20px 0 0 10px" }}
              src={require("../media/sampai.svg")}
            />
            <Typography
              style={{
                fontSize: "12px",
                textAlign: "center",
                fontWeight: "lighter",
              }}
            >
              Sampai Tujuan
            </Typography>
          </Grid>
        </Grid>
        <hr style={{ width: "1000px", margin: "20px 0 0 -30px" }} />
        <Typography
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            textAlign: "left",
            margin: "10px 0 30px 0",
          }}
        >
          Untuk Kamu
        </Typography>
        <img
          style={{ width: "200px", margin: "0 0 0 15%" }}
          src={require("../media/imageinnotif.jpg")}
        />
        <Typography
          style={{
            fontSize: "13px",
            fontWeight: "bold",
            textAlign: "center",
            margin: "10px 0 30px 0",
          }}
        >
          Belum ada notifikasi
        </Typography>
        <Typography
          style={{
            fontSize: "13px",
            textAlign: "center",
            margin: "-20px 0 30px 0",
            color: "grey",
          }}
        >
          Notifikasi terkait transaksi kamu bakal muncul di sini
        </Typography>
        <hr style={{ width: "1000px", margin: "20px 0 0 -30px" }} />
        <Grid item sm={12} sm container>
          <Grid sm={6}>
            <Link style={{ color: "#00b906" }}>
              <Typography style={{ fontSize: "13px" }}>
                Tandai Semua Dibaca
              </Typography>
            </Link>
          </Grid>
          <Grid sm={6}>
            <Link style={{ color: "#00b906" }}>
              <Typography style={{ fontSize: "13px", textAlign: "right" }}>
                Lihat Selengkapnya
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}></TabPanel>
    </div>
  );
}
