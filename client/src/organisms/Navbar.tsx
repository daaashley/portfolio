import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { getToken, clearToken } from "../utils"




export const Navbar = () => {
    return (
        <AppBar
            style={{ boxShadow: "none", background: "transparent" }}
            position="static"
        >
            <Toolbar>

                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to={"/index.html"}>
                        <div>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, color: "#64ffda" }}
                            >
                                vibeeng
                            </Typography>
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{
                                    position: "absolute",
                                    color: "#8892b0",
                                    fontSize: 12,
                                }}
                            >
                                by david ashley
                            </Typography>
                        </div> </Link>
                </Typography>
                {getToken() && (<Link to={'/create'}><Button style={{ color: "#64ffda" }}>New Post</Button></Link>)}
                <Link to={'/index.html'}><Button style={{ color: "#64ffda" }}>Latest</Button></Link>
                <Link to={'/compilers'}><Button style={{ color: "#64ffda" }}>Compilers</Button></Link>
                <Link to={'/index.html'}> <Button style={{ color: "#64ffda" }}>Posts</Button></Link>
                <Link to={"/about"}><Button style={{ color: "#64ffda" }}>About</Button></Link>
                {getToken() && (<Button onClick={() => { clearToken() }} style={{ color: "#64ffda" }}>Logout</Button>)}
            </Toolbar>
        </AppBar>
    );
}
