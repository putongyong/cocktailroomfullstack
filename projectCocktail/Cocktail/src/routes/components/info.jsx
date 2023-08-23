import { NavLink } from "react-router-dom"

export default function Info(){
    return (
        <>	
			<div class="tm-section tm-container-inner-3">
				<div class="row">
					<div class="col-md-6">
						<figure class="tm-description-figure">
							<img src="/product_images/pexels-chan-walrus-941864_compressed.jpg" alt="Image" class="img-fluid" />
						</figure>
					</div>
					<div class="col-md-6">
						<div class="tm-description-box"> 
							<h4 class="tm-gallery-title"> Vers une expérience cocktail immersive...</h4>
							<p class="tm-mb-45">Bienvenue au Cocktail Room, votre passerelle vers une expérience cocktail immersive. Plongez dans notre monde où la mixologie est une passion et chaque gorgée raconte une histoire. Explorez nos recettes exquises, soigneusement élaborées pour éveiller vos sens.</p>
							<NavLink to="/apropos" class="tm-btn tm-btn-default tm-right">Read More</NavLink>
						</div>
					</div>
				</div>
        	</div>
			
		</>
    )
}