import React from 'react'
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';


const App = () => {
  return (
    <>
      <Navigation></Navigation>
      <div className="d-flex flex-column align-items-center mt-4">
        <h1>Front End Developer</h1>
        <p style={{color: "gray"}}>I design and code beautifully simple things, and i love what i do.</p>
        <img src='profileImg.jpg' className="profileImg"></img>
      </div>
    </>
  );
}

export default App

const Navigation = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Alisha Kiran</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"/>
        <Navbar.Collapse className="justify-content-end" id="navbarScroll">
          {/* <Navbar.Text>
            Alisha Kiran
          </Navbar.Text> */}
          <Nav>
            <Nav.Link>About me</Nav.Link>
            <Nav.Link>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}  