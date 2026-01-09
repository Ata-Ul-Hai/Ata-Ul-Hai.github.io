/* ===========================================
   FOOTER COMPONENT
   
   Simple footer with copyright text.
   Dynamically shows the current year.
   =========================================== */

/**
 * Footer Component
 * 
 * Uses JavaScript's Date() to get the current year.
 * This way, you never have to manually update it each year!
 */
function Footer() {
    // Get the current year (e.g., 2024)
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <p className="footer-text">
                    © {currentYear} Ata Ul Hai. Built with React.
                </p>
            </div>
        </footer>
    );
}

export default Footer;
