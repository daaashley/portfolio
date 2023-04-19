import "./App.css";
import { Feed } from "./templates/Feed";
import { Sidebar } from "./templates/Sidebar";
import { Navbar } from "./organisms/Navbar";

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
      <div style={{ display: 'flex', flexDirection: 'row', maxWidth: 940, margin: "0 auto", marginTop: 50 }}>
        <Feed isSinglePost={false} />
        <Sidebar />
      </div>
    </div>
  );
}



export default App;
