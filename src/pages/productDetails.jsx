import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../components/button'; // Adjust path if needed

function ProductDetails() {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3001/products/${id}`);
        if (!res.ok) {
          throw new Error('Product not found');
        }
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error('Error fetching product details:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No product found.</p>;

  return (
    <div style={styles.container}>
      <img
        src={product.image || 'placeholder.jpg'}
        alt={product.name}
        style={styles.image}
      />
      <h2>{product.name}</h2>
      <p><strong>Price:</strong> Ksh {product.price?.toLocaleString()}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Material:</strong> {product.material || 'N/A'}</p>
      <p><strong>Dimensions:</strong> {product.dimensions || 'N/A'}</p>
      <Button label="Add to Cart" onClick={() => alert('Added to cart!')} />
    </div>
  );
}

export default ProductDetails;

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: '0 auto',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '20px'
  }
};
