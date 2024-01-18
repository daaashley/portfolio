import { Grid, Typography } from "@mui/material";
import { Navbar } from "../organisms/Navbar";
import { Sidebar } from "../templates/Sidebar";
import { Link } from "react-router-dom";




export const AboutPage = () => {
    return (
        <div>
            <div
                style={{
                    maxWidth: 1400,
                    display: "flex",
                    justifyContent: "center",
                    margin: "0 auto",
                }}
            >
                <Navbar />
            </div>
            <div style={{ color: 'rgb(226, 232, 240)' }} className={"Container"}>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Typography
                            variant="h3"
                            component="div">David Ashley</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        <Typography variant="h6">{`Frontend, Backend, DevOps, \n Compilers, Machine Learning`} </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography style={{ textAlign: 'right'}} variant="h6">{"In 2013, I took the AP Computer Science class in Java offered at my highschool. A decade later I am still learning and growing in my career as an engineer. Through undergraduate study, internships, freelance jobs, full time engineering work, and more half-baked projects than completed ones, I have approached software engineering as a meaningful pursuit; a craft I aim to hone toward an imperfect end. I have a depth and breadth of experience that spans many industries and problem domains. From mobile games that run on millions of phones to niche linear optimization applications to writing a "}<a href="/compilers" style={{color:'rgb(94 234 212)'}}>programming language</a>{", the only thing my varied development paths share is that they were motivated by curiosity; the general desire to do and understand that which I never have."}
                            </Typography>
                    </Grid>
                    <Grid item style={{marginTop:50}}xs={5}>
                    <Typography variant="h6">Koch Industries</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        
                    </Grid>
                    <Grid item style={{marginTop:50}} xs={5}>
                        <Typography variant="body1">* Architect backend infrastructure and pipelines for data-intensive analytics applications</Typography>
                        <Typography variant="body1">* Build end-to-end applications that integrate machine learning and linear optimization models</Typography>
                        <Typography variant="body1">* Scale and implement cloud environments, CI/CD pipelines and Gitlab workflows, and standardize team developer resources</Typography>
                        <Typography variant="body1">* Design and craft backend services and REST API's, Websockets, and asynchronous workflows</Typography>
                        <Typography variant="body1">* Deliver full-stack customer focused data application in Demand Forecasting, Production Optimization, and Tax/Finance Analytics</Typography>

                    </Grid><Grid item xs={5}>
                    <Typography variant="h6">Koch Industries</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="body1">* Architect backend infrastructure and pipelines for data-intensive analytics applications</Typography>
                        <Typography variant="body1">* Build end-to-end applications that integrate machine learning and linear optimization models</Typography>
                        <Typography variant="body1">* Scale and implement cloud environments, CI/CD pipelines and Gitlab workflows, and standardize team developer resources</Typography>
                        <Typography variant="body1">* Design and craft backend services and REST API's, Websockets, and asynchronous workflows</Typography>
                        <Typography variant="body1">* Deliver full-stack customer focused data application in Demand Forecasting, Production Optimization, and Tax/Finance Analytics</Typography>

                    </Grid>
                </Grid>
                <Sidebar />
            </div>
        </div>
    );
}