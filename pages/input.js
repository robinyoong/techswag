import AddBrand from '../components/AddBrand';
import Tabs from '../components/Tabs';
import { supabase } from '../utils/supabaseClient';

export default function InputPage({ user }) {
  return (
    <div className="max-w-7xl mx-auto py-8">
      <Tabs />
    </div>
  );
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
