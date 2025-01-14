import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import NoteCard from "../../components/Cards/NoteCard";
import {MdAdd} from "react-icons/md";
import AddEditNotes from "./AddEditNotes";
import Modal from "react-modal";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import moment from "moment";
import Toast from "../../components/ToastMessage/Toast";
import EmptyCard from "../../components/EmptyCard/EmptyCard";
import AddNotesImg from "../../assets/images/add-notes.svg";


const Home = () => {

    const[openAddEditModal,setOpenAddEditModal]= useState({
        isShown: false,
        type: "add",
        data: null,
    });

    const [showToastMsg,setShowToastMsg] = useState({
        isShown:false,
        message: "",
        type: "add",
    });

    const [notes,setNotes] = useState([]);
    const [userInfo,setUserInfo] = useState(null);
    
    const [isSearch, setIsSearch] = useState(false);

    const navigate = useNavigate();

    const handleEdit = (noteDetails) => {
        setOpenAddEditModal({isShown: true, data: noteDetails, type:"edit"});
    };

    const showToastMessage = (message,type) =>{
        setShowToastMsg({
            isShown:true,
            message,
            type,
        });
    };


    const handleCloseToast = () =>{
        setShowToastMsg({
            isShown:false,
            message: "",
        });
    };

    //Get user info
    const getUserInfo =  async () => {
        try {
            const id = localStorage.getItem("id");
            const response = await axiosInstance.get(`api/user/getUserProfile/${id}`);
            console.log(response.data);
            setUserInfo(response.data);
            console.log(userInfo);
        } catch (error) {
            if(error.response.status === 401) {
                localStorage.clear();
                navigate("/login");
            }
        }
    };

    //Get all notes
    const getNotes = async () => {
        try{
            const id = localStorage.getItem("id");
            const response = await axiosInstance.get(`api/note/getNotes/${id}`);
                setNotes(response.data);
                
            
        
        }catch(error){
            console.log("An unexpected error occured.Please try again later.");
        }
    }

    //Delete Notes
    const deleteNotes = async (data) => {
        const noteId = data.id;
       
    try{
      const response = await axiosInstance.delete(`api/note/deleteNotes/${noteId}`);
      if (response.data && !response.data.error){
        showToastMessage("Note Deleted Successfully", 'delete');
        getNotes();
      }
    } catch(error) {
      if(
        error.response &&
        error.response.data &&
        error.response.data.message
      ){
        console.log("An unexpected error occured.Please try again later.");
      }
    }
    }

    //Search Notes
    const onSearchNotes = async (query) => {
        try {
            const id = localStorage.getItem("id");
            const response = await axiosInstance.get(`api/note/searchNotes/${id}`,{
                params: {query},
            });
            if (response.status === 200) {
                setIsSearch(true);
                setNotes(response.data);
            }
        } catch(error) {
            console.log(error);
        }
    };

    const onClearSearch = () => {
        setIsSearch(false);
        getNotes();
    }


    useEffect(()=> {
        getNotes();
        getUserInfo();
   
    }, []);

    useEffect(() => {
        setUserInfo(userInfo);
    }, [userInfo]);
    
    

    if (!userInfo ) {
        return <div>Loading...</div>;
    }


    return (
        <>
            <Navbar userInfo={userInfo} onSearchNotes={onSearchNotes} onClearSearch={onClearSearch} />
            <div className="container mx-auto">
               {notes.length > 0 ?(
                <div className="grid grid-cols-3 gap-4 mt-8">
                    
                    {notes.map((item,index)=> (
                        <NoteCard 
                        key={item.id }
                        title={item.title}
                        date={item.created_at}
                        content={item.content}
                        tags={item.tags}
                        //isPinned={item.isPinned}
                        onEdit={() => handleEdit(item)}
                        onDelete={() => deleteNotes(item)}
                        onPinNote={() => {}}
                        /> 
                    ))}
        </div>
         ) : (<EmptyCard imgSrc={AddNotesImg} message={`Start creating your first note! Click the 'Add' button to jotdown your
          thoughts,ideas and reminders. Let's get started!` }/>)}
        </div>

            <button className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary hover:bg-purple-950 absolute right-10 bottom-10" 
                onClick={() => {
                    setOpenAddEditModal({isShown: true, type: "add", data: null});
                }}>
                <MdAdd className="text-[32px] text-white" />
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
                className="w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 p-5 overflow-scroll"
            >
                <AddEditNotes 
                    type={openAddEditModal.type}
                    noteData={openAddEditModal.data}
                    onClose={() => {
                        setOpenAddEditModal({isShown: false, type:"add",data: null});
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