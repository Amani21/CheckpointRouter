import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import '../App.css';
import { Link } from 'react-router-dom';



function Header() {
  return (
    <div>

<Navbar className='nav'>
  <Container fluid>
    <Navbar.Brand href="#">Movie App</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
       <Link to='/'> <Nav.Link href="#action1">Home</Nav.Link></Link>
       <Link to='/about'>  <Nav.Link href="#action2">About</Nav.Link></Link>  
       <Link to='/contact'> <Nav.Link href="#action3"> Contact</Nav.Link></Link>


      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>





    </div>
  )
}

export default Header