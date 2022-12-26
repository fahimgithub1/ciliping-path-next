import BackgroundSection from "../../layout/backgroundSection";
import ImageBox from "../../lib/imagebox";
import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";
import Width50Wrapper from "../../layout/width50Wrappre";

export default function OurMission(){
    return(
        <BackgroundSection>
            <div className="row d-flex align-items-center">
                <Width50Wrapper>
                    <ImageBox img="/mission 3.png"/>    
                </Width50Wrapper>

                <Width50Wrapper>
                    <SectionTitle className="text-center" title="Our Mission" />
                    <Paragrap paraText="We offer a one-time Free Trial for our new clients. However, we reserve the right to refuse any trial work when necessary.Once you’ve availed your Free Trial, you no longer qualify for the same service on your next project with our company All succeeding services will require payment. Visit our Free Trial page on our website here." />
                </Width50Wrapper>
            </div>
        </BackgroundSection>
    )
}