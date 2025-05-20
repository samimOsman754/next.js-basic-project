// import { Suspense } from "react"
import PhotoFeed from "@/commponents/photoFeed/photoFeed"

const PhotoFeedPage = async () => {
       await new Promise ((resolve) => setTimeout(resolve, 2000)); // Simulate a delay
  return (
    <>
    {/* <Suspense fallback={<div></div>}> */}
      <PhotoFeed/>
    {/* </Suspense> */}
    </>
  )
}

export default PhotoFeedPage