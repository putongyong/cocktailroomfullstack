import Footer from "./components/footer";
import Navbar from "./components/navbar";
import ProductList from "./components/productlist";
import Intro from "./components/intro";
import Info from "./components/info";

export default function Root() {
    return (
      <>
        <div class="container">
		<Navbar/>
		<main>
			<header class="row tm-welcome-section">
				<h2 class="col-12 text-center tm-section-title">Cocktail Room</h2>
				<p class="col-12 text-center">Plongez dans l'univers envoûtant du Cocktail Room, où les mélanges deviennent des œuvres d'art gustatives et les moments se transforment en souvenirs mémorables. Découvrez des recettes innovantes, vibrez au rythme des saveurs et laissez-vous emporter dans notre ambiance de bar virtuel, prélude à des soirées inoubliables.</p>
			</header>
			<Intro />
			<ProductList/>
			<Info/>
		</main>
		<Footer/>
		</div>
		
	
      </>
    );
  }