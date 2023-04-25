import { useEffect, useState } from "react"
import { Post } from "../organisms/Post"
import { getPosts } from "../api"

type FeedProps = {
    isSinglePost: boolean
}

export const Feed = ({ isSinglePost }: FeedProps) => {
    const [posts, setPosts] = useState([])

    const loadPosts = async () => {
        if (isSinglePost) {
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
        >{
                posts.map((post, index) => {
                    return <Post isFeed={!isSinglePost} post={post} key={`post-${index}`} />
                })}
        </div>
    )
}
