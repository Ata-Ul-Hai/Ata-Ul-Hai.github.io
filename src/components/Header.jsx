/* ===========================================
   HEADER COMPONENT
   
   A simple navigation header with:
   - Logo/name on the left
   - Navigation links on the right
   
   Uses anchor links (#about, etc.) for smooth scrolling
   =========================================== */

/**
 * Header Component
 * 
 * This is a functional component - the simplest type in React.
 * It returns JSX (which looks like HTML) that describes what to render.
 */
function Header() {
    return (
        // The 'header' HTML tag is semantic - it tells browsers this is a header
        <header className="header">
            <div className="container header-content">

                {/* Logo/Name - clicking it scrolls to top */}
                <a href="#hero" className="logo">
                    Ata Ul Hai
                </a>

                {/* Navigation - using 'nav' tag for semantic HTML */}
                <nav>
                    {/* Using 'ul' (unordered list) for navigation links is a best practice */}
                    <ul className="nav-list">
                        <li>
                            <a href="#about" className="nav-link">About</a>
                        </li>
                        <li>
                            <a href="#projects" className="nav-link">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">Contact</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    );
}

// This line makes the component available to import in other files
export default Header;
