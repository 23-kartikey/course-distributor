import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CreateCourse from "./pages/CreateCourse";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";

const App = () => {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile-user" element={<Profile />} />
                <Route path="/create-course" element={<CreateCourse />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;