import React from 'react'
import MaidaLogo from '../assets/maidaLogo.png'


const Footer = () => {
    return (
        <div>
            <footer>

                <div className="footer-top">
                    <div className="container">

                        <div className="footer-brand">

                            <a href="#" className="logo">
                               <img src={MaidaLogo} alt="" />
                            </a>

                            <p className="footer-text">Follow us on</p>

                            <ul className="social-list">

                                <li>
                                    <a href="https://github.com/codewithsadee" className="social-link">
                                        <ion-icon name="logo-github"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://instagram.com/codewithsadee" className="social-link">
                                        <ion-icon name="logo-instagram"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="https://youtube.com/c/codewithsadee" className="social-link">
                                        <ion-icon name="logo-youtube"></ion-icon>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" className="social-link">
                                        <ion-icon name="logo-facebook"></ion-icon>
                                    </a>
                                </li>

                            </ul>

                        </div>

                        <div className="footer-link-box">

                            <ul className="footer-link-list">

                                <li>
                                    <h3 className="h4 link-title">Company</h3>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">About Us</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Features</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Pricing</a>
                                </li>

                            </ul>

                            <ul className="footer-link-list">

                                <li>
                                    <h3 className="h4 link-title">Products</h3>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Blog</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Help Center</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Contact</a>
                                </li>

                            </ul>

                            <ul className="footer-link-list">

                                <li>
                                    <h3 className="h4 link-title">Resources</h3>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">FAQ’S</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Testimonial</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Terms & Conditions</a>
                                </li>

                            </ul>

                            <ul className="footer-link-list">

                                <li>
                                    <h3 className="h4 link-title">Relevent</h3>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Why</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Products</a>
                                </li>

                                <li>
                                    <a href="#" className="footer-link">Customers</a>
                                </li>

                            </ul>

                        </div>

                    </div>
                </div>

                <div class="footer-bottom">
                    <p class="copyright">
                        &copy; 2023 <a href="#">@el-maida</a> All right reserved
                    </p>
                </div>

            </footer>
        </div>
    )
}

export default Footer