import bgImg1 from '../Images/miscellaneous/corousel_3.png'
import bgImg2 from '../Images/miscellaneous/2_corousel.png'
import refund from '../Images/Web/refund.svg'
import support from '../Images/Web/support.svg'
import shipping from '../Images/Web/shipping.svg'

import imagee from '../Images/Products/apple_airpods.png'

import data from '../Data/ProductData.json'


function loadProducts(id){
  return data[id]
}

function Home(){
    return (
        <div id = "homePage" className = "disgrid">
        <div id = "hp-sectionOne" className = "div-verSpacing">
          <img src = {bgImg1} alt = "BackgroundImage 1"/>
        </div>

        <div id = "hp-sectionTwo" className = "disgrid div-verSpacing">
          <div id = "bestSellers" className = "disflex Vcenter font-sizebig-n">BEST SELLER</div>
          <div id = "prod-container" className = "disgrid">
            <div className = "FILLER-DIV"></div>
            <div id = "bS-Display" className = "disflex Vcenter">
              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/MQHX2.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(0).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/71fwbMm1NBL._AC_SL1500_.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(1).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/415ELavtbuL._SL1000_.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(3).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/airpods-max-hero-select-202011_FMT_WHH.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(4).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>
              
              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/Apple Ipad.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(5).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/Apple iPhone 11.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(6).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/Apple Macbook Air.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(7).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              <div className = "display-Box disgrid">
                <div className = "display-image disflex Vcenter">
                  <img src = {require('../Images/Products/Apple Smartwatch Magic.png')}></img>
                </div>
                <div className = "display-title disflex Vcenter font-sizesml-n">{loadProducts(8).name}</div>
                <div className = "display-pricebox disgrid">
                  <div className = "display-price disflex Vcenter font-sizesml-n">{loadProducts(0).price}</div>
                  <div className = "display-depcrated-price disflex Vcenter font-sizesml-n">{loadProducts(0).deprecatedPrice}</div>
                </div>
              </div>

              
            </div>
            <div className = "FILLER-DIV"></div>
          </div>
        </div>

        <div id = "hp-sectionThree" className = "div-verSpacing disgrid">
          <div className = "FILLER-DIV"></div>
          <div id = "hp-sub-container" className = "disgrid">
            <div id = "hp-sub-descr" className = "Vcenter">
              <p className = "font-sizebig">iPhone 6 Plus</p>
              <p className = "font-sizesml-m">Performance and design. Taken right to edge</p>
              <a className = "font-sizesml" hred = "#">SHOP NOW</a>
            </div>
            <div id = "hp-sub-imgContainer">
              <img src = {bgImg2}/>
            </div>
          </div>
        </div>

        <div id = "hp-sectionFour" className = "div-verSpacing disgrid">
          <div id = "hp-sf-container" className = "disgrid">
            
            <div id = "hp-shipping" className = "disgrid detailsCard">
              <div className = "hp-sf-imgcontainer disflex Vcenter">
                <img src = {shipping}/>
              </div>
              <p className = "disflex Vcenter font-sizemed sf-title">FREE SHIPPING</p>
              <p className = "disflex  font-sizesml sf-content"> Lorem ipsum dolor sit ament, consectetur adipisicing elit, des do eiusmond tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>

            <div id = "hp-refund" className = "disgrid detailsCard">
              <div className = "hp-sf-imgcontainer disflex Vcenter">
                <img src = {refund}/>
              </div>
              <p className = "disflex Vcenter font-sizemed sf-title">100% REFUND</p>
              <p className = "disflex  font-sizesml sf-content"> Lorem ipsum dolor sit ament, consectetur adipisicing elit, des do eiusmond tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>

            <div id = "hp=support" className = "disgrid detailsCard">
              <div className = "hp-sf-imgcontainer disflex Vcenter">
                <img src = {support}/>
              </div>
              <p className = "disflex Vcenter font-sizemed sf-title">24/7 SUPPORT</p>
              <p className = "disflex  font-sizesml sf-content"> Lorem ipsum dolor sit ament, consectetur adipisicing elit, des do eiusmond tempor minim veniam, quis nostrud reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
            </div>

          </div>
        </div>
      
        {/* <div id = "hp-sectionFive" className = "div-verSpacing">3</div> */}
      </div>
    );
};

export default Home;