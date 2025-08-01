// import React from "react";
// import Navbar from "../src/components/Navbar";
// import Home from "../src/components/Home";
// import Footer from "../src/components/Footer";
// import { Navigate, Route, Routes, useLocation } from "react-router-dom";
// import Blogs from "../src/pages/Blogs";
// import About from "../src/pages/About";
// import Contact from "../src/pages/Contact";
// import Login from "../src/pages/Login";
// import Register from "../src/pages/Register";
// import Dashboard from "../src/pages/Dashboard";
// import Creators from "./pages/Creators";
// import { useAuth } from "./context/AuthProvider";
// import { Toaster } from "react-hot-toast";
// import UpdateBlog from "./dashboard/UpdateBlog";
// import Detail from "./pages/Detail";
// // import NotFound from "./pages/NotFound";
// function App() {
//   const location = useLocation();
//   const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
//     location.pathname
//   );
//   const { blogs, isAuthenticated } = useAuth();
//   let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage to maininting the routes protect (Go to login.jsx)
//   console.log(blogs);
//   console.log(isAuthenticated); // it is not using because every page refresh it was redirected to /login

//   return (
//     <div>
//       {!hideNavbarFooter && <Navbar />}
//       <Routes>
//         <Route
//           exact
//           path="/"
//           element={token ? <Home /> : <Navigate to={"/login"} />}
//         />
//         <Route exact path="/blogs" element={<Blogs />} />
//         <Route exact path="/about" element={<About />} />
//         <Route exact path="/contact" element={<Contact />} />
//         <Route exact path="/creators" element={<Creators />} />
//         <Route exact path="/login" element={<Login />} />
//         <Route exact path="/register" element={<Register />} />
//         <Route exact path="/dashboard" element={<Dashboard />} />

//         {/* Single page route */}
//         <Route exact path="/blog/:id" element={<Detail />} />

//         {/* Update page route */}
//         <Route exact path="/blog/update/:id" element={<UpdateBlog />} />

//         {/* Universal route */}
//         {/*<Route path="*" element={<NotFound />} />*/}
//       </Routes>
//       <Toaster />
//       {!hideNavbarFooter && <Footer />}
//     </div>

// frontend/App.jsx


// frontend/App.jsx

// frontend/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Blogs from "./pages/Blogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Creators from "./pages/Creators";
import { useAuth } from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";
import UpdateBlog from "./dashboard/UpdateBlog";
import Detail from "./pages/Detail";
// import NotFound from "./pages/NotFound";

function App() {
  const location = useLocation();
  const hideNavbarFooter = ["/dashboard", "/login", "/register"].includes(
    location.pathname
  );

  const { isAuthenticated, user } = useAuth();

  return (
    <div>
      {!hideNavbarFooter && <Navbar />}
      <Routes>
        {/* Public routes */}
        <Route
          exact
          path="/"
          element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
        />
        <Route exact path="/blogs" element={<Blogs />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/creators" element={<Creators />} />

        {/* Auth routes */}
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />

        {/* Protected routes */}
        <Route
          exact
          path="/dashboard"
          element={
            isAuthenticated && user?.role === "admin" ? (
              <Dashboard />
            ) : (
              <Navigate to="/login" />
            )
          }
        />

        <Route
          exact
          path="/blog/:id"
          element={isAuthenticated ? <Detail /> : <Navigate to="/login" />}
        />
        <Route
          exact
          path="/blog/update/:id"
          element={isAuthenticated && user?.role === "admin" ? (
            <UpdateBlog />
          ) : (
            <Navigate to="/login" />
          )}
        />

        {/* 404 fallback route (optional) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Toaster />
      {!hideNavbarFooter && <Footer />}
    </div>
  );
}

export default App;
