import { Link } from 'react-router-dom'

export default function RegisterView() {
  return (
    <>
      <div>Register</div>

      <nav>
            <Link to="/auth/login">
                Ya tienes cuenta? Inicia Sesion
            </Link>
        </nav>
    </>
  )
}
