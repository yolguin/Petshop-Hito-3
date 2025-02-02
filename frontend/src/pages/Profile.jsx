import { useUser } from "../context/UserContext"

const Profile = () => {
  const { email, logout } = useUser()

  return (
    <div className="profile-container">
      <h1>PERFIL</h1>
      <div className="profile">
        <img src="/foto-perfil.png" className="imagenPerfil" alt="Perfil" />
        <div className="profileDet">
          <span>{email}</span>
          <button className="btnCloseSesion" onClick={logout}>Cerrar sesión</button>
        </div>
      </div>
    </div>
  )
}

export default Profile