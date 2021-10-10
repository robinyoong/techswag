import Link from 'next/link';

export default function Dropdown({
  isMenuOpen,
  toggleMenu,
  authenicatedState,
}) {
  return (
    <div
      className={
        isMenuOpen
          ? 'grid grid-rows-2 py-4 space-y-2 text-center items-center bg-yellow-500'
          : 'hidden'
      }
      onClick={toggleMenu}
    >
      <Link href="/brands">
        <a>Brands</a>
      </Link>
      <Link href="/categories">
        <a>Categories</a>
      </Link>
    </div>
  );
}
