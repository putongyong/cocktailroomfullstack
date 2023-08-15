import axios from 'axios';
import { useEffect } from 'react';
export default function Testing(){

	useEffect(() => {
		axios.get('http://127.0.0.1:8000/api/products')
		  .then(response => {
			console.log(response.data);
		  })
		  .catch(error => {
			console.error('Error fetching data:', error);
		  });
	  }, []);

    return(
        <>
            <p>Testing Begins:</p>
				<div id="tm-gallery-page-pizza" class="tm-gallery-page">
					<article class="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
						<figure>
							<img src="/img/gallery/alexandra-golovac-kP8QyKwd1r0-unsplash.jpg" alt="Image" class="img-fluid tm-gallery-img" />
							<figcaption>
								<h4 class="tm-gallery-title">Fusce dictum finibus</h4>
								<p class="tm-gallery-description">Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan</p>
								<p class="tm-gallery-price">$45 / $55</p>
							</figcaption>
						</figure>
					</article>
				</div>
            <p>Testing Ends</p>
        </>
    )
}