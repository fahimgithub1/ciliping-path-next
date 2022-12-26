import Link from "next/link";

export default function Navber(){

    return(
        <nav>
            <div className="TopHeder">
                <div className="container">
                    <div className="row d-flex justify-content-between py-sm-3 py-2">
                        <div className="col-lg-6 col-md-7 col-sm-6">
                            <div className="d-md-flex text-center text-sm-left LeftSide">
                                <div className="PnoneDiv">
                                    <i className="fa-solid fa-phone mr-2"></i>
                                    <span>+1 347-946-2478</span>
                                </div>
        
                                <div>
                                    <i className="fa-solid fa-envelope mr-2"></i>
                                    <span>sales@clippingpathper.com</span>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-6 col-md-5  col-sm-6">
                            <ul className="float-sm-end text-center d-none d-sm-block">
                                <li><i className="fa-brands fa-facebook-f"></i></li>
                                <li><i className="fa-brands fa-linkedin-in"></i></li>
                                <li><i className="fa-brands fa-whatsapp"></i></li>
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-youtube"></i></li>
                                <li><i className="fa-brands fa-tumblr"></i></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="BottomNav bg-light">
                <nav className="navbar navbar-expand-lg bg-light container">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <img src="/Logo.png" alt="" />
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse mr-lg-2" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="services">Services</Link>
                                </li>
                                    
                                <li className="nav-item">
                                    <Link className="nav-link" href="howItwork">How it work</Link>
                                </li>

                                <li className="nav-item">
                                    <Link className="nav-link" href="ourWork">Projects</Link>
                                </li>
                                    
                                <li className="nav-item">
                                    <Link className="nav-link" href="pricing">Price</Link>
                                </li>
                                    
                                <li className="nav-item">
                                    <Link className="nav-link" href="about">About</Link>
                                </li>
                                    
                                <li className="nav-item">
                                    <Link className="nav-link" href="contact">Contact</Link>
                                </li>

                                <button className="d-block d-lg-none">
                                    <Link href="login">
                                        Login/Register
                                    </Link>
                                </button>
                            </ul>
                        </div>

                        <button className="d-none d-lg-block">
                            <Link href="login">
                                Login/Register
                            </Link>
                        </button>
                    </div>
                </nav>
            </div>
        </nav>
    )
}