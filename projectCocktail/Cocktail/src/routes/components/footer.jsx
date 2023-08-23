export default function Footer(){
    return (
        <>
        <div class="footer-dark">
        <footer>
            <div className="footer-container" >
                <div class="row">
                    <div class="col-sm-6 col-md-4 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Recettes</a></li>
                            <li><a href="#">Développment</a></li>
                            <li><a href="#">Réunions</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-4 item">
                        <h3>À propos</h3>
                        <ul>
                            <li><a href="#">Groupe</a></li>
                            <li><a href="#">Équipe</a></li>
                            <li><a href="#">Carrière</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4 item text">
                        <h3>Notre communauté</h3>
                        <p>Joignez-vous à nous pour célébrer les plaisirs des cocktails et pour écrire ensemble les prochains chapitres de notre histoire.</p>
                    </div>
                    <div class="col item social"><a href="#"><i class="icon ion-social-facebook"></i></a><a href="#"><i class="icon ion-social-twitter"></i></a><a href="#"><i class="icon ion-social-snapchat"></i></a><a href="#"><i class="icon ion-social-instagram"></i></a></div>
                </div>
                <p class="copyright">Cocktail Room © 2023</p>
            </div>
        </footer>
    </div>
   
        </>
    )
}