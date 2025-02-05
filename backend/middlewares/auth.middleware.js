import "dotenv/config";
import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  console.log("Token recibido:", token); // 👈 Verificar qué token llega

  if (!token) {
    return res.status(401).json({ error: "No tienes un token" });
  }

  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    console.log("Payload del token:", payload); // 👈 Verificar qué información tiene el token
    req.user = payload;
    next();
  } catch (error) {
    console.error("Error al verificar token:", error);
    return res.status(401).send({ error: "Token no válido" });
  }
};
