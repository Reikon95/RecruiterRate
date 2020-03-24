import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export default function FAQRecruiters() {
    return (
        <>
            <h2>Recruiters</h2>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Why should I use this?
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Lots of reasons. A great, verified, reputation is the best sales tool in your arsenal, and a solid RecruiterRate profile is a way to show this </Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            How much does this cost me?
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>We operate at a policy of £9 a month, per profile.</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            I own a recruitment agency. Can I get a discount for multiple profiles?
      </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Yes. Click here to find out more</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </>
    )
}