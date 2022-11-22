import bgImg2 from '../Images/miscellaneous/2_corousel.png'
import data from '../Data/ProductData.json'

function loadProducts(id){
    return data[id]
}

function Store(){
    return (
        <div id = "storepage" className = "disgrid margin-top-m">
            <div className = "FILLER-DIV"></div>
            <div id = "sP-sectionOne" className = "sp-filters disgrid padding-small">
            <div id = "sP-accesories" className = "backdropGray margin-bottom-s disflex">
                <p className = "spheading font-sizesml-m">ACCESORIES</p>
                <li className = "font-sizesml disflex">
                <ul className = "margin-bottom-s margin-top-s"><p className = "ac-title">Apple Car</p><p className = "ac-num">2</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Air port & Wireless</p><p className = "ac-num">48</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cables and Docks</p><p className = "ac-num">14</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cases and Films</p><p className = "ac-num">15</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Charging Devices</p><p className = "ac-num">22</p></ul>
                {/* <ul className = "margin-bottom-s"><p className = "ac-title">Connected Home</p><p className = "ac-num">1</p></ul> */}
                {/* <ul className = "margin-bottom-s"><p className = "ac-title">Headphones</p><p className = "ac-num">99</p></ul> */}
                </li>
            </div>
            <div id = "sP-price" className = "backdropGray margin-bottom-s disflex">
                <div className = "slidecontainer disflex">
                <p className = "spheading font-sizesml-m">Price</p>
                <input type="range" min="1" max="100" value="50"/>
                </div>
            </div>
            <div id = "sP-color" className = "backdropGray margin-bottom-s">
                <p className = "spheading font-sizesml-m">COLOR</p>
                <li>
                <ul className = "co-outer margin-left-m"><div id = "red" className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "green"className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "blue" className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "gray" className = "co-inner disflex Vcenter"></div></ul>
                <ul className = "co-outer margin-left-m"><div id = "yellow" className = "co-inner disflex Vcenter"></div></ul>
                </li>
            </div>
            <div id = "sP-brand" className = "backdropGray margin-bottom-s">
            <p className = "spheading font-sizesml-m">BRANDS</p>
                <li className = "font-sizesml disflex">
                <ul className = "margin-bottom-s margin-top-s"><p className = "ac-title">Apple Car</p><p className = "ac-num">99</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Air port & Wireless</p><p className = "ac-num">99</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cables and Docks</p><p className = "ac-num">99</p></ul>
                <ul className = "margin-bottom-s"><p className = "ac-title">Cases and Films</p><p className = "ac-num">99</p></ul>
                </li>
            </div>
            </div>
            <div id = "sP-sectionTwo" className = "disgrid">
                <div id = "sP-sub-container" className = "disgrid">
                    <div id = "sP-sub-descr" className = "Vcenter">
                    <p className = "font-sizesml-m">iPhone 8</p>
                    <p className = "font-sizesml">Performance and design. Taken right to edge</p>
                    <a className = "font-sizesml" hred = "#">SHOP NOW</a>
                    </div>
                    <div id = "sP-sub-imgContainer">
                    <img src = {bgImg2}/>
                    </div>
                </div>

            <div id = "sP-sub-prodDisplay" className = "disflex Vcenter">
                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/MQHX2.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(0).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/71fwbMm1NBL._AC_SL1500_.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(1).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/415ELavtbuL._SL1000_.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(3).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/airpods-max-hero-select-202011_FMT_WHH.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(4).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>
                
                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/Apple Ipad.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(5).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/Apple iPhone 11.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(6).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/Apple Macbook Air.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(7).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

                <div className = "display-Box-store disgrid">
                    <div className = "display-image disflex Vcenter">
                    <img src = {require('../Images/Products/Apple Smartwatch Magic.png')}></img>
                    </div>
                    <div className = "display-title disflex Vcenter font-sizesml-m">{loadProducts(8).name}</div>
                    <div className = "display-pricebox disgrid">
                    <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                    <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                    </div>
                </div>

            </div>
            </div>
      </div>
    );
}

export default Store;