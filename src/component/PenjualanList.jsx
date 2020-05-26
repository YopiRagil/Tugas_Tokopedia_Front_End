import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DetailPesanan from "./PenjualanDetailTabel";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: "10px",
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
  },
  statusInfo: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
  details: {
    alignItems: "center",
  },
  columndata: {
    flexBasis: "40%",
  },
  columnprofile: {
    flexBasis: "15%",
  },
  columnstatus: {
    flexBasis: "40%",
    marginLeft: "20px",
  },
  checkbox: {
    flexBasis: "5%",
    marginTop: "-10px",
  },

  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  avatar: {
    width: "100px",
    padding: "0",
  },
  infoPesanan: {
    fontSize: "15px",
    padding: "0",
    margin: "0",
    color: theme.palette.text.secondary,
  },
  keteranganStatus: {
    backgroundColor: "blue",
    borderRadius: "20%",
    padding: "20px",
    color: "white",
  },
}));

export default function PenjualanList(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.checkbox}>
            <FormControlLabel
              aria-label="Acknowledge"
              onClick={(event) => event.stopPropagation()}
              onFocus={(event) => event.stopPropagation()}
              control={<Checkbox />}
            />
          </div>
          <div className={classes.columnprofile}>
            <Typography className={classes.heading}>{props.pembeli}</Typography>
          </div>
          <div className={classes.columndata}>
            <Typography className={classes.heading}>Detail Pesanan</Typography>
          </div>
          <div className={classes.columnstatus}>
            <Typography className={classes.heading}>Status Pesanan</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.checkbox}> </div>
          <div className={classes.columnprofile}>
            <img
              className={classes.avatar}
              src={require("../media/desktop.jpeg")}
            />
          </div>
          <div className={classes.columndata}>
            <DetailPesanan {...props} />
          </div>
          <div className={classes.columnstatus}>
            <Typography variant="caption">
              <Grid
                container
                // direction="column"
                //   justify="center"
                alignItems="center"
              >
                <Box
                  className={classes.keteranganStatus}
                  component="span"
                  m={1}
                >
                  <h2>{props.status}</h2>
                </Box>
              </Grid>

              <form
                style={{ paddingBottom: "5px" }}
                className={classes.root}
                noValidate
                autoComplete="off"
              >
                <TextField id="standard-basic" label="resi" />
              </form>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small">Batalkan</Button>
          <Button size="small" color="primary">
            Tanggapi
          </Button>
        </ExpansionPanelActions>
      </ExpansionPanel>
    </div>
  );
}
