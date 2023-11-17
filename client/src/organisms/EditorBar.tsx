import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const EditorBar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box sx={{ flexGrow: 1, background: 'white', height: '30px' }}>
                <Box sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px', width: '60px', display: 'flex', justifyContet: 'center', alignItems: 'center' }}>
                    <Typography style={{ textAlign: 'center', alignSelf: 'center', color: '#cccccc' }}>test.lox</Typography>
                </Box>
            </Box>
        </Box>
    );
}