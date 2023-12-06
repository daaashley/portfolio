import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PlayIcon from '@mui/icons-material/PlayArrow'
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Tooltip } from '@mui/material';

export const TerminalBar = () => {
    const languages = ["clox 1.0.0","clox 1.1.0","python 3.11.0"]
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box overflow={'auto'} whiteSpace={'nowrap'} sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px' }}>
                <Grid container  >
                <select name="pets" id="pet-select" style={{height:30, width:180, background:'#1e1e1e', color: '#cccccc'}}>
                <option value="">jlox 1.0.1</option>
                <option value="dog">jlox 1.2.1</option>
                <option value="cat">jlox 2.0.0</option>
                <option value="hamster">python 3.11.2</option>
                </select>
                <Tooltip title="Run">
                <IconButton aria-label="delete" size="small" style={{color:'rgb(100, 255, 218)'}} >
                    <PlayIcon fontSize="medium" />
                </IconButton>
                </Tooltip>
                </Grid>
                </Box>
                </Box>
    );
}