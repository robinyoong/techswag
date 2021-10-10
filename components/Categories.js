import CategoryCard from './CategoryCard';

export default function Category({ categories }) {
  const sortedCategories = categories.sort((a, b) => a.id - b.id);

  return (
    <div className="px-4 pb-8 max-w-7xl mx-auto">
      {/* ROW 1 */}
      <div className="max-w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        <div>
          <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
            No queues. <br /> Just stacks of the best tech swag, compiled for
            you one commit at a time.
          </h3>
        </div>
        {sortedCategories.slice(0, 3).map((category, index) => (
          <CategoryCard
            category={category}
            index={index}
            key={`${category.name}-${index}`}
          />
        ))}
      </div>

      {/* ROW 2 */}
      <div className="max-w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {sortedCategories.slice(3, 7).map((category, index) => (
          <CategoryCard
            category={category}
            index={index}
            key={`${category.name}-${index}`}
          />
        ))}
      </div>

      {/* ROW 2 */}
      <div className="max-w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {sortedCategories.slice(7, 10).map((category, index) => (
          <CategoryCard
            category={category}
            index={index}
            key={`${category.name}-${index}`}
          />
        ))}
        <div className="flex items-center">
          <h3 className="text-4xl font-bold text-transparent text-right bg-clip-text bg-gradient-to-r from-yellow-300 to-red-500">
            More categories and brands coming up.
          </h3>
        </div>
      </div>
    </div>
  );
}
