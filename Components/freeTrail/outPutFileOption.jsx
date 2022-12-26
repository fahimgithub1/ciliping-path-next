import SectionWrapper from "../../layout/sectionWrapper";
import Width33Wrappre from "../../layout/width33Wrappre";
import SectionTitle from "../../lib/sectionTaitle";
import SelectType1 from "./selectType1";
import SelectType2 from "./selectType2";
import SelectType3 from "./selectType3";

export default function OutPutFileOption(){

    return(
        <SectionWrapper>
            <div className="container SelectOption">
                <SectionTitle  title="Output file options" />
                <p>
                    Choose your desire output file
                </p>

                <div className="row">
                    <Width33Wrappre>
                        <SelectType1 />
                    </Width33Wrappre>

                    <Width33Wrappre>
                        <SelectType2 />
                    </Width33Wrappre>

                    <Width33Wrappre>
                        <SelectType3 />
                    </Width33Wrappre>
                </div>
            </div>
        </SectionWrapper>
    )
}