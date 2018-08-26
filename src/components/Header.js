import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button} from 'reactstrap';

export default class Header extends Component {
    constructor(){
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

  render() {
    return (
        <div>
        <Navbar style={{position: 'fixed',zIndex:'1', top: '0px', left: '0px', width: '1280px'}} color="light" light expand="md">
          <NavbarBrand href="/">
          <a href="" style={{marginRight:'1rem'}}>
            <img height="50px" src="http://i63.tinypic.com/oid9xu.png" />
          </a>
            Santren Koding
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Kajian Koding</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Santren Kilat</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Mondok</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Tentang Kami</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="" style={{padding:'0'}}>
                    <Button outline color="primary">Login/Signup</Button>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}