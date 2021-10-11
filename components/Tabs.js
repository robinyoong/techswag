import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';

import { supabase } from '../utils/supabaseClient';
import AddBrand from './AddBrand';
import AddProduct from './AddProduct';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const tabs = ['Add Brand', 'Add Product'];
  const [orderCategories, setOrderedCategories] = useState(null);
  const [brands, setBrands] = useState(null);

  // GET LIST OF ALL BRANDS
  const fetchBrands = async () => {
    const { data, error } = await supabase.from('brands').select();
    setBrands(data);
    console.log('brands', brands);
  };

  // GET LIST OF ALL CATEGORIES
  const fetchCategories = async () => {
    const { data, error } = await supabase.from('categories').select('*');

    const orderedCategories = data.sort((a, b) => a.name.localeCompare(b.name));
    console.log('orderly cat', orderedCategories);
    setOrderedCategories(orderedCategories);
  };

  useEffect(() => {
    fetchBrands();
    const mySubscription = supabase
      .from('brands')
      .on('*', () => fetchBrands())
      .subscribe();
    return () => supabase.removeSubscription(mySubscription);
  }, []);

  useEffect(() => {
    fetchCategories();
    const mySubscription = supabase
      .from('categories')
      .on('*', () => fetchCategories())
      .subscribe();
    return () => supabase.removeSubscription(mySubscription);
  }, []);

  return (
    <div className="w-full max-w-7xl px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-900/20 rounded-xl">
          {tabs.map((tabTitle) => (
            <Tab
              key={tabTitle}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-sm leading-5 font-medium text-white rounded-lg',
                  'focus:outline-none focus:ring-2 ring-white ring-opacity-80',
                  selected
                    ? 'bg-gradient-to-r from-yellow-300 to-red-500 shadow'
                    : 'text-blue-100 hover:bg-red-500/[0.12] hover:text-white'
                )
              }
            >
              {tabTitle}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-8 ">
          <Tab.Panel className="bg-dark rounded-xl p-3 border border-gray-700">
            <AddBrand />
          </Tab.Panel>
          <Tab.Panel className="bg-dark rounded-xl p-3 border border-gray-700">
            <AddProduct brands={brands} categories={orderCategories} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
