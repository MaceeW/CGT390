import "../styles/Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar section">
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#about">About</a>
                </li>
                <li>
                    <a href="#profiles">Profiles</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;