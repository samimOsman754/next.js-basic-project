import { notFound } from "next/navigation";
import Image from "next/image";
import welcome from "@/assets/images/welcome.jpg";


const Docspage = async ({params}: {params:Promise<{slug:string[] }>}) => {
  const { slug } = await params;
  if (slug?.length > 3){
    notFound();
  }
  if (slug?.length === 3){
    return (
      <div>Docs page for explanation {slug[0]} and concept {slug[1]} for feature {slug[2]}</div>
    )
  } else if (slug?.length === 2){
    return (
      <div>Docs page for explanation {slug[0]} and concept {slug[1]}</div>
    )
  }
  return (
    <>
    <Image src={welcome} alt="hero" width={500} height={500} className="w-full h-screen object-cover"/>
    </>
  )
}

export default Docspage