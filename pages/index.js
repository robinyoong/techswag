import Featured from '../components/Featured';
import Hero from '../components/Hero';
import { supabase } from '../utils/supabaseClient';

export default function Home({ categories }) {
  console.log(categories);

  return (
    <>
      <Hero />
      <Featured />
    </>
  );
}
