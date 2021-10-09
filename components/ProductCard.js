import Image from 'next/image';

export default function ProductCard({ product }) {
  return (
    <div className="relative bg-grey-800 p-4 max-w-sm rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transit duration-300">
      <div>
        <Image
          className="rounded-xl object-cover "
          src={product.image}
          alt=""
          width="420"
          height="420"
          layout="responsive"
        />
        <div className="flex justify-between px-1 py-2">
          <Image
            src={product.brand.logo}
            alt={`${product.brand.name} logo`}
            width="40"
            height="40"
          />
          <div className="flex items-center">
            <p className="pr-2">{product.currency}</p>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}