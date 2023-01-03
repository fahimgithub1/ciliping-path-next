import Link from "next/link";
import PaymentMethod from "./paymentMethod";
import SisterConcern from "./sisterConcern";
import SocilaIconSection from "./soclilaIconSection";


export default function Footer(){

    return(
        <>
            <SisterConcern />
            <SocilaIconSection />
        
            <section className="Footer">
                <div className="FristFooter PaddingBgDiv">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6 FooterDiv1">
                                <div className="LogoWidth">
                                    <Link href="/">
                                        <img src="/Logo.png" alt="" />
                                    </Link>
                                </div>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, autem tempore magnam natus facere voluptates quisquam in facilis ut id perferendis mollitia molestiae beatae eum impedit similique, nisi, voluptatum labore.
                                </p>
                            </div>
            
                            <div className="col-lg-3 col-md-6 col-sm-6 FooterDiv2 pl-2">
                                <h4 className="FoterTaitle">Services</h4>
                                <ul>
                                    <li><Link href="services">Image Editing Service</Link></li>
                                    <li><Link href="services">Clipping Path Services</Link></li>
                                    <li><Link href="services">Image Shadow Service</Link></li>
                                    <li><Link href="services">Image Shadow Service</Link></li>
                                    <li><Link href="services">Color Correction Service </Link></li>
                                    <li><Link href="services">Color Correction Service </Link></li>
                                    
                                </ul>
                            </div>
            
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <h4 className="FoterTaitle">Pages</h4>
                                <ul>
                                    <li><Link href="blog">Blog</Link></li>
                                    <li><Link href="FQA">Fqa</Link></li>
                                    <li><Link href="freaTrail">Free Trail</Link></li>
                                    <li><Link href="about">About US</Link></li>
                                    <li><Link href="team">Our Team</Link></li>
                                    <li><Link href="tramsAndCondition">Trams and Condition </Link></li>
                                </ul>
                            </div>
            
                            <div className="col-lg-3 col-md-6 col-sm-6 FooterDiv4">
                                <h4 className="FoterTaitle">Contact</h4>
                                <ul>
                                    <li>
                                        <Link href="./Services.html" className="d-flex">
                                            <div>
                                                <i className="fa fa-location-dot me-2"></i>
                                            </div>
                                            <span>Clipping Path Perfectionis . 85-11, 159th Street Jamaica New York . USA</span>
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="./Services.html" className="d-flex">
                                            <div>
                                                <i className="fa fa-phone me-2"></i>
                                            </div>
                                            <span>+1 347-946-2478</span>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="./Services.html" className="d-flex">
                                            <div>
                                                <i className="fa fa-envelope me-2"></i>
                                            </div>
                                            <span>clippingpathperfectionist</span>
                                        </Link>
                                    </li>
                                    
                                    <li>
                                        <Link href="./Services.html" className="d-flex">
                                            <div>
                                                <i className="fa-brands fa-whatsapp me-2"></i>
                                            </div>
                                            <span>+1 347-946-2478</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <PaymentMethod />
                    </div>
                </div>

                <div className="LastFooter">
                    <div className="container">
                        <p>Copyright 2022 ©Clipping Path Perfectionist All rights reserved | 
                            Design And Developed by Digital Marketing Solution (Pvt.) Ltd.</p>
                    </div>
                </div>
            </section>
        </>
    )
}