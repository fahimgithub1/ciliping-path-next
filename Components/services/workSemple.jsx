import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import SeeAllBTn from "../../lib/seeAll";
import ImageMatching from "../home/imageMatching";


export default function WorkSemple(porps){

    return(
        <SectionWrapper>
            <div className="container">
                <SectionTitle title="SAMPLE WORKS" />

                <div className="row justify-content-center">
                    {porps.workSemple.map((item)=>(
                        <ImageMatching key={item.id} />
                    ))}
                    
                </div>

                <SeeAllBTn />
            </div>
        </SectionWrapper>
    )
}