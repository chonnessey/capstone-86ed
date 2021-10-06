import React, { useRef, useState } from 'react'
import { Grid, Paper, Button, Avatar, Typography, TextField, Alert } from '@mui/material'
import LoginIcon from '@mui/icons-material/Login';
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

const Login = () => {

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/')
    } catch {
      setError('Failed to sign in')
    }

    setLoading(false)
  }

  const paperStyle={padding: '30px 20px', width: 300, margin: '20px auto'}
  const headerStyle={margin: 0}
  const avatarStyle={backgroundColor: '#1bbd7e'}
  const buttonStyle={width: '100%', marginTop: '10px'}
  const linkStyle={marginTop: '10px', textAlign: 'center'}

  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <LoginIcon />
          </Avatar>

        <h2 style={headerStyle}>Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Typography variant='caption'>Fill out the form to create an account.</Typography>
        </Grid>
      <form onSubmit={handleSubmit} className="signup__form">
        <TextField ref={emailRef} required type="email" fullWidth label='Email' />
        <TextField ref={passwordRef} required type="password" fullWidth label='Password' />
        <Button style={buttonStyle} disabled={loading} className="form__button" type="submit" variant="contained">Log In</Button>
      </form>
      <div style={linkStyle}>Need an Account? <Link to='/signup'>Sign Up</Link></div>
      </Paper>
    </Grid>
  )
}

export default Login

