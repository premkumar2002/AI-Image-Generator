import jwt from "jsonwebtoken";

const userAuth = (req, res, next) => {
  // Step 1: Get the Authorization header
  const authHeader = req.headers.authorization;

  // Step 2: Check if the header exists and starts with "Bearer "
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.json({ success: false, message: "Not authorized. Login Again" });
  }

  // Step 3: Extract the token after "Bearer "
  const token = authHeader.split(" ")[1];

  try {
    // Step 4: Verify the token
    const tokenDecode = jwt.verify(token, process.env.JWT_SECRET);

    // Step 5: Add the user ID to the request body for further processing
    if (tokenDecode.id) {
      req.body.userId = tokenDecode.id;
      next();
    } else {
      return res.json({
        success: false,
        message: "Not authorized. Login Again",
      });
    }
  } catch (error) {
    // Step 6: Handle errors
    res.json({ success: false, message: error.message });
  }
};

export default userAuth;
