import { FaCog, FaUser, FaSignOutAlt, FaNewspaper } from "react-icons/fa";
import Link from "next/link";
import { Metadata } from "next";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Generated by next.js Dashboard",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
  assingment: React.ReactNode;
  notification: React.ReactNode;
  quiz: React.ReactNode;
}

export default function ParallelDashboardLayout({
  children,
  assingment,
  notification,
  quiz,
}: Props) {
  const isLoggedIn = true;
  return (
    <div className={`flex h-screen ${poppins.className}`}>
      {/* Sidebar */}
      <aside className="w-60 bg-gray-800 text-white p-6">
        <Link href="/parallel-dashboard">
          <h2 className="text-2xl font-bold mb-6">Parallel-DB</h2>
        </Link>

        <nav className="flex flex-col gap-4 text-lg">
          {/* Settings Link */}
          <Link
            href="/dasbord/setting"
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            <FaCog size={20} />
            <span>Settings</span>
          </Link>

          {/* Profile Link */}
          <Link
            href="/dasbord/profile"
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            <FaUser size={20} />
            <span>Profile</span>
          </Link>

          {/* Read in English Link */}
          <Link
            href="/dasbord/articles/breking-news?lang=en"
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            <FaNewspaper size={20} />
            <span>Read in English</span>
          </Link>

          {/* Read in Bangla Link */}
          <Link
            href="/dasbord/articles/breking-news?lang=bn"
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded transition duration-300"
          >
            <FaNewspaper size={20} />
            <span>Read in Bangla</span>
          </Link>
          {/* Logout Link */}
          <Link
            href="/dasbord/logout"
            className="flex items-center gap-2 hover:bg-gray-700 p-2 rounded transition duration-300 text-red-600"
          >
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-gray-100 p-6 overflow-auto">
        <>
        <h1 className="text-5xl p-2 text-gray-800 text-center">Welcome to the Parallel Dashboard</h1>
        {children}
        <div className="grid gap-6 grid-cols-2 grid-rows-2 p-8">
          { isLoggedIn && assingment}
          {notification}
          {quiz}
        </div>
        </>
      </main>
    </div>
  );
}
