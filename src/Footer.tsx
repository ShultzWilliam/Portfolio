import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import "./Footer.css";

function Footer() {
    const emailAddress = 'william.shultz2017@gmail.com';
    const subject = 'Email From Portfolio Site';
    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}`;


    return (
      <>
        <section id="footer-container" className=" bg-gray-100 h-fit p-10 font-roboto">
          <h2 className="about-me-header text-gray-900 font-roboto text-3xl lg:text-3xl text-center">
              Contact Me
          </h2>
          <div className="button-list flex justify-center gap-2 lg:gap-x-20 mr-auto ml-auto mt-5 flex-wrap">
            <a target="_blank" href="https://github.com/ShultzWilliam" className="contact-link bg-gray-200  text-gray-900  p-2  px-5 lg:w-32 w-max hover:bg-orange-500 transition-all text-center">
              <FontAwesomeIcon icon={faGithub} /> GitHub
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/wilshultz/" className=" contact-link bg-gray-200 text-gray-900  p-2  px-5 lg:w-32 w-max2 hover:bg-orange-500 transition-all text-center">
              <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
          </div>
        </section>
      </>
    );
  }
  
  export default Footer;
  