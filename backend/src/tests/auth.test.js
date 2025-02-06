import request from "supertest";
import app from "../../index.js"; 

describe("Pruebas de Autenticación", () => {
  test("Debe registrar un usuario nuevo", async () => {
    const uniqueEmail = `test${Date.now()}@example.com`;

    const res = await request(app).post("/api/auth/register").send({
      email: uniqueEmail,
      password: "123456"
    });

    console.log("🔍 Respuesta del servidor:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  test("Debe iniciar sesión y recibir un token", async () => {
    const res = await request(app).post("/api/auth/login").send({
      email: "cliente@petshop.com",
      password: "cliente123"
    });

    console.log("🔍 Respuesta del servidor:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  test("Debe obtener información del usuario autenticado", async () => {
    const loginRes = await request(app).post("/api/auth/login").send({
      email: "cliente@petshop.com",
      password: "cliente123"
    });

    const token = loginRes.body.token;

    const res = await request(app)
      .get("/api/auth/me")
      .set("Authorization", `Bearer ${token}`);

    console.log("🔍 Respuesta del servidor:", res.body);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("email");
  });

  test("Debe rechazar un checkout sin autenticación", async () => {
    const res = await request(app).post("/api/checkouts").send({
      cart: [
        { id: 2, cantidad: 1, precio: 20990 }
      ]
    });

    console.log("🔍 Respuesta del servidor:", res.body);

    expect(res.statusCode).toBe(401);
    expect(res.body).toHaveProperty("error");
  });
});
