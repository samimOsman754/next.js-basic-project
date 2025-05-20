import Link from "next/link";

export default function SeenPage(){
    return (
        <div className="text-xl text-black p-4 row-span-2 border border-gray-400 rounded h-[745px] flex items-center justify-center gap-5">
          <span>SEEN NOTIFICATION</span>
          <div>
            <Link href="/parallel-dashboard" className="text-blue-400">
              ALL
            </Link>
          </div>
        </div>
      );
} 