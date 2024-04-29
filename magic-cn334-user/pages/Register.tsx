import { Button, Card, CardBody, CardHeader, Image, Input } from "@nextui-org/react";
import { useState } from "react";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import RegisterAuth from "./api/auth/post/registerAuth";
import { AlertSuccess } from "./components/alertSuccess";
import { AlertFail } from "./components/alertFail";
import { ToastContainer } from "react-toastify";

interface LoginProps {
    email: string;
    password: string;
}

const Register = ( {changeState} : {changeState : any}) => {
    const [data, setData] = useState<LoginProps>({
        email: "",
        password: "",
    });
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    console.log(data, "data")

    const handleRegisterClick = async () => {
        try {
            const respone = await RegisterAuth(data);
            if (respone.status) {
                changeState();
                AlertSuccess("Register Success")
            }
        } catch (error) {
            console.log(error);
            AlertFail("Register Fail")
        }
    }
    const changeUI = () => {
        changeState();
    }
    return (
        <main className="relative h-screen w-screen flex flex-col justify-center items-center bg-[#1A365D]">
            <Image src="/BGlogin.svg" alt="logo" className="w-full h-full absolute" />
            <div className="flex flex-col justify-center items-center gap-4 w-1/2">
                <div className="-mt-36">
                    <Image src="/logo.png" alt="logo" width={400} height={400} />
                </div>
                <Card className="bg-[#2C5282] shadow-md w-1/2">
                    <CardHeader className="bg-[#2A4365] justify-center items-center">
                        <label className="text-2xl font-bold">
                            Register
                        </label>
                    </CardHeader>
                    <CardBody className="bg-[#2A4365] justify-center items-center gap-5">
                        <Input
                            isRequired
                            color="default"
                            radius="sm"
                            size="lg"
                            type="email"
                            variant="bordered"
                            placeholder="Enter your email"
                            defaultValue="junior@gmail.org"
                            onChange={(e) => setData(prevState => ({
                                ...prevState,
                                email: e.target.value,
                            }))}
                            className="max-w-md text-white"
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
                            className="max-w-md text-white"
                        />
                        <div className="flex w-full justify-center gap-4">
                            <Button size="lg" variant="ghost" radius="sm" className="text-white" onClick={changeUI}>Log in</Button>
                            <Button size="lg" variant="ghost" radius="sm" className="text-white bg-[#2B6CB0]" onClick={handleRegisterClick}>Create Account</Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
            <ToastContainer />
        </main>
    );
}

export default Register;
