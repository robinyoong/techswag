import Link from 'next/link';

export default function FilterButton({ category }) {
  return (
    <Link href={`/products/${category.slug}`}>
      <a
        type="button"
        className="inline-flex items-center px-6 py-2 mx-2 border-2 border-white text-base font-medium rounded-full shadow-sm text-white bg-transparent hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        {category.name}
      </a>
    </Link>
  );
}
