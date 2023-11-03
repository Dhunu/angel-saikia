import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Resume from "/assets/files/Angel_Saikia.pdf";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
} from "../ui/dropdown-menu";
import { List, User, FileCode2, Contact } from "lucide-react";

const Navbar = () => {
    const handleHireMe = () => {
        const link = document.createElement("a");
        link.download = "Angel_Saikia_Resume.pdf";

        link.href = Resume;

        link.click();
    };
    return (
        <>
            <nav className="fixed flex justify-between top-0 w-full bg-black h-16 md:h-20 px-10 md:px-16 text-white z-50">
                <Link to="/" className="h-full hover:underline">
                    <img
                        src="/assets/images/logo.png"
                        alt="logo"
                        className="object-contain h-full"
                    />
                </Link>
                <ul className="hidden lg:flex justify-evenly gap-x-4 items-center h-full w-1/2 xl:w-1/4">
                    <li>
                        <HashLink
                            to="#about"
                            className="flex font-bold text-2xl link-underline link-underline-black p-1 hover:rounded-lg"
                        >
                            <User className="flex self-center h-6 w-6 text-white mr-2" />
                            About
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="#projects"
                            className="flex font-bold text-2xl link-underline link-underline-black p-1 hover:rounded-lg"
                        >
                            <FileCode2 className="flex self-center h-6 w-6 text-white mr-2" />
                            Projects
                        </HashLink>
                    </li>
                    <li>
                        <HashLink
                            to="#contact"
                            className="flex font-bold text-2xl link-underline link-underline-black p-1 hover:rounded-lg"
                        >
                            <Contact className="flex self-center h-6 w-6 text-white mr-2" />
                            Contact
                        </HashLink>
                    </li>
                </ul>
                <div className="flex w-1/2 md:w-auto justify-end gap-x-2">
                    <Button
                        variant="outline"
                        className="bg-[#EF7C4A] hover:bg-[#ff6f00] hover:text-white hover:scale-95 self-center hidden sm:flex"
                        onClick={() => {
                            window.open(
                                "https://drive.google.com/file/d/1Ojl6wrmw1r6b4TdnCeq0ZvttJoy2VrhG/view?usp=sharing"
                            );
                            handleHireMe();
                        }}
                    >
                        Hire ME
                    </Button>
                    <div className="flex lg:hidden h-full">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="hover:text-white h-10 self-center focus-visible:ring-0 focus-visible:ring-offset-0 bg-[#EF7C4A] hover:bg-[#ff6f00] hover:scale-95"
                                >
                                    <List />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56 bg-white">
                                <DropdownMenuGroup>
                                    <DropdownMenuItem>
                                        <HashLink
                                            to="#about"
                                            className="flex h-10"
                                        >
                                            <User className="mr-2 h-6 w-6" />
                                            <span className="text-lg ml-2">
                                                About
                                            </span>
                                        </HashLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <HashLink
                                            to="#projects"
                                            className="flex h-10"
                                        >
                                            <FileCode2 className="mr-2 h-6 w-6" />
                                            <span className="text-lg ml-2">
                                                Projects
                                            </span>
                                        </HashLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem>
                                        <HashLink
                                            to="#contact"
                                            className="flex h-10"
                                        >
                                            <Contact className="mr-2 h-6 w-6" />
                                            <span className="text-lg ml-2">
                                                Contact
                                            </span>
                                        </HashLink>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem className="flex justify-center">
                                        <Button
                                            variant="outline"
                                            className="bg-[#EF7C4A] hover:bg-[#ff6f00] hover:text-white hover:scale-95 self-center flex sm:hidden  text-white"
                                            onClick={() => {
                                                window.open(
                                                    "https://drive.google.com/file/d/1Ojl6wrmw1r6b4TdnCeq0ZvttJoy2VrhG/view?usp=sharing"
                                                );
                                                handleHireMe();
                                            }}
                                        >
                                            Hire ME
                                        </Button>
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
