import Noodles from "./components/noodles";
import Salad from "./components/salad";
import Pizza from "./components/pizza";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import { useState } from "react"


export default function Ambiances(){
    const [activeTab, setActiveTab] = useState('pizza');

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'pizza':
                return <Pizza />;
            case 'salad':
                return <Salad />;
            case 'noodles':
                return <Noodles />;
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
						<h2 class="col-12 text-center tm-section-title">Ambiances</h2>
						<p class="col-12 text-center">Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p>
					</header>
					
					<div className="tm-paging-links">
						<nav>
							<ul>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'pizza' ? 'active' : ''}`} onClick={() => handleTabChange('pizza')}>
								Ambiance 1
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'salad' ? 'active' : ''}`} onClick={() => handleTabChange('salad')}>
								Ambiance 2
								</a>
								</li>
								<li className="tm-paging-item">
								<a className={`tm-paging-link ${activeTab === 'noodles' ? 'active' : ''}`} onClick={() => handleTabChange('noodles')}>
								Ambiance 3
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