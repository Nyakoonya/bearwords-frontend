/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">BearWords</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="test">Features</Nav.Link>
              <Nav.Link href="/">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </Fragment>
    );
  }
}
