import Link from "next/link";


export default function PaymentMethod(){

    return(
        <section className="SisterConcernMain">
            <div className="PaddingBgDiv SisterConcern paymetMetod">
                <div className="container">
                    {/* <h2 className="SectionTitle text-center">
                        Payment Method
                    </h2> */}

                    <div className="row d-flex align-items-center">
                        <div className="col-lg-3 col-md-3 col-sm-3">
                            <h2 className="SectionTitle text-center">
                                Payment Method
                            </h2> 
                        </div>

                        <div className="col-lg-9 col-md-9 col-sm-9 row">
                            <div className=" Wlg20 MobileW25">
                                <div className="ImageBox">
                                    <Link href="#">
                                        <div className="PaymentImage">
                                            <img src="/paymentMethod2.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                                
                            <div className="Wlg20 MobileW25">
                                <div className="ImageBox">
                                    <Link href="#">
                                        <div className="PaymentImage">
                                            <img src="/Mastercard22.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                                
                            <div className="Wlg20 MobileW25">
                                <div className="ImageBox">
                                    <Link href="#">
                                        <div className="PaymentImage">
                                            <img src="/paymentMethod4.jpg" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                                
                            <div className="Wlg20 MobileW25">
                                <div className="ImageBox">
                                    <Link href="#">
                                        <div className="PaymentImage">
                                            <img src="/paymentMethod1.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                                
                            <div className="Wlg20 MobileW25">
                                <div className="ImageBox">
                                    <Link href="#">
                                        <div className="PaymentImage">
                                            <img src="/usapank.png" alt="" />
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </ div>
            </div>
        </section>
    )
}