import React from "react";
import { Card, Nav, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarProfile = (props) => {
  const logOut = async () => {
    await props.doLogout();
  };
  console.log("header props", props.userData.name);
  return (
    <Card style={{ width: "20rem" }}>
      <Card.Body className="cardProfile">
        <div className="row">
          <div className="col-8">
            <h6 className="mr-5">{props.userData.name}</h6>
            <p>{props.userData.username}</p>
          </div>
          <div className="col-2">
            <img className="fotoProfile mb-3" src={props.userData.avatar} />
          </div>
        </div>
        <hr />
        <p>Kembali ke toko</p>
        <hr />
        <h6>Pengaturan akun</h6>
        <Link
          onClick={logOut}
          to="/signin"
          className="dropdown-item"
          style={{ textAlign: "center", color: "white" }}
        >
          <h6 style={{ color: "black" }}>Keluar</h6>
        </Link>
      </Card.Body>
    </Card>
  );
};
export default NavbarProfile;
