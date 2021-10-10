export default function FormHeader({ header, subheader }) {
  return (
    <div>
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5 text-gray-200">
        <div>
          <h3 className="text-lg leading-6 font-medium ">{header}</h3>
          <p className="mt-1 max-w-2xl text-sm">{subheader}</p>
        </div>
      </div>
    </div>
  );
}
