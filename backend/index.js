// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import fileUpload from "express-fileupload";
// import { v2 as cloudinary } from "cloudinary";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/user.route.js";
// import blogRoute from "./routes/blog.route.js";

// import cors from "cors";
// const app = express();
// dotenv.config();

// const port = process.env.PORT;
// const MONOGO_URL = process.env.MONOG_URI;

// //middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// // DB Code
// try {
//   mongoose.connect(MONOGO_URL);
//   console.log("Conntected to MonogDB");
// } catch (error) {
//   console.log(error);
// }

// // defining routes
// app.use("/api/users", userRoute);
// app.use("/api/blogs", blogRoute);
// // Cloudinary
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_SECRET_KEY,
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import fileUpload from "express-fileupload";
// import { v2 as cloudinary } from "cloudinary";
// import cookieParser from "cookie-parser";
// import userRoute from "./routes/user.route.js";
// import blogRoute from "./routes/blog.route.js";
// import cors from "cors";

// const app = express();
// dotenv.config();

// const port = process.env.PORT || 4001;
// const MONGO_URL = process.env.MONGO_URI;

// // Middleware
// app.use(express.json());
// app.use(cookieParser());
// app.use(
//   cors({
//     origin: process.env.FRONTEND_URL,
//     credentials: true,
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   })
// );

// app.use(
//   fileUpload({
//     useTempFiles: true,
//     tempFileDir: "/tmp/",
//   })
// );

// // Database Connection
// try {
//   mongoose.connect(MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.error("MongoDB connection error:", error.message);
// }

// // Defining Routes
// app.use("/api/users", userRoute);
// app.use("/api/blogs", blogRoute);

// // Cloudinary Configuration
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.CLOUD_API_KEY,
//   api_secret: process.env.CLOUD_SECRET_KEY,
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import fileUpload from "express-fileupload";
import { v2 as cloudinary } from "cloudinary";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route.js";
import blogRoute from "./routes/blog.route.js";
import cors from "cors";

const app = express();
dotenv.config();

const port = process.env.PORT || 4001;
const MONGO_URL = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

// Database Connection
try {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.error("MongoDB connection error:", error.message);
}

// Routes
app.use("/api/users", userRoute);
app.use("/api/blogs", blogRoute);

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});

// ✅ Root route for Render health check
app.get("/", (req, res) => {
  res.send("Blog App Backend is Live 🚀");
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

