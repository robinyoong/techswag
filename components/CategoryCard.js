import Image from 'next/image';
import Link from 'next/link';

export default function CategoryCard({ category }) {
  const { name, image, slug } = category;

  return (
    <Link href={`/products/${slug}`}>
      <a>
        <div className="aspect-w-1 aspect-h-1">
          <Image
            src={image}
            alt={`${name} image`}
            layout="fill"
            className="object-cover rounded-xl"
          />
          <div className="flex justify-center items-end pb-6 bg-gradient-to-t from-gray-600 hover:bg-gradient-to-t hover:from-yellow-600 transition duration-700 text-white rounded-xl">
            <h5 className="font-medium tracking-wide text-xl">{`${name}`}</h5>
          </div>
        </div>
      </a>
    </Link>
  );
}
