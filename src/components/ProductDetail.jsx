import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.body}</p>
    </div>
  );
};

export default ProductDetail;
