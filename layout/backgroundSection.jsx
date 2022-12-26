import SectionWrapper from "./sectionWrapper";


export default function BackgroundSection(props){

    return(
        <SectionWrapper>
            <div className="container pb-lg-4">
                <div className="PaddingBgDiv">
                    {props.children}
                </div>
            </div>
        </SectionWrapper>
    )
}