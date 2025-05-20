"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  if (pathname.includes("dasbord")) {
    return null;
  }

    const navLinks = [
    { name: "Home", path: "/" },
    { name: "P-Dashboard", path: "/parallel-dashboard" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Docs", path: "/docs" },
    { name: "Products", path: "/products" },
    { name: "Blog", path: "blog"},
    { name: "Photos", path: "/photo-feed"},
    // { name: "Sign In", path: "/signin" },
    // { name: "Sign Up", path: "/signup" },
    ]


  return (
    <>
      <nav className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
        {/* Logo Section */}
        <div>
          <Link
            href="/"
            className="text-3xl font-bold hover:text-yellow-300 transition duration-300"
          >
            Logo
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              className={`${
                pathname === link.path ? "text-yellow-300" : "text-gray-300"
              } transition duration-300`}
            >
              {link.name}
            </Link>
          ))}
          {/* Example of hardcoded links */}
          {/* <Link
            href="/"
            className={`${
              pathname === "/" ? "text-yellow-300" : "text-gray-300"} transition duration-300`}
          >
            Home
          </Link>
          <Link
            href="/dasbord"
            className={`${
              pathname === "/dasbord" ? "text-yellow-300" : "text-gray-300"} transition duration-300`}
          >
            Dashboard
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === "/about"
                ? "text-yellow-300"
                : "text-gray-300"
            } transition duration-300`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === "/contact" ? "text-yellow-300" : "text-gray-300"} transition duration-300`}
          >
            Contact
          </Link>
          <Link
            href="/docs"
            className={`${
              pathname === "/docs" ? "text-yellow-300" : "text-gray-300"} transition duration-300`}
          >
            Docs
          </Link> */}
        </div>

        {/* Authentication Links */}
        <div className="flex gap-4">
          <Link
            href="/signin"
            className="px-4 py-2 bg-white text-blue-600 font-semibold rounded-lg hover:bg-yellow-300 hover:text-white transition duration-300"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-yellow-400 text-white font-semibold rounded-lg hover:bg-yellow-500 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
