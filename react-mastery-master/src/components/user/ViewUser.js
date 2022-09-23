import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const ViewUser = () => {

    const { userId } = useParams();//it will grab the userId value from url and return that
    const initialState = { name: "", username: "", email: "", phone: "", website: "" };
    const [user, setUser] = useState(initialState)
    const [address, setAddress] = useState({})
    const [company, setCompany] = useState({})

    useEffect(() => {
        fetchUser();//wil call only once on page load as we have passed empty dependency array
    }, []);

    const fetchUser = async () => {
        const response = await axios.get(`http://localhost:5000/users/${userId}`);
        console.log(response.data);
        setUser(response.data);
        setAddress(response.data.address)
        setCompany(response.data.company)
    }

    return (
        <div className="container">
            <Link to="/" className="btn btn-outline-info mt-2">Back</Link>
            <p className="display-2">User Id: {user.id}</p>
            <ListGroup variant="flush" className="p-2 w-75">
                <ListGroup.Item>Full name: {user.name}</ListGroup.Item>
                <ListGroup.Item>Email: {user.email}</ListGroup.Item>
                <ListGroup.Item>Phone: {user.phone}</ListGroup.Item>
                <ListGroup.Item>Username: {user.username}</ListGroup.Item>
                <ListGroup.Item>Website: {user.website}</ListGroup.Item>
                <ListGroup.Item>Address: {address.street} | {address.city}</ListGroup.Item>
                <ListGroup.Item>Company name: {company.name}</ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default ViewUser
