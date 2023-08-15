import AvecAlcool from "./components/Cocktail/avec_alcool";
import SansAlcool from "./components/Cocktail/sans_alcool";
import Ete from "./components/Cocktail/ete";
import Sante from "./components/Cocktail/cocktail_sante";
import Exotique from "./components/Cocktail/exotique";
import Noel from "./components/Cocktail/noel";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useState } from "react"


export default function Cocktails(){
    const [activeTab, setActiveTab] = useState('avecalcool');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'avecalcool':
                return <AvecAlcool />;
            case 'sansalcool':
                return <SansAlcool />;
            case 'ete':
                return <Ete />;
			case 'sante':
                return <Sante />;
            case 'noel':
                return <Noel />;
            case 'exotique':
                return <Exotique />;
            default:
                return null;
        }
    };

    return(
        <>
			<div class="container">
				<Navbar/>
				<main>
					<header class="row tm-welcome-section">
						<h2 class="col-12 text-center tm-section-title">Cocktails</h2>
						<p class="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
					</header>
					
					<div className="tm-paging-links">
						<nav>
							<ul>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'avecalcool' ? 'active' : ''}`} onClick={() => handleTabChange('avecalcool')}>
								Avec Alcool
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'sansalcool' ? 'active' : ''}`} onClick={() => handleTabChange('sansalcool')}>
								Sans Alcool
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'ete' ? 'active' : ''}`} onClick={() => handleTabChange('ete')}>
								Été
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'noel' ? 'active' : ''}`} onClick={() => handleTabChange('noel')}>
								Noël
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'sante' ? 'active' : ''}`} onClick={() => handleTabChange('sante')}>
								Santé
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'exotique' ? 'active' : ''}`} onClick={() => handleTabChange('exotique')}>
								Exotique
								</a>
								</li>
							</ul>
						</nav>
					</div>
					<div class="row tm-gallery">{renderContent()}</div>
				</main>
				<Footer/>
			</div>
        </>
    )
}