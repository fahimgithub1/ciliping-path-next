import Link from "next/link";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import Widthn25Wrapper from "../../layout/width25Wrapper";


export default function ServicesImageAfter(props){

    return(
        <Widthn25Wrapper>
            <div className="PerServices">
                <ReactCompareSlider
                    itemOne={
                        <ReactCompareSliderImage src="/pathImage4.png" srcSet="/pathImage4.png" alt="Image one" />
                    }
                    itemTwo={
                        <ReactCompareSliderImage src="/pathImage44.png" srcSet="/pathImage44.png" alt="Image two" />
                    }
                />
            </div>

            <div className="ServicesName">
                <Link href="/services">
                    <p>{props.title}</p>
                </Link>
            </div>
        </Widthn25Wrapper>
    )
}