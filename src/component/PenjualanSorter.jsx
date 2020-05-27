import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
    "& .MuiOutlinedInput-input": {
      paddingTop: "10px",
      paddingBottom: "10px",
    },
  },
  myInputLabel: {
    marginTop: "-9px",
    "&.Mui-focused": {
      color: "green",
      marginTop: "0",
    },
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PenjualanSorter(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    sorter: "",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div>
      <FormControl
        method="get"
        size="medium"
        variant="outlined"
        className={classes.formControl}
      >
        <InputLabel
          className={classes.myInputLabel}
          htmlFor="outlined-sort-native-simple"
        >
          Urutkan
        </InputLabel>
        <Select
          native
          value={state.sort}
          onChange={(handleChange, (el) => props.changeInput(el))}
          label="Sorter"
          inputProps={{
            name: "sort",
            id: "outlined-sort-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"desc"}>Terbaru</option>
          <option value={"asc"}>Terlama</option>
        </Select>
      </FormControl>
    </div>
  );
}
