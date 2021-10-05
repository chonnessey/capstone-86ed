import React from 'react'
import { Grid, Paper, Button, Avatar, Typography, TextField } from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import '../assets/Signup.css'

const Signup = () => {
  const paperStyle={padding: '30px 20px', width: 300, margin: '20px auto'}
  const headerStyle={margin: 0}
  const avatarStyle={backgroundColor: '#1bbd7e'}
  const buttonStyle={alignItems: 'center'}
  return (
    <Grid>
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddBoxIcon />
          </Avatar>

        <h2 style={headerStyle}>Sign Up</h2>
        <Typography variant='caption'>Fill out the form to create an account.</Typography>
        </Grid>
      <form className="signup__form">
        <TextField type="text" fullWidth label='Name' />
        <TextField type="email" fullWidth label='Email' />
        <TextField type="text" fullWidth label='Username' />
        <TextField type="password" fullWidth label='Password' />
        <TextField type="password" fullWidth label='Confirm Password' />
        <Button style={buttonStyle} type="submit" variant="contained">Sign Up</Button>
      </form>
      </Paper>
    </Grid>
  )
}

export default Signup
