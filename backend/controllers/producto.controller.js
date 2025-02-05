import pool from "../db.js"; // Conectar con PostgreSQL

const readProductos = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM productos");
    res.json(result.rows);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const readProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM productos WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al obtener producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const createProducto = async (req, res) => {
  try {
    const { nombre, descripcion, img_url, marca, precio, sku, categoria, subcategoria, cantidad } = req.body;
    const result = await pool.query(
      "INSERT INTO productos (nombre, descripcion, img_url, marca, precio, sku, categoria, subcategoria, cantidad) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
      [nombre, descripcion, img_url, marca, precio, sku, categoria, subcategoria, cantidad]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error al crear producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const updateProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion, img_url, marca, precio, sku, categoria, subcategoria, cantidad } = req.body;
    const result = await pool.query(
      "UPDATE productos SET nombre=$1, descripcion=$2, img_url=$3, marca=$4, precio=$5, sku=$6, categoria=$7, subcategoria=$8, cantidad=$9 WHERE id=$10 RETURNING *",
      [nombre, descripcion, img_url, marca, precio, sku, categoria, subcategoria, cantidad, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error al actualizar producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const deleteProducto = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("DELETE FROM productos WHERE id = $1 RETURNING *", [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }
    res.json({ message: "Producto eliminado correctamente" });
  } catch (error) {
    console.error("Error al eliminar producto:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const productoController = {
  readProductos,
  readProducto,
  createProducto,
  updateProducto,
  deleteProducto,
};
