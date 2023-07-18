import React, {useState, useEffect} from "react";
import axios from 'axios';


export default function Admins() {

    const [employees, setEmployees] = useState([])
    useEffect(() => {
        axios.get("http://localhost:3088/adminStruct")
            .then(employees => setEmployees(employees.data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <h1 className='admin-heading'>Admin Details</h1>
            <div className="admin-panel-content">
                <table className="login-table">
                    <thead>
                    <tr>
                        <th>USERNAME</th>
                        <th>EMAIL</th>
                        <th>PASSWORD</th>
                        <th>DELETE ADMIN</th>
                    </tr>
                    </thead>
                    <tbody>
                    {employees.map(Employee => {
                        return <tr>
                            <td>{Employee.username}</td>
                            <td>{Employee.email}</td>
                            <td>{Employee.password}</td>
                        </tr>
                    })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}