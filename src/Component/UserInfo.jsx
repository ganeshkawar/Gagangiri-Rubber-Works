import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./UserInfo.css";

const UserInfo = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const newUser = location.state; // Get the submitted user data

  const [userList, setUserList] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : [];
  });

  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");

  useEffect(() => {
    if (newUser) {
      const updatedList = [...userList, { ...newUser, date: new Date().toISOString().split("T")[0] }];
      setUserList(updatedList);
      localStorage.setItem("users", JSON.stringify(updatedList));
    }
  }, [newUser]);

  const handleDelete = (index) => {
    const updatedList = userList.filter((_, i) => i !== index);
    setUserList(updatedList);
    localStorage.setItem("users", JSON.stringify(updatedList));
  };

  const handleDeleteAll = () => {
    setUserList([]);
    localStorage.removeItem("users");
  };

  const handleBackToDashboard = () => {
    navigate("/admindashboard");
  };

  const filteredUsers = userList.filter(user =>
    (search === "" || user.name.toLowerCase().includes(search.toLowerCase())) &&
    (filterDate === "" || user.date === filterDate)
  );

  return (
    <div className="user-info-container">
      <h2>User Information</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />
        <button className="delete-all-btn" onClick={handleDeleteAll}>Delete All</button>
      </div>

      {/* Table */}
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.email}</td>
                  <td>{user.date}</td>
                  <td>
                    <button className="delete-btn" onClick={() => handleDelete(index)}>Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="no-records">No records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <button className="back-btn" onClick={handleBackToDashboard}>Admin Dashboard</button>
    </div>
  );
};

export default UserInfo;
