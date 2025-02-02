import CardProducto from "../components/CardProducto"
import { useEffect, useState } from "react"
import Subcategorias from "../components/Subcategorias"


const urlProductos = "http://localhost:5000/api/productos"

const Perros = () => {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        fetchProductos()
    }, [])

    const fetchProductos = async () => {
        try {
            const response = await fetch(urlProductos)
            if (!response.ok) {
                throw new Error('error en url')
            }
            const data = await response.json()
            console.log(data)
            setProductos(data)

        } catch (error) {
            console.error('error', error)
        }
    }

    return (
        <>
            <section>
                <div className="banner-container banner-container-perro d-flex align-items-center justify-content-center">
                    <div className="banner-texto">
                        <h1>¡Lo mejor para tu perrito!</h1>
                        <hr></hr>
                    </div>
                </div>
            </section>

            <section>
                <Subcategorias></Subcategorias>
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