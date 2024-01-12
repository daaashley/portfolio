import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NotInterested from '@mui/icons-material/NotInterested';
import PlayIcon from '@mui/icons-material/PlayArrow'
import Grid from '@mui/material/Grid';
import { Menu, MenuItem, Tooltip } from '@mui/material';

export const TerminalBar = ({files, run, fileToRun, setFileToRun, clear}) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClear = () => {
        clear()
    }

    const handleClose = () => {
        setAnchorEl(null);
      };    

    const handleRun = (fileName:string) => {
        setFileToRun(fileName) 
        run(fileName)
        setAnchorEl(null);
    };
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box overflow={'auto'} whiteSpace={'nowrap'} sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px' }}>
                <Grid container  >
                    <select name="pets" id="pet-select" style={{ height: 30, width: 180, background: '#1e1e1e', color: '#cccccc' }}>
                        <option value="">jlox 1.0.1</option>
                        <option value="dog">clox 1.0.1 coming soon...</option>
                    </select>
                        <div>
                        <Tooltip title={"Run"} arrow>
                        <IconButton onClick={handleClick} aria-label="delete" size="small" style={{ color: 'rgb(100, 255, 218)' }} >
                            <PlayIcon fontSize="medium" />
                        </IconButton>
                        </Tooltip>
                        <Tooltip title={"Clear Console"} arrow>
                        <IconButton onClick={handleClear} aria-label="delete" size="small" style={{ color: 'rgb(100, 255, 218)' }} >
                            <NotInterested fontSize="medium" />
                        </IconButton>
                        </Tooltip>
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