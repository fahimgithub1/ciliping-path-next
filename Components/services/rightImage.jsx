import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import ImageBox from "../../lib/imagebox";
import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";


export default function RightImage(porps){

    return(
        <SectionWrapper>
            <div className="row container services align-items-center">
                <Width50Wrapper>
                    <ImageBox img="/heros.jpg" />
                </Width50Wrapper>

                <Width50Wrapper>
                    <SectionTitle  title={porps.title} />
                    {porps.paraTest.map((itme) =>(
                        <Paragrap key={itme.id} paraText={itme.text} />
                    ))}
                </Width50Wrapper>
            </div>
        </SectionWrapper>
    )
}