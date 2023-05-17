import { useLocation } from "react-router-dom";
import { Navbar } from "../organisms/Navbar";
import { Feed } from "../templates/Feed";
import { Sidebar } from "../templates/Sidebar";
import "../App.css";






export const PostPage = () => {
    const location = useLocation()
    const { post } = location.state
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
            <div className={"Container"}>
                <Feed isSinglePost={true} post={post} />
                <Sidebar />
            </div>
        </div>
    );
}
