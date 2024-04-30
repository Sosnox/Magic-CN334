import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Divider, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"
import buyAuth from "../api/auth/post/buyAuth";
import { AlertSuccess } from "./alertSuccess";
import { ToastContainer } from "react-toastify";
import getCart from "../api/auth/get/getCart";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/router";

export const CardPayment = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const shipping = 4;


    const [dataCart , setDataCart] = useState(0)
    const { onOpen } = useDisclosure();

    const fetchDataCart = async () => {
        try {
            const res = await getCart()
            setDataCart(res.price)
        }
        catch (error) {
            console.log(error)
        }
    }
    const fetchData = async () => {
        try {
            const res = await buyAuth()
            onClose()
            AlertSuccess("Buy Success")
            window.location.reload();
            console.log(res)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDataCart()
    }, [])


    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose} placement="center" className="py-4 justify-center items-center">
                <ModalContent className="py-4 justify-center items-center text-black">
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                QR Code
                            </ModalHeader>
                            <ModalBody className="flex items-center justify-center my-2">
                                <Image src="/QR_CODE.png" alt="QR Code" className="w-96 rounded mr-4" />
                            </ModalBody>
                            <Divider />
                            <ModalFooter>
                                 <div className="w-full text-black p-4 rounded-lg text-lg font-bold">
                                    <div className="flex justify-between mb-2">
                                        <span>Subtotal</span>
                                        <span>${dataCart}</span>
                                    </div>
                                    <div className="flex justify-between mb-2">
                                        <span>Shipping</span>
                                        <span>${shipping.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Total (Tax incl.)</span>
                                        <span>${dataCart + shipping}</span>
                                    </div>
                                </div>
                                <ToastContainer />
                            </ModalFooter>
                            <Button color="success" className="text-white w-1/2" onClick={fetchData}>Confirm</Button>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}