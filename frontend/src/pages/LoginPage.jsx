import { useState } from "react"
import { useUser } from "../context/UserContext"

const LoginPage = () => {
  const [emailLog, setEmailLog] = useState('')
  const [passLog, setPassLog] = useState('')
  const { login } = useUser()

  const emailChecking = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(String(email).toLowerCase())
  }

  const validationLog = async (e) => {
    e.preventDefault()

    if (!emailChecking(emailLog)) {
      alert('Por favor, ingrese un email válido')
      return
    }

    if (!emailLog.trim() || !passLog.trim()) {
      alert('Todos los campos son obligatorios')
      return
    }

    if (passLog.length < 6) {
      alert('la contraseña debe tener al menos 6 caracteres')
      return
    }

    await login(emailLog, passLog)
  }

  return (
    <div className="register-container">
      <h1>Login</h1>
      <form className='formulario' onSubmit={validationLog}>
        <div className='form-group item-form'>
          <label>Email</label>
          <input
            type='text'
            className='form-control input-form'
            placeholder="Ingrese su email"
            onChange={(e) => setEmailLog(e.target.value)}
            value={emailLog}
            required
          />
        </div>

        <div className='form-group item-form'>
          <label>Password</label>
          <input
            type='password'
            className='form-control input-form'
            placeholder="Ingrese su password"
            onChange={(e) => setPassLog(e.target.value)}
            value={passLog}
            required
          />
        </div>

        <button type="submit" className="btnRegister">Login</button>
      </form>
    </div>
  )
}

export default LoginPage