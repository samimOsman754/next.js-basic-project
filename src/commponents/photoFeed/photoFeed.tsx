import Images from "@/app/(root)/photo-feed/photos";
import Image from "next/image";
import Link from "next/link";

const photoFeed = () => {
  return (
    <>
      <main className="container mx-auto">
        <h1 className="text-center text-3xl font-bold my-4">
          New wonders of the world
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {Images.map(({ id, src, name }) => (
            <Link key={id} href={`/photo-feed/${id}`}>
              <Image
                alt={name}
                src={src}
                className="w-full object-cover aspect-square"
              ></Image>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
};

export default photoFeed;
