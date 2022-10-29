import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        localStorage.setItem('isAuthenticated', true)
        localStorage.setItem('email', email)
        navigate('/dashboard')
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="box">
                <p className="boxhead">Sign In</p>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" className="btn">Sign In</button>
            </form>
        </>
    )
}

export default Signin