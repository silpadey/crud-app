import { useState } from "react";

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${email}`)
        alert(`${password}`)
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="box">
                <p className="boxhead">Sign In</p>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn">Sign In Hello</button>
            </form>
        </>
    )
}

export default Signin