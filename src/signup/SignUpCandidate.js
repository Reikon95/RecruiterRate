import React from 'react';
export default function SignUpRecruiter() {
    return (
        <>
            <h1>Sign Up</h1>
            <form>
                <label>Email:</label>
                <input type="email" />
                <label>Confirm Email:</label>
                <input type="email" />
                <label>Password:</label>
                <input type="password" />
                <label>Confirm Password:</label>
                <input type="password" />
            </form>
        </>
    )
}