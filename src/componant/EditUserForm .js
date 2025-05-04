import React, { useState } from 'react';

function EditUserForm({ editUser, setEditUser, updateUser }) {
  const [name, setName] = useState(editUser.name);
  const [age, setAge] = useState(editUser.age);
  const [phone, setPhone] = useState(editUser.phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedUser = {
      ...editUser,
      name,
      age,
      phone
    };

    updateUser(updatedUser);
    setEditUser(null);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', border: '' }}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        <br />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        <br />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ marginBottom: '10px', width: '300px' }}
        />
        <br />
        <button type="submit">Update User</button>
      </form>
    </div>
  );
}

export default EditUserForm;