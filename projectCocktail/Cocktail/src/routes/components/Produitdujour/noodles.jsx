import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Dessertdujour() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/products')
      .then(response => {
        setProducts(response.data);
		console.log(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div id="tm-gallery-page-pizza" className="tm-gallery-page">
		{products.map(product => (
			<article key={product.id} className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
				<figure>
				<img src={product.image} alt={product.title} className="img-fluid tm-gallery-img" />
				<figcaption>
					<h4 className="tm-gallery-title">{product.title}</h4>
					<p className="tm-gallery-description">{product.description}</p>
					<p className="tm-gallery-price">${product.price}</p>
				</figcaption>
				</figure>
			</article>
		))}
    </div>
  );
}
