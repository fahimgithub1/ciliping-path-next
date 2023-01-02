import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import WhyUsCard from "./whyUsCard";

const whyUs = [
    {
        id:1
    },
    {
        id:2
    },
    {
        id:3
    },
    {
        id:4
    },
    {
        id:5
    },
    {
        id:6
    },
]

export default function WhyUs(){

    return(
        <SectionWrapper>
            <div className="container WhyUs">
                <SectionTitle title="Why Us" />

                <div className="row">
                    {whyUs.map((item)=>(
                        <WhyUsCard key={item.id} />
                    ))}
                </div>
            </div>
        </SectionWrapper>
    )
}