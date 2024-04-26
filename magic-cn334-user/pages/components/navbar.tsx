import Image from "next/image";

export const Navbar = () => {
    return (
        <div className="flex items-center justify-between p-4 px-24 bg-gray-800 text-white relative">
            <div className="flex items-center">
                <Image src="/logoHome.png" alt="Logo" width={90} height={200} />
                <label className="text-3xl">Mystic Script</label>
            </div>
            <div className="flex items-center space-x-4 text-2xl">
                <a href="#" className="hover:underline">Home</a>
                <a href="#" className="hover:underline">About</a>
                <a href="#" className="hover:underline">Contact</a>
            </div>
        </div>
    );
}