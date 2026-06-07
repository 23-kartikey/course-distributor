import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import CreateCourse from "./pages/CreateCourse";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import UserProfile from "./pages/UserProfile";
import Followers from "./pages/Followers";
import Following from "./pages/Following";
import Footer from "./pages/Footer";

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
                <Route path="/edit-profile" element={<EditProfile />} />
                <Route path="/profile/:id" element={<UserProfile />} />
                <Route path="/followers/:id" element={<Followers />} />
                <Route path="/following/:id" element={<Following />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default App;