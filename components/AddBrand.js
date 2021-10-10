import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import FormHeader from '../components/FormHeader';
import FormTextInput from '../components/FormTextInput';

export default function AddBrand({ user }) {
  const [logo, setLogo] = useState(null);
  const uploadLogoPickerRef = useRef(null);

  console.log(user);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setLogo(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    console.log(logo);
  }, [logo]);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 ">
      <form className="space-y-8 divide-y divide-gray-200">
        <FormHeader
          header="New Brand"
          subheader="Add a new brand to the database"
        />
        <FormTextInput label="Brand name" />

        {/*  UPLOAD FIELD */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5 text-gray-200">
          <label htmlFor="photo" className="block text-sm font-medium ">
            Logo
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2 flex">
            {logo && (
              <div>
                <Image
                  className="object-cover"
                  src={logo}
                  alt="Brand Logo"
                  width="300"
                  height="150"
                />
              </div>
            )}
            <div className="flex items-center">
              <div
                onClick={() => uploadLogoPickerRef.current.click()}
                className="cursor-pointer ml-5 bg-dark py-2 px-3 border border-gray-200 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-200 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white"
              >
                <p>Upload</p>
                <input
                  type="file"
                  ref={uploadLogoPickerRef}
                  onChange={uploadToClient}
                  accept="image/*"
                  hidden
                />
              </div>
            </div>
          </div>
        </div>

        {/* SUBMISSION BUTTON */}
        <div className="pt-5">
          <div className="flex justify-end">
            <button
              type="button"
              className=" py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Clear
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
