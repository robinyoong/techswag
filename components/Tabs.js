import { Tab } from '@headlessui/react';
import { useState } from 'react';

import AddBrand from './AddBrand';
import AddProduct from './AddProduct';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const tabs = ['Add Brand', 'Add Product'];

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
            <AddProduct />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
