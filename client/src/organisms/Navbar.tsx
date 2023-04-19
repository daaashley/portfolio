import { AppBar, Button, Toolbar, Typography } from "@mui/material";




export const Navbar = () => {
    return (
        <AppBar
            style={{ boxShadow: "none", background: "transparent" }}
            position="static"
        >
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <div>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, color: "#64ffda" }}
                        >
                            viibeeng
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
                    </div>
                </Typography>
                <Button style={{ color: "#64ffda" }}>Latest</Button>
                <Button style={{ color: "#64ffda" }}>Tutorials</Button>
                <Button style={{ color: "#64ffda" }}>Posts</Button>
                <Button style={{ color: "#64ffda" }}>About</Button>
            </Toolbar>
        </AppBar>
    );
}
