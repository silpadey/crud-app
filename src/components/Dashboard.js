//create a functiona component
//state - data, setData []
//state - name, setName "Piu"
//return " welcome, ${name}"


import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Dashboard() {
    const [data, setData] = useState([])
    const [name, setName] = useState("Piu")
    const [email, setEmail] = useState("")




    if (localStorage.getItem('isAuthenticated')) {
        return (
            <>
                <div>Dashboard</div>
                <div>Welcome, {localStorage.getItem('email')} </div>
            </>
        )
    }

    else {
        return (
            <Navigate replace to='/signin' />
        )
    }
}


export default Dashboard
