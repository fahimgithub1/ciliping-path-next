import BackgroundSection from "../../layout/backgroundSection";
import SectionTitle from "../../lib/sectionTaitle";
import HowItWorkArror from "./howItWorkArror";
import HowItworkCard from "./howItworkCard";


export default function HowItWorkds(){

    return(
        <BackgroundSection>
            <SectionTitle title="How It Works" />

            <div className="row">
                <HowItworkCard />
                <HowItWorkArror />

                <HowItworkCard />
                <HowItWorkArror />

                <HowItworkCard />

                <HowItworkCard />
                <HowItWorkArror />

                <HowItworkCard />
                <HowItWorkArror />

                <HowItworkCard />
            </div>
        </BackgroundSection>
    )
}