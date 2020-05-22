import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, InputGroup } from "react-bootstrap";
import Notif from "./Notif";
import NavbarProfile from "./NavbarProfile";

const Header = (props) => {
  // console.log("header props", props);
  return (
    <Navbar
      fixed="top"
      expand="lg"
      style={{ zIndex: "9999999", background: "white" }}
    >
      <Navbar.Brand href="#home">
        <img className="logotoped" src={require("../media/logo.png")} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <InputGroup className="col-lg-8">
          <Form.Control
            className="searchInput"
            type="text"
            placeholder="Username"
            aria-describedby="inputGroupPrepend"
            required
          />
          <InputGroup.Prepend>
            <Link>
              <InputGroup.Text className="searchButton" id="inputGroupPrepend">
                <img
                  className="searchLogo"
                  src={require("../media/search.png")}
                />
              </InputGroup.Text>
            </Link>
          </InputGroup.Prepend>
          <Form.Control.Feedback type="invalid">
            Please choose a username.
          </Form.Control.Feedback>
        </InputGroup>
        <div className="col-lg-4 justify-content-right ml-auto mx-auto">
          <div class="dropdown mr-5 ml-5">
            <div>
              <img className="logoNotif" src={require("../media/notif.png")} />
            </div>
            <div
              style={{
                marginLeft: "-100px",
                paddingTop: "20px",
                background: "none",
              }}
              class="dropdown-content"
            >
              <div href="#">
                <Notif />
              </div>
            </div>
          </div>
          <div class="dropdown">
            <div className="row">
              <div className="col-2">
                <img className="logoProfile" src={props.userData.avatar} />
              </div>
              <div className="col-8">
                <p
                  className="userName my-auto"
                  style={{
                    fontSize: "0.8571428571428571rem",
                    marginBottom: "-25px",
                  }}
                >
                  {props.userData.name}
                </p>
              </div>
              <div
                style={{
                  marginLeft: "-100px",
                  paddingTop: "40px",
                  background: "none",
                }}
                class="dropdown-content"
              >
                <div>
                  <NavbarProfile {...props} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
