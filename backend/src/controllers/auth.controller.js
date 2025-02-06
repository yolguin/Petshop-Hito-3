import "dotenv/config";
import jwt from "jsonwebtoken";
import { authModel } from "../models/auth.model.js";
import { isValidEmail } from "../utils/validators/email.validate.js";

export const login = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    const user = await authModel.getUserByEmail(email);
    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const payload = { email, id: Number(user.id), rol: user.rol };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.json({ email, token });
  } catch (error) {
    console.error("❌ ERROR en LOGIN:", error);
    return res.status(500).json({ error: "Server error", details: error.message });
  }
};

export const register = async (req, res) => {
  try {
    const { email = "", password = "" } = req.body;

    if (!email.trim() || !password.trim()) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email" });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    const existingUser = await authModel.getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const newUser = await authModel.addUser({ email, password });
    const payload = { email, id: Number(newUser.id) };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    return res.json({ email, token });
  } catch (error) {
    console.error("❌ ERROR en REGISTER:", error);
    return res.status(500).json({ error: "Server error", details: error.message });
  }
};

export const me = async (req, res) => {
  try {
    const { email } = req.user;
    const user = await authModel.getUserByEmail(email);
    return res.json({ email, id: Number(user.id) });
  } catch (error) {
    console.error("❌ ERROR en ME:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

// ✅ Nueva exportación compatible con servidor y pruebas
const authController = { login, register, me };
export default authController;

