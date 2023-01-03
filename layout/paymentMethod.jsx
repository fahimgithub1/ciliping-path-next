import Link from "next/link";


export default function PaymentMethod(){

    return(
        <section className="SisterConcernMain">
            <div className="PaddingBgDiv SisterConcern paymetMetod">
                <div className="container">
                    <h2 className="SectionTitle text-center">
                        Payment Method
                    </h2>

                    <div className="row">
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <div className="PaymentImage">
                                        <img src="/paymentMethod2.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <div className="PaymentImage">
                                        <img src="/paymentMethod1.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <div className="PaymentImage">
                                        <img src="/paymentMethod4.jpg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <div className="PaymentImage">
                                        <img src="/paymentMethod3.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <div className="PaymentImage">
                                        <img src="/paymentMethod1.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </ div>
            </div>
        </section>
    )
}