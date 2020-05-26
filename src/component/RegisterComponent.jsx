import React from "react";
import FormRegistrasi from "./RegisterForm";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"2009-"}
      {new Date().getFullYear()}
      {" © "}
      <Link color="inherit">PT Tokopedia</Link>
      {"."}
    </Typography>
  );
}
const RegisterComponent = (props) => {
  return (
    <section className="registrasi">
      <div className="logoInRegis">
        <img
          style={{ width: "200px", paddingBottom: "40px" }}
          src={require("../media/logotoped.svg")}
        />
      </div>
      <div className="formRegistrasi">
        <FormRegistrasi {...props} />
        <Box mt={8}>
          <Copyright />
        </Box>
      </div>
      <div className="textRegister">
        <h3>Jual Beli Mudah Hanya di Tokopedia </h3>
        <p>Gabung dan rasakan kemudahan bertransaksi di Tokopedia</p>
      </div>
    </section>
  );
};
export default RegisterComponent;
