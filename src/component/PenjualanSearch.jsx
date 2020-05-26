import React from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    minWidth: "200px",
  },
  search: {
    margin: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function PenjualanSearch() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          className={classes.search}
          label="Search"
          variant="outlined"
          size="small"
          id="mui-theme-provider-outlined-input"
        />
      </ThemeProvider>
    </form>
  );
}
