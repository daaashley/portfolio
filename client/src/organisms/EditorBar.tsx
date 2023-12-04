import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Grid } from '@mui/material';

export const EditorBar = () => {
    const files = ['test.lox', 'BinarySearch.lox','parser.lox']
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box sx={{ flexGrow: 1, background: 'white', height: '30px' }}>
            <Grid container >
                {files.map((file)=> {
                    return (
                        <Grid item xs={0}><Box sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px', width:'90px'  }}>
                    <Typography align={'center'} style={{display:'inline-block',  color: '#cccccc' }}>test.lox</Typography>
                    <IconButton aria-label="close" style={{color:'#cccccc', display:'inline-block'}} >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box></Grid>)
                })}
                </Grid>
                
            </Box>
        </Box>
    );
}