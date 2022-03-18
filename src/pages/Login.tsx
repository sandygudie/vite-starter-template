import { useState } from 'react'
import Navbar from '../layout/Navbar'
import { Button, TextField, IconButton } from '@mui/material'
import { VisibilityOutlined, VisibilityOffOutlined } from '@mui/icons-material'

function Login() {
  const [isPasswordVisible, setPasswordVisibility] = useState(false)

  return (
    <>
      <Navbar />
      <div>
        <TextField label="Email address" type="email" id="email" name="email" className="mt-6" />
        <IconButton
          onClick={() => setPasswordVisibility(!isPasswordVisible)}
          className="text-gray-300"
        >
          {isPasswordVisible ? (
            <VisibilityOffOutlined fontSize="small" />
          ) : (
            <VisibilityOutlined fontSize="small" />
          )}
          <span className="sr-only">{isPasswordVisible ? 'Hide password' : 'Show Password'}</span>
        </IconButton>
        <Button
          variant="outlined"
          className="border-primary bg-primary-light text-primary mt-2"
          fullWidth
        >
          Log In with Rise Account
        </Button>
      </div>
    </>
  )
}

export default Login
