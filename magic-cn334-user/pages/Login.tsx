import { Button, Card, CardBody, CardHeader, Image, Input } from "@nextui-org/react";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import loginAuth from "./api/auth/loginAuth";

interface LoginProps {
    email: string;
    password: string;
}
interface Props {
    onLogin: (loginStatus: boolean) => void; // Function to handle login status
}

const Login = ({ onLogin }: Props) => {
    const [data, setData] = useState<LoginProps>({
        email: "",
        password: "",
    });

    const handleLoginClick = async () => {
        try {
            const response = await loginAuth(data);
            if (response.status) {
                console.log("Login successful:", response.message);
                onLogin(true);
                localStorage.setItem("accessToken", response.message.access_token);

            } else {
                console.log("Login failed:", response.message);
                onLogin(false);
            }
        } catch (error) {
            console.error('Error logging in:', error);
            onLogin(false);
        }
    };


    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    console.log(data, "data")

    return (
        <main className="flex flex-1 w-full justify-center items-start pt-10 pb-10 ${inter.className} bg-[#1A365D]">
            <div className="relative h-screen w-screen flex flex-col justify-center items-center ">
                <Image src="/BGlogin.svg" alt="logo" className="w-full h-full absolute" />
                <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                    <div className="-mt-36">
                        <Image src="/logo.png" alt="logo" width={400} height={400} />
                    </div>
                    <Input
                        isRequired
                        color="default"
                        radius="sm"
                        size="lg"
                        type="email"
                        variant="bordered"
                        placeholder="Enter your email"
                        defaultValue="junior@nextui.org"
                        onChange={(e) => setData(prevState => ({
                            ...prevState,
                            email: e.target.value,
                        }))}
                        className="max-w-xl text-white"
                    />
                    <Input
                        size="lg"
                        color="default"
                        radius="sm"
                        variant="bordered"
                        placeholder="Enter your password"
                        endContent={
                            <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                                {isVisible ? (
                                    <RemoveRedEyeOutlinedIcon className="text-2xl text-default-400 pointer-events-none" />
                                ) : (
                                    <VisibilityOffOutlinedIcon className="text-2xl text-default-400 pointer-events-none" />
                                )}
                            </button>
                        }
                        type={isVisible ? "text" : "password"}
                        onChange={(e) => setData(prevState => ({
                            ...prevState,
                            password: e.target.value,
                        }))}
                        className="max-w-xl text-white"
                    />
                    <div className="flex flex-row gap-4">
                        <Button size="lg" variant="ghost" radius="sm" className="text-[#2148C0] bg-[#FFFFFF]">Sign In</Button>
                        <Button size="lg" variant="ghost" radius="sm" className="text-[#2148C0] bg-[#FFFFFF]" onClick={handleLoginClick} >Log In</Button>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Login
