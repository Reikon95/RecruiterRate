import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
export default function NavBar() {
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top" >
                <Navbar.Brand href="#">RecruiterRate</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/Recruiters">Recruiters</Nav.Link>
                    <Nav.Link href="/Employers">Employers</Nav.Link>
                    <Nav.Link href="/Jobseekers">Jobseekers</Nav.Link>
                    <Nav.Link href="/AboutUs">About Us</Nav.Link>
                    <Nav.Link href="/FAQs">FAQs</Nav.Link>
                </Nav>
            </Navbar>
        </>
    )
}