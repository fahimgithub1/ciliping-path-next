import FromWrapper from "../../layout/fromWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import Input from "../../lib/input";
import Label from "../../lib/lable";
import SectionTitle from "../../lib/sectionTaitle";
import TextArea from "../../lib/textArea";


export default function ConactFrom(){

    return(
        <Width50Wrapper>
            <div className="ContactFrom">
                <SectionTitle title="Get In Touch" />
                <p>
                    Contact us for your queries by using the form below. Or you can reach us directly through email or phone.
                </p>

                <FromWrapper>
                    <Label hFor="name" text="Full Name" />
                    <Input placeholder="Your Name" />
                    
                    <Label hFor="email" text="Eamil" />
                    <Input placeholder="Your Mail" />
                    
                    <Label hFor="email" text="Eamil" />
                    <TextArea />

                    <button> Submit </button>
                </FromWrapper>
            </div>
        </Width50Wrapper>
    )
}