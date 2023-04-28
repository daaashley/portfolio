import { useEffect, useState } from "react"
import { Post } from "../organisms/Post"
import { getPosts } from "../api"
import { IPost } from "../types"
import "../App.css"
type FeedProps = {
    isSinglePost: boolean
    post?: IPost
}

export const Feed = ({ isSinglePost, post }: FeedProps) => {
    const [posts, setPosts] = useState([])

    const loadPosts = async () => {
        if (isSinglePost) {
            setPosts([post])
            // single post call
        } else {
            const { data, error, errorMessage } = await getPosts()
            if (!error) {
                setPosts(data.posts)
            }
        }
    }

    useEffect(() => {
        loadPosts()
    }, [])
    console.log('posts: ', posts)
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 700,
                justifyContent: "center",
            }}
            className={"Feed"}
        >{
                posts.map((post, index) => {
                    return <Post isFeed={!isSinglePost} post={post} key={`post-${index}`} />
                })}
        </div>
    )
}
