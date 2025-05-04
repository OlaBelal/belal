import React, { useState } from 'react';

function UsersInfo({ addUser }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    validateName(value);
  };

  const handleAgeChange = (e) => {
    const value = e.target.value;
    setAge(value);
    validateAge(value);
  };

  const validateName = (value) => {
    const validationErrors = { ...errors };
    if (value.trim().length < 3) {
      validationErrors.name = 'Name must be at least 3 characters long';
    } else {
      validationErrors.name = null;
    }
    setErrors(validationErrors);
  };

  const validateAge = (value) => {
    const validationErrors = { ...errors };
    if (value.trim() === '' || isNaN(value) || parseInt(value) < 18 ||parseInt(value) >100) {
      validationErrors.age = 'Adult only +18 & -100';
    } else {
      validationErrors.age = null;
    }
    setErrors(validationErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const validationErrors = {};
    if (name.trim() === '') {
      validationErrors.name = 'Name is required';
    }
    if (email.trim() === '') {
      validationErrors.email = 'Email is required';
    } else if (!isValidEmail(email)) {
      validationErrors.email = 'Invalid email format';
    }
    if (age.trim() === '') {
      validationErrors.age = 'Age is required';
    } else if (isNaN(age) || parseInt(age) < 18) {
      validationErrors.age = 'Age must be a number and at least 18';
    }
    if (phone.trim() === '') {
      validationErrors.phone = 'Phone is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const newUser = {
      id: Date.now(),
      name,
      email,
      age,
      phone,
    };

    addUser(newUser);

    // Reset form fields and errors
    setName('');
    setEmail('');
    setAge('');
    setPhone('');
    setErrors({});
  };

  const isValidEmail = (value) => {
    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
        <br />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <br />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={handleAgeChange}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        {errors.age && <p style={{ color: 'red' }}>{errors.age}</p>}
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone}</p>}
        <br />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
}

export default UsersInfo;