import { Router } from "express";
import { authController } from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { adminMiddleware } from "../middlewares/role.middleware.js"; // Importamos el middleware de admin

const router = Router();

router.post("/login", authController.login);
router.post("/register", authController.register);
router.get("/me", authMiddleware, authController.me);

// 🔹 Nueva ruta protegida solo para admins
router.get("/admin-only", authMiddleware, adminMiddleware, (req, res) => {
  res.json({ message: "Bienvenido, admin!" });
});

export default router;
