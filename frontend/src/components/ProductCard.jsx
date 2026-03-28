function ProductCard({ product }) {

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-4 group">

      <div className="h-48 flex items-center justify-center overflow-hidden">

        <img
          src={product.image}
          className="h-40 object-contain group-hover:scale-110 transition duration-300"
        />

      </div>

      <h3 className="mt-4 font-semibold text-gray-800 text-sm">
        {product.title.substring(0, 50)}
      </h3>

      <p className="text-blue-600 font-bold text-lg mt-2">
        ${product.price}
      </p>

      <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>

    </div>
  );
}

export default ProductCard;