/*
 * @Descripttion:
 * @Author: yuwei_tong
 * @LastEditors: yuwei_tong
 */
import React, { Component, Fragment } from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
export default class Layout extends Component {
  componentDidMount() {
    console.log('this.$api', this.$api)
  }
  render() {
    return (
      <Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/">
              <img src=""></img> BearWords
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="home">Home</Nav.Link>
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
