import { createContext, useContext, useState } from 'react' 

const UserContext = createContext()

const API_URL = import.meta.env.VITE_API_URL // ✅ Usar variable de entorno

// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null)
  const [email, setEmail] = useState(null)

  const login = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/login`, {  // ✅ Usar API_URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Error en la autenticación')
      }

      const data = await response.json()
      setToken(data.token)
      setEmail(email)
    } catch (error) {
      console.error('Error en login:', error.message)
      alert('Error en login: ' + error.message)
    }
  }

  const register = async (email, password) => {
    try {
      const response = await fetch(`${API_URL}/api/auth/register`, {  // ✅ Usar API_URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      })

      if (!response.ok) {
        const errorText = await response.text()
        throw new Error(errorText || 'Error en el registro')
      }

      const data = await response.json()
      setToken(data.token)
      setEmail(email)
    } catch (error) {
      console.error('Error en registro:', error.message)
      alert('Error en registro: ' + error.message)
    }
  }

  const logout = () => {
    setToken(null)
    setEmail(null)
  }

  const getProfile = async () => {
    try {
      const response = await fetch(`${API_URL}/api/auth/me`, {  // ✅ Usar API_URL
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        throw new Error(data.message || 'Failed to fetch profile')
      }
    } catch (error) {
      console.error('Error fetching profile:', error)
      alert(error.message)
    }
  }

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useUser = () => useContext(UserContext)
