import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(-4, 0, 5, 0),
    width: "50px",
    height: "50px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function FormRegistrasi(props) {
  const classes = useStyles();
  const postRegister = async () => {
    await props.registrasiUser();
    // await props.doLogin();
    props.history.push("/signin");
  };
  return (
    <Container
      component="main"
      className="formRegister"
      style={{
        marginRight: "100px",
        backgroundColor: "white",
        boxShadow: "1px 1px 10px 2px grey",
        padding: "0px 30px 70px 30px",
      }}
      maxWidth="xs"
    >
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <img src={require("../media/topedbaglogo.png")} />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form method="post" className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                className="fieldFormSignUp"
                variant="outlined"
                required
                fullWidth
                name="name"
                label="Nama Lengkap"
                type="name"
                id="name"
                autoComplete="name"
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="fieldFormSignUp"
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="User Name"
                autoFocus
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="fieldFormSignUp"
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="fieldFormSignUp"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                className="fieldFormSignUp"
                variant="outlined"
                required
                fullWidth
                name="nomorTelephone"
                label="Nomor Telephone"
                type="nomorTelephone"
                id="nomorTelephone"
                autoComplete="nomorTelephone"
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="fieldFormSignUp"
                variant="outlined"
                required
                fullWidth
                name="alamat"
                label="Alamat"
                type="alamat"
                id="alamat"
                autoComplete="alamat"
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="fieldFormSignUp"
                variant="outlined"
                fullWidth
                name="avatar"
                label="Foto Profile"
                type="avatar"
                id="avatar"
                autoComplete="avatar"
                onChange={(el) => props.changeInput(el)}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="success" />}
                label="Apakah anda yakin data yang anda masukkan sudah benar?"
              />
            </Grid>
          </Grid>
          <Button
            id="buttonSignUp"
            type="button"
            fullWidth
            variant="contained"
            className={classes.submit}
            onClick={() => postRegister()}
          >
            Daftar
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/signin" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
