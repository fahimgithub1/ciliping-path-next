import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import SeeAllBTn from "../../lib/seeAll";
import ImageMatching from "./imageMatching";
import ServicesImageAfter from "./servicesImageAfter";

const workSemple = [
    {
        id : 1,
        title: "COLOR CORRECTION"
    },
    {
        id : 2,
        title: "IMAGE RETOUCHING"
    },
    {
        id : 3,
        title: "GHOST MANNEQUIN"
    },
    {
        id : 4,
        title: "COLOR CORRECTION"
    }
]

export default function Services(){

    return(
        <SectionWrapper>
            <div className="container">
                <SectionTitle title="services" />

                <div className="row justify-content-center">
                    {workSemple.map((item)=>(
                        <ServicesImageAfter key={item.id} title={item.title} />
                    ))}
                </div>

                <SeeAllBTn />
            </div>
        </SectionWrapper>
    )
}