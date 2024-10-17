import React from 'react';
import './index.css'; // Assuming you're using this CSS file

const MyAccount = () => {
    return (
        <div className="account-contain">
            <h2>My Account</h2>
            <form className="account">
                <div className="form-grouping">
                    <label className="form-group-label" htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter your name" />
                </div>
                <div className="form-grouping">
                    <label className="form-group-label" htmlFor="birthday">Birthday:</label>
                    <input type="text" id="birthday" placeholder="Enter your birthday" />
                </div>
                <div className="form-grouping">
                    <label className="form-group-label" htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-grouping">
                    <label className="form-group-label" htmlFor="phone">Phone:</label>
                    <input type="text" id="phone" placeholder="Enter your phone number" />
                </div>
                <button className="submit-button" onClick={(e) => e.preventDefault()}>Update</button>
            </form>
        </div>
    );
};

export default MyAccount;
