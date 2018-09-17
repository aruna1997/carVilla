import React,{Component} from 'react';
import "./Footer.css";
import googlePlayicon from '../images/google-play-app-logo.png';
import iTunesicon from '../images/ITunes.png';
class Footer extends Component
{
render()
{
    return(
        <div className="row footer-top">
               <div className="container">
                <h2 className="footer-top-title col-sm-4 col-xs-12">CarVilla</h2>
                <h2 className="footer-top-title col-sm-4 col-xs-12">CarVilla</h2>
                <h2 className="footer-top-title col-sm-4 col-xs-12">CarVilla</h2>
               </div>
               <div className="hidden-xs footer-line"></div>
               <div className="container">
               <div className="col-sm-4 col-xs-12">
                <h2 className="footer-mid-title">Join Us On</h2>
                <span className="fa fa-google-plus footer-social-icon"></span>
                <span className="fa fa-facebook footer-social-icon"></span>
                <span className="fa fa-twitter footer-social-icon"></span>
               </div>
               <div className="col-sm-2 col-xs-12">
               <h2 className="footer-mid-title">Company</h2>
               <ul className="footer-list">
                   <li className="footer-list-item">About Us</li>
                   <li className="footer-list-item">Carerrs</li>
                   <li className="footer-list-item">Advertise With Us</li>
                   <li className="footer-list-item">Forums</li>
                   <li className="footer-list-item">SiteMap</li>
                </ul>   
               </div>
               <div className="col-sm-2 col-xs-12">
               <h2 className="footer-mid-title">Support</h2>
               <span className="footer-list-item">contact@carvilla.com</span>
               </div>
               <div className="col-sm-4 col-xs-12 footer-store-section">
               <h2 className="footer-mid-title">Download App Now</h2>
               <img src={googlePlayicon} alt="google-play-icon"className="img-responsive footer-store-icon"/>
               <img src={iTunesicon} alt="i-tunes-icon" className="img-responsive footer-store-icon"/>
               </div>
               </div>
             </div>
        ) 
}
}
export default Footer;