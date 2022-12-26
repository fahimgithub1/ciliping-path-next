import BackgroundSection from "../../layout/backgroundSection";
import SectionTitle from "../../lib/sectionTaitle";
import Facts from "./facts";

const facts = [
    {
        id: 1,
        title: "70k+",
        paratext: "orders completed"
    },
    {
        id: 2,
        title: "90k+",
        paratext: "orders completed"
    },
    {
        id: 3,
        title: "53k+",
        paratext: "on time delivery"
    },
    {
        id: 4,
        title: "68k+",
        paratext: "files processed"
    },
]

export default function CompanyFacts(){
    return(
        <BackgroundSection>
            <div className="CompanyFacts">
                <SectionTitle title="Company Facts" />
                <div className="row d-flex align-items-center">
                    {facts.map((items)=>(
                        <Facts key={items.id} 
                            title = {items.title}
                            paratext = {items.paratext}
                        />
                    ))}
                </div>
            </div>
        </BackgroundSection>
    )
}