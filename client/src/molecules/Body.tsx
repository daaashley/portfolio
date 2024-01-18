import { Typography } from "@mui/material"
import { Link } from "react-router-dom"
import Gist from 'react-gist';





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
    const bodyArray = body.split('<br/><br/>')
    const postArray = isFeed ? [bodyArray[0], bodyArray[1], bodyArray[2], bodyArray[3]+ "<a>...read more</a>"] : bodyArray
    return (
        <div>

            <Typography
               // dangerouslySetInnerHTML={markup}
                variant="body1"
                sx={{
                    maxWidth: 700,
                    color: "#8892b0",
                    textAlign: "left",
                    fontSize: 16,
                    textDecoration: 'none'
                }}
                gutterBottom
            >{
                postArray.map((element) => {
                    if(element == '<br/><br/>'){
                        return <></>
                    } else if(element.includes('<snippet>')){
                        let id = element.substring(10,element.length - 11)
                        console.log('id: ',id)
                        return <Gist id={id}></Gist>

                    }else if (element.includes('<img>')){
                        let src = element.substring(6,element.length - 7)
                        console.log('src: ',src)
                        return <img style={{width:'100%'}} src={src}/>
                    }else if (element.includes('<h3>')){
                        let src = element.substring(6,element.length - 7)
                        console.log('src: ',src)
                        return <p style={{fontSize:'20px', color:'#ccd6f6'}}>{element.substring(5,element.length -6)}</p>

                    } else if (element.includes('<i')){
                        let start = element.indexOf('<i')
                        let endOfSrc = element.indexOf('>')
                        let end = element.indexOf('</')
                        return <p>{element.substring(0,start)}<a href={element.substring(start + 3,endOfSrc)} style={{color:"rgb(94 234 212)",fontStyle:'italic',textDecoration:'none'}}>{element.substring(endOfSrc+1,end)}</a>{element.substring(end+4 ,element.length)}</p>
                    } else if (element.includes('<a')){
                        let start = element.indexOf('<a')
                        let endOfSrc = element.indexOf('>')
                        let end = element.indexOf('</')
                        return <p>{element.substring(0,start)}<a href={element.substring(start + 3,endOfSrc)} style={{color:"rgb(94 234 212)"}}>{element.substring(endOfSrc+1,end)}</a>{element.substring(end+4 ,element.length)}</p>
                 
                    } else {

                        return <p>{element}</p>
                    }
                })
                }
            </Typography>
        </div>
    )
}
