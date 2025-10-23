import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/button";

const ProductDetails = () => {
  const { id } = useParams(); // get product ID from the URL
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);

  // Fetch product data by ID
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/products/${id}`);
        const data = await res.json();
        setProduct(data);

        // Optionally fetch related products
        const relatedRes = await fetch(`http://localhost:3000/products`);
        const relatedData = await relatedRes.json();
        const filtered = relatedData.filter((item) => item.id !== data.id);
        setRelated(filtered.slice(0, 3)); // show 3 related items
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchProduct();
  }, [id]);

  if (!product) return <p>Loading product details...</p>;

  return (
    <div className="p-6">
      {/* Product Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-auto rounded-2xl shadow-md"
        />

        <div>
          <h2 className="text-3xl font-bold mb-3">{product.name}</h2>
          <p className="text-gray-600 mb-4">{product.description}</p>

          <ul className="mb-4 text-sm text-gray-700">
            <li><strong>Material:</strong> {product.material}</li>
            <li><strong>Dimensions:</strong> {product.dimensions}</li>
          </ul>

          <p className="text-2xl font-semibold mb-4">Ksh {product.price}</p>

          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl transition">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4">Related Products</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((item) => (
              <div
                key={item.id}
                className="border rounded-xl p-3 hover:shadow-lg transition"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-cover rounded-lg mb-2"
                />
                <h4 className="font-medium">{item.name}</h4>
                <p className="text-sm text-gray-600">Ksh {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
