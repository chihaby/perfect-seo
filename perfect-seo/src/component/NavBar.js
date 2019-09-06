import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Perfect SEO</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Fetch">Fetch</Nav.Link>
                    <Nav.Link href="/public">Public</Nav.Link>
                    <Nav.Link href="/protected">Protected</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default NavBar;