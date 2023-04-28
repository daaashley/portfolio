
import { Box, Button, TextField, Typography } from "@mui/material";
import { Navbar } from "../organisms/Navbar";
import { useState } from "react";
import { createPost, deletePost, updatePost } from "../api";
import { IPost } from "../types";
import { useLocation, useNavigate } from "react-router-dom";


export const UpdatePage = (props: any) => {
    const navigate = useNavigate()
    const location = useLocation()
    const { post } = location.state

    const [id, setId] = useState(post.id)
    const [title, setTitle] = useState(post.title)
    const [author, setAuthor] = useState(post.author)
    const [date, setDate] = useState(post.date)
    const [image, setImage] = useState(post.imageUrl)
    const [body, setBody] = useState(post.body)

    const update = async () => {
        const postBody: Partial<IPost> = {
            title: title,
            author: author,
            date: date,
            imageUrl: image,
            body: body
        }
        const { data, error, errorMessage } = await updatePost(id, postBody)
        if (error) {
            console.log(errorMessage)
        } else {
            navigate("/index.html")
        }

    }

    const removePost = async () => {
        const { data, error, errorMessage } = await deletePost(id)
        if (error) {
            console.log(errorMessage)
        } else {
            setTitle('')
            setAuthor('')
            setImage('')
            setBody('')
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
                        <Typography variant="h4">Update Post</Typography>
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
                            defaultValue="unix time stamp"
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
                            update()
                        }} style={{ margin: 10 }} variant='outlined'>Update</Button>
                        <Button onClick={() => {
                            removePost()
                        }} style={{ margin: 10 }} variant='outlined'>Delete</Button>
                    </Box>
                </div>
            </div>
        </div>
    );
}
