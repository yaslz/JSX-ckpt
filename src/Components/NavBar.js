import React from 'react'
import { Container, Form, Nav, Navbar, NavDropdown , Button } from 'react-bootstrap'

const NavBar = () => {
  return (
    <div>
          <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Film TV</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Film</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Série</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Film 
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Choisir le style
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Télécharger
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar