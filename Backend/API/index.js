import express from "express"
import cors from "cors";
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/user.js"
import noteRoutes from "./routes/note.js"
import cookieParser from "cookie-parser"

    const app = express()

// Enable CORS for all routes
    app.use(cors({
    origin: "http://localhost:5173", // Frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
    credentials: true, // Allow credentials (cookies, HTTP authentication, etc.)
    }));

    app.use(express.json())
    app.use(cookieParser())
    app.use("/api/auth",authRoutes)
    app.use("/api/user",userRoutes)
    app.use("/api/note",noteRoutes)

// Start the server  
    app.listen(8800,() => { //**** port
        console.log("Connected!")
})