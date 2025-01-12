import express from "express"
import { addNote,getNotes,getNoteId,updateNotes,deleteNotes } from "../Controllers/note.js"


const router = express.Router()

router.post("/addNote", addNote);
router.get ("/getNotes/:userId", getNotes);
router.get ("/getNotes/:Id" , getNoteId);
router.put ("/updateNotes/:noteId", updateNotes);
router.delete ("/deleteNotes/:noteId", deleteNotes);

export default router