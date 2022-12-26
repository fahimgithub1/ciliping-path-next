import FromWrapper from "../../layout/fromWrapper";
import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import Input from "../../lib/input";
import SectionTitle from "../../lib/sectionTaitle";
import TextArea from "../../lib/textArea";


export default function FreeTrailFrom(){

    return(
        <SectionWrapper>
            <div className="container SelectOption">
                <SectionTitle  title="Output file options" />

                <FromWrapper>
                    <Width50Wrapper>
                        <Input placeholder="Full Name" />
                        <Input placeholder="Email" />
                        <Input placeholder="Mobile" />
                        <TextArea />
                        <Input placeholder="Full Name" />
                        <button>Submit</button>
                    </Width50Wrapper>
                </FromWrapper>
            </div>
        </SectionWrapper>
    )
}