import React, { useState } from 'react';
// import { addAccount } from '../actions/accountActions';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../utils/AuthContext';



const CreateAccount = ({setIsLoggedIn}) => {

  const { registerUser } = useAuth();
  const [formData, setFormData] = useState({
    name: '',
    birthday: '',
    email: '',
    phone: '',
    password: '',
    role: '', // Add role to form data
  });

  const [errors, setErrors] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.birthday) newErrors.birthday = 'Birthday is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.password) newErrors.password = 'Password is required';
    if (!formData.role) newErrors.role = 'Role is required'; // Validate role
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      // await addAccount(formData.name, formData.email, formData.password, formData.role, formData.birthday, formData.phone);
      const name = formData.name;
      const email = formData.email;
      const password = formData.password;
      const role = formData.role;
      const birthday = formData.birthday;
      const phone = formData.phone;
      const userInfo = { name, email, password, role, birthday, phone };
      registerUser(userInfo);
      alert('Account created successfully!');
      history.push('/');
      setIsLoggedIn(true);
    }
  };

  return (
    <div className="container">
      <h1>Create an Account</h1>
      <form className="account-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="birthday">Birthday</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={formData.birthday}
            onChange={handleChange}
            className={errors.birthday ? 'error' : ''}
          />
          {errors.birthday && <p className="error-message">{errors.birthday}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? 'error' : ''}
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>

        {/* Dropdown for selecting the role */}
        <div className="form-group">
          <label htmlFor="role">Role</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className={errors.role ? 'error' : ''}
          >
            <option value="">Select your role</option>
            <option value="patient">Patient</option>
            <option value="medical staff">Medical Staff</option>
            <option value="admin">Admin</option>
            <option value="call center">Call Center</option>
          </select>
          {errors.role && <p className="error-message">{errors.role}</p>}
        </div>

        <button type="submit" className="submit-btn">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default CreateAccount;
