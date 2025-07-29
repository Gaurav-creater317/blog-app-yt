// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { useAuth } from "../context/AuthProvider";
// import axios from "axios";
// import toast from "react-hot-toast";

// function Navbar() {
//   const [show, setShow] = useState(false);

//   const { profile, isAuthenticated, setIsAuthenticated } = useAuth();
//   console.log(profile?.user);
//   const navigateTo = useNavigate();

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.get(
//         "https://blog-app-yt-pl9n.onrender.com/api/users/logout",
//         { withCredentials: true }
//       );
//       console.log(data);
//       localStorage.removeItem("jwt"); // deleting token in localStorage so that if user logged out it will goes to login page
//       toast.success(data.message);
//       setIsAuthenticated(false);
//       navigateTo("/login");
//     } catch (error) {
//       console.log(error);
//       toast.error("Failed to logout");
//     }
//   };

//   return (
//     <>
//       <nav className=" shadow-lg px-4 py-2">
//         <div className="flex items-center justify-between container mx-auto">
//           <div className="font-semibold text-xl">
//             Cilli<span className="text-blue-500">Blog</span>
//           </div>
//           {/* Desktop */}
//           <div className=" mx-6">
//             <ul className="hidden md:flex space-x-6">
//               <Link to="/" className="hover:text-blue-500">
//                 HOME
//               </Link>
//               <Link to="/blogs" className="hover:text-blue-500">
//                 BLOGS
//               </Link>
//               <Link to="/creators" className="hover:text-blue-500">
//                 CREATORS
//               </Link>
//               <Link to="/about" className="hover:text-blue-500">
//                 ABOUT
//               </Link>
//               <Link to="/contact" className="hover:text-blue-500">
//                 CONTACT
//               </Link>
//             </ul>
//             <div className="md:hidden" onClick={() => setShow(!show)}>
//               {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//             </div>
//           </div>
//           <div className="hidden md:flex space-x-2">
//             {isAuthenticated && profile?.user?.role === "admin" ? (
//               <Link
//                 to="/dashboard"
//                 className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
//               >
//                 DASHBOARD
//               </Link>
//             ) : (
//               ""
//             )}

//             {!isAuthenticated ? (
//               <Link
//                 to="/Login"
//                 className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
//               >
//                 LOGIN
//               </Link>
//             ) : (
//               <div>
//                 <button
//                   onClick={handleLogout}
//                   className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
//                 >
//                   LOGOUT
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         {/* mobile navbar */}
//         {show && (
//           <div className="bg-white">
//             <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
//               <Link
//                 to="/"
//                 onClick={() => setShow(!show)}
//                 smooth="true"
//                 duration={500}
//                 offset={-70}
//                 activeClass="active"
//                 className="hover:text-blue-500"
//               >
//                 HOME
//               </Link>
//               <Link
//                 to="/blogs"
//                 onClick={() => setShow(!show)}
//                 smooth="true"
//                 duration={500}
//                 offset={-70}
//                 activeClass="active"
//                 className="hover:text-blue-500"
//               >
//                 BLOGS
//               </Link>
//               <Link
//                 to="/creators"
//                 onClick={() => setShow(!show)}
//                 smooth="true"
//                 duration={500}
//                 offset={-70}
//                 activeClass="active"
//                 className="hover:text-blue-500"
//               >
//                 CREATORS
//               </Link>
//               <Link
//                 to="/about"
//                 onClick={() => setShow(!show)}
//                 smooth="true"
//                 duration={500}
//                 offset={-70}
//                 activeClass="active"
//                 className="hover:text-blue-500"
//               >
//                 ABOUT
//               </Link>
//               <Link
//                 to="/contact"
//                 onClick={() => setShow(!show)}
//                 smooth="true"
//                 duration={500}
//                 offset={-70}
//                 activeClass="active"
//                 className="hover:text-blue-500"
//               >
//                 CONTACT
//               </Link>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { AiOutlineMenu } from "react-icons/ai";
// import { IoCloseSharp } from "react-icons/io5";
// import { useAuth } from "../context/AuthProvider";
// import toast from "react-hot-toast";

// function Navbar() {
//   const [show, setShow] = useState(false);
//   const { profile, isAuthenticated, logout } = useAuth();
//   const navigateTo = useNavigate();

//   const handleLogout = async (e) => {
//     e.preventDefault();
//     try {
//       await logout(); // call logout from AuthProvider
//       navigateTo("/login");
//     } catch (error) {
//       toast.error("Failed to logout");
//     }
//   };

//   return (
//     <>
//       <nav className="shadow-lg px-4 py-2">
//         <div className="flex items-center justify-between container mx-auto">
//           <div className="font-semibold text-xl">
//             Cilli<span className="text-blue-500">Blog</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="mx-6">
//             <ul className="hidden md:flex space-x-6">
//               <Link to="/" className="hover:text-blue-500">HOME</Link>
//               <Link to="/blogs" className="hover:text-blue-500">BLOGS</Link>
//               <Link to="/creators" className="hover:text-blue-500">CREATORS</Link>
//               <Link to="/about" className="hover:text-blue-500">ABOUT</Link>
//               <Link to="/contact" className="hover:text-blue-500">CONTACT</Link>
//             </ul>
//             <div className="md:hidden" onClick={() => setShow(!show)}>
//               {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
//             </div>
//           </div>

//           {/* Auth Buttons */}
//           <div className="hidden md:flex space-x-2">
//             {isAuthenticated && profile?.role === "admin" && (
//               <Link
//                 to="/dashboard"
//                 className="bg-blue-600 text-white font-semibold hover:bg-blue-800 duration-300 px-4 py-2 rounded"
//               >
//                 DASHBOARD
//               </Link>
//             )}

//             {!isAuthenticated ? (
//               <Link
//                 to="/login"
//                 className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
//               >
//                 LOGIN
//               </Link>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="bg-red-600 text-white font-semibold hover:bg-red-800 duration-300 px-4 py-2 rounded"
//               >
//                 LOGOUT
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {show && (
//           <div className="bg-white">
//             <ul className="flex flex-col h-screen items-center justify-center space-y-3 md:hidden text-xl">
//               <Link to="/" onClick={() => setShow(false)} className="hover:text-blue-500">HOME</Link>
//               <Link to="/blogs" onClick={() => setShow(false)} className="hover:text-blue-500">BLOGS</Link>
//               <Link to="/creators" onClick={() => setShow(false)} className="hover:text-blue-500">CREATORS</Link>
//               <Link to="/about" onClick={() => setShow(false)} className="hover:text-blue-500">ABOUT</Link>
//               <Link to="/contact" onClick={() => setShow(false)} className="hover:text-blue-500">CONTACT</Link>
//             </ul>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// }

// export default Navbar;

// blog-app-yt/frontend/src/components/Navbar.jsx

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { useAuth } from "../context/AuthProvider";

function Navbar() {
  const [show, setShow] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <nav className="shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-semibold">Cilli<span className="text-blue-500">Blog</span></div>
        <div className="space-x-4 hidden md:flex">
          <Link to="/">HOME</Link>
          <Link to="/blogs">BLOGS</Link>
          <Link to="/creators">CREATORS</Link>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
        <div className="hidden md:flex space-x-2">
          {isAuthenticated && user?.role === "admin" && (
            <Link to="/dashboard" className="btn-blue">DASHBOARD</Link>
          )}
          {!isAuthenticated ? (
            <Link to="/login" className="btn-red">LOGIN</Link>
          ) : (
            <button onClick={handleLogout} className="btn-red">LOGOUT</button>
          )}
        </div>
        <div className="md:hidden" onClick={() => setShow(!show)}>
          {show ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
        </div>
      </div>
      {show && (
        <div className="md:hidden">
          <ul className="flex flex-col space-y-4 p-4">
            <Link to="/" onClick={() => setShow(false)}>HOME</Link>
            <Link to="/blogs" onClick={() => setShow(false)}>BLOGS</Link>
            <Link to="/creators" onClick={() => setShow(false)}>CREATORS</Link>
            <Link to="/about" onClick={() => setShow(false)}>ABOUT</Link>
            <Link to="/contact" onClick={() => setShow(false)}>CONTACT</Link>
            {isAuthenticated && user?.role === "admin" && (
              <Link to="/dashboard" onClick={() => setShow(false)}>DASHBOARD</Link>
            )}
            {isAuthenticated ? (
              <button onClick={() => { handleLogout(); setShow(false); }}>LOGOUT</button>
            ) : (
              <Link to="/login" onClick={() => setShow(false)}>LOGIN</Link>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;





