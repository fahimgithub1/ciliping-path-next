import SectionWrapper from "../../layout/sectionWrapper";
import DubleColorHadder from "../../lib/dubleColorHadder";
import Paragrap from "../../lib/paragrap";


export default function TextOverview(props){

    return(
        <SectionWrapper>
            <div className="TextOverview container">
                <DubleColorHadder hedderText={props.hedderText}
                                spanText={props.spanText}
                />

                <Paragrap paraText={props.paraText} />
            </div>
        </SectionWrapper>
    )
}