import FormGroup from '@mui/material/FormGroup'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import './LoginForm.scss'

const LoginForm = () => {

  const handleSubmitForm = () => {
    //we will make the API request here
  }

  return (
    <form onSubmit={handleSubmitForm} >
      <FormGroup className="login-form">
        <TextField
          className="input-field"
          label="Email"
          variant="outlined"
          required
          type="email"
        />
        <section className="password-input-wrapper">
          <TextField
            className="input-field"
            type="password"
            label="Password"
            variant="outlined"
            required
          />
          <a className="password-reset-link" href="#">Forgot password?</a>
        </section>
        <Button type="submit" className="login-form-button">Submit</Button>
      </FormGroup>
    </form>
  )
}

export default LoginForm