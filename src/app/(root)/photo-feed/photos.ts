import { StaticImageData } from 'next/image';
import photo1 from '@/assets/images/img1.jpg';
import photo2 from '@/assets/images/img2.jpg';
import photo3 from '@/assets/images/img3.jpg';
import photo4 from '@/assets/images/img4.jpg';
import photo5 from '@/assets/images/img5.jpg';
import photo6 from '@/assets/images/img6.jpg';
import photo7 from '@/assets/images/img7.jpg';
import photo8 from '@/assets/images/journey.jpg';



export type ImageInfo = {
    id: number,
    name: string,
    src: StaticImageData,
    photographer: string,
    location: string,
}

const Images: ImageInfo[] = [
    {
        id: 1,
        name: 'Photo 1',
        src: photo1,
        photographer: 'John Doe',
        location: 'New York, USA',
    },
    {
        id: 2,
        name: 'Photo 2',
        src: photo2,
        photographer: 'Jane Smith',
        location: 'Paris, France',
    },
    {
        id: 3,
        name: 'Photo 3',
        src: photo3,
        photographer: 'Alice Johnson',
        location: 'Tokyo, Japan',
    },
    {
        id: 4,
        name: 'Photo 4',
        src: photo4,
        photographer: 'Bob Brown',
        location: 'Sydney, Australia',
    },
    {
        id: 5,
        name: 'Photo 5',
        src: photo5,
        photographer: 'Charlie Green',
        location: 'Cape Town, South Africa',
    },
    {
        id: 6,
        name: 'Photo 6',
        src: photo6,
        photographer: 'Diana Prince',
        location: 'London, UK',
    },
    {
        id: 7,
        name: 'Photo 7',
        src: photo7,
        photographer: 'Ethan Hunt',
        location: 'Berlin, Germany',
    },
    {
        id: 8,
        name: 'Photo 8',
        src: photo8,
        photographer: 'Felicity Smoak',
        location: 'Barcelona, Spain',
    },
    
]

export default Images;