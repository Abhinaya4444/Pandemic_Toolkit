import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import EmergencyBar from "./components/emergency/Emergency";

import Home from "./pages/home/Home";
import Health from "./pages/Health/Health";
import Mental from "./pages/mental/Mental";
import Info from "./pages/info/Info";
import Community from "./pages/community/Community";

function App() {
  return (
    <>
      <Navbar />

      {/* wrapper to prevent emergency bar overlap */}
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/mental" element={<Mental />} />
          <Route path="/info" element={<Info />} />
          <Route path="/community" element={<Community />} />
        </Routes>
      </div>
      
      <EmergencyBar />
      
    </>
  );
}

export default App;
