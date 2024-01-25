import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Upload from "./components/Upload";
import VideoPlayer from "./components/VideoPlayer";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App bg-blue-950">
    <div className="content">
    <BrowserRouter>
    <Header />
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/video/:vid" element={<VideoPlayer />} />
        
    </Routes>
<ToastContainer />
</BrowserRouter>
</div>
    <Footer  />
</div>
  );
}

export default App;
