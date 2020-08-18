import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
export default function FAQJobseekers() {
  return (
    <>
      <h2>Jobseekers</h2>
      <Accordion>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              How much does it cost me?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              Nothing! We want you to find a great job with a trusted partner,
              pronto
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Ok - but how is it free?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              Our revenue model is based off recruitment agencies and employers
              paying us subscription fees for access to the service.
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="2">
              Why use RecruiterRate?
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              There are over 100,000 recruiters in the UK - it's important to be
              able to pick out the right one
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}
