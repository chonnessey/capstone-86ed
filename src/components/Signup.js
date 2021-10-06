import React, { useRef, useState } from 'react'
import { Grid, Paper, Button, Avatar, Typography, TextField, Alert } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../assets/Signup.css'
import { useAuth } from '../contexts/AuthContext'

const Signup = () => {

  const emailRef = useRef()
  const userNameRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmationRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
      return setError('Passwords do not match')
    }

    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
    } catch {
      setError('Failed to create an account')
    }

    setLoading(false)
  }

  const paperStyle={padding: '30px 20px', width: 300, margin: '20px auto'}
  const headerStyle={margin: 0}
  const avatarStyle={backgroundColor: '#1bbd7e'}
  
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddBoxIcon />
          </Avatar>

        <h2 style={headerStyle}>Sign Up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Typography variant='caption' gutterBottom={5}>Fill out the form to create an account.</Typography>
        </Grid>
      <form onSubmit={handleSubmit} className="signup__form">
        <TextField ref={emailRef} required type="email" fullWidth label='Email' />
        <TextField ref={userNameRef} required type="text" fullWidth label='Username' />
        <TextField ref={passwordRef} required type="password" fullWidth label='Password' />
        <TextField ref={passwordConfirmationRef} required type="password" fullWidth label='Confirm Password' />
        <Button disabled={loading} className="form__button" type="submit" variant="contained">Sign Up</Button>
      </form>
      </Paper>
    </Grid>
  )
}

export default Signup
