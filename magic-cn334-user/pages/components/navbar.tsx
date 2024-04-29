import Image from "next/image";
import { NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button, Navbar, Input } from "@nextui-org/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

import { useState } from "react";
import Cart from "./Cart";
import { removeAccessToken } from "../cookie/cookie";

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => { setIsOpen(!isOpen) };

    const handleLogout = () => {
        removeAccessToken();
    }

    return (
        <Navbar maxWidth="full"
            height="80px"
            isBordered className="flex flex-row bg-[#0E2F56] items-center">
            <NavbarBrand>
                <Link href="/">
                    <Image src="/logoHome.png" alt="Mystic Script" width={70} height={40} />
                    <p className="font-bold text-2xl font-serif text-white">Mystic Script</p>
                </Link>
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
                        startContent={<SearchOutlinedIcon />}
                        type="search"
                    />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end" >
                <NavbarItem isActive>
                    <Button onClick={toggleCart}>
                        <ShoppingCartOutlinedIcon />
                        Cart
                        <Cart isOpen={isOpen} onClose={toggleCart} />
                    </Button>
                </NavbarItem>
                <NavbarItem isActive>
                    <Link href="/Profile">
                        <Button>
                            <AccountCircleOutlinedIcon />
                            Profile
                            <Cart isOpen={isOpen} onClose={toggleCart} />
                        </Button>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Button onClick={handleLogout}>
                        <LogoutIcon />
                        Log out
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}