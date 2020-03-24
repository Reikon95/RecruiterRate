import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function Jobseekers() {
    return (
        <>
        <h1>Jobseekers</h1>
        <p>Are you frustrated with the experience of getting a new job? You're not alone. As the number of recruitment agencies grow, it's
            become increasingly hard to distinguish a quality industry contact versus a chancer who doesn't know the difference between Java and Javascript.
            If you sign up today, you can browse the best recruiters in your industry to help you secure a great role.
        </p>
        <Link to="/signup"><Button variant="danger">Sign Up</Button></Link>

        </>
    )
}