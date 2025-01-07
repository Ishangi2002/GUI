import express from "express"
import { addNote,getNotes,getNoteId,updateNotes,deleteNotes } from "../Controllers/note.js"


const router = express.Router()

router.post("/addNote", addNote);
router.get ("/", getNotes);
router.get ("/getNotes/:Id" , getNoteId);
router.put ("/updateNotes", updateNotes);
router.delete ("/deleteNotes", deleteNotes);

export default router