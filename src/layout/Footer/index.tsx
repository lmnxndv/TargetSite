
import footerData from '../../data/FooterData';
import './style.css'

const Footer= () => {
  return (
    <div className='footer-container'>
     <div className="footer-section">
     {footerData.sections.map((section) => (
        <div key={section.title} className="footer-details">
          <h3>{section.title}</h3>
          <ul>
            {section.links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
     </div>
      <div className="footer-picture">
        <img src="https://target.scene7.com/is/content/Target/GUEST_ca8f1d56-9000-4407-be78-2c33be983dab" alt="" />
      </div>
    </div>
  );
};

export default Footer;
