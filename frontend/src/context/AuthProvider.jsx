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



import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([]);
  const [profile, setProfile] = useState({});
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        let token = localStorage.getItem("jwt");
        console.log("Token:", token);
        if (token) {
          const { data } = await axios.get(`${BACKEND_URL}/api/users/my-profile`, {
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          });
          if (data && data.user) {
            console.log("Fetched Profile:", data.user);
            setProfile(data.user);
            setIsAuthenticated(true);
          }
        }
      } catch (error) {
        console.log("Profile fetch error:", error);
      }
    };

    const fetchBlogs = async () => {
      try {
        const { data } = await axios.get(`${BACKEND_URL}/api/blogs/all-blogs`, {
          withCredentials: true,
        });
        console.log("Fetched Blogs:", data);
        if (data) setBlogs(data);
      } catch (error) {
        console.log("Blogs fetch error:", error);
      }
    };

    fetchBlogs();
    fetchProfile();
  }, [BACKEND_URL]);

  return (
    <AuthContext.Provider
      value={{
        blogs,
        profile,
        setProfile,
        isAuthenticated,
        setIsAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

