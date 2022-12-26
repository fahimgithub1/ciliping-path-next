import SectionWrapper from "../../layout/sectionWrapper";
import Width33Wrappre from "../../layout/width33Wrappre";
import Input from "../../lib/input";
import SectionTitle from "../../lib/sectionTaitle";
import SelectType1 from "./selectType1";
import SelectType2 from "./selectType2";
import SelectType3 from "./selectType3";

export default function UplodeFile(){

    return(
        <SectionWrapper>
            <div className="container SelectOption">
                <SectionTitle  title="Uplode files" />
                <p>
                    Choose your file
                </p>

                <div class="upload_section text-center" data-name="trial-files">
                    <h2>Drag & Drop Files Here</h2>
                    <p>or</p>
                    <label for="file_upload">Upload Your File</label>
                    <input type="file" id="file_upload" multiple="multiple" data-name="trial-files" data-type="jpg|png|jpeg|svg" data-limit="5242880" data-max="5" data-id="1288" accept=".jpg, .png, .jpeg, .svg" />
                </div>

                <p>or insert a dribe link</p>
                <Input inputText="text" placeholder="Insert your link"/>
            </div>
        </SectionWrapper>
    )
}