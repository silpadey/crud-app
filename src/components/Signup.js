import { useState } from "react";

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(`${name}`)
        alert(`${email}`)
        alert(`${password}`)
    }

    return (
        <div>
            <form onSubmit={handleSubmit} className="box">
                <p className="boxhead">Sign Up</p>
                <input type="name" placeholder="Name" onChange={(e) => setName(e.target.value)} />
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup