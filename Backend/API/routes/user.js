import express from "express"
import { createuser,getUserProfile,updateUser,deleteUser } from "../Controllers/user.js"

const router = express.Router();

router.post('/createuser/', createuser);
router.get('/getUserProfile/:id', getUserProfile);
router.put('/update/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);



export default router;