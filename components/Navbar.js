import { MenuIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Navbar({ toggleMenu }) {
  return (
    <nav
      className="flex justify-between md:justify-start items-center h-16 px-8 relative shadow-sm max-w-7xl mx-auto"
      role="navigation"
    >
      <Link href="/">
        <a className="mr-8">techswag</a>
      </Link>
      <div
        className="cursor-pointer md:hidden justify-self-end"
        onClick={toggleMenu}
      >
        <MenuIcon className="h-6 w-6" />
      </div>
      <div className="hidden md:block space-x-4 justify-between">
        <Link href="/brands">
          <a>Brands</a>
        </Link>
        <Link href="/categories">
          <a>Categories</a>
        </Link>
      </div>
    </nav>
  );
}
