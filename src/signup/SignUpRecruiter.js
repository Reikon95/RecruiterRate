import React, { useState } from 'react';
export default function SignUpRecruiter() {
    let [agencyEmployee, setAgencyEmployee] = useState(false);
    return (
        <>
            <form>
                <label>Email:</label>
                <input type="email" />
                <label>Confirm Email:</label>
                <input type="email" />
                <label>Password:</label>
                <input type="password" />
                <label>Confirm Password:</label>
                <input type="password" />
                <label>Are you an employee of an agency?</label>
                <input type="checkbox" onChange={() => setAgencyEmployee(!agencyEmployee)} />
                {agencyEmployee ?
                    <>
                        <label>Name of Agency:</label>
                        <input type="text" />
                    </> :
                    <>
                    </>}
            </form>
        </>
    )
}