import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import FAQCandidates from './FAQCandidates';
import FAQEmployers from './FAQEmployers';
import FAQRecruiters from './FAQRecruiters';
export default function FAQs() {
    return (
        <>
            <h1>FAQs</h1>
            <Tabs defaultActiveKey="candidates" id="uncontrolled-tab-example">
                <Tab eventKey="candidates" title="Candidates">
                    <FAQCandidates />
                </Tab>
                <Tab eventKey="employers" title="Employers">
                    <FAQEmployers />
                </Tab>
                <Tab eventKey="recruiters" title="Recruiters" >
                    <FAQRecruiters />
                </Tab>
            </Tabs>
        </>
    )
}