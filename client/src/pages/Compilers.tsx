import { useLocation } from "react-router-dom";
import { Navbar } from "../organisms/Navbar";
import "../App.css";






export const Compilers = () => {
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
                <h1>Test for Compilers</h1>
            </div>
        </div>
    );
}
