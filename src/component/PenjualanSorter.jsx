import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";

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

export default function PenjualanSorter() {
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
          onChange={handleChange}
          label="Sorter"
          inputProps={{
            name: "sorter",
            id: "outlined-sort-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"terbaru"}>Terbaru</option>
          <option value={"terlama"}>Terlama</option>
        </Select>
      </FormControl>
    </div>
  );
}
