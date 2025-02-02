import { Router } from "express"
import { productoController } from "../controllers/producto.controller.js"

const router = Router()

router.get("/", productoController.readProductos)
router.get("/:id", productoController.readProducto)
router.post("/", productoController.createProducto)
router.put("/:id", productoController.updateProducto)
router.delete("/:id", productoController.deleteProducto)

export default router