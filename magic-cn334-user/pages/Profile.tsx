import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Profile = () => {
    return (
    <main className={`flex min-h-screen w-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
       Profile
    </main>)
}
export default Profile;