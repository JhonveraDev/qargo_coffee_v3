import { socialNetworks, footerLegalLinks } from './data/footer.data';

export const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer-title">Follow us</p>

      <div className="footer-container">
        <div className="social-networks">
          {socialNetworks.map(({ name, icon, url }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={name}
            >
              <img src={icon} alt={name} />
            </a>
          ))}
        </div>

        {footerLegalLinks.map(({ name, url }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
          >
            {name}
          </a>
        ))}
      </div>
    </footer>
  );
};
