import React, { useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import Taginput from "../../components/input/TagInput";
import { MdClose } from "react-icons/md";

const AddEditNotes = ({ noteData, type, getNotes, onClose, user_id, showToastMessage }) => {
  const [title, setTitle] = useState(noteData?.title || "");
  const [content, setContent] = useState(noteData?.content || "");
  const [tags, setTags] = useState(noteData?.tags?.split(',') || []);
  const [error, setError] = useState(null);

  // Add note
  const addNote = async () => {
    try {
      const tagString = tags.join(',');
      const response = await axiosInstance.post("api/note/addNote", {
        title,
        content,
        tagString,
        user_id,
      });
      if (response.status === 200) {
        showToastMessage("Note Added Successfully");
        getNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  // Update note
  const updateNotes = async () => {
    const noteId = noteData.id;
    const tagString = tags.join(',');
    try {
      const response = await axiosInstance.put("api/note/updateNotes/" + noteId, {
        title,
        content,
        tagString,
      });
      if (response.status === 200) {
        showToastMessage("Note Updated Successfully");
        getNotes();
        onClose();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      }
    }
  };

  const handleAddNote = () => {
    if (!title) {
      setError("Please enter the title");
      return;
    }
    if (!content) {
      setError("Please enter the content");
      return;
    }
    setError("");

    if (type === 'edit') {
      updateNotes();
    } else {
      addNote();
    }
  };

  return (
    <div className="add-edit-notes-container">
      <button className="close-button" onClick={onClose}>
        <MdClose className="close-icon" />
      </button>

      <div className="form-group">
        <label className="input-label">TITLE<span className="required-asterisk">*</span></label>
        <input
          type="text"
          className="title-input"
          placeholder="Do the Maths Assignment"
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>

      <div className="form-group">
        <label className="input-label">CONTENT<span className="required-asterisk">*</span></label>
        <textarea
          className="content-input"
          placeholder="Content"
          rows={10}
          value={content}
          onChange={({ target }) => setContent(target.value)}
        />
      </div>

      <div className="form-group">
        <label className="input-label">TAGS</label>
        <Taginput tags={tags} setTags={setTags} />
      </div>

      {error && <p className="error-message">{error}</p>}

      <button className="submit-button" onClick={handleAddNote}>
        {type === 'edit' ? 'UPDATE' : 'ADD'}
      </button>
    </div>
  );
};

export default AddEditNotes;
