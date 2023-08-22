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
				<h2 class="col-12 text-center tm-section-title">Welcome to Cocktail Room</h2>
				<p class="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
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