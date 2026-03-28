import { useEffect, useState } from "react";
import Slider from "../components/Slider";
import ProductCard from "../components/ProductCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();

  const fetchproducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    fetchproducts();
  }, [user]);

  return (
    <div>
      <Slider />

      <div className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Latest Products
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;