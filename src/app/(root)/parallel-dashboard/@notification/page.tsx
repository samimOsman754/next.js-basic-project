import Link from "next/link";
import wait from "../../lib/wait";

export default async function Notification() {
  await wait(2000);
  // throw new Error("Error in Notification");
  return (
    <div className="text-xl text-black p-4 row-span-2 border border-gray-400 rounded h-[745px] flex items-center justify-center gap-5">
      <span>ALL NOTIFICATION</span>
      <div>
        <Link href="/parallel-dashboard/seen" className="text-blue-400">
          SEEN
        </Link>
      </div>
    </div>
  );
}
