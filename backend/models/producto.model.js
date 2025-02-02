import { readFile } from "node:fs/promises"

const getProductos = async () => {
  const data = await readFile("db/productos.json", "utf-8")
  return JSON.parse(data)
}

const getProducto = async (id) => {
  const productos = await getProductos()
  return productos.find((producto) => producto.id === id)
}

export const productoModel = {
  getProductos,
  getProducto,
}
