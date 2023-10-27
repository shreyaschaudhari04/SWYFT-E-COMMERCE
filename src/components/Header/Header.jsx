import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TbSearch } from "react-icons/tb";
import { CgShoppingCart } from "react-icons/cg";
import { AiOutlineHeart } from "react-icons/ai";
import Search from "./Search/Search";
import Cart from "../Cart/Cart";
import { Context } from "../../utils/context";
import { useAuth0 } from "@auth0/auth0-react";
import "./Header.scss";

const Header = () => {
    const { loginWithRedirect, isAuthenticated, user } = useAuth0();
    const { logout } = useAuth0();
    const[scrolled, setScrolled] = useState(false);
    const[showCart, setShowCart] = useState(false);
    const[showSearch, setShowSearch] = useState(false);
    const {cartCount} = useContext(Context);
    const navigate = useNavigate();
    const handleScroll = () => {
        const offset = window.scrollY;
        if(offset>200){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    };

    useEffect( () => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
        <header className={`main-header ${scrolled ? 'sticky-header' : ""}`} > 
        <div className="header-content">
            <ul className="left">
                <li onClick={() => navigate("/")}>Home</li>
                <li>About</li>
                <li>Categories</li>
                <li>About Us</li>
                <li>Contact Us</li>
            </ul>
            <div className="center" onClick={() => navigate("/")}>SWYFT</div>
            <div className="right">
            {isAuthenticated && <p className="usr" >{user.name}</p> }

            <div className="login-elem">     
            {
               isAuthenticated ? <button className="login-btn" onClick={() =>{ alert("You have been Logged Out.."); logout({ logoutParams: { returnTo: window.location.origin } })}}>
               Log Out
           </button>
                : <button className="login-btn" onClick={() => loginWithRedirect()}>Log In</button>
            }
            </div>
           
             <TbSearch onClick={()=> setShowSearch(true)} />
            
            <AiOutlineHeart />
            <span className="cart-icon" onClick={()=> setShowCart(true)}>
                <CgShoppingCart />
                {!! cartCount &&<span>{cartCount}</span>}
            </span> 
            </div>
        </div>
    </header>
        {showCart && <Cart setShowCart={setShowCart} />}
        {showSearch && <Search setShowSearch={setShowSearch} />}
    </>
    );
};

export default Header;
