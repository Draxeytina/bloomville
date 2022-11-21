import React from 'react'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFirefox,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import img2 from '../assets/logitapfreight/img2.jpg';
import img3 from '../assets/logitapfreight/img3.jpg';
import img4 from '../assets/logitapfreight/img4.jpg';

function LogitapFreight() {
  return (
    <div>
      <div className="logitap-freight-wrap">
        <div className="carousel-container">
          <div className="social-icons">
            <a aria-label="Website" alt="website" href="https://www.logitapfreight.co.zw/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFirefox} className="icons" /></a>
            <a aria-label="Instagram" alt="instagram" href="https://www.instagram.com/logitapfreight/?hl=en" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="icons" /></a>
            <a aria-label="LinkedIn" alt="linkedin" href="https://www.linkedin.com/company/logitap-freight/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} className="icons" /></a>
            <a aria-label="Twitter" alt="twitter" href="https://twitter.com/logitap" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
          </div>
          <Carousel>
            <div>
              <img src={img4} alt="logitap freight" />
              <a href="/about">
                <p className="legend">Meet the team</p>
              </a>
            </div>
            <div>
              <img src={img2} alt="logitap freight" />
              <a href="#get-in-touch">
                <p className="legend">Engage us for a qoute</p>
              </a>
            </div>
            <div>
              <img src={img3} alt="logitap freight" />
              <a href="#logitap-services">
                <p className="legend">Our Services</p>
              </a>
            </div>
          </Carousel>
        </div>
        <div className="facebook-plugin">
          <iframe id="logitap-freight-fb" title="Facebook page" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100063650510304&tabs=timeline&width=340&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="auto" height="500" scrolling="no" frameBorder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" />
        </div>
      </div>
      <p className="description">
        Established in 2019, Logitap Freight Services (Pvt) Ltd has been offering topnotch
        freight forwarding and logistic services regionally and internationally.
      </p>
      <div>
        <h2 id="logitap-services">Services</h2>
      </div>
      <div>
        <h2>Testimonials</h2>
      </div>
    </div>
  );
}

export default LogitapFreight;
