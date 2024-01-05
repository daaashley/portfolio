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
import { Menu, MenuItem, Tooltip } from '@mui/material';

export const TerminalBar = ({files, fileToRun, run, setFileToRun}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
      };    

    const handleRun = (fileName:string) => {
        setFileToRun(fileName)
        run()
        setAnchorEl(null);
    };
    console.log('files: ',files)
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box overflow={'auto'} whiteSpace={'nowrap'} sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px' }}>
                <Grid container  >
                    <select name="pets" id="pet-select" style={{ height: 30, width: 180, background: '#1e1e1e', color: '#cccccc' }}>
                        <option value="">jlox 1.0.1</option>
                        <option value="dog">jlox 1.2.1</option>
                        <option value="cat">jlox 2.0.0</option>
                        <option value="hamster">python 3.11.2</option>
                    </select>
                        <div>
                        <IconButton onClick={handleClick} aria-label="delete" size="small" style={{ color: 'rgb(100, 255, 218)' }} >
                            <PlayIcon fontSize="medium" />
                        </IconButton>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                                'aria-labelledby': 'basic-button',
                            }}
                        >
                            {files.map((file)=>{
                                return (<MenuItem onClick={()=>{handleRun(file.fileName)}}>{file.fileName}</MenuItem>)
                                
                            })}
                            
                        </Menu>
                    </div>
            </Grid>
        </Box>
                </Box >
    );
}