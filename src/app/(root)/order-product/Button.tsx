"use client";

import { useRouter } from "next/navigation";

const Button = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const handlePlaceOrder = () => {
    console.log("placing your order");
    router.push("/");
  };
  return (
    <button
      onClick={handlePlaceOrder}
      className="p-2 bg-gray-600 text-white rounded-lg cursor-pointer hover:bg-gray-700 transition duration-300"
    >
      {children}
    </button>
  );
};

export default Button;
