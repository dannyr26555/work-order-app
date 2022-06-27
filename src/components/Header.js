import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  //   DropdownToggle,
  //   DropdownMenu,
  //   DropdownItem,
} from "reactstrap";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div>
      <Navbar dark sticky="top" expand="md" className="app-header fw-bold">
        <NavbarBrand className="ms-5">
          <h1 className="display-4">Work Order App</h1>
        </NavbarBrand>
        <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
        <Collapse isOpen={menuOpen} navbar>
          <Nav navbar className="ms-auto">
            <UncontrolledDropdown
              inNavbar
              nav
              isOpen={dropdown}
              toggle={() => setDropdown(!dropdown)}
            >
              {/* <DropdownToggle nav>Dropdown Toggle</DropdownToggle>
              <DropdownMenu className="drop-menu">
                <DropdownItem className="btn-hover">
                  Dropdown Item 1
                </DropdownItem>
                <DropdownItem className="btn-hover">
                  Dropdown Item 2
                </DropdownItem>
                <DropdownItem className="btn-hover">
                  Dropdown Item 3
                </DropdownItem>
              </DropdownMenu> */}
            </UncontrolledDropdown>
            <NavItem>
              <NavLink className="nav-link" to="/">
                <i className="fa fa-home fa-lg" /> Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/sites">
                <i className="fa fa-list fa-lg" /> My Sites
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/support">
                <i className="fa fa-info fa-lg" /> Support
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/logout">
                <i className="fa fa-address-card fa-lg" /> Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
