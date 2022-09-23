import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {

    const navigate = useNavigate();
    const initialState = { name: "", username: "", email: "", phone: "", website: "" };
    const [user, setUser] = useState(initialState)

    const { name, username, email, phone, website } = user; //object destructuring

    const onChangeInput = event => {
        //console.log(event);
        //console.log(event.target.name);
        //console.log(event.target.value);
        //spread operator appends to existing data
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const onFormSubmit = async (event) => {
        event.preventDefault();
        if (!user.name) {
            alert("Name cannot be empty");
            return;
        }
        if (!user.username) {
            alert("Username cannot be empty");
            return;
        }
        if (!user.email) {
            alert("Email cannot be empty");
            return;
        }
        if (!user.phone) {
            alert("Phone cannot be empty");
            return;
        }

        await axios.post("http://localhost:5000/users", user);
        navigate({ pathname: '/' });

    }

    return (
        <div className="container">
            <div className="w-75 mx-auto p-5 shadow">
                <h2 className="text-center mb-4">Add User</h2>
                <form onSubmit={(event) => onFormSubmit(event)}>
                    <div className="form-group mb-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your full name"
                            name="name"
                            value={name}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your username"
                            name="username"
                            value={username}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>
                    <div className="form-group mb-2">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your phone number"
                            name="phone"
                            value={phone}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>
                    <div className="form-group mb-4">
                        <input type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter your website"
                            name="website"
                            value={website}
                            onChange={(event) => onChangeInput(event)}
                        />
                    </div>
                    <button type="submit" className="btn btn-info text-white col-12">Add user</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
