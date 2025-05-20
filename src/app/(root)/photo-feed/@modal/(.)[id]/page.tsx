import Modal from "@/commponents/Modal/modal";
import Image from "next/image";
import Images, { ImageInfo } from "../../photos";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const photo: ImageInfo = Images.find((p) => p.id === Number(id))!;

  return (
    <Modal>
      <Image
        alt={photo.name}
        src={photo.src}
        className="w-full object-cover
            aspect-square"
      />

      <div className="bg-white p-4 text-black">
        <h2 className="text-2xl font-semibold">{photo.name}</h2>
        <h3>{photo.photographer}</h3>
        <h3>{photo.location}</h3>
      </div>
    </Modal>
  );
}
