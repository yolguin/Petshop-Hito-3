import CardProducto from "../components/CardProducto"
import { useEffect, useState } from "react"
import Subcategorias from "../components/Subcategorias"

const API_URL = import.meta.env.VITE_API_URL // ✅ Usar variable de entorno
const urlProductos = `${API_URL}/api/productos` // ✅ URL dinámica

const Perros = () => {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        fetchProductos()
    }, [])

    const fetchProductos = async () => {
        try {
            const response = await fetch(urlProductos)
            if (!response.ok) {
                throw new Error('Error en la petición de productos')
            }
            const data = await response.json()
            setProductos(data)
        } catch (error) {
            console.error('Error al obtener productos:', error)
        }
    }

    return (
        <>
            <section>
                <div className="banner-container banner-container-perro d-flex align-items-center justify-content-center">
                    <div className="banner-texto">
                        <h1>¡Lo mejor para tu perrito!</h1>
                        <hr />
                    </div>
                </div>
            </section>

            <section>
                <Subcategorias />
            </section>

            <section className="cards-container">
                <div className="container-items">
                    {productos.map((producto) => (
                        <CardProducto key={producto.id} producto={producto} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Perros
