import { Typography } from "@mui/material"






const example = `This is a lorem ipsum paragraph meant to create and fill space
in the column here for the blog posts to be displayed on the
page. This is a lorem ipsum paragraph meant to create and fill
space in the column here for the blog posts to be displayed on
the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page.
<br />
<br />
This is a lorem ipsum paragraph meant to create and fill space
in the column here for the blog posts to be displayed on the
page. This is a lorem ipsum paragraph meant to create and fill
space in the column here for the blog posts to be displayed on
the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page. This is a lorem ipsum paragraph meant to create and
fill space in the column here for the blog posts to be displayed
on the page.`



type BodyProps = {
    isFeed: boolean
}

export const Body = ({ isFeed }: BodyProps) => {

    return (
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
                {isFeed ? example.substring(0, 500) + "... See more" : example}
            </Typography>
        </div>
    )
}
