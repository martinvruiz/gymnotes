import { Navbar } from "./components/Navbar/Navbar";
import { Home } from "./pages/Home";
import { Notes } from "./pages/Notes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Workout } from "./pages/Workout";
import { GlobalProvider } from "./context/Context";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <GlobalProvider>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/workout" element={<Workout />} />
          </Routes>
        </BrowserRouter>
      </div>
      <ToastContainer position="center" />
    </GlobalProvider>
  );
}

export default App;
