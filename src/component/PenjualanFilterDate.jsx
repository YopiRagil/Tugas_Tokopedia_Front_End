import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 150,
  },
}));

export default function FilterDate(props) {
  const classes = useStyles();
  const filterDate = async (el) => {
    props.changeInput(el);
    await props.getOrderCategory();
  };
  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="dari"
        type="date"
        onChange={(el) => filterDate(el)}
        name="startDate"
        defaultValue="2020-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        id="date"
        label="sampai"
        onChange={(el) => filterDate(el)}
        name="endDate"
        type="date"
        defaultValue="2020-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </form>
  );
}
