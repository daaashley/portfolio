import { Box, Typography } from "@mui/material"
import { POSTS } from "../constants"
import { Link } from "react-router-dom"






export const Sidebar = () => {

    return (
        <div
            style={{
                maxWidth: 240,
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid rgba(204,214,246, 0.3)",

                paddingLeft: 42,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    maxWidth: 240,
                    height: 800,
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#ccd6f6" }}
                >
                    viibeeng
                </Typography>
                {POSTS.map((post)=>{
                    return (<Link to={"/posts/" + post.id} state={{ post: post }} ><Typography
                    variant="h6"
                    component="div"
                    sx={{ color: 'rgb(94 234 212)' }}
                >
                    {post.title}
                </Typography></Link>)
                })}
            </Box>
        </div>
    )
}
