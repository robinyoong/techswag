import '../styles/globals.css';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Layout from '../components/Layout';
import { supabase } from '../utils/supabaseClient';

export default function MyApp({ Component, pageProps }) {
  const [authenticatedState, setAuthenticatedState] =
    useState('not-authenticated');
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        handleAuthChange(event, session);
        if (event === 'SIGNED_IN') {
          setAuthenticatedState('authenticated');
          router.push('/');
        }
        if (event === 'SIGNED_OUT') {
          setAuthenticatedState('not-authenticated');
        }
      }
    );
    checkUser();

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  async function handleAuthChange(event, session) {
    await fetch('/api/auth', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      credentials: 'same-origin',
      body: JSON.stringify({ event, session }),
    });
  }

  // CHECK IF USER IS AUTHENTICATED
  async function checkUser() {
    const user = await supabase.auth.user();
    if (user) {
      setAuthenticatedState('authenticated');
    }
  }

  return (
    <div>
      <Layout authenicatedState={authenticatedState}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
