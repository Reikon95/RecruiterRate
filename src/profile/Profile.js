import React from 'react';
import './Profile.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
export default function Profile() {
    const imgurl = 'https://ih0.redbubble.net/image.909979035.9762/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
    const currentRating = '9.8/10';
    const recruiterName = 'Mike Wizowski';
    const recruiterAgency = 'Meme Search LTD'
    return (
        <>
        <h1>{recruiterName}</h1>
        <h3>{recruiterAgency}</h3>
    <h3>Current rating: {currentRating}</h3>
        <img src={imgurl} alt="user" className="recruiterProfilePicture"/>
        <Tabs defaultActiveKey="candidates" id="uncontrolled-tab-example">
                <Tab eventKey="candidates" title="Candidates">
                    Something
                </Tab>
                <Tab eventKey="employers" title="Employers">
                    Something
                </Tab>
                <Tab eventKey="recruiters" title="Recruiters" >
                    Something
                </Tab>
            </Tabs>
        </>
    )
}