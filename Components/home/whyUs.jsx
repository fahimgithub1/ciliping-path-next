import SectionWrapper from "../../layout/sectionWrapper";
import SectionTitle from "../../lib/sectionTaitle";
import WhyUsCard from "./whyUsCard";

export default function WhyUs(){


    return(
        <SectionWrapper>
            <SectionTitle title="Why Us" />

            <div className="row">
                <WhyUsCard />
            </div>
        </SectionWrapper>
    )
}