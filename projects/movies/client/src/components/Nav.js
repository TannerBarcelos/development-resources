/**
 * implement navbar with reactstrap
 */

import React from "react";

// React strap
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";

const Nav_ = () => (
  <div>
    <Navbar color="dark" light expand="md">
      <Nav className="mr-auto">
        <NavItem>
          <NavLink href="https://www.themoviedb.org/" target="_blank">
            <img
              style={{ width: "50px", height: "50px" }}
              alt="tmdb logo"
              src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
            ></img>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default Nav_;
