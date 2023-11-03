import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
} from "../ui/dropdown-menu";
import { List, User, FileCode2, Contact } from "lucide-react";

const Navbar = () => {
    return (
        <>
            <nav className="fixed flex justify-between top-0 w-full bg-black h-16 md:h-20 px-10 md:px-16 text-white">
                <Link to="/" className="h-full hover:underline">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="object-contain h-full"
                    />
                </Link>
                <ul className="hidden md:flex justify-evenly items-center h-full w-1/2 xl:w-1/4">
                    <li>
                        <Link
                            to="#about"
                            className="font-bold text-2xl link-underline link-underline-black p-1 hover:rounded-lg"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#projects"
                            className="font-bold text-2xl link-underline link-underline-black p-1 hover:rounded-lg"
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        {" "}
                        <HashLink
                            to="#contact"
                            className="font-bold text-2xl link-underline link-underline-black p-1 hover:rounded-lg"
                        >
                            Contact
                        </HashLink>
                    </li>
                </ul>
                <div className="flex w-1/2 md:w-auto justify-end gap-x-2">
                    <Button variant="outline" className="bg-[#EF7C4A] hover:bg-[#ff6f00] hover:text-white hover:scale-95 flex self-center">
                        Hire ME
                    </Button>
                    <div className="flex md:hidden h-full">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="hover:text-white h-10 self-center focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#EF7C4A] hover:bg-[#ff6f00] hover:scale-95">
                                    <List />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <Link to={`/`} className="flex h-10">
                                            <User className="mr-2 h-6 w-6" />
                                            <span className="text-lg ml-2">
                                                About
                                            </span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to={`/`} className="flex h-10">
                                            <FileCode2 className="mr-2 h-6 w-6" />
                                            <span className="text-lg ml-2">
                                                Projects
                                            </span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <Link to={`/`} className="flex h-10">
                                            <Contact className="mr-2 h-6 w-6" />
                                            <span className="text-lg ml-2">
                                                Contact
                                            </span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </nav>
            <Separator className="fixed w-full mt-16 md:mt-20" />
        </>
    );
};

export default Navbar;
