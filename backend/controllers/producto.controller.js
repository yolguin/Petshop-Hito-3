import { productoModel } from "../models/producto.model.js"
import { writeFile } from "fs/promises"

const readProductos = async (req, res) => {
  const productos = await productoModel.getProductos()
  res.json(productos)
}

const readProducto = async (req, res) => {
  const { id } = req.params
  const producto = await productoModel.getProducto(id)
  if (!producto) {
    return res.status(404).json({ message: "Producto no encontrado" })
  }
  res.json(producto)
}

const createProducto = async (req, res) => {
  const productos = await productoModel.getProductos()
  const nuevoProducto = req.body
  productos.push(nuevoProducto)
  await writeFile("db/productos.json", JSON.stringify(productos, null, 2))
  res.status(201).json(nuevoProducto)
}

const updateProducto = async (req, res) => {
  const { id } = req.params
  const productos = await productoModel.getProductos()
  const index = productos.findIndex((p) => p.id === id)
  if (index === -1) return res.status(404).json({ message: "Producto no encontrado" })

  productos[index] = { ...productos[index], ...req.body }
  await writeFile("db/productos.json", JSON.stringify(productos, null, 2))
  res.json(productos[index])
}

const deleteProducto = async (req, res) => {
  const { id } = req.params
  let productos = await productoModel.getProductos()
  productos = productos.filter((p) => p.id !== id)
  await writeFile("db/productos.json", JSON.stringify(productos, null, 2))
  res.json({ message: "Producto eliminado" })
}

export const productoController = {
  readProductos,
  readProducto,
  createProducto,
  updateProducto,
  deleteProducto,
}