import ProductCard from './ProductCard';

export default function ProductsWrapper({ products }) {
  return (
    <div className="max-w-7xl mx-auto py-4 md:py-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {products?.map((product) => (
          <ProductCard
            key={`${product.category}=${product.id}`}
            product={product}
          />
        ))}
      </div>
    </div>
  );
}
