import Image from "next/image";
import { NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Navbar, Input } from "@nextui-org/react";
// import {SearchIcon} from "./SearchIcon.jsx";

export const NavBar = () => {
    return (
        <Navbar maxWidth="full"
            height="80px"
            isBordered className="flex flex-row bg-[#1A365D] items-center">
            <NavbarBrand>
                <Image src="/logoHome.png" alt="Mystic Script" width={70} height={40} />
                <p className="font-bold text-2xl font-serif">Mystic Script</p>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Input
                        classNames={{
                            base: "max-w-full sm:max-w-[10rem] h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }}
                        placeholder="Type to search..."
                        size="sm"
                        // startContent={<SearchIcon size={18} />}
                        type="search"
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" >
                <NavbarItem isActive>
                    <Link  href="#">
                        Cart
                    </Link>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="#" aria-current="page">
                        All Product
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Sign Up
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}