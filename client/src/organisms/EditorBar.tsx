import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid'

export const EditorBar = () => {
    const files = ['test.lox','BinarySearch.lox','adenasine.lox']
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box overflow={'auto'} whiteSpace={'nowrap'} sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px' }}>
                <Grid container  >
                {files.map((file)=>{
                    return (
                        <Grid>
                        <Box sx={{ flexGrow: 1, background: '#1e1e1e', border:'0.5px solid #3c3c3c', height: '30px', width:'100px', display: 'flex', justifyContet: 'center', }}>
                    <Typography align={'center'} style={{flex:1, textAlign: 'center', alignSelf: 'center', color: '#cccccc' }}>test.lox</Typography>
                    <IconButton aria-label="close" style={{color:'#cccccc'}} >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box>
                </Grid>
                    )
                })}
                </Grid>
            </Box>
        </Box>
    );
}