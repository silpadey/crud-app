//Import useEffect & useState inside component
import { useState, useEffect } from "react"
//Import axios
import axios from "axios"


//Create a component file & create functional component
function Test() {
    const [data, setData] = useState([]) //Create a state variable

    //Use effect hook
    useEffect(() => {
        apiInvoke() //Invoke api inside useEffect hook
    }, [])


    //Create api invoke function
    async function apiInvoke() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users') //main api call
        setData(response.data)  //set the data in state
        console.log(response) //display the data in console
    }

    //iterate through the data
    const dataToBeDisplayed = data.map(element => {
        return (
            <tr>
                <td>{element.name}</td>
                <td>{element.email}</td>
            </tr>
        )
    })

    //display the data in table
    return (
        <div>
            Dashboard

            <table border={"1"}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {dataToBeDisplayed}
                </tbody>
            </table>
        </div>

    )

}

export default Test
