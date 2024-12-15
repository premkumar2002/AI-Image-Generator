import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

export const AppProvider = (props) => {
  const [user, setUser] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token);
  const [credit, setCredit] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const loadCreditsData = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: {
          Authorization: `Bearer ${token}`, // Send token in Authorization header
        },
      });
      if (data.success) {
        setCredit(data.credits);
        setUser(data.user);
      } else {
        toast.error(data.message); // Handle server response errors
      }
    } catch (error) {
      console.error("Error loading credits:", error); // Log full error object
      toast.error(error.response ? error.response.data.message : error.message); // More detailed error message
    }
  };

  const generateImage = async (prompt) => {
    // Step 1: Get the token from localStorage
    const token = localStorage.getItem("token");

    // Step 2: Check if token exists
    if (!token) {
      toast.error("Not authorized. Please login again.");
      return null;
    }

    try {
      // Step 3: Make the API call
      const response = await axios.post(
        `${backendUrl}/api/image/generate-image`,
        { prompt }, // Pass the prompt in the request body
        {
          headers: {
            Authorization: `Bearer ${token}`, // Send token in Authorization header
          },
        }
      );

      // Step 4: Handle the response
      if (response.data.success) {
        toast.success("Image generated successfully!");
        loadCreditsData();
        return response.data.resultImage; // This should contain the generated image URL
      } else {
        toast.error(response.data.message);
        loadCreditsData();
        if (response.data.creditBalance === 0) {
          navigate("/buy-credit");
        }
      }
    } catch (error) {
      // Step 5: Handle any errors
      toast.error("An error occurred while generating the image.");
      console.error(error);
      return null;
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
  };
  useEffect(() => {
    if (token) {
      loadCreditsData();
    }
  }, [token]);

  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
    backendUrl,
    token,
    setToken,
    credit,
    setCredit,
    loadCreditsData,
    logout,
    generateImage,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppProvider;
