import { Post } from "../organisms/Post"



type FeedProps = {
    isSinglePost: boolean
}


export const Feed = ({ isSinglePost }: FeedProps) => {


    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: 700,

                justifyContent: "center",
            }}
        >{
                [0, 1].map((index) => {
                    return <Post isFeed={!isSinglePost} key={`post-${index}`} />
                })}
        </div>
    )
}
