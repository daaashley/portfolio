
import { Box, Button, TextField, Typography } from "@mui/material";
import { Navbar } from "../organisms/Navbar";
import { Feed } from "../templates/Feed";
import { Sidebar } from "../templates/Sidebar";
import { useState } from "react";
import { createPost } from "../api";
import { IPost } from "../types";
import { useNavigate } from "react-router-dom";


export const CreatePage = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [date, setDate] = useState(Date.now())
    const [image, setImage] = useState('')
    const [body, setBody] = useState('')

    const submitPost = async () => {


        const postBody: Partial<IPost> = {
            title: title,
            author: author,
            date: date,
            imageUrl: image,
            body: body
        }
        const { data, error, errorMessage } = await createPost(postBody)
        if (error) {
            console.log(errorMessage)
        } else {
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
                        <Typography variant="h4">Create post</Typography>
                        <TextField
                            id="outlined-multiline-static"
                            label="Title"
                            multiline
                            rows={1}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            defaultValue="Optimizing production schedules with the Gurbobi Solver"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Author"
                            multiline
                            rows={1}
                            value={author}
                            onChange={(e) => setAuthor(e.target.value)}
                            defaultValue="David Ashley"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            label="Date"
                            multiline
                            rows={1}
                            value={date}
                            onChange={(e) => setDate(parseInt(e.target.value))}
                        />
                        <TextField
                            value={image}
                            id="outlined-multiline-static"
                            label="Image URL"
                            multiline
                            rows={1}
                            onChange={(e) => setImage(e.target.value)}
                            defaultValue="https://www.google.com"
                        />
                        <TextField
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            id="outlined-multiline-static"
                            label="Body"
                            multiline
                            rows={10}
                            defaultValue="Lorem Ipsum ..."
                        />
                        <Button onClick={() => {
                            submitPost()
                        }} style={{ margin: 10 }} variant='outlined'>Post</Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}
