import pool from "../db.js";

const create = async (req, res) => {
  try {
    const { cart } = req.body;
    const user_id = req.user.id; // Usuario autenticado

    // Validar que el carrito no esté vacío
    if (!cart || cart.length === 0) {
      return res.status(400).json({ error: "El carrito está vacío" });
    }

    // Calcular el total del pedido trayendo los precios de la base de datos
    let total_price = 0;

    for (const item of cart) {
      const productResult = await pool.query(
        "SELECT precio FROM productos WHERE id = $1", // 🔹 Cambiado de `price` a `precio`
        [item.product_id]
      );

      if (productResult.rows.length === 0) {
        return res.status(400).json({ error: `Producto con ID ${item.product_id} no encontrado` });
      }

      const product_price = productResult.rows[0].precio; // 🔹 Usamos `precio`
      total_price += product_price * item.quantity;

      // Guardar el precio en cada `item` para usarlo en `order_items`
      item.precio = product_price;
    }

    // Insertar el pedido en la tabla `orders`
    const orderResult = await pool.query(
      "INSERT INTO orders (user_id, total_price) VALUES ($1, $2) RETURNING id",
      [user_id, total_price]
    );

    const order_id = orderResult.rows[0].id;

    // Insertar los productos en `order_items`
    for (const item of cart) {
      await pool.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)",
        [order_id, item.product_id, item.quantity, item.precio] // 🔹 Usamos `item.precio` corregido
      );
    }

    return res.json({
      message: "Checkout exitoso",
      order_id: order_id,
      total_price: total_price,
      user: req.user,
    });

  } catch (error) {
    console.error("Error en checkout:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const checkoutController = {
  create,
};

