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
import { Tooltip } from '@mui/material';

export const EditorBar = ({selectedFile,files,setSelectedFile, setFileState}) => {
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box overflow={'auto'} whiteSpace={'nowrap'} sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px' }}>
                <Grid container  >
                {files.map((file)=>{
                    return (
                        <Grid>
                       <a href="#" style={{textDecoration:'none'}} onClick={()=>{setSelectedFile(file.fileName)}}> <Box  sx={file.fileName == selectedFile ? { flexGrow: 1, background: '#4f4f4f', border:'0.5px solid #3c3c3c', height: '30px', width:'120px', display: 'flex', justifyContet: 'center', }:{ flexGrow: 1, background: '#1e1e1e', border:'0.5px solid #3c3c3c', height: '30px', width:'120px', display: 'flex', justifyContet: 'center', }}>
                    <Tooltip title={file.fileName}><Typography  align={'center'} style={{flex:1, textAlign: 'center', alignSelf: 'center', color: '#cccccc' }}>{file.fileName.length > 10 ? file.fileName.substring(0,9) + '...' : file.fileName}</Typography></Tooltip>
                    <IconButton onClick={()=>{setFileState(files.filter((candidate)=>{return candidate.fileName ! = file.fileName}))}} aria-label="close" style={{color:'#cccccc'}} >
                        <CloseIcon fontSize="small" />
                    </IconButton>
                </Box></a>
                </Grid>
                    )
                })}
                </Grid>
            </Box>
        </Box>
    );
}