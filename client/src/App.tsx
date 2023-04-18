import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div  >
      <div style={{maxWidth:1280, display:'flex',justifyContent:'center', margin: '0 auto'}}>
        <ButtonAppBar  />

      </div>
    </div>
  )
}

export function ButtonAppBar() {
  return (
      <AppBar style={{boxShadow:'none',background:'transparent'}} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:'#64ffda' }}>
            vibeeng

          </Typography>
          <Button style={{color:'#64ffda'}}>Tutorials</Button>
          <Button style={{color:'#64ffda'}}>Posts</Button>
          <Button style={{color:'#64ffda'}}>About</Button>
        </Toolbar>
      </AppBar>
  );
}

export default App
