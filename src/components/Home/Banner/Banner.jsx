import "./Banner.scss";
import BannerImg from "../../../assets/jacket-banner.png";

const Banner = () => {
    return <div className="hero-banner">
        <div className="content">
            <div className="text-content">
                <h1>SALES</h1>
                <p>Elevate Your Game with Premium Sports Apparel! Discover Top-Quality Gear for Athletes. Unleash Your Potential in Style. Explore Our Latest Collection. Gear Up for Victory! Shop Now for Performance Excellence and Fashion Fusion. Your Winning Moment Awaits!
                </p>
                <div className="ctas">
                <div className="banner-cta">READ MORE</div>
                <div className="banner-cta v2">SHOP NOW</div>
                </div>
            </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>  
    </div>;
};

export default Banner;
