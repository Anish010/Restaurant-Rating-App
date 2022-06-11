import React, { Component } from 'react'
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaHome, FaList, FaPlus, FaSearch, FaUser } from 'react-icons/fa';
//import { faUser, faBarsStaggered, faHouse, faPlus, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';
import {
    Link
} from 'react-router-dom'
class NavBarMenu extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home"><img width="75px" height="55px" src="/brand.png" alt="Brand" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto" >
                                <Nav.Link href="#home" className="me-auto-link"  ><Link to="/"  ><FaHome style={{ color: 'yellow', size: '30px' }} /></Link></Nav.Link>
                                <Nav.Link href="#link" className="me-auto-link"><Link to="/list"  ><FaList style={{ color: 'yellow' }} /></Link></Nav.Link>
                                <Nav.Link href="#link" className="me-auto-link"><Link to="/create" ><FaPlus style={{ color: 'yellow' }} /></Link></Nav.Link>
                                <Nav.Link href="#link" className="me-auto-link"><Link to="/search" ><FaSearch style={{ color: 'yellow' }} /></Link></Nav.Link>
                                {
                                    localStorage.getItem('login') ?
                                        <Nav.Link href="#link" className="me-auto-link" ><Link to="/logout" style={{ "text-decoration": "none", "color": "yellow" }} ><FaUser style={{ color: 'yellow' }} />&nbsp; Logout</Link></Nav.Link>
                                        :
                                        <Nav.Link href="#link" className="me-auto-link" ><Link to="/login" style={{ "text-decoration": "none", "color": "yellow" }} ><FaUser style={{ color: 'yellow' }} />&nbsp; Login</Link></Nav.Link>
                                }

                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div >
        )
    }
}
export default NavBarMenu;