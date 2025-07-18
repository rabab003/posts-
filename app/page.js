import Explore from "@/app/explore/page";
// import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-[300px]  overflow-y-scroll scroll-auto h-[600px] border-[#171717] border-1 bg-[#090909] text-white">
        <Explore />
      </div>
    </div>
  );
}
