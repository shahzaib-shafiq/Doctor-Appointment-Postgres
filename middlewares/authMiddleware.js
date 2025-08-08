import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config(); // Load .env variables
const authMiddleware = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        message: "No token provided",
        success: false,
      });
    }

    const token = authHeader.split(" ")[1];
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user info to request
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.error("JWT error:", error);
    res.status(401).send({
      message: "Authentication Failed",
      success: false,
    });
  }
};

export default authMiddleware;
