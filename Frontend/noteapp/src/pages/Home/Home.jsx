import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import { MdAdd } from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import moment from "moment";
import Toast from "../../components/ToastMessage/Toast";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import AddNotesImg from "../../assets/images/add-notes.svg";

const Home = () => {

  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  });

  const [showToastMsg, setShowToastMsg] = useState({
    isShown: false,
    message: "",
    type: "add",
  });

  const [notes, setNotes] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  const [isSearch, setIsSearch] = useState(false);

  const navigate = useNavigate();

  const handleEdit = (noteDetails) => {
    setOpenAddEditModal({ isShown: true, data: noteDetails, type: "edit" });
  };

  const showToastMessage = (message, type) => {
    setShowToastMsg({
      isShown: true,
      message,
      type,
    });
  };

  const handleCloseToast = () => {
    setShowToastMsg({
      isShown: false,
      message: "",
    });
  };

  // Get user info
  const getUserInfo = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await axiosInstance.get(`api/user/getUserProfile/${id}`);
      setUserInfo(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        localStorage.clear();
        navigate("/login");
      }
    }
  };

  // Get all notes
  const getNotes = async () => {
    try {
      const id = localStorage.getItem("id");
      const response = await axiosInstance.get(`api/note/getNotes/${id}`);
      setNotes(response.data);
    } catch (error) {
      console.log("An unexpected error occurred. Please try again later.");
    }
  };

  // Delete Notes
  const deleteNotes = async (data) => {
    const noteId = data.id;

    try {
      const response = await axiosInstance.delete(`api/note/deleteNotes/${noteId}`);
      if (response.data && !response.data.error) {
        showToastMessage("Note Deleted Successfully", 'delete');
        getNotes();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        console.log("An unexpected error occurred. Please try again later.");
      }
    }
  };

  // Search Notes
  const onSearchNotes = async (query) => {
    try {
      const id = localStorage.getItem("id");
      const response = await axiosInstance.get(`api/note/searchNotes/${id}`, {
        params: { query },
      });
      if (response.status === 200) {
        setIsSearch(true);
        setNotes(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onClearSearch = () => {
    setIsSearch(false);
    getNotes();
  };

  useEffect(() => {
    getNotes();
    getUserInfo();
  }, []);

  useEffect(() => {
    setUserInfo(userInfo);
  }, [userInfo]);

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar userInfo={userInfo} onSearchNotes={onSearchNotes} onClearSearch={onClearSearch} />
      <div className="container">
        {notes.length > 0 ? (
          <div className="grid">
            {notes.map((item, index) => (
              <NoteCard
                key={item.id}
                title={item.title}
                date={item.created_at}
                content={item.content}
                tags={item.tags}
                onEdit={() => handleEdit(item)}
                onDelete={() => deleteNotes(item)}
                onPinNote={() => {}}
              />
            ))}
          </div>
        ) : (
          <EmptyCard
            imgSrc={AddNotesImg}
            message={`Start creating your first note! Click the 'Add' button to jot down your thoughts, ideas, and reminders. Let's get started!`}
          />
        )}
      </div>

      <button
      className="add-button"
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null });
        }}
      >
        <MdAdd />
      </button>

      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=""
        className="modal"
      >
        <AddEditNotes
          type={openAddEditModal.type}
          noteData={openAddEditModal.data}
          onClose={() => {
            setOpenAddEditModal({ isShown: false, type: "add", data: null });
          }}
          getNotes={getNotes}
          user_id={userInfo.id}
          showToastMessage={showToastMessage}
        />
      </Modal>

      <Toast
        isShown={showToastMsg.isShown}
        message={showToastMsg.message}
        type={showToastMsg.type}
        onClose={handleCloseToast}
      />
    </>
  );
};

export default Home;
