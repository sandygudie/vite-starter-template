import React from 'react'
import logo from '../images/ab-logo.svg'
import { Button } from '@mui/material'
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined'
import { ThemeContext } from '../context/ThemeWrapper'

function Navbar() {
  const [darkMode, setDarkMode] = React.useState(false)
  return (
    <header className=' bg-[#333333] flex justify-between align-center p-[1em]'>
      <img src={logo} alt="logo" />
      <div>
        {' '}
        <ThemeContext.Consumer>
          {({ changeTheme }) => (
            <button
              onClick={() => {
                setDarkMode(!darkMode)
                changeTheme()
              }}
            >
              <p>{darkMode ?<LightModeOutlinedIcon className='text-white'/>: <DarkModeOutlinedIcon />  }</p>
            </button>
          )}
        </ThemeContext.Consumer>
        <Button variant="outlined" className="text-white border-white" href="/signin">
          Log In
        </Button>
      </div>
    </header>
  )
}

export default Navbar
