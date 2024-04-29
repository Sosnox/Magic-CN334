import { Button, Card, CardBody, CardHeader, Image, Input } from "@nextui-org/react";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import loginAuth from "./api/auth/post/loginAuth";
import RegisterAuth from "./api/auth/post/registerAuth";
import Register from "./Register";
import Cookies from 'js-cookie';


interface LoginProps {
    email: string;
    password: string;
}
interface Props {
    onLogin: (loginStatus: boolean) => void; // Function to handle login status
}

const Login = ({ onLogin }: Props) => {
    const [stateLogin, setStateLogin] = useState<boolean>(true);
    const [token , setToken] = useState<string>("");
    const changeState = () => {
        setStateLogin(!stateLogin);
    }
    console.log(stateLogin , "stateLogin")
    const [data, setData] = useState<LoginProps>({
        email: "",
        password: "",
    });

    const handleLoginClick = async () => {
        try {
            const response = await loginAuth(data);
            if (response.status) {
                setToken(response.message.access_token);
                Cookies.set('authToken', response.message.access_token, { expires: 1 });
                onLogin(true);

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

    if (stateLogin) {
        return (
            <main className="flex flex-1 w-full justify-center items-start pt-10 pb-10 bg-[#1A365D]">
                <div className="relative h-screen w-screen flex flex-col justify-center items-center">
                    <Image src="/BGlogin.svg" alt="background" className="w-full h-full absolute" />
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
                            <Button size="lg" variant="ghost" radius="sm" className="text-white "onClick={changeState}>Sign In</Button>
                            <Button size="lg" variant="ghost" radius="sm" className="text-white bg-[#2B6CB0]" onClick={handleLoginClick}>Log In</Button>
                        </div>
                    </div>
                </div>
            </main>
        );
    } else {
        return <Register changeState={changeState}/>;
    }
}

export default Login
