import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function FAQEmployers() {
    return (
        <>
            <h2>Employers</h2>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            How much does it cost me?
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Subscribing as an employer costs £49 a month, with no contract tie in. The average recruitment
                        fee for an engineer earning £50k is £7,500, so think of it as a small insurance you're going with a quality partner!
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            How can I contact a recruiter?
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>When you arrive on a recruiter's profile, you can send them a request which is delivered to their email</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}