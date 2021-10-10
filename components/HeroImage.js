import Image from 'next/image';

export default function HeroImage({ imageUrl }) {
  console.log(imageUrl);
  return (
    <Image
      src={imageUrl}
      alt=""
      className="w-full h-full object-center object-cover"
      width="176"
      height="256"
    />
  );
}
