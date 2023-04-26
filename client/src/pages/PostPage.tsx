import { useLocation } from "react-router-dom";
import { Navbar } from "../organisms/Navbar";
import { Feed } from "../templates/Feed";
import { Sidebar } from "../templates/Sidebar";







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
            <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 940, margin: "0 auto", marginTop: 50 }}>
                <Feed isSinglePost={true} post={post} />
                <Sidebar />
            </div>
        </div>
    );
}
