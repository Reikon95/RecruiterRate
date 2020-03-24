import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Sonnet from 'react-bootstrap/Sonnet';
import Button from 'react-bootstrap/Button';
import FAQCandidates from './FAQCandidates';
import FAQEmployers from './FAQEmployers';
import FAQRecruiters from './FAQRecruiters';
export default function FAQs() {
    return (
        <>
        <h1>FAQs</h1>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="home" title="Home">
    <Sonnet />
  </Tab>
  <Tab eventKey="profile" title="Profile">
    <Sonnet />
  </Tab>
  <Tab eventKey="contact" title="Contact" disabled>
    <Sonnet />
  </Tab>
</Tabs>
        </>
    )
}