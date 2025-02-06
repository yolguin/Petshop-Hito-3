import cors from "cors"
import "dotenv/config"
import express from "express"

import authRoute from "./src/routes/auth.route.js"
import checkoutRoute from "./src/routes/checkout.route.js"
import productoRoute from "./src/routes/producto.route.js"

const app = express()

app.use(express.json())
app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/auth", authRoute)
app.use("/api/productos", productoRoute)
app.use("/api/checkouts", checkoutRoute)

app.use((_, res) => {
  res.status(404).json({ error: "Not Found" })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`✅ Servidor realmente corriendo en http://localhost:${PORT}`);
  console.log(`🌐 Prueba manualmente con: curl -I http://localhost:${PORT}`);
});


export default app;