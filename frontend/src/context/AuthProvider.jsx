// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState();
//   const [profile, setProfile] = useState();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         // token should be let type variable because its value will change in every login. (in backend also)
//         let token = localStorage.getItem("jwt"); // Retrieve the token directly from the localStorage (Go to login.jsx)
//         console.log(token);
//         if (token) {
//           const { data } = await axios.get(
//             "http://localhost:4001/users/my-profile",
//             {
//               withCredentials: true,
//               headers: {
//                 "Content-Type": "application/json",
//               },
//             }
//           );
//           console.log(data.user);
//           setProfile(data.user);
//           setIsAuthenticated(true);
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     const fetchBlogs = async () => {
//       try {
//         const { data } = await axios.get(
//           "http://localhost:4001/blogs/all-blogs",
//           { withCredentials: true }
//         );
//         console.log(data);
//         setBlogs(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchBlogs();
//     fetchProfile();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         blogs,
//         profile,
//         setProfile,
//         isAuthenticated,
//         setIsAuthenticated,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]); // Initialize as an empty array
//   const [profile, setProfile] = useState({}); // Initialize as an empty object
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         let token = localStorage.getItem("jwt");
//         console.log("Token:", token);
//         if (token) {
//           const { data } = await axios.get("http://localhost:4001/api/users/my-profile", {
//             withCredentials: true,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (data && data.user) {
//             console.log("Fetched Profile:", data.user);
//             setProfile(data.user);
//             setIsAuthenticated(true);
//           }
//         }
//       } catch (error) {
//         console.log("Profile fetch error:", error);
//       }
//     };

//     const fetchBlogs = async () => {
//       try {
//         const { data } = await axios.get("http://localhost:4001/api/blogs/all-blogs", {
//           withCredentials: true,
//         });
//         console.log("Fetched Blogs:", data);
//         if (data) setBlogs(data);
//       } catch (error) {
//         console.log("Blogs fetch error:", error);
//       }
//     };

//     fetchBlogs();
//     fetchProfile();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         blogs,
//         profile,
//         setProfile,
//         isAuthenticated,
//         setIsAuthenticated,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import axios from "axios";
// import React, { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// const backendURL = import.meta.env.VITE_BACKEND_URL;

// export const AuthProvider = ({ children }) => {
//   const [blogs, setBlogs] = useState([]);
//   const [profile, setProfile] = useState({});
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         let token = localStorage.getItem("jwt");
//         console.log("Token:", token);
//         if (token) {
//           const { data } = await axios.get(`${backendURL}/api/users/my-profile`, {
//             withCredentials: true,
//             headers: {
//               "Content-Type": "application/json",
//             },
//           });
//           if (data?.user) {
//             console.log("Fetched Profile:", data.user);
//             setProfile(data.user);
//             setIsAuthenticated(true);
//           }
//         }
//       } catch (error) {
//         console.log("Profile fetch error:", error);
//       }
//     };

//     const fetchBlogs = async () => {
//       try {
//         const { data } = await axios.get(`${backendURL}/api/blogs/all-blogs`, {
//           withCredentials: true,
//         });
//         console.log("Fetched Blogs:", data);
//         if (data) setBlogs(data);
//       } catch (error) {
//         console.log("Blogs fetch error:", error);
//       }
//     };

//     fetchBlogs();
//     fetchProfile();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         blogs,
//         profile,
//         setProfile,
//         isAuthenticated,
//         setIsAuthenticated,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);



// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const backendURL = import.meta.env.VITE_BACKEND_URL;


// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [blogs, setBlogs] = useState([]);

//   const fetchProfile = async () => {
//     try {
//       const token = localStorage.getItem("jwt");
//       if (!token) return;

//       const { data } = await axios.get(`${backendURL}/api/users/my-profile`, {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setUser(data?.user);
//     } catch (error) {
//       console.error("Error fetching profile:", error.message);
//     }
//   };

//   const fetchBlogs = async () => {
//     try {
//       const token = localStorage.getItem("jwt");
//       if (!token) return;

//       const { data } = await axios.get(`${backendURL}/api/blogs/all-blogs`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setBlogs(data?.blogs || []);
//     } catch (error) {
//       console.error("Error fetching blogs:", error.message);
//     }
//   };

//   useEffect(() => {
//     fetchProfile();
//     fetchBlogs();
//   }, []);

//   return (
//     <AuthContext.Provider value={{ user, blogs, fetchBlogs, fetchProfile }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);

// frontend/context/AuthProvider.jsx

// import React, { createContext, useContext, useEffect, useState } from "react";
// import axios from "axios";

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   useEffect(() => {
//     const token = localStorage.getItem("jwt");
//     if (token) {
//       setIsAuthenticated(true);
//       // Optionally fetch user or blogs
//     }
//   }, []);

//   const login = (userData, token) => {
//     setUser(userData);
//     localStorage.setItem("jwt", token);
//     setIsAuthenticated(true);
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("jwt");
//     setIsAuthenticated(false);
//   };

//   const fetchBlogs = async () => {
//     try {
//       const res = await axios.get("https://blog-app-api-xyz.onrender.com/api/blogs"); // Replace with your backend
//       setBlogs(res.data);
//     } catch (err) {
//       console.error("Failed to fetch blogs", err);
//     }
//   };

//   return (
//     <AuthContext.Provider
//       value={{ user, blogs, setBlogs, fetchBlogs, login, logout, isAuthenticated }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => useContext(AuthContext);


import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const backendURL = import.meta.env.VITE_BACKEND_URL;

  const fetchUser = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/users/profile`, {
        withCredentials: true,
      });
      setUser(res.data);
      setIsAuthenticated(true);
    } catch (error) {
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await axios.get(`${backendURL}/api/users/logout`, {
        withCredentials: true,
      });

      setUser(null);
      localStorage.removeItem("jwt");
      setIsAuthenticated(false);
      toast.success("User logged out successfully");
    } catch (error) {
      console.error("Logout failed:", error);
      throw error; // So that Navbar can catch and handle it
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser, isAuthenticated, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

