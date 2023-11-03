import { Route, Routes } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import "./globals.css";
import HomePage from "./pages/HomePage/HomePage";
import Layout from "./pages/Layout";

function App() {
    return (
        <main className="w-full h-screen bg-black text-white">
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<HomePage />} />
                </Route>
            </Routes>
            <Toaster />
        </main>
    );
}

export default App;
