import React from 'react';
import './Profile.css';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import StarRating from 'react-svg-star-rating'

export default function Profile() {
    const imgurl = 'https://ih0.redbubble.net/image.909979035.9762/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
    const currentRating = '9.8/10';
    const recruiterName = 'Mike Wazowski';
    const recruiterAgency = 'Meme Search LTD';
    const locations = ['London', 'Guilford', 'Milton Keynes', 'Glasgow', 'Lagos']
    return (
        <>
            <h1>{recruiterName}</h1>
            <h3>{recruiterAgency}</h3>
            <h3>Current rating: {currentRating}</h3>
            <img src={imgurl} alt="user" className="recruiterProfilePicture" />
            <Tabs defaultActiveKey="Testimonials" id="uncontrolled-tab-example">
                <Tab eventKey="Testimonials" title="Testimonials">
                    "Mike helped me with a full stack developer job, great service" - Anon
                </Tab>
                <Tab eventKey="Jobs" title="Jobs">
                    {recruiterName} covers all software engineering roles in these locations:
                    <ul>
                        {locations.map(location => {
                            return (
                                <li>{location}</li>
                            )
                        })}
                    </ul>
                </Tab>
                <Tab eventKey="Contact" title="Contact" >
                    Phone: 0118 999 881 999 119 725 3 
                    <br/>
                    Email: Mike@MemeSearch.com
                    <br/>
                    Linkedin: <a href="https://www.linkedin.com/in/cameron-blackwood-2b758883">View Profile</a>
                    <br/>
                    Twitter: @Recruiter_Mike
                </Tab>
                <Tab eventKey="Rate" title={`Rate ${recruiterName}`} >
                <StarRating count="10"/>
                Comments:
                <textarea></textarea>
                <input type="submit"/>
                </Tab>
            </Tabs>
        </>
    )
}