import express from "express"
import { addNote,getNotes,getNoteId,searchNotes,updateNotes,deleteNotes } from "../Controllers/note.js"


const router = express.Router()

router.post("/addNote", addNote);
router.get ("/getNotes/:userId", getNotes);
router.get ("/getNote/:Id" , getNoteId);
router.put ("/updateNotes/:noteId", updateNotes);
router.delete ("/deleteNotes/:noteId", deleteNotes);
router.get("/searchNotes/:noteId",searchNotes);


export default router