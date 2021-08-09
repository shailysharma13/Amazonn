import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faBars, faUser, faChevronRight, faSearch } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react'
import PropTypes from 'prop-types'

/**
* @author
* @class App
**/
//we are using class component
class App extends Component {
  //1.properties

  state = {
    x: ' l934 ',
    y:'',
    z:'',
  }
  //2.constructor

  constructor(props) {
    super(props); //
  }
  //3.method 
  componentDidMount() {

  }
  closemodel = () => {
    this.setState({ x: 'l934' });
    return false;
  }
  handlemodal = () => {
    this.setState({ x: ' l433' });
  }
  formHandle=()=>{
    this.setState({z:'formborder'})
  }
  //always remember to create only fatarrow functions
  //handlescroll = () => {
  //console.log('okok' + window.scrollY);
  //if scroll amount is greater than 80px then we will fix the header top
  //if (window.scrollY >= 60) {
  //we will add 'position-fixed start-0 top-0'
  // this.setState({ x: ' position-fixed start-0 top-0' });
  // } else {
  // we will remove 'position-fixed start-0 top-0' this value
  // this.setState({ x: ' ' });
  // }
  //}
  //componentDidMount() {
  //this method will be called when page or component will rendered
  //alert('page is loaded');
  //console.log('page is loaded');
  //window.addEventListener('scroll', this.handlescroll)
  // }
  render() {
    return (
      <div >
        <div className="modal " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className={'modal-dialog modal-dialog-scrollable ' + this.state.x}>
            <div className="modal-content">
              <div className="modal-header text-white mhcolor">
                <h5 className="modal-title" id="staticBackdropLabel"> <FontAwesomeIcon icon={faUser} />Hello, Sign in</h5>
                <button onClick={this.closemodel} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body ps-0 pe-0 pt-2 pb-2 ">
                <h5 className="fw-bolder ps-4"> Trending</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Best Seller </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">New Release</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Movies and Shakers</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4"> Digital Content &amp; Devices </h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Echo &amp; Alexa <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Fire TV <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Kindle Ebooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Audible Audiobooks <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Audible Prime Video <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Audible Prime Music <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4"> Shop By Department</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Mobiles &amp; Computers <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"> TV, Appliances, Electronics <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Men's Fashion <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link " href="#" tabindex="-1" aria-disabled="true">Women's Fashion <FontAwesomeIcon className="float-end" icon={faChevronRight} /></a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4">Help and Settings </h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Your Account </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"> Customer Service </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Sign in</a>
                  </li>
                </ul>
                <h5 className="fw-bolder ps-4"> Programs &amp; Features</h5>
                <ul className="nav flex-column border-bottom pt-1 mb-2 mhul">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Gift Cards &amp; Mobile Recharges<FontAwesomeIcon className="float-end" icon={faChevronRight} /> </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Flight Ticket </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#"> Amazon Assistantance </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">Full Store Directory</a>
                  </li>
                </ul>
                <p>This is some placeholder content to show the scrolling behavior for modals. We use repeated line breaks to demonstrate how content can exceed minimum inner height, thereby showing inner scrolling. When content becomes longer than the prefedined max-height of modal, content will be cropped and scrollable within the modal.</p>
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                <p>This content should appear at the bottom after you scroll.</p>
              </div>
              <div className=" ">

              </div>
            </div>
          </div>
        </div>
        <header>
          <div className='s_header_top p-1  ' >
            <button className=" me-1 btn  h-100" style={{ 'width': '10%' }}>
              <img className="img-fluid" src="./logo2.png" />
            </button>
            <button className="lh-1 text-white fs-6 me-1 btn  h-100" style={{ 'width': '10%' }}>
              Deliver to shaily
              <FontAwesomeIcon icon={faMapMarkerAlt} />
              <span className="fw-bold d-block"><span className="s_city">Neemuch</span><span className="s_pin">458441</span></span>
            </button>
            <form className={'bg-white hform w-50 d-inline-block h-75' +this.state.z} >
              <div className="row m-0">
                <div className="col-1 p-0 tbdr">
                  <div className="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" className="btn btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      All
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="btnGroupDrop1">
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                      <li><a className="dropdown-item" href="#">Dropdown link</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-10 p-0 tbdr">
                      <input onFocus={this.formHandle} className="form-control rounded-0"/>

                </div>
                <div className="col-1 tbdr p-0">
                  <div class="d-grid gap-2">

                  </div>
                  <button className="btn btn-warning " type="submit"><FontAwesomeIcon icon={faSearch} /></button>
                </div>

              </div>
            </form>
            <button className=" btn h-100" style={{ 'width': '6%' }}>D</button>
            <button className=" btn h-100" style={{ 'width': '8%' }}>E</button>
            <button className=" btn h-100" style={{ 'width': '10%' }}>F</button>
            </div>

          <div className="s_header_bottom">
            <ul className="ms-3 mt-1 nav float-start">
              <li className="nav-item">
                <a onClick={this.handlemodal} data-bs-toggle="modal" data-bs-target="#staticBackdrop" className="nav-link " aria-current="page" href="#"><FontAwesomeIcon className="fs-5" icon={faBars} />All</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Best Seller</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Mobiles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Electronics</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Fashion</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >New release</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Customer Service</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Amazon Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#">Computers</a>
              </li>
            </ul>
            <a className="p-0 m-0 hbanner float-end">
              <img src="./images/hbanner.jpg" />
            </a>
            <ul className="nav float-start d-none">
              <li className="nav-item">
                <a className="nav-link " href="#" > Home &amp; kitchens</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Today's deal</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Toys &amp; Games</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Books</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Sell</a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#" >Coupons</a>
              </li>

            </ul>
          </div>
        </header>
        <div className="s_main position-relative ">
          <div className="s_main1 s_main_top">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./images/slider/1.jpg" className="d-block h-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/2.jpg" className="d-block h-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/3.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/4.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/5.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/6.jpg" className="d-block " alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="./images/slider/7.jpg" className="d-block " alt="..." />
                </div>
              </div>
              <button className="carousel-control-prev  h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next  h-50" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className=" ml-1 position-absolute  s_main_bottom  ">
            <div className="s_main_bottom_1 row m-0 mb-3">
              <div className="col">
              </div>
              <div className="col">B</div>
              <div className="col">C</div>
              <div className="col">D</div>

            </div>
            <div className="s_main_bottom_2 row m-0 mb-3">
              <div className="col-6">A</div>
              <div className="col-3">B</div>
              <div className="col-3">C</div>

            </div>
            <div className="s_main_bottom_3 p-3">
              <div className="">
                <h3 className="float-start">Today's Deals</h3><button type="button " className=" float-start btn btn-link">See all Deals</button>
              </div>
              <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner text-center">
                  <div className="carousel-item active">
                    <div className="imgCont row">
                      <div className="col">1</div>
                      <div className="col">2</div>
                      <div className="col">3</div>
                      <div className="col">4</div>
                      <div className="col">5</div>
                      <div className="col">6</div>

                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">7</div>
                      <div className="col">8</div>
                      <div className="col">9</div>
                      <div className="col">10</div>
                      <div className="col">11</div>
                      <div className="col">12</div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="imgCont row">
                      <div className="col">13</div>
                      <div className="col">14</div>
                      <div className="col">15</div>
                      <div className="col">16</div>
                      <div className="col">17</div>
                      <div className="col">18</div>
                    </div>
                  </div>
                </div>
                <button className=" s_cc carousel-control-prev" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon bg-dark text-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="s_cc carousel-control-next" type="button" data-bs-target="#carouselExampleControls2" data-bs-slide="next">
                  <span className="carousel-control-next-icon bg-dark text-dark" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>

            </div>
          </div>
        </div>
        <footer></footer>

      </div>
    )
  }
}


App.propTypes = {}
export default App





