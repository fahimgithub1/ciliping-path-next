import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import SeeAllBTn from "../../lib/seeAll";
import ImageMatching from "./imageMatching";

const workSemple = [
    {
        id : 1
    },
    {
        id : 2
    },
    {
        id : 3
    },
    {
        id : 4
    },
    {
        id : 5
    },
    {
        id : 6
    },
]

export default function WorkSample(){
    return(
        <SectionWrapper>
            <div className="container">
                <SectionTitle title="SAMPLE WORKS" />

                <div className="row justify-content-center">
                    {workSemple.map((item)=>(
                        <ImageMatching key={item.id} />
                    ))}
                    
                </div>

                <SeeAllBTn />
            </div>
        </SectionWrapper>
    )
}