import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default function OwlCarosul(){

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 7,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
    };

    return(
        <SectionWrapper>
            <div className="container">
                <SectionTitle title="Clients" />

                <Slider {...settings}>
                    <div className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo1.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div  className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo2.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo3.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo1.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div  className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo2.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo3.jpg" alt="" />
                        </a>
                    </div>

                    <div className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo1.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div  className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo2.jpg" alt="" />
                        </a>
                    </div>
                    
                    <div className="crosulItem">
                        <a href="#">
                            <img src="/BrandLogo3.jpg" alt="" />
                        </a>
                    </div>
                </Slider>
            </div>
        </SectionWrapper>
    )
}