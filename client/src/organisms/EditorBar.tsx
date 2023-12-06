import * as React from 'react';
import {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper';


import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Tooltip } from '@mui/material';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    zIndex: 100
  };

export const EditorBar = ({ selectedFile, files, setSelectedFile, setFileState }) => {
    const [open, setOpen] = useState(false)
    const [newFileName, setNewFileName] = useState("untitled.lox")
    const handleClose = () => setOpen(false);
    
    const closeFile = (e: any, file: any) => {
        e.stopPropagation();
        const remainingFiles = files.filter((candidate) => { return candidate.fileName != file.fileName })
        setSelectedFile(remainingFiles[0].fileName)
        setFileState(remainingFiles)
    }

    const openModal = () => setOpen(true)

    const addFile = () => {
        setOpen(false)
        const mergedFiles = [...files, { fileName: newFileName, fileContents: '' }]
        setFileState(mergedFiles)
        setSelectedFile(newFileName)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>

            <Box overflow={'auto'} whiteSpace={'nowrap'} sx={{ flexGrow: 1, background: '#1e1e1e', height: '30px' }}>
                <Grid container  >
                    {files.map((file) => {
                        return (
                            <Grid>
                                <a href="#" style={{ textDecoration: 'none' }} onClick={(e) => { console.log('outer'); e.stopPropagation(); setSelectedFile(file.fileName) }}> <Box sx={file.fileName == selectedFile ? { flexGrow: 1, background: '#4f4f4f', border: '0.5px solid #3c3c3c', height: '30px', width: '120px', display: 'flex', justifyContet: 'center', } : { flexGrow: 1, background: '#1e1e1e', border: '0.5px solid #3c3c3c', height: '30px', width: '120px', display: 'flex', justifyContet: 'center', }}>
                                    <Tooltip title={file.fileName}><Typography align={'center'} style={{ flex: 1, textAlign: 'center', alignSelf: 'center', color: '#cccccc' }}>{file.fileName.length > 10 ? file.fileName.substring(0, 9) + '...' : file.fileName}</Typography></Tooltip>
                                    <IconButton onClick={(e) => { closeFile(e, file) }} aria-label="close" style={{ color: '#cccccc' }} >
                                        <CloseIcon fontSize="small" />
                                    </IconButton>
                                </Box></a>
                            </Grid>
                        )
                    })}
                    <Grid>
                        <IconButton onClick={(e) => { openModal()}} aria-label="close" style={{ color: '#cccccc', float: 'right', position: 'relative' }} >
                            <AddIcon fontSize="small" />
                        </IconButton></Grid>
                    
                </Grid>
            </Box>
            <Modal
                        open={open}
                        handleClose={handleClose}
                    >
                        <Paper sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                               File Name 
                            </Typography>
                            <Grid>
                            <TextField placeholder='untitled' id="outlined-basic" label="Name" onChange={(e)=>{setNewFileName(e.target.value)} }/>
                            <Button style={{margin:10}} variant="outlined" onClick={()=>{addFile()}}>Create</Button>
                            </Grid>
                        </Paper>
                    </Modal>
        </Box>
    );
}