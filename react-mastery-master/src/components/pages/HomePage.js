import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Table, Button, Spinner } from 'react-bootstrap'
import { Link } from 'react-router-dom';

// function HomePage() {
//     return (
//         <div>

//         </div>
//     )
// }

const HomePage = () => {

    const [users, setUsers] = useState([]); //we are creating users array and its setter method and by default the users array will be an empty array []
    const [loading, setLoading] = useState(true)
    //called on load of the component on once becz dependncy array is empty
    useEffect(() => {
        //getAllUsers();
        getAllUsersWithAwait();
    }, []);

    const getAllUsersWithAwait = async () => {
        const result = await axios.get("http://localhost:5000/users");
        console.log(result);
        setUsers(result.data.reverse());
        setLoading(false);
        console.log("after axios call");
    }

    const deleteUser = async (userId) => {
        await axios.delete(`http://localhost:5000/users/${userId}`);
        getAllUsersWithAwait();
    }

    const getAllUsers = () => {

        axios.get("http://localhost:5000/users")
            .then(function (response) {
                console.log(response.data);
                setUsers(response.data);
            })//do something if data is feteched from API successfully
            .catch(function (error) {
                console.log(error);
            });//do something if there was an error while fectching data from API

        console.log("after axios api call");
    }

    return (
        <div className="container">
            {users.length < 1 ? <Spinner animation="grow" /> :
                <div>
                    <h2 className="py-3">User Management System</h2>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <Link to={`/users/view/${user.id}`} className="btn btn-info me-2">View</Link>
                                            <Link to={`/users/edit/${user.id}`} className="btn btn-outline-info me-2">Edit</Link>
                                            <Button onClick={() => deleteUser(user.id)} variant="danger">Delete</Button>
                                        </td>
                                    </tr>
                                ))

                                /*
                                users.map((user, index) => {
                                    return <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.phone}</td>
                                    </tr>
                                })
                                */
                            }

                        </tbody>
                    </Table>
                </div>}
        </div>
    )
}

export default HomePage
