import { Card, Grid, Typography } from "@mui/material";
import { Navbar } from "../organisms/Navbar";
import { Sidebar } from "../templates/Sidebar";
import { Link } from "react-router-dom";




export const AboutPage = () => {
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
            <div style={{ color: 'rgb(226, 232, 240)' }} className={"Container"}>
                <Grid container style={{ margin: '0 auto', zIndex: 101 }} spacing={1}>
                    <Grid item xs={12}>
                        <Typography
                            fontWeight={700}
                            variant="h3"
                            component="div">David Ashley</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        <Typography style={{ color: '#8892b0', }} variant="h6">{`Frontend, Backend, DevOps, \n Compilers, Machine Learning`} </Typography>
                    </Grid>
                    <Grid item md={12}>
                        <Typography style={{ textAlign: 'left', padding: 15, marginBottom: 30 }} variant="h6">{"In 2013, I took AP Computer Science in Java at my highschool. A decade later I am still learning and growing in my career as an engineer. Through undergraduate study, internships, freelance jobs, full time engineering work, and never ending, costly side projects (this ECS-scaled blog for example), I have approached software engineering as a craft I aim to hone toward an imperfect end. I have a depth and breadth of experience that spans many industries and problem domains. From mobile games that run on millions of phones to niche linear optimization applications to writing a "}<a href="/compilers" style={{ color: 'rgb(94 234 212)' }}>programming language</a>{", the only thing my varied paths share is that they were motivated by curiosity; the general desire to do and understand that which I have yet to."}
                        </Typography>
                    </Grid>
                    <Grid item sm={3} xs={12}>
                        <Typography variant="h6">Koch Industries</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        <Typography style={{ color: '#8892b0', }} variant="body1">Oct 2021 - Current</Typography>
                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Card style={{ background: '#182a46', color: '#cdd8f7', padding: 25 }}>
                            <Typography variant="body1">• Architect backend infrastructure and pipelines for data-intensive analytics applications</Typography>
                            <Typography variant="body1">• Build end-to-end applications that integrate machine learning and linear optimization models</Typography>
                            <Typography variant="body1">• Scale and implement cloud environments, CI/CD pipelines and Gitlab workflows, and standardize team developer resources</Typography>
                            <Typography variant="body1">• Design and craft backend services and REST API's, Websockets, and asynchronous workflows</Typography>
                            <Typography variant="body1">• Deliver full-stack customer focused data application in Demand Forecasting, Production Optimization, and Tax/Finance Analytics</Typography>
                            <Grid container style={{ paddingTop: 5 }} spacing={0}>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Python</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>FastAPI</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>TypeScript</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>React</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Docker</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Kubernetes</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>AWS</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Terraform</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>GitLab</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>C3.AI</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>PostgreSQL</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>YAML</Typography></Grid>


                            </Grid>
                        </Card>
                    </Grid><Grid item sm={3} xs={12}>

                        <Typography variant="h6">Wind Creek Casino</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        <Typography style={{ color: '#8892b0', }} variant="body1">Jan 2019 - Sept 2021</Typography>

                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Card style={{ background: '#182a46', color: '#cdd8f7', padding: 25 }}>
                            <Typography variant="body1">• Built games and features for the online gambling and social platform</Typography>
                            <Typography variant="body1">• Engineered mobile games and features for iOS and Android devices</Typography>
                            <Typography variant="body1">• Wrote backend microservices and API's using Scala</Typography>

                            <Typography variant="body1">• Developed and optimized performance of games in React Native, GraphQL, Unity, and C#</Typography>

                            <Grid container style={{ paddingTop: 5 }} spacing={0}>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>React Native</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>React</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Scala</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Unity</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>C#</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Jenkins</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>iOS</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Android</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>JavaScript</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>XCode</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Kibana</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Bash</Typography></Grid>


                            </Grid>
                        </Card>

                    </Grid><Grid item sm={3} xs={12}>
                        <Typography variant="h6">DigitAll</Typography>
                        <Typography variant="h5">Software Engineer Intern</Typography>
                        <Typography style={{ color: '#8892b0', }} variant="body1">Jan 2017 - Jan 2018</Typography>

                    </Grid>
                    <Grid item sm={8} xs={12}>
                        <Card style={{ background: '#182a46', color: '#cdd8f7', padding: 25 }}>
                            <Typography variant="body1">• Develop and design web applications using NodeJS and the Angular front-end framework</Typography>
                            <Typography variant="body1">• Build iOS and Android cross-platform native applications using NativeScript and the MEAN stack</Typography>
                            <Typography variant="body1">• Create and implement database schemas and backend processes according to client needs using MongoDB</Typography>
                            <Typography variant="body1">• Implement third party API’s to process customer transactions and handle account communications</Typography>
                            <Grid container style={{ paddingTop: 5, flexWrap: 'wrap' }} spacing={0}>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>NodeJS</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>Express</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>AngularJS</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>TypeScript</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>NativeScript</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>MySQL</Typography></Grid>
                                <Grid item md={2} sm={4} xs={6}><Typography style={{ margin: 5, textAlign: 'center', color: 'rgb(94, 234, 212)' }}>MongoDB</Typography></Grid>


                            </Grid>
                        </Card>
                    </Grid>
                </Grid>
                <Sidebar />
            </div>
        </div>
    );
}