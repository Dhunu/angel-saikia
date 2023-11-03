import Footer from "./components/shared/Footer";
import Navbar from "./components/shared/Navbar";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Toaster } from "./components/ui/toaster";
import { toast } from "./components/ui/use-toast";
import "./globals.css";

function App() {
    return (
        <main className="w-full h-screen bg-black text-white">
            <Navbar />
            <h1 className="w-full h-full flex flex-col justify-center items-center text-3xl font-bold">
                Comming Soon ...
                <Button variant="outline" onClick={() => {
                    toast({
                        title: "Hey! You clicked me!",
                        description: "You can customize the toast to your liking!",
                        variant: "destructive",
                    })
                }}>Click Me!</Button>
            </h1>
            <Separator />
            <Footer />
            <Toaster />
        </main>
    );
}

export default App;
