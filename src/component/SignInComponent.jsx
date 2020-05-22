import React from "react";
import FormSignIn from "./FormSignIn";

const SignInComponent = (props) => {
  return (
    <section className="login">
      <div className="logoInLogin">
        <img
          style={{ width: "170px" }}
          src={require("../media/logotoped.svg")}
        />
      </div>
      <FormSignIn {...props} />
    </section>
  );
};
export default SignInComponent;
