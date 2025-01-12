import { db } from "../db.js";

// Add a new note
export const addNote = (req, res) => {
  const q = "INSERT INTO note(title, content, user_id,tags) VALUES (?)";
  const values = [req.body.title, req.body.content, req.body.user_id,req.body.tags];

  db.query(q, [values], (err, data) => {
    if (err) return res.status(500).json(err);
    return res.status(200).json("Note has been created successfully.");
  });
};

// Get all notes
export const getNotes = (req, res) => {
    const q = "SELECT * FROM note where user_id=?";
  
    db.query(q,[req.params.userId] , (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json(data);
    });
  };

// Get a note by ID
export const getNoteId = (req, res) => {
    const q = "SELECT * FROM note WHERE id = ?";
  
    db.query(q, [req.params.Id], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("Note not found!");
      return res.status(200).json(data[0]);
    });
  };
  
  // Update a note by ID
  export const updateNotes = (req, res) => {
    const q = "UPDATE note SET title = ?, content = ?, tags=?, updated_at = CURRENT_TIMESTAMP WHERE id = ?";
    const values = [req.body.title, req.body.content,req.body.tags,req.params.noteId];
  
    db.query(q, values, (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows === 0) return res.status(404).json("Note not found!");
      return res.status(200).json("Note has been updated successfully.");
    });
  };
  
  // Delete a note by ID
  export const deleteNotes = (req, res) => {
    const q = "DELETE FROM note WHERE id = ?";
  
    db.query(q, [req.params.noteId], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.affectedRows === 0) return res.status(404).json("Note not found!");
      return res.status(200).json("Note has been deleted successfully.");
    });
  };