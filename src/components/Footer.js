import ContactForm from './ContactForm';

function Footer() {
  return (
    <footer className="footer-wrap">
      <div className="footer-subsidiaries-wrap">
        <h2>Subsidiaries</h2>
        <ul>
          <li>
            <a href="/subsidiaries/bloomville-consultancy">Bloomville Consultancy</a>
          </li>
          <li>
            <a href="/subsidiaries/logitap-freight">Logitap Freight Services</a>
          </li>
          <li>
            <a href="/subsidiaries/bloomville-media">Bloomville Media</a>
          </li>
          <li>
            <a href="/subsidiaries/mayville-brands">Mayville Brands</a>
          </li>
          <li>
            <a href="/subsidiaries/logitap-express">Logitap Express</a>
          </li>
        </ul>
        <small>
          ©2022. All rights reserved
          {' '}
          <a href="https://draxeytina.github.io/Portfolio-trial/" target="_blank" rel="noreferrer">| About the developer</a>
        </small>
      </div>
      <div className="footer-contactform-wrap">
        <ContactForm />
      </div>
    </footer>
  );
}

export default Footer;
