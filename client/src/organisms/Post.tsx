import { Box, Button, Typography } from "@mui/material";
import { Body } from "../molecules/Body";
import { Title } from "../atoms/Title";
import { Link } from "react-router-dom";
import { getToken } from "../utils"
import "../App.css"

type PostProps = {
    isFeed: boolean;
    post: any;
};

export const Post = ({ isFeed, post }: PostProps) => {
    const date = new Date(post.date).toLocaleDateString('en-US')
    return (
        <div
            style={{
                maxWidth: 700,
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                marginBottom: 42,
            }}
            className={"Post"}
        >
            <Box
                sx={{
                    position: "relative",
                    maxWidth: 700,

                    flexDirection: "column",
                    display: "flex",
                }}
            >
                <Title title={post.title} />
                <Box sx={{ flexDirection: 'row', display: 'flex' }}>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd6f6", maxWidth: 700, fontSize: 14, marginRight: 1 }}
                    >
                        {post.author}
                    </Typography>
                    <Typography variant="h6"
                        component="div" sx={{ color: "#ccd6f6", maxWidth: 700, fontSize: 14 }}>{"•"}</Typography>
                        <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd6f6", maxWidth: 700, fontSize: 14, marginLeft: 1, marginRight:1 }}
                    >
                        {post.mins + ' min read'}
                    </Typography>
                    <Typography variant="h6"
                        component="div" sx={{ color: "#ccd6f6", maxWidth: 700, fontSize: 14 }}>{"•"}</Typography>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ color: "#ccd6f6", maxWidth: 700, fontSize: 14, marginLeft: 1 }}
                    >
                        {"Published "+date}
                    </Typography></Box>

                <div style={{ marginTop: 12, marginBottom: 12 }}>
                    <img
                        style={{ height: 300, width: "100%", maxWidth: 700 }}
                        src={post.imageUrl}
                    />
                </div>
                {isFeed ? (<Link to={`/posts/${post.id}`} state={{ post: post }} style={{ textDecoration: 'none' }}>
                    <Body isFeed={isFeed} body={post.body} id={post.id} />
                </Link>):(<Body isFeed={isFeed} body={post.body} id={post.id} />)}
                {getToken() && (
                    <Link to={`/posts/${post.id}/update`} state={{ post: post }}>
                        <Button>Edit Post</Button>
                    </Link>
                )}

            </Box>
        </div >
    );
};
