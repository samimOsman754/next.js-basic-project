// "use client";
import Image from "next/image"
import Link from "next/link"
import img1 from "@/assets/images/journey.jpg"
// import {use} from "react"


const Articlepage = async ({
  params,
  searchParams,
}:{
  params: { articleId: string };
  searchParams: Promise<{ lang?: "en" | "bn" }>;
}) => {
  //for client component
  // const { articleId } = params;
  // const { lang = "en" } = use(searchParams);
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  return ( 
    <div>
        {
          lang === "en"? <h1 className="text-5xl p-5 text-gray-800">Welcome to the Article {articleId}</h1>:
          <h1 className="text-5xl p-5 text-gray-800">আর্টিকেল {articleId} তে স্বাগতম</h1>
        }
        {lang === "en" ? <p>Reading in English</p>: <p>বাংলায় পড়া হচ্ছে</p>}
        <p className="text-lg p-5 text-gray-600">This is the article page where you can read articles.</p>
        <Image 
            src={img1} 
            alt="Article" 
            width={800} 
            height={600} 
            style={{ borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }} 
        />
        <div>
            <Link href={`/dasbord/articals/${articleId}?lang=en`}>English</Link>
            <Link href={`/dasbord/articals/${articleId}?lang=bn`}>Bangla</Link>
        </div>
    </div>
  )
}

export default Articlepage