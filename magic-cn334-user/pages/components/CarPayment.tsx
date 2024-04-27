import { Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Divider, Image, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/react"

export const CardPayment = () => {
    const subtotal = 1668;
    const shipping = 4;
    const total = subtotal + shipping;

    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
        <Button onPress={onOpen}>Open Modal</Button>
        <Modal isOpen={isOpen}
                placement="center"
                onOpenChange={onOpenChange}
                className="py-4 justify-center items-center">
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
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                        <span>Shipping</span>
                        <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Total (Tax incl.)</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                </div>
            </ModalFooter>
            <Button color="success" className="text-white w-1/2">Confirm</Button>
            </>
            )}
            </ModalContent>
        </Modal>
        </>
    )
}