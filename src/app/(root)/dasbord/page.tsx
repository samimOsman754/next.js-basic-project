// import Image from "next/image"

import { Assingment } from "@/commponents/dashboard/Assingment"
import { Notification } from "@/commponents/dashboard/Notification"
import { Quiz } from "@/commponents/dashboard/Quiz"

const Dashbardpage = () => {
  return (
    <>
      <h1 className="text-5xl p-2 text-gray-800 text-center">Welcome to the Dashboard</h1>
      {/* <Image 
      src="https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg" 
      alt="Dashboard" 
      width={800} 
      height={600} 
      style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
      /> */}
      <div className="grid grid-cols-2 grid-rows-2 p-8 gap-6">
      <Assingment/>
      <Notification/>
      <Quiz/>
      </div>
    </>
  )
}

export default Dashbardpage