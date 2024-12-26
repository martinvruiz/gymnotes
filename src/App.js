import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/notes" element={<Notes/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
