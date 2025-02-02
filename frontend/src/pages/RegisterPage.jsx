import { useState } from "react"
import { useUser } from "../context/UserContext"

const RegisterPage = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [passConfirm, setPassConfirm] = useState('')
  const { register } = useUser()

  const emailChecking = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const validation = async (e) => {
    e.preventDefault()

    if (!emailChecking(email)) {
      alert('Por favor, ingrese un email válido')
      return
    }

    if (!email.trim() || !pass.trim() || !passConfirm.trim()) {
      alert('Todos los campos son obligatorios')
      return
    }

    if (pass.length < 6) {
      alert('la contraseña debe tener al menos 6 caracteres')
      return
    }

    if (pass !== passConfirm) {
      alert('las contraseñas no coinciden')
      return
    }

    await register(email, pass)
  }

  return (
    <div className="register-container">
      <h1>Registro</h1>
      <form className='formulario' onSubmit={validation}>
        <div className='form-group item-form'>
          <label>Ingrese su email</label>
          <input
            type='text'
            className='form-control input-form'
            placeholder="ej. contacto@email.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>

        <div className='form-group item-form'>
          <label>Ingrese su password</label>
          <input
            type='password'
            className='form-control input-form'
            placeholder="incluir al menos 6 caracteres"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            required
          />
        </div>

        <div className='form-group item-form'>
          <label>Confirme su password</label>
          <input
            type='password'
            className='form-control input-form'
            placeholder="repetir password"
            onChange={(e) => setPassConfirm(e.target.value)}
            value={passConfirm}
            required
          />
        </div>

        <button type="submit" className="btnRegister">Enviar</button>
      </form>
    </div>
  )
}

export default RegisterPage