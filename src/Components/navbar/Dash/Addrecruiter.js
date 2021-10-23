import React from 'react'

function Addrecruiter() {
    return (
        <div>
            <form>
            <div><h1>Add Recruiter</h1></div>
            <div>
            <label>Name</label>
            <input type="text"/> 
            </div>

            <div>
            <label>Email</label>
            <input type="email"/> 
            </div>

            <div>
            <label>Password</label>
            <input type="password"/> 
            </div>
            <div>
            <label>Company Name</label>
            <input type="text"/> 
            </div>
            <div><button>Add Recruiter</button></div>
            </form>
        </div>
    )
}

export default Addrecruiter;
