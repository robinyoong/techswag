import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';

/* eslint-disable */

const Dropdown = ({ label, list, handler }) => {
  console.log('list', list);
  const [selected, setSelected] = useState('');

  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="list-name"
        className="block text-sm font-medium text-gray-200 sm:mt-px sm:pt-2"
      >
        {label}
      </label>

      <div className="mt-1 sm:mt-0 sm:col-span-1">
        <Listbox value={selected} onChange={setSelected}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-dark border border-gray-700 text-gray-200 rounded-lg shadow-md cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm h-10">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base border border-gray-700 text-gray-200 bg-dark rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm z-10">
                {list?.map((listItem, listItemId) => (
                  <Listbox.Option
                    key={listItemId}
                    className={({ active }) =>
                      `${
                        active
                          ? 'text-yellow-900 bg-yellow-300'
                          : 'text-gray-200'
                      }
                          cursor-pointer select-none relative py-2 pl-10 pr-4`
                    }
                    value={listItem}
                    onChange={handler(selected)}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                        >
                          {listItem.name}
                        </span>
                        {selected ? (
                          <span
                            className={`${
                              active ? 'text-amber-600' : 'text-amber-600'
                            }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export default Dropdown;
