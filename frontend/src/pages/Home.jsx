import HeaderHome from "../components/HeaderHome"
import CategoriesHome from "../components/CategoriesHome"
import DestacadosHome from "../components/DestacadosHome"
import MarcasHome from "../components/MarcasHome"

const Home = () => {
  return (
    <div className="contenedorHome">

      <section className="slideSection">
        <HeaderHome></HeaderHome>
      </section>

      <section className="slideSection">
        <CategoriesHome></CategoriesHome>
      </section>

      <section className="slideSection">
        <DestacadosHome></DestacadosHome>
      </section>

      <section className="slideSection">
        <MarcasHome></MarcasHome>
      </section>

    </div>
  )
}

export default Home