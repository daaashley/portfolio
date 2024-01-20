import { Box, Typography } from "@mui/material"
import { POSTS } from "../constants"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react";






export const Sidebar = () => {
    const [commits, setCommits] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/daaashley/lox-interpreter/commits")
      .then((response) => response.json())
      .then((data) => {
        setCommits(data);
      });
  }, []);

    return (
        <div
            style={{
                maxWidth: 200,
                display: "flex",
                flexDirection: "column",
                borderLeft: "1px solid rgba(204,214,246, 0.3)",

                paddingLeft: 42,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    maxWidth: 200,
                    height: 800,
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#ccd6f6" }}
                >
                    viibeeng posts
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
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ color: "#ccd6f6", marginTop:5,marginBottom:1 }}
                >
                    Recent Commits
                </Typography>
                {
                commits.length > 0 && [commits[0]].map((commit)=>{
                    return (<Typography
                        variant="h6"
                        className={'test-slide'}
                        component="div"
                        sx={{ color: "#ccd6f6", }}
                    >
                    {<a target="_blank" style={{textDecoration:'none'}} href={commit.html_url}><Typography sx={{color: 'rgb(94 234 212)'}} variant="h6">"{commit.commit.message}"</Typography></a>}{" in repo lox-interpreter on " + new Date(commit.commit.author.date)}                    
                    </Typography>) 
                })}
            </Box>
        </div>
    )
}
