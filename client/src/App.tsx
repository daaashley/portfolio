import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

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
        <ButtonAppBar />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          maxWidth: 1200,
          margin: "0 auto",
          justifyContent: "center",
          marginTop: 50,
        }}
      >
        <div
          style={{
            maxWidth: 900,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            paddingRight: 42,
          }}
        >
          <Box
            sx={{
              position: "relative",
              maxWidth: 900,
              height: 800,
              flexDirection: "column",
              display: "flex",
            }}
          >
            <Typography
              variant="h4"
              component="div"
              sx={{ color: "#ccd6f6", maxWidth: 600 }}
            >
              Linear Optimization with Gurobi Solver: A production
              schedule case study
            </Typography>
            <div style={{ marginTop: 12, marginBottom: 12 }}>
              <img
                style={{ height: 300, width: "100%", maxWidth: 600 }}
                src={"code.jpeg"}
              />
            </div>
            <div>
              <Typography
                variant="body1"
                sx={{
                  maxWidth: 700,
                  color: "#ccd6f6",
                  textAlign: "left",
                  fontSize: 20,
                }}
                gutterBottom
              >
                This is a lorem ipsum paragraph meant to create and fill
                space in the column here for the blog posts to be
                displayed on the page. This is a lorem ipsum paragraph
                meant to create and fill space in the column here for
                the blog posts to be displayed on the page. This is a
                lorem ipsum paragraph meant to create and fill space in
                the column here for the blog posts to be displayed on
                the page. This is a lorem ipsum paragraph meant to
                create and fill space in the column here for the blog
                posts to be displayed on the page. This is a lorem ipsum
                paragraph meant to create and fill space in the column
                here for the blog posts to be displayed on the page.
                This is a lorem ipsum paragraph meant to create and fill
                space in the column here for the blog posts to be
                displayed on the page.
                <br /><br />
                This is a lorem ipsum paragraph meant to create and fill
                space in the column here for the blog posts to be
                displayed on the page. This is a lorem ipsum paragraph
                meant to create and fill space in the column here for
                the blog posts to be displayed on the page. This is a
                lorem ipsum paragraph meant to create and fill space in
                the column here for the blog posts to be displayed on
                the page. This is a lorem ipsum paragraph meant to
                create and fill space in the column here for the blog
                posts to be displayed on the page. This is a lorem ipsum
                paragraph meant to create and fill space in the column
                here for the blog posts to be displayed on the page.
                This is a lorem ipsum paragraph meant to create and fill
                space in the column here for the blog posts to be
                displayed on the page.
              </Typography>
            </div>{" "}
          </Box>
        </div>
        <div
          style={{
            maxWidth: 240,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            borderLeft: "1px solid white",
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
            <Typography
              variant="h6"
              sx={{ color: "#ccd6f6" }}
            >
              February 2023
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#ccd6f6" }}
            >
              March 2023
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#ccd6f6" }}
            >
              April 2023
            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
}

export function ButtonAppBar() {
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

export default App;
