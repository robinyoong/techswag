import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import Dropdown from '../components/Dropdown';
import FormHeader from '../components/FormHeader';
import { supabase } from '../utils/supabaseClient';

export default function AddBrand({ brands, categories }) {
  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [productName, setProductName] = useState('');
  const [productUrl, setProductUrl] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const uploadImagePickerRef = useRef(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };

  console.log(imageFile);

  const submitNewProduct = async (e) => {
    e.preventDefault();
    if (
      !selectedBrand ||
      !selectedCategory ||
      !productName ||
      !productUrl ||
      !imageFile
    )
      return;

    console.log('checkpoint');

    // UPLOAD PRODUCT IMAGE TO STORAGE
    const fileNameAndExt = imageFile.name.split('.');
    const fileExt = fileNameAndExt[1];
    const fileName = `${fileNameAndExt[0]}-${Math.random() * 10}.${fileExt}`;
    const filePath = `${fileName}`;

    const { data: imageData, error } = await supabase.storage
      .from('swag')
      .upload(filePath, imageFile);

    if (error) {
      console.log('Something went wrong with the image upload', error);
    }

    const { publicURL, error: publicUrlError } = supabase.storage
      .from('swag')
      .getPublicUrl(filePath);

    // SUBMIT PRODUCT TO SUPABASE
    const { data: productSubmission, error: productSubmissionError } =
      await supabase.from('products').insert([
        {
          name: productName,
          brand_id: selectedBrand.id,
          category: selectedCategory.slug,
          url: productUrl,
          image: publicURL,
        },
      ]);
    if (productSubmissionError) {
      console.log(productSubmissionError);
    }

    clearAll();

    console.log('submitted product', productSubmission);
  };

  useEffect(() => {
    console.log('selectedBrand', selectedBrand);
    console.log('selectedCategory', selectedCategory);
  }, [selectedBrand, selectedCategory]);

  useEffect(() => {
    console.log(image);
  }, [image]);

  const clearAll = () => {
    setSelectedBrand(null);
    setProductName('');
    setProductUrl('');
    setImage(null);
  };

  const handleBrandChange = (value) => {
    setSelectedBrand(value);
  };

  const handleCategoryChange = (value) => {
    setSelectedCategory(value);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 ">
      <form className="space-y-8 divide-y divide-gray-200">
        <FormHeader
          header="New Product"
          subheader="Add a new product to the database"
        />
        <Dropdown
          label="Category"
          list={categories}
          handler={handleCategoryChange}
        />
        <Dropdown
          label="Brand name"
          list={brands}
          handler={handleBrandChange}
        />

        {/* PRODUCT NAME */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="product-name"
            className="block text-sm font-medium text-gray-200 sm:mt-px pt-2"
          >
            Product Name
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="product-name"
              id="product-name"
              autoComplete="product-name"
              className="max-w-lg block w-full shadow-sm focus:ring-white focus:border-gray-200 sm:max-w-xs sm:text-sm border-gray-700 bg-dark rounded-md text-gray-200"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
        </div>

        {/* PRODUCT URL */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
          <label
            htmlFor="product-url"
            className="block text-sm font-medium text-gray-200 sm:mt-px pt-2"
          >
            Product URL
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2">
            <input
              type="text"
              name="product-url"
              id="product-url"
              autoComplete="product-name"
              className="max-w-lg block w-full shadow-sm focus:ring-white focus:border-gray-200 sm:max-w-xs sm:text-sm border-gray-700 bg-dark rounded-md text-gray-200"
              value={productUrl}
              onChange={(e) => setProductUrl(e.target.value)}
            />
          </div>
        </div>

        {/*  UPLOAD IMAGE FIELD */}
        <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-center sm:border-t sm:border-gray-200 sm:pt-5 text-gray-200">
          <label htmlFor="photo" className="block text-sm font-medium ">
            Product Image
          </label>
          <div className="mt-1 sm:mt-0 sm:col-span-2 flex">
            {image && (
              <div>
                <Image
                  className="object-cover"
                  src={image}
                  alt="Product Image"
                  width="300"
                  height="300"
                />
              </div>
            )}
            <div className="flex items-center">
              <div
                onClick={() => uploadImagePickerRef.current.click()}
                className="cursor-pointer ml-5 bg-dark py-2 px-3 border border-gray-200 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-200 hover:text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:white"
              >
                <p>Upload</p>
                <input
                  type="file"
                  ref={uploadImagePickerRef}
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
              className=" py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-200 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
              onClick={clearAll}
            >
              Clear
            </button>
            <button
              type="submit"
              className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-800 bg-gray-200 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-600"
              onClick={submitNewProduct}
            >
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
