export default function TextInputField({ label }) {
  return (
    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
      <label
        htmlFor="first-name"
        className="block text-sm font-medium text-gray-200 sm:mt-px sm:pt-2"
      >
        {label}
      </label>
      <div className="mt-1 sm:mt-0 sm:col-span-2">
        <input
          type="text"
          name="brand-name"
          id="brand-name"
          autoComplete="brand-name"
          className="max-w-lg block w-full shadow-sm focus:ring-white focus:border-gray-200 sm:max-w-xs sm:text-sm border-gray-700 bg-dark rounded-md text-gray-200"
        />
      </div>
    </div>
  );
}
