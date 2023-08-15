import Noodles from "./noodles"
import Pizza from "./pizza"
import Salad from "./salad"
import { useState } from "react"


export default function ProductList(){
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
            <div className="tm-paging-links">
                <nav>
                    <ul>
                        <li className="tm-paging-item">
                        <a className={`tm-paging-link ${activeTab === 'pizza' ? 'active' : ''}`} onClick={() => handleTabChange('pizza')}>
                            Cocktail
                        </a>
                        </li>
                        <li className="tm-paging-item">
                        <a className={`tm-paging-link ${activeTab === 'salad' ? 'active' : ''}`} onClick={() => handleTabChange('salad')}>
                            Apéritif
                        </a>
                        </li>
                        <li className="tm-paging-item">
                        <a className={`tm-paging-link ${activeTab === 'noodles' ? 'active' : ''}`} onClick={() => handleTabChange('noodles')}>
                            Dessert
                        </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="row tm-gallery">{renderContent()}</div>
        </>
    )
}