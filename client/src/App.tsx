import { Feed } from "./templates/Feed";
import { Sidebar } from "./templates/Sidebar";
import { Navbar } from "./organisms/Navbar";
import "./App.css";

function App() {

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

        <Feed isSinglePost={false} />

        <Sidebar />
      </div>
    </div>
  );
}



export default App;
