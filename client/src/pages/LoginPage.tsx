
import { Box, Button, TextField, Typography } from "@mui/material";
import { Navbar } from "../organisms/Navbar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/user-api";
import { setToken } from "../utils";


export const LoginPage = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = async () => {
        const { data, error, errorMessage } = await loginUser(username, password)
        if (error) {
            window.alert("Error logging in.")
            console.log(errorMessage)
        } else {
            setToken(data.access_token, data.token_type)
            navigate("/index.html")
        }

    }

    return (
        <div>
            <div
                style={{
                    maxWidth: 1200,
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",

                }}
            >
                <Navbar />
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 940, margin: "0 auto", marginTop: 50 }}>
                <div>
                    <Box
                        component="form"
                        sx={{
                            '& .MuiTextField-root': { m: 1, width: '95%' },
                            background: "white",
                            justifyContent: 'center'
                            , textAlign: 'center'
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <Typography variant="h4">Administrator Login</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Email"
                            multiline
                            rows={1}
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            defaultValue="Optimizing production schedules with the Gurbobi Solver"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Password"
                            multiline
                            rows={1}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            defaultValue="David Ashley"
                        />
                        <Button onClick={() => {
                            login()
                        }} style={{ margin: 10 }} variant='outlined'>LOGIN</Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}
