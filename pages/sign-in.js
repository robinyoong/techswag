import { LockClosedIcon } from '@heroicons/react/solid';
import { useState } from 'react';

import { supabase } from '../utils/supabaseClient';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState('');

  async function signIn() {
    if (!email) return;
    const { data, error } = await supabase.auth.signIn({
      email,
    });

    if (error) {
      console.error({ error });
    } else {
      setSubmitted(true);
    }
  }

  if (submitted) {
    return (
      <div>
        <h1 className="text-gray-200">Please check your email to sign in</h1>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-center bg-dark py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div cl>
            <h1 className="mr-8 text-5xl py-4 font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300 text-center ">
              techswag
            </h1>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-200">
              Sign in to your account
            </h2>
          </div>
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-full focus:outline-none focus:ring-indigo-500 focus:border-yellow-600 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-yellow-300 to-red-500 hover:bg-indigo-700 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-white"
                onClick={() => signIn()}
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-white group-hover:text-green-600"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
