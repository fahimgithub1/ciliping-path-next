import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import ImageBox from "../../lib/imagebox";
import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";


export default function LeftImage(porps){

    return(
        <SectionWrapper>
            <div className="row container services align-items-center">
                <Width50Wrapper>
                    <SectionTitle  title={porps.title} />
                    {porps.paraTest.map((itme) =>(
                        <Paragrap key={itme.id} paraText={itme.text} />
                    ))}
                </Width50Wrapper>
                
                <Width50Wrapper>
                    <ImageBox img="/Photographer-01.png" />
                </Width50Wrapper>
            </div>
        </SectionWrapper>
    )
}