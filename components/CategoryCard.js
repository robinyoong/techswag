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
          <div className="flex justify-center items-center">
            <h5 className="font-semibold text-lg">{`${name}`}</h5>
          </div>
        </div>
      </a>
    </Link>
  );
}
