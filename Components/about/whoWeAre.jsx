import FlexWrapper from "../../layout/flexWrapper";
import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import ImageBox from "../../lib/imagebox";
import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";


export default function WhoWeAre(){

    return(
        <SectionWrapper>
            <FlexWrapper>
                <Width50Wrapper>
                    <ImageBox img="pexels-fauxels-3184424.jpg"/>
                </Width50Wrapper>

                <Width50Wrapper>
                    <SectionTitle title="Who We Are" />
                    <Paragrap paraText="We offer a one-time Free Trial for our new clients. However, we reserve the right to refuse any trial work when necessary.Once you’ve availed your Free Trial, you no longer qualify for the same service on your next project with our company All succeeding services will require payment. Visit our Free Trial page on our website here." />
                    {/* <Paragrap paraText="We offer a one-time Free Trial for our new clients. However, we reserve the right to refuse any trial work when necessary.Once you’ve availed your Free Trial, you no longer qualify for the same service on your next project with our company All succeeding services will require payment. Visit our Free Trial page on our website here." /> */}
                </Width50Wrapper>
            </FlexWrapper>
        </SectionWrapper>
    )
}