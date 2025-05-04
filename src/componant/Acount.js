import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import UsersInfo from './UsersInfo';
import EditUserForm from './EditUserForm ';
function Account() {
  const [data, setData] = useState([]);
  const [showAddUserForm, setShowAddUserForm] = useState(false);
  const [showFooter, setShowFooter] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:9003/comments');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const [editUserId, setEditUserId] = useState(null);
const [editUser, setEditUser] = useState({
  name: '',
  age: '',
  phone: ''
});
const handleDelete = (id) => {
  const updatedData = data.filter((user) => user.id !== id);
  setData(updatedData);

  if (editUserId === id) {
    setEditUserId(null);
    setEditUser({
      name: '',
      age: '',
      phone: ''
    });
  }
};

  const handleEdit = (id) => {
    const userToEdit = data.find((user) => user.id === id);
    setEditUserId(id);
    setEditUser(userToEdit);
  }; 
  {editUserId && (
    <EditUserForm
      editUser={editUser}
      setEditUser={setEditUser}
      updateUser={(updatedUser) => {
        const updatedData = data.map((user) => (user.id === editUserId ? updatedUser : user));
        setData(updatedData);
      }}
    />
  )}

  const addUser = (newUser) => {
    const newId = data.length > 0 ? Math.max(...data.map(user => user.id)) + 1 : 1;
    const updatedUser = { ...newUser, id: newId };
    setData((prevData) => [...prevData, updatedUser]);
  };

  const toggleAddUserForm = () => {
    setShowAddUserForm(!showAddUserForm);
  };

  const toggleFooter = () => {
    setShowFooter(!showFooter);
  };

  return (
    <div>
      <button className="btn btn-success m-3" onClick={toggleAddUserForm}>
        <FontAwesomeIcon icon={faSignInAlt} className="mr-2" />
        {showAddUserForm ? 'Hide Form' : 'Add User'}
      </button>

      {showAddUserForm && <UsersInfo addUser={addUser} />}

      <div
        style={{
          border: '1px solid #ccc',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          padding: '20px',
          borderRadius: '4px',
        }}
      >
        <table className="table mt-5">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">phone</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id}>
                <th scope="row">{user.id}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.phone}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(user.id)}
                  >
                    delete
                  </button>
                  <button
                    className="btn btn-info btn-sm"
                    onClick={() => handleEdit(user.id)}
                  >
                    edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <br/>
      <Footer/>
    </div>
  );
}

export default Account;