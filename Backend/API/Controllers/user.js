import { db } from "../db.js";

//Create User
export const createuser = (req, res) => {
  const q = "INSERT INTO user (name, email, password_hash) VALUES (?, ?, ?)";
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json("All fields are required.");
  }

  db.query(q, [name, email, password], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(201).json({
      message: "User created successfully.",
      userId: data.insertId, 
    });
  });
};

// Get user profile by ID
export const getUserProfile = (req, res) => {
    const q = "SELECT id, name, email FROM user WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
      return res.status(200).json(data[0]);
    });
  };
  
// Update user details
export const updateUser = (req, res) => {
    const q = "UPDATE user SET name = ?, email = ? WHERE id = ?";
    const values = [req.body.name, req.body.email, req.body.id];
  
    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows === 0) return res.status(404).json("User not found!");
      return res.status(200).json("User updated successfully.");
    });
  };
  
// Delete a user
export const deleteUser = (req, res) => {
    const q = "DELETE FROM user WHERE id = ?";
    db.query(q, [req.params.id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows === 0) return res.status(404).json("User not found!");
      return res.status(200).json("User deleted successfully.");
    });
  };