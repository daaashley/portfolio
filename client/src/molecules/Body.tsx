import { Typography } from "@mui/material"
import { Link } from "react-router-dom"






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
    body: string
    id: string
}


export const Body = ({ isFeed, body, id }: BodyProps) => {
    const html = isFeed ? body.substring(0, 500) + "... See more" : body
    const markup = { __html: html }
    return (
        <div>

            <Typography
                dangerouslySetInnerHTML={markup}
                variant="body1"
                sx={{
                    maxWidth: 700,
                    color: "#ccd6f6",
                    textAlign: "left",
                    fontSize: 16,
                    textDecoration: 'none'
                }}
                gutterBottom
            >
            </Typography>
        </div>
    )
}
