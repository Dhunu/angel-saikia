import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./globals.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

function App() {
    return (
        <main className="w-full bg-black text-white">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/projects/:name" element={<ProjectPage />} />
                </Route>
            </Routes>
            <Toaster />
        </main>
    );
}

export default App;
