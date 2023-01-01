import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import ImageBox from "../../lib/imagebox";
import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";


export default function LeftImage(porps){

    return(
        <SectionWrapper>
            <div className="row container howITWorks align-items-center">
                <Width50Wrapper>
                    <ImageBox img="/how_it_works-removebg-preview.png" />
                </Width50Wrapper>

                <Width50Wrapper>
                    <h2>{porps.step}</h2>
                    <SectionTitle  title={porps.title} />
                    {porps.paraTest.map((itme) =>(
                        <Paragrap key={itme.id} paraText={itme.text} />
                    ))}
                    {/* <Paragrap paraText="Head over to the quote request form and tell us what you need. Every project gets customized timing and pricing, so we’ll review the details to come up with yours." />
                    <Paragrap paraText="Not a new customer? Skip this step if your needs are similar to projects you’ve submitted in the past." /> */}
                </Width50Wrapper>
            </div>
        </SectionWrapper>
    )
}