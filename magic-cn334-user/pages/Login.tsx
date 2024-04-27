import { Button, Card, CardBody, CardHeader, Image, Input } from "@nextui-org/react";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

const Login = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => setIsVisible(!isVisible);

    return (
        <main className="relative h-screen w-screen flex flex-col justify-center items-center ">
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
                            onClear={() => console.log("input cleared")}
                            className="max-w-xl text-white "
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
                            className="max-w-xl text-white"
                        />
                        <div className="flex flex-row gap-4">
                        <Button size="lg" variant="ghost" radius="sm" className="text-[#2148C0] bg-[#FFFFFF]" >Sign In</Button>
                        <Button size="lg" variant="ghost" radius="sm" className="text-[#2148C0] bg-[#FFFFFF]" >Log In</Button>
                        </div>
            </div>
        </main>
    );
}
export default Login;