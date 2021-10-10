import { supabase } from '../utils/supabaseClient';

export default function InputPage({ user }) {
  console.log(user);
  return <h1>hi</h1>;
}

export async function getServerSideProps({ req }) {
  const { user } = await supabase.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      props: {},
      redirect: { destination: '/sign-in' },
    };
  }
  return {
    props: { user },
  };
}
