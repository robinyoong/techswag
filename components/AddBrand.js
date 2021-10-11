import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import FormHeader from '../components/FormHeader';
import { supabase } from '../utils/supabaseClient';

export default function AddProduct({ user }) {
  const [brandName, setBrandName] = useState('');
  const [logo, setLogo] = useState(null);
  const [logoFile, setLogoFile] = useState(null);
  const [storeUrl, setStoreUrl] = useState('');
  const uploadLogoPickerRef = useRef(null);

  console.log(user);

  const uploadToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setLogoFile(file);
      setLogo(URL.createObjectURL(file));
    }
  };

  const submitNewBrand = async (e) => {
    e.preventDefault();
    if (!brandName || !logo) return;
    console.log('checkpoint');

    // UPLOAD IMAGE TO STORAGE
    const fileNameAndExt = logoFile.name.split('.');
    const fileExt = fileNameAndExt[1];
    const fileName = `${fileNameAndExt[0]}-${Math.random() * 10}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data: imageData, error } = await supabase.storage
      .from('brands')
      .upload(filePath, logoFile);

    if (error) {
      console.log('Something went wrong with the image upload', error);
    }

    console.log('image upload data', imageData);

    // GET PUBLIC URL OF IMAGE

    const { publicURL, error: publicUrlError } = supabase.storage
      .from('brands')
      .getPublicUrl(filePath);

    const { data: brandSubmission, error: brandSubmissionError } =
      await supabase
        .from('brands')
        .insert([{ name: brandName, logo: publicURL, url: storeUrl }]);

    if (brandSubmissionError) {
      console.log(brandSubmissionError);
    }
    console.log('submitted data', brandSubmission);
    clearAll();
  };

  useEffect(() => {
    console.log(logo);
  }, [logo]);

  const clearAll = () => {
    setBrandName('');
    setStoreUrl('');
    setLogo(null);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 ">
      <form className="space-y-8 divide-y divide-gray-200">
        <FormHeader
          header="New Brand"
          subheader="Add a new brand to the database"
        />

        {/* BRAND NAME FIELD */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-200 sm:mt-px sm:pt-2"
          >
            Brand Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="brand-name"
              id="brand-name"
              autoComplete="brand-name"
              className="max-w-lg block w-full shadow-sm focus:ring-white focus:border-gray-200 sm:max-w-xs sm:text-sm border-gray-700 bg-dark rounded-md text-gray-200"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
        </div>

        {/* STORE URL FIELD */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-200 sm:mt-px sm:pt-2"
          >
            Store Url
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="store-url"
              id="store-url"
              autoComplete="store-url"
              className="max-w-lg block w-full shadow-sm focus:ring-white focus:border-gray-200 sm:max-w-xs sm:text-sm border-gray-700 bg-dark rounded-md text-gray-200"
              value={storeUrl}
              onChange={(e) => setStoreUrl(e.target.value)}
            />
          </div>
        </div>

        {/*  UPLOAD FIELD */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5 text-gray-200">
          <label htmlFor="photo" className="block text-sm font-medium ">
            Logo
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2 flex">
            {logo && (
              <div>
                <Image
                  className="object-contain"
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
              onClick={clearAll}
            >
              Clear
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={submitNewBrand}
            >
              Add brand
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
