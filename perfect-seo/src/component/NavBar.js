import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

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
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                </Form>
            </Navbar>
        )
    }
}

export default NavBar;