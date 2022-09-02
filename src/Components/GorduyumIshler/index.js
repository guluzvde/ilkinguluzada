import Ishler from "./ishler";
import Falkon from "../../logos/falkon.jpg"
import Zulfiyya from "../../logos/zulfiyya.jpg"
import Sena from "../../logos/sena.jpg"
import Colins from "../../logos/colins.jpg"
import Tiffany from "../../logos/tiffany.jpg"
import Sephora from "../../logos/sephora.jpg"
import "./GorduyumIshler.scss"
function GorduyumIshler() {
    return ( 
        <>
        <div id="portfolio">
            <div className="portfolio-group">
                <h1>Gördüyüm İşlər</h1>
                <div className="ish">

                <a href="https://www.zulfiyya.com" target="_blank" rel="noopener noreferrer"><Ishler src={Zulfiyya} ad="Zülfiyyə Xanbabayeva - Rəsmi sayt (2020)"/></a>
                <a href="https://www.falkon.az" target="_blank" rel="noopener noreferrer"><Ishler src={Falkon} ad="Falkon - Karqo şirkəti (2021)"/></a>
                <a href="https://sena.az/" target="_blank" rel="noopener noreferrer"><Ishler src={Sena} ad="Sena - Domen alınması (2022)"/></a>
                <a href="https://www.colins.com.tr" target="_blank" rel="noopener noreferrer"><Ishler src={Colins} ad="Colins - Türkiyənin geyim brendi (2022)"/></a>
                <a href="https://www.tiffany.com/" target="_blank" rel="noopener noreferrer"><Ishler src={Tiffany} ad="Tiifany & Co - Aksesuarlar (2022)"/></a>
                <a href="https://www.sephora.com/" target="_blank" rel="noopener noreferrer"><Ishler src={Sephora} ad="Sephora - Makiyaj məhsulları (2022)"/></a>
                </div>
            </div>
        </div>
        </>
     );
}

export default GorduyumIshler;