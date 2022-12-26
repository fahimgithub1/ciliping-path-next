import Paragrap from "../../lib/paragrap";
import SectionTitle from "../../lib/sectionTaitle";


export default function Facts(props){

    return(
        <div className="col-lg-3 col-md-3 col-sm-6 Facts">
            <SectionTitle title={props.title} />
            <Paragrap paraText={props.paratext} />
        </div>
    )
}