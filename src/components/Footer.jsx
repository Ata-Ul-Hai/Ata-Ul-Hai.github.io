function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">
          © {year} Ata Ul Hai - Designed & built from scratch.
        </p>
        <div className="footer-links">
          <a
            href="https://github.com/Ata-Ul-Hai/ataulhai.github.io"
            className="footer-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Source
          </a>
          <a href="#hero" className="footer-link">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
