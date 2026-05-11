import { CDN_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={CDN_URL} alt="Food company" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;