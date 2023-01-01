import Widthn25Wrapper from "../../layout/width25Wrapper";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


export default function ImageMatching(){

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
        </Widthn25Wrapper>
    )
}