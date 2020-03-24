import React, { useState } from 'react';
import './Signup.css';
export default function SignUp() {
    let [userType, setUserType] = useState(false);
    return (
        <>
            Please describe yourself:
            <label>Recruiter:</label>
            <input type="radio" name="userType" onChange={() => setUserType("Recruiter")} />
            <label>Jobseeker:</label>
            <input type="radio" name="userType" onChange={() => setUserType("Jobseeker")} />
            <label>Employer:</label>
            <input type="radio" name="userType" onChange={() => setUserType("Employer")} />
            <div className="signupGap">
            {userType === "Recruiter" ?
                <>
                    Recruiter
                </>
                : userType === "Jobseeker" ?
                    <>
                        Jobseeker
                    </>
                    : userType === "Employer" ?
                        <>
                            Employer
                        </>
                        :
                        <>
                            Select a role above to contunue
                        </>
            }
            </div>
        </>
    )
}