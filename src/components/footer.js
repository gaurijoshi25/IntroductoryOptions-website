import React from "react";
import 'tailwindcss/tailwind.css';
import './footer.css'

const Footer = () => {
    return(
        <div style={{ backgroundColor: '#001219', color: '#f2f2f2',height:'80vh' }} className="w-full flex flex-col justify-center">
            <div className="flex justify-center flex-col font-link">
                <div className="flex text-6xl justify-center items-center text-center	font-link mb-10 break-normal">Let's learn together...</div>
                <div className="flex justify-center font-link mb-10 text-xl">Connect with us!</div>
            </div>
            <div className="flex justify-center contacts">       
                <a href="https://fb.me/financeclubiitg/" style={{color: '#ffffff'}} className="font-brick mr-4 contact-details">
                    <i className="fa fa-facebook"></i> Facebook</a>
                <a href="https://www.linkedin.com/company/finance-and-economics-club-iitg/" className="font-brick mr-4 contact-details" style={{color: '#ffffff'}}><i
                    className="fa fa-linkedin"></i> Linkedin</a>
                <a href="https://www.instagram.com/fec_iitg/" className="btn contact-details mr-4" style={{color: '#ffffff'}}><i
                    className="fa fa-instagram"></i> Instagram</a>
                <a href="mailto:finneco_club@iitg.ac.in" className="btn contact-details font-brick mr-4"style={{color: '#ffffff'}} ><i className="fa fa-at"></i> Send a mail</a>
            </div>
      </div>
        
    );
};

export default Footer;