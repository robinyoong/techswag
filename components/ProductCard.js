import Image from 'next/image';
import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="relative bg-gray-700 p-4 max-w-sm rounded-xl overflow-hidden hover:bg-gradient-to-t from-yellow-300 to-red-500 transition-all duration-300 text-white hover:text-gray-800 cursor-pointer">
      <Link href={product.url}>
        <a>
          <Image
            className="rounded-xl object-cover "
            src={product.image}
            alt=""
            width="420"
            height="420"
            layout="responsive"
          />
          <div className="flex justify-between px-1 pt-4 ">
            <Image
              src={product.brand.logo}
              alt={`${product.brand.name} logo`}
              width="40"
              height="40"
            />
            <div className="flex items-center text-right">
              <p>{product.name}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
