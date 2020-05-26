import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(2),
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

export default function PenjualanPilihFilter() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    filter: "",
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
          htmlFor="outlined-filter-native-simple"
        >
          Pilih Filter
        </InputLabel>
        <Select
          native
          value={state.filter}
          onChange={handleChange}
          label="filter"
          inputProps={{
            name: "filter",
            id: "outlined-filter-native-simple",
          }}
        >
          <option aria-label="None" value="" />
          <option value={"Penanda Pesanan"}>Penanda Pesanan</option>
          <option value={"Pilih Kurir"}>Pilih Kurir</option>
          <option value={"Tipe Pesanan"}>Tipe Pesanan</option>
          <option value={"Jatuh Tempo"}>Jatuh Tempo</option>
        </Select>
      </FormControl>
    </div>
  );
}
