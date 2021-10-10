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
        <h1>Please check your email to sign in</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>Sign In</h1>
      <input type="email" onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => signIn()}>Sign In</button>
    </div>
  );
}
