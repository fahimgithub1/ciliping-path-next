import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import ImageBox from "../../lib/imagebox";
import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";


export default function RightImage(props){

    return(
        <SectionWrapper>
            <div className="row container howITWorks align-items-center">
                <Width50Wrapper>
                    <h2>{props.step}</h2>
                    <SectionTitle  title={props.title} />
                    {props.paraTest.map((itme) =>(
                        <Paragrap key={itme.id} paraText={itme.text} />
                    ))}
                </Width50Wrapper>
                
                <Width50Wrapper>
                    <ImageBox img="/how_it_works-removebg-preview.png" />
                </Width50Wrapper>
            </div>
        </SectionWrapper>
    )
}