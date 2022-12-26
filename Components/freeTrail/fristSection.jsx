import SectionWrapper from "../../layout/sectionWrapper";
import Width50Wrapper from "../../layout/width50Wrappre";
import SectionTitle from "../../lib/sectionTaitle";
import CheckItem from "./checkItem";


export default function FristSection(){

    return(
        <SectionWrapper>
            <div className="container SentFeeTrail">
                <SectionTitle  title="Send free trail" />
                <p>
                    Once you approve our quote, we’ll start working on your order to make sure that you receive your edited photo/image on time.
                </p>
                <hr />

                <div className="row">
                    <Width50Wrapper>
                        <CheckItem checkText="Enhancement" />
                        <CheckItem checkText="Enhancement" />
                        <CheckItem checkText="Enhancement" />
                        <CheckItem checkText="Enhancement" />
                    </Width50Wrapper>

                    <Width50Wrapper>
                        <CheckItem checkText="Vector conversion" />
                        <CheckItem checkText="Vector conversion" />
                        <CheckItem checkText="Vector conversion" />
                    </Width50Wrapper>
                </div>
            </div>
        </SectionWrapper>
    )
}