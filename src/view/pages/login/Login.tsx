import LoginForm from './components/LoginForm'
import './Login.scss'

const Login = () => {
  return (
    <section className="login-page-wrapper">
      <section className="login-form-container">
        <h1 className="login-page-header">Login</h1>
        <LoginForm />
      </section>
    </section>
  )
}

export default Login