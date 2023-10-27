import react from 'react';
import success from "../../assets/paymentSuccess.png";
import "./Confirmation.scss"

const Confirmation = () => {
    return (
        <div className="container">

            <div className="icon">
             <img id='img1' src={success} alt="" />
            </div>

            <div className="text-main">
            <h1>ORDER PLACED</h1>
            </div>

            <div className="text-sec">
            <p>Thank You For Shopping With Us !!</p>
            </div>

       </div>
    );
};

export default Confirmation;