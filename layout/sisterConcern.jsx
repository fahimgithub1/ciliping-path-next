import Link from "next/link";


export default function SisterConcern(){

    return(
        <section className="SisterConcernMain">
            <div className="PaddingBgDiv SisterConcern">
                <div className="container">
                    <h2 className="SectionTitle text-center">
                        Our Sister Concern
                    </h2>

                    <div className="row">
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <img src="/LogoSister3.png" alt="" />
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <img src="/LogoSister1.png" alt="" />
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <img src="/LogoSister2.png" alt="" />
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <img src="/LogoSister3.png" alt="" />
                                </Link>
                            </div>
                        </div>
                            
                        <div className="Wlg20 MobileW50">
                            <div className="ImageBox">
                                <Link href="#">
                                    <img src="/LogoSister1.png" alt="" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </ div>
            </div>
        </section>
    )
}