import Categories from '../components/Categories';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import { supabase } from '../utils/supabaseClient';

export default function Home({ categories }) {
  return (
    <>
      <Hero />
      <Featured />
      <Categories categories={categories} />
    </>
  );
}

export async function getStaticProps() {
  const { data: categories, error } = await supabase
    .from('categories')
    .select();

  if (error) {
    console.error(error);
  }

  return {
    props: {
      categories: categories,
    },
    revalidate: 10,
  };
}
