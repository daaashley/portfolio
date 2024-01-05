import { Grid, Typography } from "@mui/material";
import { Navbar } from "../organisms/Navbar";
import { Sidebar } from "../templates/Sidebar";




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
                <Grid container spacing={1}>
                    <Grid item xs={5}>
                        <Typography
                            variant="h3"
                            component="div">David Ashley</Typography>
                        <Typography variant="h5">Software Engineer</Typography>
                        <Typography variant="h6">Frontend, backend, compilers, machine learning, devops.</Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography style={{ textAlign: 'right' }} variant="h6">Back in 2013, I took my first AP Computer Science class in Java at my highschool. A decade later I am still learning and growing in my career as an engineer. Through undergraduate study, internships, freelance jobs, full time engineering work, and more (disproportionately more) half-baked projects than i'd like to admit, I have approached software engineering as a meaningful pursuit; a craft I aim to endlessly hone towards an imperfect end. I have a depth and breadth of experience that is unlikely to be captured well here in so many words. From mobile games that run on millions of phones to niche linear optimization applications to writing a programming language, the only thing my bifurcated development paths share is that they were motivated by curiosity; the general desire to do that which I never have.
                            </Typography>
                    </Grid>
                    <Grid item xs={5}>
                        <h3>hello world</h3>
                    </Grid>
                    <Grid item xs={5}>
                        <h3>hello world</h3>
                    </Grid>
                </Grid>
                <Sidebar />
            </div>
        </div>
    );
}