import logo from "./logo.svg";
import "./App.css";
import RegisterForm from "./Components/RegisterForm";
import LoginForm from "./Components/LoginForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoutes from "./Routes/PrivateRoutes";
import Profile from "./Pages/Profile";

function App() {
    return (
        <>
            <Router>
                NavBar
                <Routes>
                    <Route path="/" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/*" element={<h1>404</h1>} />
                    <Route
                        path="/profile"
                        element={
                            <PrivateRoutes>
                                <Profile />
                            </PrivateRoutes>
                        }
                    />
                </Routes>
                Footer
            </Router>
        </>
    );
}

export default App;
