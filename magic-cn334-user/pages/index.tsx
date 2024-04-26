import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between ${inter.className} border-slate-400`}>
      <div className="text-4xl font-bold">Selection 1</div>
      <div className="text-4xl font-bold">Selection 2</div>
      <div className="text-4xl font-bold">Selection 3</div>
      <div className="text-4xl font-bold">Selection 4</div>
    </div>
  );
}
