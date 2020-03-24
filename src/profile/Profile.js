import React from 'react';
export default function Profile() {
    const imgurl = 'https://ih0.redbubble.net/image.909979035.9762/flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
    const currentRating = '9.8/10'
    return (
        <>
        This is the recruiter Profile
        Contains image, ranking, rating, contact details, location
        <h1>Mike Wizowski</h1>
    <h3>Current rating: {currentRating}</h3>
        <img src={imgurl} alt="user"/>
        </>
    )
}