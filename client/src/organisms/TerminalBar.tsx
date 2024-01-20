import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import NotInterested from '@mui/icons-material/NotInterested';
import PlayIcon from '@mui/icons-material/PlayArrow'
import Grid from '@mui/material/Grid';
import { FormControl, InputLabel, Menu, MenuItem, NativeSelect, Select, Tooltip } from '@mui/material';

export const TerminalBar = ({files, run, setFileToRun, clear}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    
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
                <FormControl sx={{width:200, background:'#4f4f4f'}}>
                <NativeSelect
                style={{color:'white'}}
    defaultValue={30}
    inputProps={{
      name: 'age',
      id: 'uncontrolled-native',
    }}
  >
    <option style={{color:'white'}} value={10}> jlox 1.0.1</option>
    <option disabled value={20}> clox 1.0.1</option>
  </NativeSelect>
</FormControl>
                    {/* <select  style={{ height: 30, width: 'auto', background: '#1e1e1e', color: '#cccccc' }}>
                        <option value="jlox-1.0.1">jlox 1.0.1</option>
                        <option value="clox-1.0.1">clox 1.0.1 coming soon...</option>
                    </select> */}
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