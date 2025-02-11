import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); // Cargar variables de entorno desde el archivo .env

const { Pool } = pkg; // Extraer Pool del paquete pg

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

// Probar conexión
pool.connect()
  .then(() => console.info('✅ Conexión establecida con PostgreSQL'))
  .catch(err => console.error('❌ Error al conectar a PostgreSQL:', err.message));

export default pool;


