import { NavLink } from "react-router-dom"

const CategoriesHome = () => {

    return (
        <div className="categorySection">
            <h2>Categorías</h2>

            <div className="boxSection">
                <div className="boxCategory">
                    <NavLink to="/perros" className="imgCategory" >
                        <img src="/002-dog.png"></img>
                        <span className="txtCategory">perros</span>
                    </NavLink>
                </div>

                <div className="boxCategory">
                    <NavLink to="/gatos" className="imgCategory" >
                        <img src="/001-cat.png"></img>
                        <span className="txtCategory">gatos</span>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default CategoriesHome
