import { useRouter } from 'next/router';

import FilterButton from '../../components/FilterButton';
import ProductsWrapper from '../../components/ProductsWrapper';
import { supabase } from '../../utils/supabaseClient';

export default function Category({ data, categoryNames }) {
  const router = useRouter();
  const { category: pageSlug } = router.query;

  const filterCategories = categoryNames
    ?.filter((category) => category.slug !== pageSlug)
    .sort((a, b) => a.name.localeCompare(b.name));

  const pageTitle = categoryNames?.filter(
    (category) => category.slug === pageSlug
  );

  console.log('filterCategories', filterCategories);
  console.log('data', data);
  console.log('categoryNames', categoryNames);

  return (
    <>
      <div className="mx-auto py-8 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 h-64 flex flex-col justify-center items-center">
        <h1 className="text-white font-medium text-3xl py-8">{pageSlug}</h1>
        {
          <div>
            {filterCategories?.map((category) => (
              <FilterButton
                key={`category-${category.id}`}
                category={category}
              />
            ))}
          </div>
        }
      </div>
      {data.length ? (
        <div className="min-h-screen">
          <ProductsWrapper products={data} />
        </div>
      ) : (
        <div className="max-w-7xl mx-auto flex justify-center py-20 text-white text-2xl">
          <h1>No items found</h1>
        </div>
      )}
    </>
  );
}

export async function getStaticPaths() {
  try {
    const { data: categories, error } = await supabase
      .from('categories')
      .select('slug');

    if (error) {
      console.error({ error });
    }

    const paths = categories.map((category) => ({
      params: {
        category: JSON.stringify(category.slug),
      },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const { category } = params;
  try {
    // QUERYING FOR DATA BASED ON THE SELECTED CATEGORY
    const { data, error } = await supabase
      .from('products')
      .select(
        `id, name, currency, image, price, url, category, brand:brand_id(*)`
      )
      .eq('category', category);

    console.log('this is the data', data);

    const { data: categoryNames } = await supabase.from('categories').select();

    return {
      props: {
        data,
        categoryNames,
      },
    };
  } catch (error) {
    console.error(error);
  }
}
