import Footer from "./components/footer"
import Navbar from "./components/navbar"

export default function Apropos() {
    return (
      <>
      <div class="container">
		<Navbar/>
		<main>
			<header class="row tm-welcome-section">
				<h2 class="col-12 text-center tm-section-title">À propos du Cocktail Room</h2>
				<p class="col-12 text-center"> Que vous soyez un amateur curieux ou un connaisseur aguerri, notre site recrée l'atmosphère chaleureuse d'un bar animé, prêt à accueillir des rencontres inoubliables. Rejoignez-nous dans cette aventure gustative, où les frontières entre le réel et le virtuel s'estompent pour créer des moments conviviaux et raffinés.</p>
			</header>

			<div class="tm-container-inner tm-persons">
				<div class="row">
					<article class="col-lg-6">
						<figure class="tm-person">
							<img src="/product_images/about-01.jpg" alt="Image" class="img-fluid tm-person-img" />
							<figcaption class="tm-person-description">
								<h4 class="tm-person-name">Jennifer Soft</h4>
								<p class="tm-person-title">Founder and CEO</p>
								<p class="tm-person-about">Vivamus cursus leo nec sem feugiat sagittis.
								Duis ut feugiat odio, sit amet accumsan
								odio.</p>
								<div>
									<a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
									<a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
									<a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
								</div>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-6">
						<figure class="tm-person">
							<img src="/product_images/about-02.jpg" alt="Image" class="img-fluid tm-person-img" />
							<figcaption class="tm-person-description">
								<h4 class="tm-person-name">Daisy Walker</h4>
								<p class="tm-person-title">Executive Chef</p>
								<p class="tm-person-about">Praesent non vulputate elit. Orci varius
								natoque et magnis dis parturient, nascetur ridiculus mus.</p>
								<div>
									<a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
									<a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
								</div>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-6">
						<figure class="tm-person">
							<img src="/product_images/about-03.jpg" alt="Image" class="img-fluid tm-person-img" />
							<figcaption class="tm-person-description">
								<h4 class="tm-person-name">Florence Nelson</h4>
								<p class="tm-person-title">Kitchen Manager</p>
								<p class="tm-person-about">Aenean sapien sem, ultricies sed vulputate
								et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.</p>
								<div>
									<a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
									<a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
								</div>
							</figcaption>
						</figure>
					</article>
					<article class="col-lg-6">
						<figure class="tm-person">
							<img src="/product_images/about-04.jpg" alt="Image" class="img-fluid tm-person-img" />
							<figcaption class="tm-person-description">
								<h4 class="tm-person-name">Valentina Martin</h4>
								<p class="tm-person-title">Culinary Director</p>
								<p class="tm-person-about">Praesent non vulputate elit. Orci varius
								natoque penatibus et magnis montes, nascetur ridiculus mus.</p>
								<div>
									<a href="https://fb.com" class="tm-social-link"><i class="fab fa-facebook tm-social-icon"></i></a>
									<a href="https://twitter.com" class="tm-social-link"><i class="fab fa-twitter tm-social-icon"></i></a>
									<a href="https://instagram.com" class="tm-social-link"><i class="fab fa-instagram tm-social-icon"></i></a>
									<a href="https://youtube.com" class="tm-social-link"><i class="fab fa-youtube tm-social-icon"></i></a>
								</div>
							</figcaption>
						</figure>
					</article>
				</div>
			</div>
			<div class="tm-container-inner tm-featured-image">
				<div class="row">
					<div class="col-12">
						<div class="placeholder-2">		
						</div>
					</div>
				</div>
			</div>
			<div class="tm-container-inner tm-features">
				<div class="row">
					<div class="col-lg-4">
						<div class="tm-feature">
							<i class="fas fa-4x fa-pepper-hot tm-feature-icon"></i>
							<p class="tm-feature-description">Donec sed orci fermentum, convallis lacus id, tempus elit. Sed eu neque accumsan, porttitor arcu a, interdum est. Donec in risus eu ante.</p>
							<a href="index.html" class="tm-btn tm-btn-primary">Read More</a>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="tm-feature">
							<i class="fas fa-4x fa-seedling tm-feature-icon"></i>
							<p class="tm-feature-description">Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit. Nam sed suscipit odio. Morbi in dolor finibus, consequat nisl eget.</p>
							<a href="index.html" class="tm-btn tm-btn-success">Read More</a>
						</div>
					</div>
					<div class="col-lg-4">
						<div class="tm-feature">
							<i class="fas fa-4x fa-cocktail tm-feature-icon"></i>
							<p class="tm-feature-description">Morbi in dolor finibus, consequat nisl eget, pretium nunc. Maecenas pretium rutrum molestie. Duis dignissim egestas turpis sit.</p>
							<a href="index.html" class="tm-btn tm-btn-danger">Read More</a>
						</div>
					</div>
				</div>
			</div>
			<div class="tm-container-inner tm-history">
				<div class="row">
					<div class="col-12">
						<div class="tm-history-inner">
							<img src="/product_images/about-06.jpg" alt="Image" class="img-fluid tm-history-img" />
							<div class="tm-history-text"> 
								<h4 class="tm-history-title">Histoire de Cocktail Room</h4>
								<p class="tm-mb-p">L'aventure de Cocktail Room a débuté dans le désir de capturer l'essence des bars accueillants où les âmes se croisent et les conversations coulent à flot. Depuis notre lancement, nous nous efforçons de partager l'art de la mixologie à travers des recettes uniques et des présentations élégantes. De modestes débuts en ligne à notre vision actuelle d'offrir également des coffrets de cocktails raffinés, nous avons évolué tout en préservant l'esprit d'une soirée au bar.</p>
							</div>
						</div>	
					</div>
				</div>
			</div>
		</main>

		<Footer/>
	</div>
      </>
    )
}