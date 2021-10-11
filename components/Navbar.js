import { MenuIcon } from '@heroicons/react/solid';
import Link from 'next/link';
import router from 'next/router';

import { supabase } from '../utils/supabaseClient';

export default function Navbar({ toggleMenu, authenicatedState }) {
  async function signOut() {
    await supabase.auth.signOut();
    router.push('/sign-in');
  }

  return (
    <nav
      className="flex justify-between items-center h-16 px-8 relative shadow-sm max-w-7xl mx-auto text-white"
      role="navigation"
    >
      <div className="flex items-center">
        <Link href="/">
          <a className="mr-8 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
            techswag
          </a>
        </Link>
        {/* <div
          className="cursor-pointer md:hidden justify-self-end"
          onClick={toggleMenu}
        >
          <MenuIcon className="h-6 w-6" />
        </div> */}
      </div>

      <div className="space-x-4">
        {authenicatedState === 'not-authenticated' && (
          <Link href="/sign-in">
            <a>Sign In</a>
          </Link>
        )}
        {authenicatedState === 'authenticated' && (
          <Link href="/input">
            <a>Add Product</a>
          </Link>
        )}
        {authenicatedState === 'authenticated' && (
          <Link href="/sign-in">
            <a onClick={signOut}>Sign out</a>
          </Link>
        )}
      </div>
    </nav>
  );
}
